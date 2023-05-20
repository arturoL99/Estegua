import Image from "next/image";
import { FC, useEffect, useState } from "react";
import logo from "../../images/logo.webp";
import logo2 from "../../images/training.webp";
import discovery from "../../images/DISCOVERY.png";
import el from "../../images/EL.png";
import energy from "../../images/ENERGYWORK.png";
import Link from "next/link";

type Props = {
    state: boolean;
    training:boolean;
}

const Header: FC<Props> = ({ state, training }) => {
    const [open, setOpen] = useState(state ? true : false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    const handleScroll = () => {
        // find current scroll position
        if (state) {
            const currentScrollPos = window.pageYOffset;

            // set state based on location info (explained in more detail below)
            setOpen((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10);

            // set state to new scroll position
            setPrevScrollPos(currentScrollPos);
        }
    };


    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);

    }, [prevScrollPos, open, handleScroll]);
    return (
        <>
            <nav className={state ? open ? "header header_open" : "header header_close" : "header2"}>
                <div className="header_logo_container">
                    <Link href={"/"} className={open ? "header_logo header_logo_open" : "header_logo header_logo_close"}>
                        <Image src={training ? logo2 : logo} alt="estegua logo" className={open ? "header_logo header_logo_open" : "header_logo header_logo_close"} />
                    </Link>
                    <div className={open ? "header_options header_options_open" : "header_options header_options_close"}>
                        <div className="header_category">
                            <Image src={discovery} alt="courses" className="header_img hide" />
                        </div>
                        <div className={open ? "header_category mt-50" : "header_category"}>
                            <Image src={el} alt="courses" className="header_img hide" />
                        </div>
                        <div className="header_category">
                            <Image src={energy} alt="courses" className="header_img hide" />
                        </div>
                    </div>
                </div>
            </nav>
            <div className={open ? "underHeader underHeader_open" : "underHeader underHeader_close"}></div>
        </>
    )
};

export default Header;