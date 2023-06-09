import Image from "next/image";
import TradeVolume from "./TradeVolume";

const Intro = () => {
  return (
    // <!-- Intro -->
    <section className="bg-gradient-to-r from-[transparent_33%] to-[#F5F8FA_33%] py-36 dark:to-[#101436_33%]">
      <div className="container">
        <div className="lg:flex lg:justify-between">
          {/* <!-- Image --> */}
          <div className="relative lg:w-[45%]">
            <figure className="relative">
              <img
                src="/images/logo.png"
                className="rounded-2.5xl"
                alt="web protocol"
              />
            </figure>
          </div>

          {/* <!-- Info --> */}
          <div className="py-10 lg:w-[55%] lg:pl-24">
            <h2 className="mb-6 font-display text-3xl text-jacarta-700 dark:text-white">
              What are Indonesia Furs?
            </h2>
            <p className="mb-8 text-md leading-normal dark:text-jacarta-300">
            We are a community that celebrates personal identity,
            surrounding ourselves with a creative world centered around anthropomorphic
            animals. 
            </p>
            <p className="dark:text-jacarta-300 text-md">
            Think about cartoons and funny animals, or fables. <br/>With over a thousand members around Indonesia and with plenty of regional and sub groups 
            serving our members.
            </p>
            <TradeVolume />
          </div>
        </div>
      </div>
    </section>
    // <!-- end intro -->
  );
};

export default Intro;
