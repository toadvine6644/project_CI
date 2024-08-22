import React from "react";
import HeroSection from "./HeroSection";
import NewArrive from "./NewArrive";
import HomeBanner from "./HomeBanner";
import Categories from "./Categories";
import Timer from "./Timer";

function Home() {
  return (
    <div>
      <HeroSection />
      <Timer />
      <Categories />
      <Timer />
      <HomeBanner />
      <NewArrive />
    </div>
  );
}

export default Home;
