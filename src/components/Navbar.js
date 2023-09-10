import React from "react";
import { Link } from "react-router-dom";
import { Link as Link1 } from "react-scroll";
import * as Unicons from "@iconscout/react-unicons";

export default function Navbar() {
  window.addEventListener("scroll", windowScroll);
  function windowScroll() {
    const navbar = document.getElementById("navbar");
    if (
      document.body.scrollTop >= 50 ||
      document.documentElement.scrollTop >= 50
    ) {
      if (navbar !== null) {
        navbar?.classList.add("is-sticky");
      }
    } else {
      if (navbar !== null) {
        navbar?.classList.remove("is-sticky");
      }
    }

    const mybutton = document.getElementById("back-to-top");
    if (mybutton != null) {
      if (
        document.body.scrollTop > 500 ||
        document.documentElement.scrollTop > 500
      ) {
        mybutton.classList.add("flex");
        mybutton.classList.remove("hidden");
      } else {
        mybutton.classList.add("hidden");
        mybutton.classList.remove("flex");
      }
    }
  }
  return (
    <nav className="navbar" id="navbar">
      <div className="container flex flex-wrap items-center justify-between">
        <div className="">
          <Link to="/" className="navbar-brand md:me-8" href="index.html">
            <img
              src="/images/header_logo.png"
              className="mt-3 w-auto"
              alt=""
            />
            {/* <img
              src="/images/li.png"
              className="hidden dark:inline-block"
              alt=""
            /> */}
          </Link>
        </div>
        <div className="nav-icons flex items-center lg_992:order-2 ms-auto md:ms-8">
          {/* <!-- Navbar Button --> */}
          <ul className="list-none menu-social mb-0">
            <li className="inline-flex">
              <Link
                to="https://www.linkedin.com/in/digital-duo-a1b2a2290"
                className="ms-1"
              >
                <span className="login-btn-primary">
                  <span className="btn btn-icon btn-sm rounded-full bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white">
                    <Unicons.UilLinkedin width={16} />
                  </span>
                </span>
                <span className="login-btn-light">
                  <span className="btn btn-icon btn-sm rounded-full bg-gray-50 hover:bg-gray-200 dark:bg-slate-900 dark:hover:bg-gray-700 hover:border-gray-100 dark:border-gray-700 dark:hover:border-gray-700">
                    <Unicons.UilLinkedin width={16} />
                  </span>
                </span>
              </Link>

              <Link
                to="https://instagram.com/_digital_duo?igshid=NGVhN2U2NjQ0Yg=="
                className="ms-1"
              >
                <span className="login-btn-primary">
                  <span className="btn btn-icon btn-sm rounded-full bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white">
                    <Unicons.UilInstagram width={16} />
                  </span>
                </span>
                <span className="login-btn-light">
                  <span className="btn btn-icon btn-sm rounded-full bg-gray-50 hover:bg-gray-200 dark:bg-slate-900 dark:hover:bg-gray-700 hover:border-gray-100 dark:border-gray-700 dark:hover:border-gray-700">
                    <Unicons.UilInstagram width={16} />
                  </span>
                </span>
              </Link>
            </li>
          </ul>
          {/* <!-- Navbar Collapse Manu Button --> */}
          {/* <button
            data-collapse="menu-collapse"
            type="button"
            className="collapse-btn inline-flex items-center ms-2 text-dark dark:text-white lg_992:hidden"
            aria-controls="menu-collapse"
            aria-expanded="false"
          >
            <span className="sr-only">Navigation Menu</span>
            <i className="mdi mdi-menu text-[24px]"></i>
          </button> */}
        </div>

        {/* <!-- Navbar Manu --> */}
        <div
          className="navigation lg_992:order-1 lg_992:flex hidden ms-auto"
          id="menu-collapse"
        >
          <ul className="navbar-nav" id="navbar-navlist">
            <li className="nav-item">
              <Link1
                to="home"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                className="nav-link"
              >
                Home
              </Link1>
            </li>

            <li className="nav-item">
              <Link1
                to="service"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                className="nav-link"
              >
                Services
              </Link1>
            </li>
            <li className="nav-item">
              <Link1
                to="experience"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                className="nav-link"
              >
                Experience
              </Link1>
            </li>
            <li className="nav-item">
              <Link1
                to="contact"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                className="nav-link"
              >
                Contact Us
              </Link1>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
