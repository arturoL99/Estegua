import { FC } from "react";
import logo from "../../images/logo.webp";
import Link from "next/link";
import Image from 'next/image'
import Social from "../Social/Social";


const Footer: FC = () => {
    return (
        <section className="footer">
            <div className="footer_content">
                <Link href="/">
                    <Image src={logo} alt="logo" className="footer_logo" />
                </Link>
                <h2>ESTEGUA PROJECT</h2>
                <Social />
            </div>
        </section>
    )
};

export default Footer;