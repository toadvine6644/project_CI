import React from "react";
import Timer from "./Timer";
import HeroSection from "./HeroSection";
import NewArrive from "./NewArrive";
import HomeBanner from "./HomeBanner";
import Categories from "./Categories";

function Home() {
  return (
    <div>
      <HeroSection />
      <Timer />
      <Categories />
      <HomeBanner />
      <NewArrive />
    </div>
  );
}

export default Home;
