import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "./Footer";
import Header from "./Header";

export const Layout = ({ children }) => {
  const router = useRouter();
  let path = router.asPath;
  let pathCapitalize = [];
  if (path.replace("/", "") !== "") {
    let pathArray = path.replace("/", "").split("/");
    pathArray.map((item) => {
      pathCapitalize.push(item[0].toUpperCase() + item.slice(1));
    });
  } else {
    pathCapitalize.push("About Me");
  }
  return (
    <>
      <Head>
        <title>{`Resume Portfolio | ${pathCapitalize.join(" | ")}`}</title>
      </Head>
      <div className="wrapper py-2">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};
