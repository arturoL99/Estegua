import { ContentfulImg } from "./ContentfullImg";

export type Course = {
    title: string;
    url: string;
    description: any;
    image: ContentfulImg;
    button:string;
    requirements:string;
    price:string;
    lang:string;
  };