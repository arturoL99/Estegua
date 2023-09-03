import contentfulClient from "@/client/ContentfulClient";
import BoostHeader from "@/components/BoostHeader/BoostHeader";
import BoostPioner from "@/components/BoostPioner/BoostPioner";
import BoostWebinar from "@/components/BoostWebinar/BoostWebinar";
import { useEffect, useState } from "react";


// export async function getStaticProps() {

// }

const BoostPage = () => {
    return (
        <section className="boostPage">
            <div className="firstSection">
                <BoostHeader />
                <BoostWebinar />
            </div>
            <div className="secondSection">
                <BoostPioner />
            </div>
        </section>
    );
};

export default BoostPage;