import { Blog } from "@/types/Blog";

export const mapBlogs = (contentfulBlogs: any[]) => {
    if(contentfulBlogs){
    const blogs: Blog[] = [];
    contentfulBlogs.map((contentfulBlog) => {
      const blog: Blog = {
        title: contentfulBlog.fields.title,
        subtitle: contentfulBlog.fields.subtitle,
        image: {
          title:contentfulBlog.fields.image.fields.title,
          url: contentfulBlog.fields.image.fields.file.url,
          height: contentfulBlog.fields.image.fields.file.details.image.height,
          width: contentfulBlog.fields.image.fields.file.details.image.width,
        },
        content: contentfulBlog.fields.content || null
      };
      blogs.push(blog);
    });
    return blogs;
  }else{
    const blogs: Blog[] = [{
        title: "contentfulBlog.fields.title",
        subtitle: "contentfulBlog.fields.subtitle",
        image: {
          title:"",
          url: "contentfulBlog.fields.image.fields.file.url",
          height: 1,
          width: 1,
        },
        content: "contentfulBlog.fields.content"
    }];
    return blogs;
  }
  };