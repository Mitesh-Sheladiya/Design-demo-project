import React from "react";
import Header from "../component/Header";
import Banner from "../component/banner";
import Count from "../component/count";
import Advantage from "../component/advantage";
import Bank from "../component/bank";
import Community from "../component/community";
import Achievements from "../component/achievements";
import Media from "../component/media";
import Blog from "../component/blog";
import Faq from "../component/faq";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Count />
      <Advantage />
      <Bank />
      <Community />
      <Achievements />
      <Media />
      <Blog />
      <Faq />
    </div>
  );
};

export default Home;
