import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Home from "../components/home/Home";

const Layout = props => {
  return (
    <div>
      <Header />
      hello {props.children}
      <Home />
      <Footer />
    </div>
  );
};
export default Layout;
