import Image from "next/image";
import { useEffect, useState } from "react";
import logo from "../../images/logo.webp";
import discovery from "../../images/DISCOVERY.png";
import el from "../../images/EL.png";
import energy from "../../images/ENERGYWORK.png";

const Header = () => {
    const [open, setOpen] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    const handleScroll = () => {
        // find current scroll position
        const currentScrollPos = window.pageYOffset;

        // set state based on location info (explained in more detail below)
        setOpen((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10);

        // set state to new scroll position
        setPrevScrollPos(currentScrollPos);
    };

    // new useEffect:
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);

    }, [prevScrollPos, open, handleScroll]);
    return (
        <>
            <nav className={open ? "header header_open" : "header header_close"}>
                <div className="header_logo_container">
                    <Image src={logo} alt="estegua logo" className={open ? "header_logo header_logo_open" : "header_logo header_logo_close"} />

                    <div className={open ? "header_options header_options_open" : "header_options header_options_close"}>
                        <div className="header_category">
                            <Image src={discovery} alt="courses" className="header_img" />
                        </div>
                        <div className={open ? "header_category mt-50" : "header_category"}>
                            <Image src={el} alt="courses" className="header_img" />
                        </div>
                        <div className="header_category">
                            <Image src={energy} alt="courses" className="header_img" />
                        </div>
                    </div>
                </div>
            </nav>
            <div className={open ? "underHeader underHeader_open" : "underHeader underHeader_close"}></div>
        </>
    )
};

export default Header;