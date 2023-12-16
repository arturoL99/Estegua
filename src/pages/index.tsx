import Head from 'next/head'
import { Inter } from 'next/font/google'
import Header from '@/components/Header/Header'
import contentfulClient from '@/client/ContentfulClient'
import CoursesContainer from '@/components/Courses/CoursesContainer'
import { Course } from '@/types/Course'
import { mapCourses } from '@/utils/CourseUtils'
import TrainingParagraph from '@/components/TrainingParagraph/TrainingParagraph'
import Choq from '@/components/Choq/Choq'
import Challenge from '@/components/Challenge/Challenge'
import Footer from '@/components/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export async function getStaticProps() {
  const training: any = await contentfulClient.getEntries({
    content_type: "trainigProgram",
  }).then((res) => res.items[1].fields)
  const contentfulCourses: any = await contentfulClient.getEntries({
    content_type: "course",
  }).then((res) => res.items)
  const courses: Course[] = mapCourses(contentfulCourses);
  const challenge: any = await contentfulClient.getEntries({
    content_type: "challenge",
  }).then((res) => res.items[0].fields)

  return { props: { courses, challenge, training } };
}

export default function Home(props: { courses: Course[], challenge: any, training: any }) {
  console.log(props.training)
  return (
    <>
      <Head>
        <title>Estegua Project</title>
        <meta name="description" content="Conscious Network" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main">
        <Header state={true} training={true} />

        <TrainingParagraph text={props.training} />

        {/* <Challenge props={props.challenge}/> */}
        
        <CoursesContainer courses={props.courses} />

        {/* <Choq /> */}

        <Footer />
      </main>
    </>
  )
}
