import Link from "next/link";
import { useRouter } from "next/router";
import { Education } from "../section/Education";
import { Experience } from "../section/Experience";
import { Skills } from "../section/Skills";

const resume = () => {
  const router = useRouter();
  return (
    <section className="resume w-full px-5 xl:px-20 py-5">
      <h2 className="title text-l font-medium mb-10 capitalize">
        <Link href="/">
          <a>home</a>
        </Link>
        <Link href={router.route}>
          <a>{router.route}</a>
        </Link>
      </h2>
      <Experience />
      <Education />
      <Skills />
    </section>
  );
};

export default resume;
