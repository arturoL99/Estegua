import { FC } from "react";
import logo from "../../images/logo.webp";
import Link from "next/link";
import Image from 'next/image'
import Social from "../Social/Social";
import { url } from "inspector";


const BoostWebinar: FC = () => {
    return (
        <section className="boostWebinar">
            <div className="formContainer">
                <div className="formTitle">
                    <h1>FREE WEBINAR</h1>
                    <h3>How to change your perception of reality with a new mind-shifting paradigm</h3>
                </div>
                <form className="webinarForm my-20">
                    <input className="webinarInput" placeholder="Name" />
                    <input className="webinarInput" placeholder="Email" />
                    <button className="webinarInput">SAVE MY SPOT</button>
                </form>
                <div className="webinarDescription">
                    <h3 className="mb-20">During this webinar you will:</h3>
                    <ul>
                        <li>Learn the principles of 4D perception</li>
                        <li>Discover a new mind-shifting paradigm </li>
                        <li>Get life hacks to live life optimally</li>
                    </ul>
                </div>
            </div>
        </section>
    )
};

export default BoostWebinar;