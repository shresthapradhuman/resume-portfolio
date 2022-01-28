import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export const Layout = ({ children }) => {
  return (
    <>
      <div className="wrapper py-2">
        <Header />
        <main>{children}</main>
        {/* <Footer/> */}
      </div>
    </>
  );
};
