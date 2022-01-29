import Link from "next/link";
import { header, menu } from "../data/setting.js";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { useRouter } from "next/router";

const Header = () => {
  const [mobile, setMobile] = useState(false);
  const router = useRouter();
  const handleMobile = () => {
    setMobile(!mobile);
  };
  const handleMobileMenu = () => {
    setMobile(false);
  };
  return (
    <>
      <header className="flex justify-between items-center px-5 xl:px-20 py-3">
        <div
          className={`mobile fixed w-full z-10 top-0 left-0 bg-white transition-all ease-in-out duration-300 overflow-y-hidden ${
            mobile ? "overflow-y-auto h-full" : "h-0"
          }`}
        >
          <span
            className="mobile-close absolute top-6 right-5 cursor-pointer lg:hidden"
            onClick={handleMobile}
          >
            <FaTimes size="25px" />
          </span>
          <div className="mobile-nav relative top-1/4 w-full text-center mt-7">
            {menu.map((item, key) => (
              <Link key={key} href={`/${item}`}>
                <a
                  className={`mobile-nav-link p-2 text-2xl block capitalize transition-all duration-300 ${
                    router.pathname.replace("/", "") == item
                      ? "text-orange-600"
                      : ""
                  }`}
                  onClick={handleMobileMenu}
                >
                  {item}
                </a>
              </Link>
            ))}
          </div>
        </div>
        <div className="brand">
          <Link href="/">
            <a>
              <span className="name text-2xl lg:text-3xl font-medium">{header.name}</span>
              <span className="role text-base font-light ml-1">
                {header.role}
              </span>
            </a>
          </Link>
        </div>
        <span
          className="hamburger cursor-pointer lg:hidden"
          onClick={handleMobile}
        >
          <FaBars size="25px" />
        </span>
        <div className="nav hidden lg:flex lg:flex-row">
          {menu.map((item, key) => (
            <Link key={key} href={`/${item}`}>
              <a
                className={`px-4 capitalize text-xl font-light hover:text-yellow-600 border-l-2 first:border-l-0 ${
                  router.pathname.replace("/", "") == item
                    ? "text-orange-600"
                    : ""
                }`}
              >
                {item}
              </a>
            </Link>
          ))}
        </div>
      </header>
    </>
  );
};

export default Header;
