import { FC, useState } from "react";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Social from "../Social/Social";

type Props = {
    about: any;
};

const AboutMe: FC<Props> = ({ about }) => {
    console.log(about);
    const [hovered, setHovered] = useState(false);
    return (
        <section className="aboutMe">
            <div className="aboutBg">
                <div className="content_container" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                    <div className="content">
                        <div className="px-5">
                            {documentToReactComponents(about.fields.testo)}
                        </div>
                    </div>
                    <div className="socialContainer">
                        <Social />
                    </div>
                    <div className="imgContainer">
                        <Image src={`https:${about.fields.foto.fields.file.url}`} alt="Me" width={300} height={500} className="img" />
                    </div>

                </div>
            </div>

        </section>
    )
};

export default AboutMe;