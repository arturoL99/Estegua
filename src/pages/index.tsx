import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header/Header'
import contentfulClient from '@/client/ContentfulClient'
import { mapBlogs } from '@/utils/BlogUtils'
import { Blog } from '@/types/Blog'

const inter = Inter({ subsets: ['latin'] })

export async function getStaticProps() {
  const contentfulBlog:any = await contentfulClient.getEntries({
    content_type: "blog",
  }).then((res) => res.items)
  console.log("================", contentfulBlog);
  const blogs:Blog[] = mapBlogs(contentfulBlog);
  // const projects = mapBlog(contentfulBlog);
  return { props: { blogs } };
}

export default function Home(props: { blogs:any }) {
  console.log(props.blogs);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main">
        <Header />
        <div className="test">
          <div className="courses">

          </div>
          <div className="sidebar"></div>
        </div>
      </main>
    </>
  )
}
