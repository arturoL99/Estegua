import { FC } from "react";
import { Course } from "@/types/Course";
import Image from "next/image";
import Link from "next/link";

type Props = {
    course: Course;
};

const Courses: FC<Props> = ({ course }) => {
    return (
        <Link href={course.title.toLowerCase()} className="course">
            <Image src={`https:${course.image.url}`} alt={course.title} width={300} height={300} className="course_img" />
        </Link>
    )
};

export default Courses;