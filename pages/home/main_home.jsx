import React from "react";
import Meta from "../../components/Meta";
import { Partners } from "../../components/component";
import Hero_7 from "../../components/hero/hero_7";

import NewseLatter2 from "../../components/dao/newseLatter2";
import Intro from "../../components/dao/Intro";
import Faq from "../../components/faq/faq";

const Main_Home = () => {
  return (
    <>
      <Meta title="Home Main" />
      <Hero_7 />
      {/* <Partners /> This is to be filled by community affiliated under Furries.id umbrella*/}
      <Intro />
      <Faq />
      <NewseLatter2 bgWhite={false} />
    </>
  );
};

export default Main_Home;
