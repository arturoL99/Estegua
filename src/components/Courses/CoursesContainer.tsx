import { FC, useEffect, useState } from "react";
import { Course } from "@/types/Course";
import Courses from "./Courses";
import { findLang } from "@/utils/CourseUtils";
import AboutMe from "../AboutMe/AboutMe";

type Props = {
    courses: Course[];
};

type Corsi = {
    coursesEng: Course[];
    coursesIta: Course[];
}

const CoursesContainer: FC<Props> = ({ courses }) => {
    const [corsi, setCorsi] = useState<Corsi>();
    useEffect(() => {
        setCorsi(findLang(courses));
    }, []);

    return (
        <>
        <section className="courses py-50">
            <div className="coursesGroup">
                {
                    corsi ?
                        corsi.coursesEng.map((course) => {
                            return <Courses course={course} lang="eng" />
                        })
                        : <></>
                }
            </div>
            <div className="coursesGroup">
                {
                    corsi ?
                        corsi.coursesIta.map((course) => {
                            return <Courses course={course} lang="ita" />
                        })
                        : <></>
                }
            </div>
        </section>
        </>
    )
};

export default CoursesContainer;