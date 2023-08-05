import contentfulClient from "@/client/ContentfulClient";
import Header from "@/components/Header/Header";
import Social from "@/components/Social/Social";
import { Course } from "@/types/Course";
import { mapCourse, mapCourses } from "@/utils/CourseUtils";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "../images/logo.webp";
import Hamburger from "@/components/Hamburger/Hamburger";


export async function getStaticPaths() {
  const contentfulCourses = await contentfulClient
    .getEntries({
      content_type: "course",
    })
    .then((res) => res.items);
  const courses = mapCourses(contentfulCourses);
  const paths = courses.map((course) => ({
    params: { title: course.title.toLocaleLowerCase() },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const contentfulCourse = await contentfulClient
    .getEntries({
      content_type: "course",
      "fields.title[match]": params.title,
    })
    .then((res) => res.items);
  const course = mapCourse(contentfulCourse[0]);
  return { props: { course } };
}

const CoursePage = (props: { course: Course }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <section className="coursePage">
      {/* <Header state={false} training={false} /> */}
      <Hamburger open={true} />
      <div className="homeLogo">
        <Link href={"/"} className="">
          <Image src={logo} alt="estegua logo" className="logo" />
        </Link>
      </div>
      <div className={hovered ? "pageContent hovered" : "pageContent"}>
        <div className="content_container" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
          <div className="content">
            <h1 className="my-20">{props.course.title.toUpperCase()}</h1>
            <div className="px-5">
              {documentToReactComponents(props.course.description)}
            </div>
          </div>
          <div className="cta mt-20">
            <small className="my-20">{props.course.requirements} - {props.course.price}</small>
            <Link href={props.course.url} className="">{props.course.button}</Link>
          </div>
        </div>
      </div>
      <div className="socialContainer">
        <Social />
      </div>
    </section>
  );
};

export default CoursePage;