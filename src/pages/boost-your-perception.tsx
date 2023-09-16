import contentfulClient from "@/client/ContentfulClient";
import BoostHeader from "@/components/BoostHeader/BoostHeader";
import BoostPioner from "@/components/BoostPioner/BoostPioner";
import BoostWebinar from "@/components/BoostWebinar/BoostWebinar";
import { useEffect, useState } from "react";


export async function getStaticProps({ params }: any) {
    const boost: any = await contentfulClient.getEntries({
        content_type: "boostSalesPage",
      }).then((res) => res.items[0].fields)
    return { props: { boost } };
  }

const BoostPage = (props: { boost: any }) => {
    console.log(props.boost)
    return (
        <section className="boostPage">
            <div className="firstSection">
                <BoostHeader date={props.boost.data} />
                <BoostWebinar />
            </div>
            <div className="secondSection">
                <BoostPioner />
            </div>
        </section>
    );
};

export default BoostPage;