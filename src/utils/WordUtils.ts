import contentfulClient from "@/client/ContentfulClient";
import { Word } from "@/types/Word";

export const mapWord = (contentWord: any) => {
    const word: Word = {
        word: contentWord.fields.word,
        image: {
            title: contentWord.fields.image.fields.title,
            url: contentWord.fields.image.fields.file.url,
            height: contentWord.fields.image.fields.file.details.image.height,
            width: contentWord.fields.image.fields.file.details.image.width
        }
    }
    return word;
}

export const handleWordSearch = async (e:any, input:string, setWord:any) => {
    e.preventDefault();
    setWord(null);
    const contentWord: any = await contentfulClient.getEntries({
        content_type: "word",
        "fields.word[match]": input,
    }).then((res) => res.items);
    contentWord.length !== 0 ? 
    setWord(mapWord(contentWord[0])) :
    setWord(undefined);
};