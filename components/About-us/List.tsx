import { CheckCheck } from "lucide-react";

const List = ({ text }: { text: string }) => {
  return (
    <div className="flex items-center gap-2 mb-[10px] hover:translate-x-1 cursor-pointer">
      <CheckCheck />
      <p className="text-[18px] font-medium leading-[30px]">{text}</p>
    </div>
  );
};

export default List;
