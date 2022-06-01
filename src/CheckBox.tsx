import  { FC,  InputHTMLAttributes } from 'react';

type checkBoxProps={
    } & InputHTMLAttributes<HTMLInputElement>;

const CheckBox:FC<checkBoxProps> =(props) => {
    

  return (
    <input value={props.value} onChange={props.onChange} className="mt-2" type="checkBox"  checked={props.checked} ></input>
  );
}

export default CheckBox;