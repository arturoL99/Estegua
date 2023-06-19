import { FC, useEffect, useState } from "react";
import { Course } from "@/types/Course";
import Image from "next/image";
import Link from "next/link";
import ita from "../../images/icons8-italy-48.png";
import eng from "../../images/icons8-english-48.png";
import { checkMobile } from "@/utils/Utils";

type Props = {
    course: Course;
    lang: string;
};

const Courses: FC<Props> = ({ course, lang }) => {
    const [mobile, setMobile] = useState<Boolean>();
    useEffect(() => {
        setMobile(checkMobile())
    },[]);
    console.log(course);
    return (
        <div className="course">
            {
                mobile ?
                <Image src={`https:${course.mobileImage.url}`} alt={course.title} width={900} height={900} className="course_img" /> :
                <Image src={`https:${course.image.url}`} alt={course.title} width={1600} height={900} className="course_img" />
            }
            
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