import Image from "next/image";
import { FC } from "react";
import mail from "../../images/mail.png";
import insta from "../../images/instagram.svg";
import Link from "next/link";

const Social: FC = () => {
    return (
        <section className="social">
            <a href={"mailto:estegua@protonmail.com"}>
                <Image src={mail} alt="mail" className="social-icon" />
            </a>
            <Link target="_blank" href={"https://www.instagram.com/estegua_project/"}>
                <Image src={insta} alt="instagram" className="social-icon" />
            </Link>
        </section>
    )
};

export default Social;