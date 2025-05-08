import { TestimonialType } from "@/lib/source/Testimonials";

const TestimonialCard = ({ text, name, job }: TestimonialType) => {
  return (
    <article className="h-full w-full flex flex-col">
      <h1 className="text-[22px] leading-[38px] font-medium mb-8 flex items-center justify-center flex-grow">
        {text}
      </h1>
      <h3 className="block_title mb-[5px]">{name}</h3>
      <span className="text-[15px] leading-[22px] font-normal text-primary">
        {job}
      </span>
    </article>
  );
};

export default TestimonialCard;
