import { FC } from "react";
import logo from "../../images/logo.webp";
import Link from "next/link";
import Image from 'next/image'
import Social from "../Social/Social";
import { url } from "inspector";


const BoostHeader: FC = () => {
    return (
        <section className="boostHeader">
            <div className="headerImage"></div>
            <h1 className="mt-20">BOOST YOUR PERCEPTION</h1>
            <h3>Friday September 1st 1:00 PM PST</h3>
            <div className="headerLogo">
                <Image className="logo my-50" alt="logo" width={344} height={344} src={"https://moosendimages.imgix.net/3d331f4c-4577-18b3-6506-fae81a3439af/8d9cf2b79df8426f981b9555f88c8b50/logo-boost-your-perception.png?auto=format%2Ccompress&dpr=1&fit=clip&ixjsv=2.2.4&w=344"}/>
            </div>
        </section>
    )
};

export default BoostHeader;