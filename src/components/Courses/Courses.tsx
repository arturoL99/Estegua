import { FC } from "react";
import { Course } from "@/types/Course";
import Image from "next/image";
import Link from "next/link";
import ita from "../../images/icons8-italy-48.png";
import eng from "../../images/icons8-english-48.png";

type Props = {
    course: Course;
    lang: string;
};

const Courses: FC<Props> = ({ course, lang }) => {
    return (
        <div className="course">
            <Image src={`https:${course.image.url}`} alt={course.title} width={2000} height={1200} className="course_img" />
            <div className="flag">
                <Image src={lang === "ita" ? ita : eng} alt={`${lang} flag`} />
            </div>
            <Link href={course.title.toLowerCase()} className="banner_cta">
                View More
            </Link>
        </div>

    )
};

export default Courses;