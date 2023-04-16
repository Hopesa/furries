import Link from "next/link";

const Hero_6 = () => {
  return (
    <>
      {/* <!-- Hero --> */}
      <section className="relative pt-20 lg:pt-32">
        <picture className="pointer-events-none absolute inset-x-0 top-0 -z-10 dark:hidden">
          <img src="/images/gradient.jpg" alt="gradient" />
        </picture>
        <picture className="pointer-events-none absolute inset-x-0 top-0 -z-10 hidden dark:block">
          <img src="/images/gradient_dark.jpg" alt="gradient dark" />
        </picture>
        <img
          src="/images/patterns/pattern_donut.png"
          alt="pattern donut"
          className="absolute right-0 top-0 -z-10"
        />

        <div className="ml-auto mr-auto h-full max-w-[91rem] px-9">
          <div className="grid h-full items-center gap-4 lg:grid-cols-12">
            <div className="col-span-5 flex h-full flex-col items-center justify-center py-10 lg:items-start lg:py-20 " >
              <h1 className="mb-6 text-center font-display text-5xl text-jacarta-700 dark:text-white lg:text-left lg:text-6xl">
                Furries.id
              </h1>
              <p className="mb-8 max-w-lg text-center text-md dark:text-jacarta-200 lg:text-left">
                Welcome to Furries.id, Digital home of Indonesia Furs <br></br><br></br> A community in Indonesia that aims to give home to like-minded 
                people centred around the common interest of anthropomorphic
                animals. 
              </p>
              <div className="flex space-x-4">
                <Link href="mailto:indonesian.furry@gmail.com">
                  <a className="rounded-full bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark">
                    Contact Us
                  </a>
                </Link>
                <Link href="/#">
                  <a className="rounded-full bg-white py-3 px-8 text-center font-semibold text-accent shadow-white-volume transition-all hover:bg-accent-dark hover:text-white hover:shadow-accent-volume">
                    Learn More
                  </a>
                </Link>
              </div>
            </div>

            {/* <!-- Hero image --> */}
            <div className="col-span-5 md:col-span-6 lg:col-span-7 ">
              <div className="relative text-center lg:pl-32 lg:text-right lg:pt-24">
                <img
                  src="/images/hero/fox-winfur.png"
                  alt="crypto consultant hero"
                  className="inline-block rounded-2.5xl"
                />

                {/* <div className="absolute bottom-0 -right-[5%] inline-block animate-fly rounded-2lg bg-white p-8 shadow-2xl sm:bottom-28 sm:right-[5%] lg:-right-[17%]">
                  <div className="text-left">
                    <span className="block font-display text-3xl text-[#737EF2]">
                      +1k
                    </span>
                    <span className="mb-5 block font-display text-sm text-jacarta-600">
                      Community Members
                    </span>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end hero --> */}
    </>
  );
};

export default Hero_6;
