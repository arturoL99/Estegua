import contentfulClient from "@/client/ContentfulClient";
import CoursesContainer from "@/components/Courses/CoursesContainer";
import HeaderNew from "@/components/HeaderNew/HeaderNew";
import TrainingParagraph from "@/components/TrainingParagraph/TrainingParagraph";
import Image from "next/image";
import { useEffect, useState } from "react";


export async function getStaticProps() {
    const intro: any = await contentfulClient.getEntries({
        content_type: "trainigProgram",
    }).then((res) => res.items[0].fields)

    return { props: { intro } };
}

const TestPage2 = (props: { intro: any }) => {
    return (
        <>
            <HeaderNew />
            <section className="homepage mt-100">
                <TrainingParagraph text={props.intro} />
                <div className="intro_container mt-100">
                    <div className="section">

                    </div>
                    <div className="section">

                    </div>
                    <div className="section">

                    </div>
                </div>
                <div className="quote">
                    <h4 className="mt-100">"Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"</h4>
                </div>

                <section className="home_paragraphs mt-100">
                    <div className="paragraph inverted">
                        <div className="image"></div>
                        <div className="text"><p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p></div>
                    </div>
                    <div className="paragraph">
                        <div className="image"></div>
                        <div className="text"><p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p></div>
                    </div>
                </section>

            </section>
        </>
    );
};

export default TestPage2;