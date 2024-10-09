import Img from "../../components/Img/Index";
import { Heading } from "../../components/Heading/Index";
import React from "react";

export default function SnipeMovement() {
  return (
    <div className="flex w-full h-[661px] items-center justify-center bg-[#2F2F2F] bg-cover bg-no-repeat px-0 py-10">
      <div className="container-xs flex justify-center px-14 lg:px-5 py-5 md:px-5">
        <div className="flex flex-col items-center max-w-[1422px] h-[421px]">
          <Heading className="text-[21px] font-medium text-[#FFFFFF] lg:text-[17px]">
            India faces a critical challenge in education.
          </Heading>

          <div className="flex flex-col items-center self-stretch px-14 md:px-5 sm:px-4">
            <Heading
              size="text-md"
              as="h3"
              className="text-[30px] font-medium text-[#F59D1F] lg:text-[25px] md:text-[24px] sm:text-[22px]"
            >
              But here’s the good news!
            </Heading>

            <Heading
              size="heading"
              as="h4"
              className="relative text-[120px] h-[120px] font-black text-[#F59D1F] lg:text-[48px] md:text-[48px]"
            >
              <span className="font-thin">Change is</span> POSSIBLE!
            </Heading>

            <div className="flex flex-col items-center gap-7">
              <Heading
                as="h5"
                className="max-w-[1422px] text-center text-[21px] text-[#FFFFFF] font-medium leading-[27px] lg:text-[17px]"
              >
                SNIPE can equip your child with the knowledge and skills to
                navigate roads safely. Our engaging program empowers them to
                become <br /> responsible road users, building a safer future
                for everyone.
              </Heading>

              <div className="flex flex-row items-center gap-2.5">
                <Heading
                  size="heading"
                  as="h6"
                  className="self-center text-[24px] font-black text-[#F59D1F] underline lg:text-[20px]"
                >
                  Join the SNIPE Movement Today
                </Heading>
                <Img
                  src="/images/Arrow 1.png"
                  alt="Arrow Image"
                  className="w-[27px] h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
