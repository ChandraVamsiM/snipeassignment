import { Heading } from "../Heading/Index";
import Img from "../Img/Index";
import Button from "../Button/Index";
import React from "react";

export default function Footer(props) {
  const quickLinks = [
    { text: "About Us", link: "#about" },
    { text: "Impact", link: "#impact" },
    { text: "Snipe Olympiad", link: "#olympiad" },
    { text: "Ranking", link: "#ranking" },
    { text: "Contact", link: "#contact" },
  ];
  const usefulLinks = [
    { text: "Blogs", link: "#blogs" },
    { text: "Privacy Policy", link: "#privacypolicy" },
    { text: "Terms & Conditions", link: "#terms&conditions" },
    { text: "Olympiad Terms & Conditions", link: "#olympiadterms&conditions" },
    { text: "FAQS", link: "#faqs" },
  ];
  return (
    <footer
      className={`${props.className} flex justify-center mt-12 md:py-5 sm:py-4 bg-gray-800 h-[536px]`}
    >
      <div className="container-xs flex lg:px-5 md:px-5">
        <div className="flex w-full flex-col items-center">
          <Heading
            as="h2"
            className="text-[30px] font-black text-[#F59D1F] underline lg:text-[25px] md:text-[24px] sm:text-[22px]"
          >
            Newsletter
          </Heading>
          <div className="relative mx-auto mt-4 flex items-center justify-center h-[58px] lg:h-auto md:mx-0">
            <input
              type="email"
              name="email"
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

          <div className="w-full min-h-[234px] grid grid-cols-2 max-gap-[160px] mt-12 mx-auto">
            <div className="flex flex-col ml-[60px]">
              <Heading
                as="h3"
                className="text-[30px] text-left font-black text-[#F59D1F] lg:text-[25px] md:text-[24px] sm:text-[22px]"
              >
                Snipe Labs Private Limited
              </Heading>
              <div className="flex items-center mt-2 gap-[18px]">
                <Img
                  src="images/pinIcon.png"
                  alt="Location Icon"
                  className="h-[24px] w-[24px] mt-1" // Adjust margin here
                />
                <Heading
                  as="p"
                  className="text-[21px] font-medium leading-[27px] text-left text-[#ffffff] lg:w-[96%] lg:text-[17px] md:w-full"
                >
                  N Krishna Deepam, Vinayak Nagar, Doddanekudi
                  <br />
                  Bangalore, Karnataka - 560037
                </Heading>
              </div>
              <div className="flex items-center mt-2 gap-[18px]">
                <Img
                  src="images/mailIcon.png"
                  alt="Location Icon"
                  className="h-[24px] w-[24px] mt-1" // Adjust margin here
                />
                <Heading
                  as="p"
                  className="text-[21px] font-medium leading-[27px] text-left text-[#ffffff] lg:w-[96%] lg:text-[17px] md:w-full"
                >
                  support@snipe.in
                </Heading>
              </div>
              <div className="flex items-center mt-3 max-w-[450px]">
                <Heading
                  as="h3"
                  className="text-[21px] font-black leading-[27px] gap-[24px] text-left text-[#f59d1f] lg:text-[17px]"
                >
                  Social Media:
                </Heading>
                <Img
                  src="images/FaceBookIcon.png"
                  alt="Location Icon"
                  className="h-[50px] w-[50px] ml-2"
                />
                <Img
                  src="images/instaIcon.png"
                  alt="Location Icon"
                  className="h-[50px] w-[50px] ml-1"
                />
                <Img
                  src="images/twitterIcon.png"
                  alt="Location Icon"
                  className="h-[50px] w-[50px] ml-1"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 w-[594px]">
              <div className="flex flex-col">
                <Heading
                  as="h3"
                  className="text-[30px] text-left font-black text-[#F59D1F] underline lg:text-[25px] md:text-[24px] sm:text-[22px]"
                >
                  Quick Links
                </Heading>
                {quickLinks.map((item, index) => (
                  <Heading
                    key={index}
                    as="p"
                    className="text-[21px] text-left font-medium text-[#FFFFFF] lg:text-[18px] md:text-[15px] sm:text-[12px]"
                  >
                    <a href={item.link} className="hover:underline">
                      {item.text}
                    </a>
                  </Heading>
                ))}
              </div>

              <div className="flex flex-col">
                <Heading
                  as="h3"
                  className="text-[30px] text-left font-black text-[#F59D1F] underline lg:text-[25px] md:text-[24px] sm:text-[22px]"
                >
                  Useful Links
                </Heading>
                {usefulLinks.map((item, index) => (
                  <Heading
                    key={index} // Use index as key (or a unique ID if available)
                    as="p"
                    className="text-[21px] font-medium text-left text-[#FFFFFF] lg:text-[18px] md:text-[15px] sm:text-[12px]"
                  >
                    <a href={item.link} className="hover:underline">
                      {item.text}
                    </a>
                  </Heading>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
