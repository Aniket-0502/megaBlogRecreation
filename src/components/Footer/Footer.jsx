import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";

function Footer() {
  return (
    <section className="relative overflow-hidden py-10 bg-gray-800">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="-m-6 flex flex-wrap">
          <div className="w-[35%] p-6 md:w-1/2 lg:w-5/12">
            <div className="flex flex-col justify-between">
              <div className=" inline-flex items-center">
                <Logo white="true" />
              </div>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-white">
                Company
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-white hover:text-red-600 hover:underline decoration-wavy underline-offset-4"
                    to="/"
                  >
                    Features
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium  text-white hover:text-red-600 hover:underline decoration-wavy underline-offset-4"
                    to="/"
                  >
                    Pricing
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium  text-white hover:text-red-600 hover:underline decoration-wavy underline-offset-4"
                    to="/"
                  >
                    Press Kit
                  </Link>
                </li>
                <li>
                  <Link
                    className=" text-base font-medium  text-white hover:text-red-600 hover:underline decoration-wavy underline-offset-4"
                    to="/"
                  >
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-white">
                Support
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium  text-white hover:text-red-600 hover:underline decoration-wavy underline-offset-4"
                    to="/"
                  >
                    Account
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-white hover:text-red-600 hover:underline decoration-wavy underline-offset-4"
                    to="/"
                  >
                    Help
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium  text-white hover:text-red-600 hover:underline decoration-wavy underline-offset-4"
                    to="/"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    className=" text-base font-medium  text-white hover:text-red-600 hover:underline decoration-wavy underline-offset-4"
                    to="/"
                  >
                    Customer Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-white">
                Legals
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-white hover:text-red-600 hover:underline decoration-wavy underline-offset-4"
                    to="/"
                  >
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium  text-white hover:text-red-600 hover:underline decoration-wavy underline-offset-4"
                    to="/"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    className=" text-base font-medium  text-white hover:text-red-600 hover:underline decoration-wavy underline-offset-4"
                    to="/"
                  >
                    Licensing
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <p className="text-sm text-white mt-8">
            &copy; Copyright 2024. All Rights Reserved with BlogVerse
          </p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
