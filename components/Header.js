import Link from "next/link";
import { header, menu } from "../data/setting.json";
import { FaBars, FaTimes } from "react-icons/fa";
import { GoPrimitiveDot } from "react-icons/go";
import { useState } from "react";

const Header = () => {
  const [mobile, setMobile] = useState(false);
  const handleMobile = () => {
    setMobile(!mobile);
  };
  const handleMobileMenu = () => {
    setMobile(false);
  }
  return (
    <>
      <header className="flex justify-between items-center px-10 xl:px-20 py-3">
        <div
          className={`mobile fixed w-full z-10 top-0 left-0 bg-white transition-all ease-in-out duration-300 overflow-y-hidden ${
            mobile ? "overflow-y-auto h-full" : "h-0"
          }`}
        >
          <span
            className="mobile-close absolute top-6 right-10 cursor-pointer lg:hidden"
            onClick={handleMobile}
          >
            <FaTimes size="30px" />
          </span>
          <div className="mobile-nav relative top-1/4 w-full text-center mt-7">
            {menu.map((item, key) => (
              <Link key={key} href="/">
                <a className="mobile-nav-link p-2 text-2xl block capitalize transition-all duration-300" onClick={handleMobileMenu}>
                  {item}
                </a>
              </Link>
            ))}
          </div>
        </div>
        <div className="brand">
          <span className="name text-4xl">{header.name}</span>
          <span className="role text-xl font-light ml-1">{header.role}</span>
        </div>
        <span
          className="hamburger cursor-pointer lg:hidden"
          onClick={handleMobile}
        >
          <FaBars size="30px" />
        </span>
        <div className="nav hidden lg:flex lg:flex-row">
          {menu.map((item, key) => (
            <Link key={key} href="/">
              <a className="px-4 capitalize text-xl font-light hover:text-orange-400 border-l-2 first:border-l-0">{item}</a>
            </Link>
          ))}
        </div>
      </header>
    </>
  );
};

export default Header;
