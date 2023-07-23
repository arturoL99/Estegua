import { FC, useEffect, useState } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Link from "next/link";
import Image from 'next/image'

type Props = {
    text: any;
};

const Choq: FC = () => {
    return (
        <section className="choq_container">
            <Link href="http://www.choq.comestegua/#a_aid=estegua&amp;a_bid=11110001" target="/blank">
                <Image src="https://choq.postaffiliatepro.com/accounts/default1/ehbnfu7hmd6/11110001.png" alt="" title="" width="185" height="175" />
            </Link>
        </section>
    )
};

export default Choq;