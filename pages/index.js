import Image from "next/image";
import Link from "next/link";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { profileImage, about } from "../data/setting";

export default function Home() {
  return (
    <>
      <section className="about px-5 py-5 w-full lg:w-full xl:w-7/12 lg:mx-auto lg:flex lg:items-center lg:justify-center lg:my-20 xl:my-32">
        <section className="mb-5 lg:basis-6/12 lg:order-2 lg:pl-5">
          <span className="text-4xl font-semibold">Hi!</span>
          <p className="text-lg font-light mb-3 text-justify">{about}</p>
          <button className="bg-orange-400 py-2 px-3 rounded-sm">
            <Link href="/">
              <a
                className="flex items-center text-base font-medium"
                target="_blank"
              >
                <FaCloudDownloadAlt className="mr-2 text-xl" />
                Download CV
              </a>
            </Link>
          </button>
        </section>
        <figure className="lg:basis-6/12">
          <Image
            src={`/images/${profileImage.filename}`}
            alt={profileImage.alt}
            width="300"
            height="300"
            layout="responsive"
            className="w-full object-cover grayscale object-center lg:rounded-full"
            priority
          />
        </figure>
      </section>
    </>
  );
}
