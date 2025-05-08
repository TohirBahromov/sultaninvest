import "../../../app/globals.css";
import "../../../app/animation.css";

type classname = string | undefined;

const YellowSquare = (classname: classname) => {
  return <div className={`yellow-square ${classname}`}></div>;
};

export { YellowSquare };
