import { FC } from "react";
import logo from "../../images/logo.webp";
import Link from "next/link";
import Image from 'next/image'
import Social from "../Social/Social";
import { url } from "inspector";


const BoostAbout: FC = () => {
    return (
        <section className="boostAbout">
            <div className="about">
                <div className="about_img">
                     <Image className="img" alt="Martino Pedotti" width={664} height={440} src={"https://moosendimages.imgix.net/3d331f4c-4577-18b3-6506-fae81a3439af/8f6a8fedee6c486b9b315f4445276c71/img_6853.jpg?auto=format%2Ccompress&dpr=1&fit=clip&ixjsv=2.2.4&w=664"} />
                </div>
                <div className="about_text">
                    <h3 className="my-5">Meet the speaker:</h3>
                    <p><b>Martino Pedotti</b> spent over 5 years researching and refining the discovery of a new mind-shifting paradigm that helps people manage their minds and their understanding of reality. <br/>During this time he also trained to master and teach a Korean Qi Gong style called Shin-Sun-Do.</p>
                </div>
            </div>
        </section>
    )
};

export default BoostAbout;