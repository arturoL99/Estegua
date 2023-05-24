import { FC, useState } from "react";
import { Course } from "@/types/Course";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Link from "next/link";
import logo from "../../images/logo.webp"
import Hamburger from "../Hamburger/Hamburger";

type Props = {
    about: any;
};

const AboutMe: FC<Props> = ({ about }) => {
    console.log(about);
    const [hovered, setHovered] =useState(false);
    return (
        <section className="aboutMe">
            <Hamburger open={true} />
            <div className="homeLogo">
                <Link href={"/"} className="">
                    <Image src={logo} alt="estegua logo" className="logo" />
                </Link>
            </div>
            <div className={hovered ? "pageContent hovered" : "pageContent"}>
                <div className="content_container" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                    <div className="content">
                        <div className="px-5">
                            {documentToReactComponents(about.fields.testo)}
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
};

export default AboutMe;