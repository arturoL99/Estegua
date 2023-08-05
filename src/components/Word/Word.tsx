import { FC } from "react";
import Image from "next/image";
import { Word } from "@/types/Word";

type Props = {
    word: Word | null | undefined;
};

const WordComp: FC<Props> = ({ word }) => {
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