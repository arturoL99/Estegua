import { FC } from "react";
import Link from "next/link";
import Image from 'next/image'
import BoostSmall from "../BoostSmall/BoostSmall";
import BoostAbout from "../BoostAbout/BoostAbout";


const BoostPioner: FC = () => {
    return (
        <>
        <section className="boostPioner">
            <Image className="my-10" alt="verified" width={77} height={77} src={"https://moosendimages.imgix.net/20190530-2019-0530-2019-053020190530/9098d2198fee4e268ee55443f0828095check.png?auto=format%2Ccompress&dpr=1&fit=clip&ixjsv=2.2.4&w=154"}/>
            <h3 className="big">Be ready to be a pioneer in a new field of research</h3>
            <p className="my-10">Estegua offers revolutionary tools to expand the mind through <br/> energy cultivation practices and a new mind-shifting paradigm</p>
        </section>
        <section className="boostPrograms">
            <BoostSmall title="Energy Work" text={`How do you master the Self? Why is it so important in today's world?`} />
            <BoostSmall title="A New Language" text="As we make big leaps forward in the field of technology, it's time to revolutionize our minds as well!" />
        </section>
        <BoostAbout />
        </>
    )
};

export default BoostPioner;