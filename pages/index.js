import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { profileImage, about } from "../data/setting";

export default function Home() {
  const router = useRouter();
  console.log(router);
  return (
    <>
      <Head>
        <title>{`Resume Portfolio | About Me`}</title>
        <meta name="description" content="Resume Portfolio, Bloging Site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="about container lg:container mx-auto my-2 flex lg:items-center flex-wrap p-5">
        <figure className="basis-full mt-4 px-4 lg:basis-6/12 order-2 grayscale p-2">
          <Image
            src={`/images/${profileImage.filename}`}
            alt={profileImage.alt}
            width="300"
            height="300"
            layout="responsive"
            className="w-full object-cover rounded-full"
          />
        </figure>
        <section className="lg:basis-6/12 lg:order-2 lg:pl-2 p-2">
          <span className="lg:text-9xl text-5xl font-bold">Hi!</span>
          <p className="lg:text-2xl text-xl font-light text-justify">{about}</p>
          <button className="bg-yellow-500 p-4 mt-7 lg:px-5 lg:py-3 border border-transparent rounded-md hover:bg-yellow-600">
            <Link href="/">
              <a
                className="flex items-center text-base font-medium"
                target="_blank"
              >
                <FaCloudDownloadAlt size="20" className="mr-2" />
                Download CV
              </a>
            </Link>
          </button>
        </section>
      </section>
    </>
  );
}
