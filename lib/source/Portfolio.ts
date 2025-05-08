export type PortfolioType = {
  id: number;
  img: string;
  service: string;
  text: string;
};

const Portfolio: PortfolioType[] = [
  {
    id: 1,
    img: "/images/portfolio1.jpg",
    service: "Marketing",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 2,
    img: "/images/portfolio2.jpg",
    service: "Web Development",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 3,
    img: "/images/portfolio3.jpg",
    service: "Telegram bot",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 4,
    img: "/images/portfolio4.jpg",
    service: "Mobilografiya",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 5,
    img: "/images/portfolio4.jpg",
    service: "fddfd",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 6,
    img: "/images/portfolio4.jpg",
    service: "Msas",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

export default Portfolio;
