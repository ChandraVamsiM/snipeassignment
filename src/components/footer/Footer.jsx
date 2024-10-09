import { Heading } from "../Heading/Index";
import Img from "../Img/Index";
import Button from "../Button/Index";
import React from "react";

export default function Footer(props) {
  return (
    <footer
      className={`${props.className} flex justify-center mt-[50px] md:py-5 sm:py-4 bg-[#2F2F2F] h-[536px]`}
    >
      <div className="container-xs flex lg:px-5 md:px-5">
        <div className="flex w-full flex-col items-center">
          <Heading
            as="h2"
            className="text-[30px] font-black text-[#F59D1F] underline lg:text-[25px] md:text-[24px] sm:text-[22px]"
          >
            Newsletter
          </Heading>
          <div className="relative mx-auto mt-[18px] h-[58px] flex items-center justify-center lg:h-auto md:mx-0">
            <input
              type="email"
              name="Email Input"
              placeholder="Your Email Address"
              className="flex-grow px-3.5 pr-[70px] w-full md:w-[600px] lg:w-[900px] h-[59px] font-light border border-gray-300 rounded-none focus:outline-none focus:ring"
            />
            <Button
              size="xs"
              className="absolute right-1 top-1/2 rounded-none transform -translate-y-1/2 px-3.5 font-bold text-white h-[47px] w-[82px]"
            >
              Send
            </Button>
          </div>

          <div className="w-[1560px] min-h-[234px] grid grid-cols-2 gap-4 mt-[60px] mx-[100px]">
            <div className="flex flex-col">
              <div className="">
                <Heading
                  size="headinglg"
                  as="h3"
                  className="text-[30px font-black text-[#F59D1F] lg:text-[25px] md:text-[24px] sm:text-[22px]"
                >
                  Snipe Labs Private Limited
                </Heading>

                <div className="mt-1 flex items-end gap-[18px] lg:w-full md:w-full md:flex-col">
                  <Img
                    src="images/pinIcon.png"
                    alt="Location Image"
                    className="h-[24px] w-[24px]"
                  />
                  <Heading
                    as="P"
                    className="w-[96%] text-[21px] font-medium leading-[27px] text-[#FFFFF] lg:w-[96%] lg:text-[17px] md:w-full"
                  >
                    N Krishna Deepam, Vinayak Nagar, Doddanekudi
                    <br />
                    Bangalore, Karnataka - 560037
                  </Heading>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 w-[594px]">
              <div className="">Quick Links</div>
              <div className="">Useful Links</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
