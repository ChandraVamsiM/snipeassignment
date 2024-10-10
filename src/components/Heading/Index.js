import React from "react";

const sizes = {
  textxs: "text-[21px] font-medium lg:text-[17px]",
  texts: "text-[24px] font-medium lg:text-[20px] md:text-[22px]",
  textmd:
    "text-[30px] font-medium lg:text-[25px] md:text-[28px] sm:text-[26px]",
  headingxs: "text-[20px] font-bold lg:text-[17px]",
  headings: "text-[21px] font-black lg:text-[17px]",
  headingmd: "text-[24px] font-semibold lg:text-[20px] md:text-[22px]",
  headinglg:
    "text-[30px] font-black lg:text-[25px] md:text-[28px] sm:text-[26px]",
  headingxl:
    "xl:text-[42px] font-black lg:text-[35px] md:text-[38px] sm:text-[32px]",
  heading2xl: "text-[66px] font-black lg:text-[66px] md:text-[48px]",
  heading3xl: "xl:text-[99px] font-black ",
  heading4xl: "text-[120px] font-black lg:text-[120px] md:text-[48px]",
};

export const Heading = ({
  children,
  className = "",
  size = "textxs",
  as,
  ...restProps
}) => {
  const Component = as || "h6";

  return (
    <Component
      className={`text-[#2f2f2f] font-['DM_Sans'] ${className} ${sizes[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};
