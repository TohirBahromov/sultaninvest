"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

type AboutCounterCardProps = {
  text: string;
  type: string;
  end: number;
};

const AboutCounterCard = ({ text, type, end }: AboutCounterCardProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  return (
    <div ref={ref}>
      <h1 className="text-[60px] font-bold mb-2 text-center">
        {inView ? <CountUp end={end} duration={2} separator="," /> : 0}
        <span className="text-[40px] font-medium">{type}</span>
      </h1>
      <h2 className="text-[18px] font-normal text-center">{text}</h2>
    </div>
  );
};

export default AboutCounterCard;
