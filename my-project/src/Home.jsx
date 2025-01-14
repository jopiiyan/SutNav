import React from "react";
import Hero from "./Components/Hero";
import Content from "./Components/Content";
import Places from "./Components/Places";

const Home = () => {
  return (
    <section className="h-[100vh]">
      <Hero />
      <Content />
      <Places />
    </section>
  );
};

export default Home;
