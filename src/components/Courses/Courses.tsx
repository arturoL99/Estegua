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
        <Link href={course.title.toLowerCase()} className="course">
            <Image src={`https:${course.mobileImage.url}`} alt={course.title} width={900} height={900} className="course_img" /> :
            <div className="flag">
                <Image src={lang === "ita" ? ita : eng} alt={`${lang} flag`} />
            </div>
        </Link>
    )
};

export default Courses;