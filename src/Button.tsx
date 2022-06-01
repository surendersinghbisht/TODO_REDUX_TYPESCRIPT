import React, { ButtonHTMLAttributes, FC } from 'react';

type ButtonProps={
    children:string;
    theme?:"secondary" | "primary";
    } & ButtonHTMLAttributes<HTMLButtonElement>;

const Button:FC<ButtonProps> =(props) => {
    
    let themeClasses = "text-white bg-yellow-500 border  border-gray-300";
    if(props.theme === 'secondary')
    {
        themeClasses = "border  border-gray-300";
    }
    
  return (
    <button onClick={props.onClick} className={" text-center px-2 rounded-md  py-2 " + themeClasses}> 
      {props.children}</button>
  );
}

export default Button;