import { FC } from 'react';
import CheckBox from './CheckBox';

type todoProps={
  work:string;
  shiftToComp: (event: React.ChangeEvent<HTMLInputElement>) => void
    
}

const ThingsToDo:FC<todoProps> = (props) => {
  
 
    
  return (
      <div className="flex space-x-4 p-2">
          <CheckBox value={props.work} className="mt-2"  onChange={props.shiftToComp} checked={false} ></CheckBox>
       <h1>{props.work}</h1>
        
      </div>
  );
}

export default ThingsToDo;