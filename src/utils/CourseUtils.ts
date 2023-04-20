import { Course } from "@/types/Course";

export const mapCourses = (contentfulCourses: any[]) => {
  if (contentfulCourses) {
    const courses: Course[] = [];
    contentfulCourses.map((contentfulCourse) => {
      const course: Course = {
        title: contentfulCourse.fields.title,
        url: contentfulCourse.fields.url,
        image: {
          url: contentfulCourse.fields.image.fields.file.url,
          height:
            contentfulCourse.fields.image.fields.file.details.image.height,
          width: contentfulCourse.fields.image.fields.file.details.image.width,
        },
        description: contentfulCourse.fields.description,
        button: contentfulCourse.fields.button,
        requirements: contentfulCourse.fields.requirements,
        price: contentfulCourse.fields.price,
        lang: contentfulCourse.fields.lang,
      };
      courses.push(course);
    });
    return courses;
  } else {
    const courses: Course[] = [
      {
        title: "contentfulCourse.fields.title",
        url: "contentfulCourse.fields.subtitle",
        image: {
          url: "contentfulCourse.fields.image.fields.file.url",
          height: 1,
          width: 1,
        },
        description: "contentfulCourse.fields.content",
        button: "contentfulCourse.fields.button",
        requirements: "contentfulCourse.fields.requirements",
        price: "contentfulCourse.fields.price",
        lang: "contentfulCourse.fields."
      },
    ];
    return courses;
  }
};

export const mapCourse = (contentfulCourse: any) => {
  const course: Course = {
    title: contentfulCourse.fields.title,
    url: contentfulCourse.fields.url,
    image: {
      url: contentfulCourse.fields.image.fields.file.url,
      height: contentfulCourse.fields.image.fields.file.details.image.height,
      width: contentfulCourse.fields.image.fields.file.details.image.width,
    },
    description: contentfulCourse.fields.description,
    button: contentfulCourse.fields.button,
    requirements: contentfulCourse.fields.requirements,
    price: contentfulCourse.fields.price,
    lang: contentfulCourse.fields.lang
  };

  return course;
};

export const findLang = (courses: Course[]) => {
  const coursesEng:Course[] = [];
  const coursesIta:Course[] = [];

  courses.map((course) => {
    course.lang === "eng" ?
    coursesEng.push(course) :
    coursesIta.push(course)
  });
  return { coursesEng: coursesEng, coursesIta:coursesIta}
}