import Image from "next/image";
import { FC } from "react";
import logo from "../../images/logo.webp";
import Link from "next/link";



const HeaderNew: FC = () => {

    return (
        <nav className="headerNew">
            <Image src={logo} alt="estegua logo" className="logo" />
            <div className="link_container">
                <Link href={"/boost-your-perception"} className="headerNew_link l_red r_blue">Boost your Perception</Link>
                <Link href={"/"} className="headerNew_link r_yellow">Conscious Network</Link>
                <Link href={"/"} className="headerNew_link r_red">Estegua Language</Link>
            </div>

        </nav>
    )
};

export default HeaderNew;