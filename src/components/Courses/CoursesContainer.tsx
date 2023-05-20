import { FC, useEffect, useState } from "react";
import { Course } from "@/types/Course";
import Courses from "./Courses";
import { findLang } from "@/utils/CourseUtils";
import AboutMe from "../AboutMe/AboutMe";

type Props = {
    courses: Course[];
    about:any;
};

type Corsi = {
    coursesEng: Course[];
    coursesIta: Course[];
}

const CoursesContainer: FC<Props> = ({ courses, about }) => {
    const [corsi, setCorsi] = useState<Corsi>();
    useEffect(() => {
        setCorsi(findLang(courses));
    }, []);

    return (
        <>
        <section className="courses px-50">
            {/* <h1 className="mx-50">TRAINING PROGRAMS</h1> */}
            <h3 className="mx-50">ENG:</h3>
            <div className="coursesGroup mx-50">
                {
                    corsi ?
                        corsi.coursesEng.map((course) => {
                            return <Courses course={course} />
                        })
                        : <></>
                }
            </div>

            <h3 className="mx-50">ITA:</h3>
            <div className="coursesGroup mx-50">
                {
                    corsi ?
                        corsi.coursesIta.map((course) => {
                            return <Courses course={course} />
                        })
                        : <></>
                }
            </div>
        </section>
        {/* <AboutMe about={about}/> */}
        </>
    )
};

export default CoursesContainer;