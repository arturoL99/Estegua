import { FC } from "react";
import { Course } from "@/types/Course";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Link from "next/link";

type Props = {
    about: any;
};

const AboutMe: FC<Props> = ({ about }) => {
    return (
        <section className="aboutMe">
            {documentToReactComponents(about.fields.testo)}
        </section>
    )
};

export default AboutMe;