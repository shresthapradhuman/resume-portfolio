import Link from "next/link";
import { useRouter } from "next/router";
import matter from "gray-matter";
import fs from "fs";
import path from "path";
import BlogCard from "../../components/BlogCard";
import Image from "next/image";
import Sort from "../../util/Sort";
import Head from "next/head";

const Forums = ({ posts }) => {
  const router = useRouter();
  let route = router.route.replace("/", "");
  let breadcrumbs = route.split(" ");
  return (
    <>
    <Head>
      <title>{`Resume Portfolio | Forums`}</title>
    </Head>
      <section className="px-5 xl:px-20">
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
        <h2 className="text-xl capitalize">Forums</h2>
        <ul className="my-5 md:grid md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-4">
          {posts.map((item, key) => (
            <Link href={`/forums/${item.slug}`} key={key}>
              <a>
                <BlogCard
                  thumbnail={item.frontmatter.thumbnail}
                  title={item.frontmatter.title}
                  category={item.frontmatter.category}
                  excerpt={item.frontmatter.excerpt}
                  date={item.frontmatter.date}
                />
              </a>
            </Link>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Forums;

export async function getStaticProps() {
  /** Get files from the posts dir */
  const files = fs.readdirSync(path.join("data/posts"));
  /** Get slug and front matters from posts */
  const posts = files.map((filename) => {
    /** Create Slug */
    const slug = filename.replace(".md", "");
    /** Get frontmatter */
    const markdownWithMeta = fs.readFileSync(
      path.join("./data/posts", filename),
      "utf-8"
    );
    const { data: frontmatter } = matter(markdownWithMeta);
    return {
      slug,
      frontmatter,
    };
  });
  console.log(posts);
  return {
    props: {
      posts:posts.sort(Sort)
    },
  };
}
