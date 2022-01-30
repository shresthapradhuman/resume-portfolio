import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import { useRouter } from "next/router";
import Link from "next/link";
const Forum = ({ frontmatter: { title, date, category }, slug, content }) => {
  const router = useRouter();
  let route = router.asPath;
  let breadcrumbs = route.replace("/", "").split("/");
  return (
    <div className="w-11/12 mx-auto">
      <h2 className="title text-l font-light my-5 capitalize">
        <Link href="/">
          <a>home</a>
        </Link>
        {breadcrumbs.map((item, key) => (
          <Link
            href={`/${key > 0 ? breadcrumbs[key - 1] + "/" : ""}${item}`}
            key={key}
          >
            <a>{` / ${item}`} </a>
          </Link>
        ))}
      </h2>
      <section className="forum  my-5 h-full">
        <h2 className="text-xl font-medium uppercase mb-5">{title}</h2>
        <span className="block text-base font-medium mb-2">{date}</span>
        <div className="mb-5">
          {category.map((item, key) => (
            <span
              className="text-sm font-medium bg-orange-400 p-1 rounded ml-2 first:ml-0"
              key={key}
            >
              {item}
            </span>
          ))}
        </div>
        <div className="text-xl font-light antialiased leading-10">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </section>
    </div>
  );
};
export default Forum;

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("./data/posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("./data/posts", slug + ".md"),
    "utf-8"
  );
  const { data: frontmatter, content } = matter(markdownWithMeta);
  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}
