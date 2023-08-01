import { FC, useEffect, useState } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Link from "next/link";
import Image from 'next/image';
import close from "../../images/close.svg";

type Props = {
    props: any;
};

const Challenge: FC<Props> = ({ props }) => {
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!open)
    };

    return (
        <>
            <section className="challenge px-20">
                <Image src={`https:${props.image.fields.file.url}`} alt="challenge banner" onClick={handleClick} width={1024} height={397} className="challenge_image" />
            </section>

            <section className={open ? "challenge_modal_container" : "challenge_modal_container hide"}>
                <div className="challenge_modal p-50">
                    <h2 className="my-10">{props.titolo}</h2>
                    <div className="modal_text">
                        {documentToReactComponents(props.text)}
                    </div>
                    <Link href={props.link} target="/blank" className="cta">
                        {props.buttonText}
                    </Link>
                    <Image src={close} alt="close" className="modale_close" onClick={handleClick}/> 
                </div>
            </section>
        </>
    )
};

export default Challenge;