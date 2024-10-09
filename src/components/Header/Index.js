import React from "react";
import { Heading } from "../Heading/Index";
import Button from "../Button/Index";
import Img from "../Img/Index";

export default function Header(props) {
  return (
    <header
      className={`${props.className} flex sm:flex-col mx-2 justify-between items-center gap-0 px-[10px] md:px-5 sm:px-4 border-gray-700 border-b border-solid`}
    >
      <div className="flex items-center w-full max-w-[1800px] pb-1 justify-between">
        <Img
          src="/images/Logo.png"
          alt="Header Logo"
          className="h-[90px] w-[90px] object-cover"
        />
        <nav>
          <ul className="flex flex-row gap-[30px] md:gap-[20px] items-center">
            {[
              "Homepage",
              "Impact",
              "SNIPE Olympiad",
              "FAQs & MYTHs",
              "About Us",
              "Contact",
            ].map((item, index) => (
              <li key={index}>
                <a
                  href={`/${item.replace(/\s+/g, "").toLowerCase()}`}
                  className="cursor-pointer lg:text-[17px]"
                  aria-label={item}
                >
                  <div className="flex flex-col items-center justify-center">
                    <Heading
                      as="h5"
                      className="text-[20px] font-bold text-blue_gray-900 hover:font-extrabold hover:text-yellow-800"
                    >
                      {item}
                    </Heading>
                  </div>
                </a>
              </li>
            ))}
            <Button
              size="sm"
              shape="round"
              className="w-[125px] h-[53px] ml-8 rounded-[10px] font-bold sm:px-4"
              aria-label="Updates"
            >
              Updates
            </Button>
            <Button
              size="sm"
              shape="round"
              className="w-[165px] h-[53px] bg-gray-800 rounded-[10px] font-bold sm:px-4"
              aria-label="Register Now"
            >
              Register Now
            </Button>
          </ul>
        </nav>
      </div>
    </header>
  );
}
