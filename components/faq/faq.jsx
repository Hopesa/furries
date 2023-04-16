import FaqAccordion from "./accoedion";
import Image from "next/image";
const Faq = () => {
  return (
    <div>
      {/* <!-- FAQ --> */}
      <section className="relative py-24 dark:bg-jacarta-800">
        <div className="container">
          <div className="justify-between lg:flex lg:space-x-20">
            <div className="lg:w-[45%]">
              <h2 className="mb-6 font-display text-3xl font-medium text-jacarta-700 dark:text-white">
                Frequently Asked Questions
              </h2>
              <p className="mb-12 text-lg dark:text-jacarta-300">
                Got questions? Check this first
              </p>

              <FaqAccordion />

              <p className="text-lg text-jacarta-700 dark:text-jacarta-100">
                Any Question?{" "}
                <a href="#" className="text-accent">
                  hello@furries.id
                </a>
              </p>
            </div>
            <div className="lg:w-[55%]">
              <div className="mt-12 md:flex md:space-x-8 lg:justify-end">
                <div className="relative mb-12 max-w-[13.125rem] self-end p-8">
                  <img
                    src="/images/patterns/pattern_circle_1.png"
                    className="absolute -top-10 -left-21 -z-10 animate-fly dark:z-0 dark:opacity-10"
                    alt=""
                  />
                </div>
                 <div className="dark:hidden">
                 <img
                  src="/images/talks.png"
                  className="mb-8 inline-block rounded-2.5xl"
                  alt=""
                />
              </div>
              <div className="hidden dark:block">
              <img
                  src="/images/talks_white.png"
                  className="mb-8 inline-block rounded-2.5xl"
                  alt=""
                />
              </div>
              </div>
              <div className="relative">
                <img
                  src="/images/patterns/pattern_circle_2.png"
                  className="absolute -bottom-8 right-12 animate-fly dark:opacity-10"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end faq --> */}
    </div>
  );
};

export default Faq;
