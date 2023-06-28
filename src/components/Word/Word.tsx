import { FC, useEffect, useState } from "react";
import { Course } from "@/types/Course";
import Image from "next/image";
import Link from "next/link";
import ita from "../../images/icons8-italy-48.png";
import eng from "../../images/icons8-english-48.png";
import { checkMobile } from "@/utils/Utils";
import { Word } from "@/types/Word";

type Props = {
    word: Word | null | undefined;
};

const WordComp: FC<Props> = ({ word }) => {
    console.log(word);
    if (word) {
        return (

            <div className="wordContainer">
                <Image src={`https:${word.image.url}`} alt={word.word} width={100} height={100} />
            </div>

        )
    }if (word === undefined) {
        return(
            <div className="wordContainer">
                <p>We did not find the requested word</p>
            </div>
        )
    }else return <></>
};

export default WordComp;