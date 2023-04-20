import Image from "next/image";
import { FC } from "react";
import mail from "../../images/mail.png";
import insta from "../../images/instagram.svg";
import Link from "next/link";

const Social: FC = () => {
    return (
        <section className="social">
            <Link href={"/"}>
                <Image src={mail} alt="mail" className="social-icon" />
            </Link>
            <Link href={"/"}>
                <Image src={insta} alt="instagram" className="social-icon" />
            </Link>
        </section>
    )
};

export default Social;