import React, { useRef } from "react";
import * as Unicons from "@iconscout/react-unicons";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

export default function GetInTouch() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gsby32g",
        "template_6tzctp6",
        form.current,
        "2C_dt-1EOKB313JNi"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section
      className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800"
      id="contact"
    >
      <div className="container">
        <div className="grid grid-cols-1 pb-8 text-center">
          <h3 className="mb-6 md:text-2xl text-xl md:leading-normal leading-normal font-semibold">
            Get In Touch !
          </h3>

          <p className="text-slate-400 max-w-xl mx-auto text-[15px]">
            Curiosity piqued? Embark on a transformative journey with Digital
            Duo and experience the power of expertise and innovation firsthand.
            Connect with us via email, shoot us a message, and our passionate
            team will eagerly await, ready to unravel the mysteries of your
            inquiries with prompt and thoughtful responses. Together, let's
            unlock the full potential of your business, unleash new
            possibilities, and redefine what success means in your industry,
            creating a work experience that not only meets your goals but also
            paves the way for a prosperous future.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 md:grid-cols-2 mt-8 items-center gap-[30px]">
          <div className="lg:col-span-8">
            <div className="p-6 rounded-md shadow bg-white dark:bg-slate-900">
              <form ref={form} onSubmit={sendEmail}>
                <div className="grid lg:grid-cols-12 lg:gap-5">
                  <div className="lg:col-span-6 mb-5">
                    <input
                      name="user_name"
                      id="user_name"
                      type="text"
                      className="form-input w-full py-2 px-3 border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded h-10 outline-none bg-transparent focus:border-amber-500/50 dark:focus:border-amber-500/50 focus:shadow-none focus:ring-0 text-[15px]"
                      placeholder="Name :"
                    />
                  </div>

                  <div className="lg:col-span-6 mb-5">
                    <input
                      name="user_email"
                      id="user_email"
                      type="email"
                      className="form-input w-full py-2 px-3 border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded h-10 outline-none bg-transparent focus:border-amber-500/50 dark:focus:border-amber-500/50 focus:shadow-none focus:ring-0 text-[15px]"
                      placeholder="Email :"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1">
                  <div className="mb-5">
                    <input
                      name="user_subject"
                      id="user_subject"
                      className="form-input w-full py-2 px-3 border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded h-10 outline-none bg-transparent focus:border-amber-500/50 dark:focus:border-amber-500/50 focus:shadow-none focus:ring-0 text-[15px]"
                      placeholder="Subject :"
                    />
                  </div>

                  <div className="mb-5">
                    <textarea
                      name="user_message"
                      id="user_message"
                      className="form-input w-full py-2 px-3 border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded h-28 outline-none bg-transparent focus:border-amber-500/50 dark:focus:border-amber-500/50 focus:shadow-none focus:ring-0 text-[15px]"
                      placeholder="Message :"
                    ></textarea>
                  </div>
                </div>
                <button
                  type="submit"
                  id="submit"
                  name="send"
                  value="Send"
                  className="btn bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white rounded-md h-11 justify-center flex items-center"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="lg:ms-8">
              <div className="flex">
                <div className="icons text-center mx-auto">
                  <Unicons.UilLinkedin className=" block rounded text-2xl dark:text-white mb-0" />
                </div>

                <div className="flex-1 ms-6">
                  <Link
                    to="https://www.linkedin.com/in/digital-duo-a1b2a2290"
                    className="text-slate-400 text-[15px]"
                  >
                    <h5 className="text-[17px] dark:text-white mb-2 font-medium">
                      LinkedIn Profile
                    </h5>
                    Digital Duo
                  </Link>
                </div>
              </div>

              <div className="flex mt-4">
                <div className="icons text-center mx-auto">
                  <Unicons.UilEnvelope className=" block rounded text-2xl dark:text-white mb-0" />
                </div>

                <div className="flex-1 ms-6">
                  <Link
                    to="mailto:ty.digitalduo@gmail.com"
                    className="text-slate-400 text-[15px]"
                  >
                    <h5 className="text-[17px] dark:text-white mb-2 font-medium">
                      Email
                    </h5>
                    ty.digitalduo@gmail.com
                  </Link>
                </div>
              </div>
              <div className="flex mt-4">
                <div className="icons text-center mx-auto">
                  <Unicons.UilInstagram className=" block rounded text-2xl dark:text-white mb-0" />
                </div>

                <div className="flex-1 ms-6">
                  <Link
                    to="https://instagram.com/_digital_duo?igshid=NGVhN2U2NjQ0Yg=="
                    className="text-slate-400 text-[15px]"
                  >
                    <h5 className="text-[17px] dark:text-white mb-2 font-medium">
                      Instagram
                    </h5>
                    _digital_duo
                  </Link>
                </div>
              </div>

              <div className="flex mt-4">
                <div className="icons text-center mx-auto">
                  <Unicons.UilMapMarker className=" block rounded text-2xl dark:text-white mb-0" />
                </div>

                <div className="flex-1 ms-6">
                  <h5 className="text-[17px] dark:text-white mb-2 font-medium">
                    Location
                  </h5>
                  <p className="text-slate-400 text-[15px] mb-2">
                    Virtual Company.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
