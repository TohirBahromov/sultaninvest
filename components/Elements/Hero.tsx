import Link from "next/link";
import Stack from "../ui/stack";
import { Animated } from "./Animated/Animated";
import { ANIMATIONS } from "@/lib/constants";

type PagePath = {
  page: string;
  url: string;
};
type HeroProps = {
  page: string;
  path: PagePath[];
};

const Hero = ({ page, path }: HeroProps) => {
  return (
    <section className="bg-secondBg h-[500px] relative flex items-center justify-center overflow-hidden">
      <Stack
        align="column"
        className="text-center text-[300px] font-semibold rotate-[-40deg] absolute z-0 text-black"
      >
        <div className="absolute w-full h-full z-[2]"></div>
        <p className="me-[320px] z-0">Sultan</p>
        <p className="z-0">Quick</p>
        <p className="ms-[320px] z-0">Invest</p>
      </Stack>
      <Stack align="column" gap={4} className="mt-10 z-10 items-center">
        <Animated animation={ANIMATIONS.FLIP.X}>
          <h1 className="text-center section_heading z-10">{page}</h1>
        </Animated>
        <Animated animation={ANIMATIONS.FLIP.Y}>
          <ul className="flex">
            {path.map((e, index) => (
              <Link key={index} href={e.url} className="page-path-hero inline">
                <li>{e.page}</li>
              </Link>
            ))}
          </ul>
        </Animated>
      </Stack>
    </section>
  );
};

export default Hero;
