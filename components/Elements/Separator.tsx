const Separator = ({
  classname,
  color1,
  color2,
}: {
  classname?: string;
  color1: string;
  color2: string;
}) => {
  return (
    <div
      className={`${classname}`}
      style={{
        background: `linear-gradient(to bottom, ${color1}, ${color2})`,
      }}
    ></div>
  );
};

export default Separator;
