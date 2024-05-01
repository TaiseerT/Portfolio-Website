import React from "react";
export default function Experience() {
  return (
    <section
      className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800"
      id="experience"
    >
      <div className="container">
        <div className="grid grid-cols-1 pb-8 text-center">
          <h3 className="mb-6 md:text-2xl text-xl md:leading-normal leading-normal font-semibold">
            Work Experience
          </h3>

          <p className="text-slate-400 max-w-xl mx-auto text-[15px]">
            Backed by year(s) of industry experience and a team of seasoned
            professionals, Work Experience is well-versed in navigating the
            complexities of the modern business landscape. We have honed our
            skills through diverse projects, industry collaborations, and a deep
            understanding of the ever-evolving needs of our clients. Our
            expertise spans across multiple domains, allowing us to offer
            comprehensive solutions tailored to your specific requirements.
            <br />
            <br />
            Here's a few copy templates that have not only elevated businesses
            but also empowered countless individuals to transform their lives
            for the better. These proven templates are designed to capture
            attention, evoke emotions, and drive meaningful engagement:
          </p>
        </div>

        <div className="grid grid-cols-1 mt-8">
          <div className="mt-12 ms-8 md:ms-0 relative">
            <div className="grid md:grid-cols-2">
              <div className="md:text-end md:me-8 relative">
                <img
                  src="/images/experience1.png"
                  className="rounded-xl h-32 w-32 md:ms-auto"
                  alt=""
                />
              </div>
              <div className="md:text-end md:me-8 relative mt-3">
                <img
                  src="/images/experience3.png"
                  className="rounded-xl h-32 w-32 md:ms-auto"
                  alt=""
                />
              </div>

              <div className="md:text-end md:me-8 relative pt-9 mt-3">
                <img
                  src="/images/experience2.png"
                  className="rounded-xl h-32 w-32 md:ms-auto"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
