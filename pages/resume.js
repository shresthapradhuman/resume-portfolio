import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { Education } from "../section/Education";
import { Experience } from "../section/Experience";
import { Skills } from "../section/Skills";

const Resume = () => {
  const router = useRouter();
  let route = router.route.replace("/", "");
  let breadcrumbs = route.split(" ");
  return (
    <>
      <section className="resume w-full  px-5 xl:px-20 py-5">
        <h2 className="title text-l font-light my-5 capitalize">
          <Link href="/">
            <a>home</a>
          </Link>
          {breadcrumbs.map((item, key) => (
            <Link href={`/${item}`} key={key}>
              <a>{` / ${item}`}</a>
            </Link>
          ))}
        </h2>
        <Experience />
        <Education />
        <Skills />
      </section>
    </>
  );
};

export default Resume;
