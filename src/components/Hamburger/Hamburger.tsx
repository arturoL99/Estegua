import Link from "next/link";
import { FC, useEffect, useState } from "react";
import Social from "../Social/Social";

type Props = {
    open: boolean;
}

const Hamburger: FC<Props> = ({ open }) => {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked)
    };

    return (
        <>
            <label className={open ? "hamburger-menu menu_open" : "hamburger-menu menu_close"}>
                <input type="checkbox" onClick={handleClick} />
            </label>
            <section className={clicked ? "menu menuOpen" : "menu menuClose"}>
                <div className="menuContent">
                    <ul className="linkContainer">
                        <li className="link"><Link href={"/"}>Home</Link></li>
                        <li className="link"><Link href={"/about-me"}>About Me</Link></li>
                    </ul>
                    <Social />
                </div>
            </section>
            <div className={clicked ? "underMenu underOpen" : "underMenu underClose"}></div>
        </>
    )
};

export default Hamburger;