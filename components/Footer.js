import Link from "next/link";
import {
  FaCopyright,
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex lg:px-10 xl:px-20 p-5 xl:pt-10 xl:pb-20 lg:flex-row lg:justify-between flex-col border-t-2">
      <div className="flex flex-col mb-5">
        <span className="text-xl font-medium capitalize mb-2">Phone</span>
        <span className="text-l font-normal">123-4567-8910</span>
      </div>
      <div className="flex flex-col mb-5">
        <span className="text-xl font-medium capitalize mb-2">email</span>
        <span className="text-l font-normal">jhondoe2018@gmail.com</span>
      </div>
      <div className="flex flex-col mb-5">
        <span className="text-xl font-medium capitalize mb-2">Follow Me</span>
        <span className="flex">
          <Link href="/">
            <a className="px-0">
              <FaFacebookF />
            </a>
          </Link>
          <Link href="/">
            <a className="px-2">
              <FaInstagram />
            </a>
          </Link>
          <Link href="/">
            <a className="px-2">
              <FaYoutube />
            </a>
          </Link>
          <Link href="/">
            <a className="px-2">
              <FaGithub />
            </a>
          </Link>
        </span>
      </div>
      <div className="flex flex-col">
        <span className="font-light mb-2">@2022 All right reserved.</span>
        <span className="font-light">
          Designed By{" "}
          <Link href="https://shresthapradhuman.com.np/">
            <a target="_blank">Shrestha Pradhuman</a>
          </Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
