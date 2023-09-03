import { FC } from "react";
import logo from "../../images/logo.webp";
import Link from "next/link";
import Image from 'next/image'
import Social from "../Social/Social";
import { url } from "inspector";


const BoostPioner: FC = () => {
    return (
        <>
        <section className="boostPioner">
            <Image className="my-10" alt="verified" width={77} height={77} src={"https://moosendimages.imgix.net/20190530-2019-0530-2019-053020190530/9098d2198fee4e268ee55443f0828095check.png?auto=format%2Ccompress&dpr=1&fit=clip&ixjsv=2.2.4&w=154"}/>
            <h3 className="big">Be ready to be a pioneer in a new field of research</h3>
            <p className="my-10">Estegua offers revolutionary tools to expand the mind through <br/> energy cultivation practices and a new mind-shifting paradigm</p>
        </section>
        <section className="boostPrograms">

        </section>
        </>
    )
};

export default BoostPioner;