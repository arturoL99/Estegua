import contentfulClient from "@/client/ContentfulClient";
import { useEffect, useState } from "react";


// export async function getStaticProps() {

// }

const TestPage2 = () => {
    return (
        <section className="homepage">
            <div className="section mt-50">
                <div className="section_l px-20">
                    <h1>ENERGY WORK</h1>
                </div>
                <div className="section_r"></div>
            </div>
            <div className="section">
                <div className="section_l px-20">
                    <h1>E. L.</h1>
                </div>
                <div className="section_r"></div>
            </div>
            <div className="section">
                <div className="section_l px-20">
                    <h1>PSYCHONAUTICA</h1>
                </div>
                <div className="section_r"></div>
            </div>
        </section>
    );
};

export default TestPage2;