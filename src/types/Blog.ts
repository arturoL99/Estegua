import { ContentfulImg } from "./ContentfullImg";

export type Blog = {
    title: string;
    subtitle?: string;
    content: any;
    image: ContentfulImg;
  };