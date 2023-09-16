import { FC } from "react";
import logo from "../../images/logo.webp";
import Link from "next/link";
import Image from 'next/image'
import Social from "../Social/Social";
import { url } from "inspector";

type Props = {
    date: string;
};

const BoostHeader: FC<Props> = ({date}) => {
    return (
        <section className="boostHeader">
            <div className="headerImage"></div>
            <h1 className="mt-20">BOOST YOUR PERCEPTION</h1>
            <h3>{date}</h3>
            <div className="headerLogo">
                <Image className="logo" alt="logo" width={344} height={344} src={"https://moosendimages.imgix.net/3d331f4c-4577-18b3-6506-fae81a3439af/8d9cf2b79df8426f981b9555f88c8b50/logo-boost-your-perception.png?auto=format%2Ccompress&dpr=1&fit=clip&ixjsv=2.2.4&w=344"}/>
            </div>
        </section>
    )
};

export default BoostHeader;