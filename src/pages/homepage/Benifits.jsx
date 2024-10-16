import React from "react";
import { Heading } from "../../components/Heading/Index";
import Img from "../../components/Img/Index";

export default function Benefits() {
  return (
    <div className="flex flex-col items-center justify-center lg:[160px] xl:px-[160px] md:px-[80px] py-[120px] min-h-[700px] xs:px-[18px] xs:py-[90px]">
      <div className="container-xs flex flex-col gap-[5px] sm:gap-[29px]">
        <div className="flex flex-col items-start gap-[22px]">
          <div className="flex text-left gap-[2px] md:flex-col">
            <Heading
              size="heading2xl"
              as="h1"
              className="text-[66px] font-black text-blue_gray-900 lg:text-[48px] md:text-[48px] border-l-8 border-[#E6A443] pl-4 xs:text-[30px]"
            >
              About the Program
            </Heading>
          </div>
          <Heading
            as="p"
            className="w-full text-left text-[21px] font-normal leading-[27px] text-blue_gray-900 lg:text-[18px] xs:text-[18px]"
          >
            The SNIPE program empowers children to be safe on the roads. Our
            interactive lessons teach them the skills they need to navigate as
            pedestrians, cyclists, and passengers. With fun activities and
            age-appropriate learning, SNIPE helps kids become confident and
            responsible road users.
          </Heading>
          <Heading
            as="div"
            className="text-[21px] text-left font-normal leading-[27px] text-blue_gray-900 lg:text-[17px]"
          >
            <span className="text-black font-bold">Benefits</span>
            <ul className="list-disc pl-5  xs:text-[18px]">
              <li>Aligns with UM SPGs for safety and education</li>
              <li>
                Based on guidelines issued by the National Highway Authority of
                India (NHAI) and the Ministry of Road Transport & Highways
                (MORTH) initiatives
              </li>
              <li>Reaches over 10 million students across 8,000+ schools</li>
            </ul>
          </Heading>
        </div>
        <div className="xl:mx-[100px] flex flex-col justify-center gap-[90px]   md:flex-row xs:gap-[30px] ">
          <div className="border-[3px] border-[#E6A443]  rounded-[9px] p-4 flex items-center justify-center xs:p-[18px] xl:w-[50%] w-[100%]">
            <Img
              src="images/benifits1.png"
              alt="Vector Image"
              className="w-[80px] h-[80px]"
            />
            <div className="ml-4 justify-center">
              <div className="flex flex-col items-center">
                <span className="font-bold text-xl">{`8,000+`}</span>
                <span className="text-lg ml-2"> Schools</span>
              </div>
            </div>
          </div>
          <div className="border-[3px] border-[#E6A443]  rounded-[9px] p-4 flex items-center justify-center xs:p-[18px] xl:w-[50%] w-[100%]">
            <Img
              src="images/benifits2.png"
              alt="Vector Image"
              className="w-[80px] h-[80px]"
            />
            <div className="ml-4 justify-center">
              <div className="flex flex-col items-center">
                <span className="font-bold text-xl">{`1,000,000+`}</span>
                <span className="text-lg ml-2"> Students</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
