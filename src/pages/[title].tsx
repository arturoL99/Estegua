import contentfulClient from "@/client/ContentfulClient";
import { Course } from "@/types/Course";
import { mapCourse, mapCourses } from "@/utils/CourseUtils";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";
import Link from "next/link";


export async function getStaticPaths() {
  const contentfulCourses = await contentfulClient
    .getEntries({
      content_type: "project",
    })
    .then((res) => res.items);
  const courses = mapCourses(contentfulCourses);
  const paths = courses.map((course) => ({
    params: { name: course.title.toLocaleLowerCase() },
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
      "fields.name[match]": params.name,
    })
    .then((res) => res.items);
  const course = mapCourse(contentfulCourse[0]);
  return { props: { course } };
}

const CoursePage = (props: { course: Course }) => {
  console.log(props.course);
  
  
  return (
    <section className="">
        <Image src={`https:${props.course.image.url}`} alt={props.course.title} width={300} height={300} className="course_img" />
            <div className="content_container">
                <div className="content">
                    <h1 className="my-20">{props.course.title}</h1>
                    <div className="description">
                        {documentToReactComponents(props.course.description)}
                    </div>
                </div>
                <div className="course_cta">
                    <Link href={props.course.url} className="my-20">{props.course.button}</Link>
                    <small>{props.course.requirements}</small>
                </div>
            </div>
    </section>
  );
};

export default CoursePage;