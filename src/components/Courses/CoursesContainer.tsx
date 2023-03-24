import { FC } from "react";
import { Course } from "@/types/Course";
import Courses from "./Courses";

type Props = {
    courses: Course[];
  };

const CoursesContainer:FC<Props> = ({ courses }) => {
    return (
        <section className="courses">
            {
                courses.map((course) => {
                    return <Courses course={course} />
                })
            }
            <div className="card"></div>
        </section>
    )
};

export default CoursesContainer;