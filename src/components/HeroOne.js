import React from "react";
import { TypeAnimation } from "react-type-animation";
import "../index.css";

export default function HeroOne() {
  return (
    <>
      <section
        className="relative pt-28 personal-wrapper overflow-hidden bg-amber-500/5"
        id="home"
      >
        <div className="absolute inset-0" id="overlay"></div>
        <div className="container">
          <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
            <div>
              <h4 className="font-bold lg:text-[40px] text-3xl lg:leading-normal leading-normal mb-4">
                Hey! We're <br />
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    "Digital Duo",
                    2000, // wait 1s before replacing "Mice" with "Hamsters"
                    "Strategic Digital Marketing Duo",
                    2000, // wait 1s before replacing "Mice" with "Hamsters"
                  ]}
                  wrapper="span"
                  speed={50}
                  className="typewrite text-amber-500"
                  repeat={Infinity}
                />
                <span
                  className="typewrite text-amber-500"
                  data-period="2000"
                  data-type='[ "Digital Duo", "Strategic Digital Marketing Duo" ]'
                >
                  {" "}
                  <span className="wrap"></span>{" "}
                </span>
              </h4>
              <p className="text-slate-400 max-w-xl">
                Obviously we're Copywriters, we believe that true success is
                born from a combination of expertise and innovation. With a
                proven track record of delivering exceptional results, we bring
                together the best of both worlds to create transformative
                solutions for our clients. Explore the possibilities and
                discover how our unique approach can elevate your business to
                new heights.
              </p>
            </div>

            <div className="hidden-on-small-screens">
            <div className="relative">
              <img src="/images/hero/3.png" alt=""/>

              <div className="absolute lg:top-80 md:top-56 top-48 ltr:md:-right-0 ltr:right-2 rtl:md:-left-0 rtl:left-2 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 m-3 w-44 text-center">
                <h6 className="font-semibold">Copywriters</h6>
                <h6 className="text-sm text-slate-400 mt-1">
                  Years Of Experience
                </h6>
              </div>
              </div>
              </div>
          </div>
        </div>
      </section>
      <div className="relative">
      </div>
    </>
  );
}
