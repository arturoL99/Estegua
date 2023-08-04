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
import AboutMe from "@/components/AboutMe/AboutMe";

export async function getStaticProps() {
  const about: any = await contentfulClient.getEntries({
    content_type: "aboutMe",
  }).then((res) => res.items)
  return { props: { about } };
}

const AboutMePage = (props: { about: any }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <section className="aboutMePage">
      <Hamburger open={true} />
      <AboutMe about={props.about[0]} />
    </section>
  );
};

export default AboutMePage;