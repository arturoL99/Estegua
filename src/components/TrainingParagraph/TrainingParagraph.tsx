import { FC, useEffect, useState } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

type Props = {
    text: any;
};

const TrainingParagraph: FC<Props> = ({ text }) => {
    return (
        <section className="paragraph_container">
            <div className="paragraph">
               {documentToReactComponents(text.testo)} 
            </div>
        </section>
    )
};

export default TrainingParagraph;