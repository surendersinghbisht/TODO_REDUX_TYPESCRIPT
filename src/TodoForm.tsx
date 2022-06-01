import React, { FC } from 'react';
import Button from './Button'


type todoForm={
 save:(event: React.MouseEvent<HTMLButtonElement>) => void;
 onClose:(event: React.MouseEvent<HTMLButtonElement>) => void;   
 inputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
 inputValue:string;
}

const TodoForm:FC<todoForm> =(props) => {


    return (
        
     <div className="m-3 border space-y-4 rounded-md shadow-sm p-2" >
<h1 className="font-bold">Create a Todo</h1>         
<input value={props.inputValue} onChange={props.inputChange}
className="border border-gray-700 rounded-md px-5 py-2" placeholder="Enter an article" />
  <div className="space-x-2">
  <Button onClick={props.save}>Save</Button>
  <Button onClick={props.onClose} theme="secondary">Cancel</Button>               
    </div> 
     </div>  
  );
}
export default TodoForm;