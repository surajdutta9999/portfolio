import React from "react";
import Apps from "./sub-components/Apps";
import Portfolio from "./sub-components/Portfolio";
import Skills from "./sub-components/Skills";
import About from "./sub-components/About";
import Timeline from "./sub-components/Timeline";
import Hero from "./sub-components/Hero";
import Contact from "./sub-components/Contact";

const Home = () => {
  return (
    <article className="px-5 mt-10 sm:mt-14 md:mt-16 lg:mt-24 xl:mt-32 sm:mx-auto w-full max-w-[1050px] flex flex-col gap-14">
      <Hero />
      <Timeline />
      <About />
      <Skills />
      <Portfolio />
      <Apps />
      <Contact />
    </article>
  );
};

export default Home;
