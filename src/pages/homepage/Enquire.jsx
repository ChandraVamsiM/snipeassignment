import React from "react";
import Button from "../../components/Button/Index";
import { Heading } from "../../components/Heading/Index";
import Img from "../../components/Img/Index";
import { Radio } from "../../components/Radio/Index";
import RadioGroup from "../../components/RadioGroup/Index";

export default function Enquire() {
  return (
    <>
      {/* Registration Section */}
      <div className="flex flex-col items-center justify-center px-[160px] py-[120px] min-h-[700px] gap-[130px] lg:py-8 md:py-5 sm:py-4">
        <div className="container-xs flex flex-col gap-[54px] lg:px-5 md:px-5 sm:gap-[27px]">
          <div className="flex flex-col gap-10">
            <div className="flex text-left gap-[2px] md:flex-col">
              <Heading
                size="heading2xl"
                as="h1"
                className="text-[66px] font-black text-blue_gray-900 lg:text-[48px] md:text-[48px] border-l-8 border-[#E6A443] pl-4"
              >
                Enquire Form
              </Heading>
            </div>
          </div>
          <div className="flex items-left border border-solid  drop-shadow-lg bg-[#ffffff] md:flex-col">
            <div className="flex flex-col-2 ">
              <div className="flex flex-1 flex-col items-start gap-[26px] px-8 py-6 md:self-stretch md:px-5 sm:py-4">
                <div className="flex flex-col gap-[22px] self-stretch">
                  <div className="flex gap-6 md:flex-col">
                    <div className="flex flex-col-2 gap-1">
                      <div className="flex w-full flex-col items-start">
                        <Heading
                          size="headingmd"
                          as="h5"
                          className="text-[24px] font-semibold text-[#2f2f2f] lg:text-[20px]"
                        >
                          Your Name
                        </Heading>
                        <input
                          shape="round"
                          name="address"
                          className="self-stretch rounded-[9px] h-[45px] border px-3.5"
                        />
                      </div>
                      <div className="flex w-full flex-col items-start">
                        <Heading
                          size="headingmd"
                          as="h6"
                          className="text-[24px] font-semibold text-[#2f2f2f] lg:text-[20px]"
                        >
                          Phone Number
                        </Heading>
                        <input
                          shape="round"
                          name="pinCode"
                          className="self-stretch rounded-[9px] h-[45px] border px-3.5"
                        />
                      </div>
                      <div className="flex w-full flex-col items-start">
                        <Heading
                          size="headingmd"
                          as="h6"
                          className="text-[24px] font-semibold text-[#2f2f2f] lg:text-[20px]"
                        >
                          Email
                        </Heading>
                        <input
                          shape="round"
                          name="pinCode"
                          className="self-stretch rounded-[9px] h-[45px] border px-3.5"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col-2 gap-1">
                      <div className="flex w-full flex-col items-start">
                        <Heading
                          size="headingmd"
                          as="h5"
                          className="text-[24px] font-semibold text-gray-900 lg:text-[20px]"
                        >
                          Your Message
                        </Heading>
                        <textarea
                          shape="round"
                          name="address"
                          className="self-stretch rounded-[9px] h-[45px] border px-3.5"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <Button
                  shape="round"
                  className="mb-2 min-w-[154px] h-[57px] rounded-[10px] px-[26px] font-black sm:px-4"
                >
                  Enquire
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
