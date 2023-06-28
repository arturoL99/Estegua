import contentfulClient from "@/client/ContentfulClient";
import { useEffect, useState } from "react";
import { Word } from "@/types/Word";
import { handleWordSearch, mapWord } from "@/utils/WordUtils";
import Image from "next/image";
import WordComp from "@/components/Word/Word";

export async function getStaticProps() {
    const about: any = await contentfulClient.getEntries({
        content_type: "aboutMe",
    }).then((res) => res.items)
    return { props: { about } };
}

const TestPage = (props: { about: any }) => {
    const [trailer, setTrailer] = useState<HTMLElement | null>();
    const [word, setWord] = useState<Word | null>(null);
    const [input, setInput] = useState<string>("");

    

    useEffect(() => {
        setTrailer(document.getElementById("trailer"));
    }, [])

    if (trailer) {
        window.onmousemove = e => {
            const x = e.clientX - trailer.offsetWidth / 2;
            const y = e.clientY - trailer.offsetHeight / 2;

            const keyframes = {
                transform: `translate(${x}px, ${y}px)`

            }
            trailer.animate(keyframes, {
                duration: 800,
                fill: "forwards"
            })
        }
    }

    return (
        <section className="testPage">
            <div id="trailer"></div>
            <form>
                <input type="text" onChange={(e) => setInput(e.target.value)} />
                <button onClick={(e) => handleWordSearch(e, input, setWord)}>Search</button>

                <WordComp word={word} />
            </form>
            
        </section>
    );
};

export default TestPage;