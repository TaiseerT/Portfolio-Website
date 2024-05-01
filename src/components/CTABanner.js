import React from "react";
import { Link as Link1 } from "react-scroll";

export default function AddBanner(){
    return(
        <section className="py-20 w-full table relative bg-no-repeat bg-center bg-cover">
            <div className="absolute inset-0 bg-slate-900/70"></div>
            <div className="container relative">
                <div className="grid grid-cols-1 text-center">
                    <h3 className="mb-4 md:text-2xl text-xl text-white font-semibold">Unleash your POTENTIAL</h3>

                    <p className="text-white/80 max-w-xl mx-auto text-[15px]">At Digital Duo, we believe that every business has untapped potential waiting to be unleashed. Through our collaborative approach, we work closely with our clients to uncover hidden opportunities, identify strengths, and overcome challenges. By harnessing the power of our expertise and innovation, we empower your business to reach new levels of success, achieve sustainable growth, and set new industry standards.</p>
                
                    <div className="relative mt-8">
                    <Link1
                  to="contact"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="nav-link btn bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white rounded-md"
                >
                  Contact Us
                </Link1>
                    </div>
                </div>
            </div>
        </section>
    )
}