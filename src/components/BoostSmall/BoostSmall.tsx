import { FC } from "react";
import Image from 'next/image'

type Props = {
    title: string;
    text: string;
};

const BoostSmall: FC<Props> = ({title, text}) => {
    return (
        <section className="boostSmall">
            <div className="color color_blue"></div>
            <div className="content">
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
            <div className="color color_red"></div>
        </section>
    )
};

export default BoostSmall;