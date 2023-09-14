import sendEmail from "@/client/EmailClient";
import { FC, useRef, useState } from "react";


const BoostWebinar: FC = () => {

    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const form = useRef();

    return (
        <section className="boostWebinar">
            <div className="formContainer">
                <div className="formTitle">
                    <h1>FREE WEBINAR</h1>
                    <h3>How to change your perception of reality with a new mind-shifting paradigm</h3>
                </div>
                <form className="webinarForm my-20" onSubmit={(e) => sendEmail(e, name, email)}>
                    <input className="webinarInput" type="text" name="name" placeholder="Name" onChange={(e) => setName(e.target.value)} required />
                    <input className="webinarInput" type="email" name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required/>
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