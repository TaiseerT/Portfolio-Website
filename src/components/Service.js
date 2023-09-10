import React from "react";
import { Link } from "react-router-dom";
import { servicesData } from "../Data/data";
import * as Unicons from "@iconscout/react-unicons";
export default function Services() {
  return (
    <section
      className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800"
      id="service"
    >
      <div className="container">
        <div className="grid grid-cols-1 pb-8 text-center">
          <h3 className="mb-6 md:text-2xl text-xl md:leading-normal leading-normal font-semibold">
            What do we offer?
          </h3>


          

          <p className="text-slate-400 max-w-xl mx-auto text-[15px]">
            We embrace a culture of continuous learning, staying at the
            forefront of emerging trends and technologies. By combining our
            wealth of experience with a fresh and forward-thinking mindset, we
            deliver cutting-edge solutions that break new ground, seize untapped
            opportunities, and position our clients as leaders in their
            respective industries.<br/>
            Some of our services:
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
          {servicesData.map((item, index) => {
            const Icon = item.Icon;
            return (
              <div
                className="px-6 py-10 shadow shadow-gray-200 hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 transition duration-500 rounded-2xl bg-white dark:bg-slate-900"
                key={index}
              >
                <div className="flex justify-center">
                  <Icon className="h-10 w-10 stroke-1 text-amber-500" />
                </div>
                <div className="content mt-7">
                  <Link
                    to=""
                    className="title h5 text-[17px] font-medium hover:text-amber-500 flex justify-center"
                  >
                    {item.title}
                  </Link>
                  <p className="text-slate-400 mt-3 text-[15px]">{item.desc}</p>

                  <div className="mt-5"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
