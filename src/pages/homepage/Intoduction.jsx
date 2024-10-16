import { Heading } from "../../components/Heading/Index";
import Img from "../../components/Img/Index";
import Button from "../../components/Button/Index";

export default function Introduction() {
  const missionList = [
    {
      ourMissionone: "images/Intro1.png",
      ourmission: "Our Mission",
      empowering:
        "Empowering children (Grades 1-12) with vital education knowledge and skills.",
    },
    {
      ourMissionone: "images/Intro2.png",
      ourmission: "Our Mission",
      empowering:
        "Explore our site and help create safer roads for future generations.",
    },
    {
      ourMissionone: "images/Intro3.png",
      ourmission: "What We Offer",
      empowering:
        "Access free modules and activities that teach essential education skills.",
    },
  ];

  return (
    <>
      <div className="flex flex-col  items-center gap-[50px] my-6">
        <div className="flex  justify-center">
          <div className="container-xs flex justify-center">
            <div className="flex flex-col items-center mx-3">
              <Heading
                size="heading3xl"
                as="h1"
                className="font-black text-[#2f2f2f] text-[99px] lg:text-[78px] md:text-[70px] sm:text-[60px] xs:text-[50px]"
              >
                Snipe Assignment
              </Heading>
              <Heading
                size="headingxl"
                as="h2"
                className="font-black text-[#f59d1f] text-[42px] lg:text-[35px] xs:text-[24px] "
              >
                An Initiative to Create Education for the Future!
              </Heading>
              <div className="flex flex-col items-center mt-5">
                <Button
                  shape="round"
                  className="w-[288px] h-[75px] text-[30px] rounded-[12px] font-black flex items-center justify-center  xs:w-[179px] xs:h-[51px] xs:text-[20px]"
                >
                  <Img
                    src="/images/watchImg.png"
                    alt="Watch Intro"
                    className="h-[30px] w-[30px] mr-2"
                  />
                  Watch Intro
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center max-w-[1680px] m-6 mx-1">
          {missionList.map((mission, index) => (
            <div
              key={index}
              className="flex flex-col items-center mx-4 mb-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
            >
              <Img
                src={mission.ourMissionone}
                alt={mission.ourmission}
                className="h-[60px] w-[60px] mb-3"
              />
              <div className="flex flex-col text-center">
                <Heading
                  size="headinglg"
                  as="h3"
                  className="text-xl font-semibold text-[#2f2f2f] sm:text-2xl underline"
                >
                  {mission.ourmission}
                </Heading>
                <p className="text-[#696969] font-medium text-base sm:text-lg lg:text-xl xs:text-[12px] leading-snug w-full">
                  {mission.empowering}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
