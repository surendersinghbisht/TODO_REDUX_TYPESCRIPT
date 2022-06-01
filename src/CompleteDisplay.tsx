import  { FC, HtmlHTMLAttributes } from "react";
import { useSelector } from "react-redux";

type display = HtmlHTMLAttributes<HTMLHtmlElement>;
const CompleteDisplay: FC<display> = () => {
  const completeCount = useSelector((s: any) => s.completed);
  return (
    <h1 className="mr-5">
      Completed =<span className="text-green-500 ml-2">{completeCount}</span>
    </h1>
  );
};
export default CompleteDisplay;
