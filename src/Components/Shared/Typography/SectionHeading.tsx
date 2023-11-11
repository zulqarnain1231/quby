import React from "react";

type Props = {
  text: string;
  style?: string;
};
const SectionHeading: React.FC<Props> = ({ text, style = "" }) => {
  return (
    <h2
      className={`text-white-main font-bold sm:text-6xl text-5xl lg:text-left text-center ${style}`}
    >
      {text}
    </h2>
  );
};

export default SectionHeading;
