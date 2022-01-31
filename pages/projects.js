import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = async () => {
  const response = await fetch(
    "https://api.github.com/users/shresthapradhuman/repos",
    {
      headers: {
        Authorization: "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",
      },
    }
  );
  const data = await response.json();
  return data;
};

const Projects = () => {
  const router = useRouter();
  let route = router.route.replace("/", "");
  let breadcrumbs = route.split(" ");
  const { data, error } = useSWR("work", fetcher);
  if (error) return `An error has occured`;
  if (!data) return `loading..`;
  return (
    <>
      <section className="w-full xl:px-20 px-5 py-5">
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
        <div className="md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-4">
          {data.map((item, key) => (
            <Link href={item.html_url} key={key}>
              <a>
                <div className="py-2 border mb-5 md:mb-0">
                  <Image
                    alt={item.name}
                    src={`/images/project/${item.name}.png`}
                    width="100"
                    height="100"
                    layout="responsive"
                    className="w-full object-cover"
                  />
                  
                  <h2 className="text-xl text-center uppercase mb-2">
                    {item.name.slice(0, 20)}
                  </h2>
                  <p className=" p-2 text-lg font-light h-32 overflow-y-hidden">
                    {item.description.slice(0, 100)}
                  </p>
                  <span className="block text-right font-light capitalize pr-2">
                    {item.language}
                  </span>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
