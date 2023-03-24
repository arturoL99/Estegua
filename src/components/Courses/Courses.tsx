import { FC } from "react";
import { Course } from "@/types/Course";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Link from "next/link";

type Props = {
    course: Course;
};

const Courses: FC<Props> = ({ course }) => {
    return (
        <section className="course">
            <Image src={`https:${course.image.url}`} alt={course.title} width={300} height={300} className="course_img" />
            <div className="content_container">
                <div className="content">
                    <h1 className="my-20">{course.title}</h1>
                    <div className="description">
                        {documentToReactComponents(course.description)}
                    </div>
                </div>
                <div className="course_cta">
                    <Link href={course.url} className="my-5">{course.button}</Link>
                    <small>{course.requirements}</small>
                </div>
            </div>
        </section>
    )
};

export default Courses;