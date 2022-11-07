import React from "react";
import AutoToTop from "../../AutoToTop";
import { Header } from "../../Header";
import { Footer } from "../../Footer";

export default function main(props) {
  return (
    <div className="Home">
      <AutoToTop />
      <Header />
      <div className="div-main">{props.children}</div>
      <Footer />
    </div>
    
  );
}
