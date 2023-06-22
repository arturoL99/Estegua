import contentfulClient from "@/client/ContentfulClient";
import Header from "@/components/Header/Header";
import Social from "@/components/Social/Social";
import { Course } from "@/types/Course";
import { mapCourse, mapCourses } from "@/utils/CourseUtils";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import logo from "../images/logo.webp";
import Hamburger from "@/components/Hamburger/Hamburger";
import AboutMe from "@/components/AboutMe/AboutMe";

export async function getStaticProps() {
    const about: any = await contentfulClient.getEntries({
        content_type: "aboutMe",
    }).then((res) => res.items)
    return { props: { about } };
}

const TestPage = (props: { about: any }) => {
    const [trailer, setTrailer] = useState<HTMLElement | null>();



    useEffect(() => {
        setTrailer(document.getElementById("trailer"));
    }, [])

    if (trailer) {
        window.onmousemove = e => {
            const x = e.clientX - trailer.offsetWidth / 2;
            const y = e.clientY - trailer.offsetHeight / 2;

            const keyframes = {
                transform: `translate(${x}px, ${y}px)`

            }
            trailer.animate(keyframes, {
                duration: 800,
                fill: "forwards"
            })
        }
    }
    console.log("ran", trailer)

    return (
        <section className="testPage">
            <div id="trailer"></div>
        </section>
    );
};

export default TestPage;