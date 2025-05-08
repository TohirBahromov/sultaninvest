import { PortfolioType } from "@/lib/source/Portfolio";

const PortfolioCard = ({ img, text, service }: PortfolioType) => {
  return (
    <article
      className="rounded-lg group relative aspect-square"
      style={{
        background: `url(${img})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute bottom-[-20px] w-[calc(100%-30px)] p-[15px] mb-[15px] mx-[15px] bg-secondary rounded-lg opacity-0 group-hover:opacity-100 group-hover:bottom-0">
        <span className="text-[15px] font-light leading-[22px]">{service}</span>
        <p className="quicksand text-[18px] xl:text-[15px] leading-[24px] xl:leading-[20px] font-light">
          {text}
        </p>
      </div>
    </article>
  );
};

export default PortfolioCard;
