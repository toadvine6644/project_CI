import React from "react";
import Timer from "./Timer";
import HeroSection from "./HeroSection";
import NewArrive from "./NewArrive";
import HomeBanner from "./HomeBanner";


function Home() {
  return (
    <div>
      <HeroSection />
      <Timer />
      <HomeBanner />
      <NewArrive />
    </div>
  );
}

export default Home;
