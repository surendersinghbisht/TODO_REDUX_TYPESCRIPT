import  { FC, HtmlHTMLAttributes } from "react";
import { useSelector } from "react-redux";

type display = HtmlHTMLAttributes<HTMLHtmlElement>;
const IncompleteDisplayer: FC<display> = () => {
  const IncompleteDisplayer = useSelector((s: any) => s.incomplete);
  return (
    <h1 className="mr-5">
      incomplete =<span className="text-red-500 ml-2">{IncompleteDisplayer}</span>
    </h1>
  );
};
export default IncompleteDisplayer;
