import Link from "next/link";
import { FaFacebookF, FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";
import { contact, email, follow } from "../data/setting";

const Footer = () => {
  return (
    <footer className="flex xl:px-20 p-5 lg:py-10 lg:flex-row lg:justify-between flex-col border-t-2">
      <div className="flex flex-col mb-5">
        <span className="text-xl font-medium capitalize mb-2">Phone</span>
        <span className="text-l font-normal">{contact}</span>
      </div>
      <div className="flex flex-col mb-5">
        <span className="text-xl font-medium capitalize mb-2">email</span>
        <span className="text-l font-normal">{email}</span>
      </div>
      <div className="flex flex-col mb-5">
        <span className="text-xl font-medium capitalize mb-2">Follow Me</span>

        <span className="flex">
          {follow.map((item, key) => (
            <Link href={item.url} key={key}>
              <a className="first:px-0 px-2">{item.icon}</a>
            </Link>
          ))}
        </span>
      </div>
      <div className="flex flex-col">
        <span className="font-light mb-2">@2022 All right reserved.</span>
        <span className="font-light">
          Designed By{" "}
          <Link href="https://shresthapradhuman.com.np/">
            <a target="_blank" rel="noopener" >Shrestha Pradhuman</a>
          </Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
