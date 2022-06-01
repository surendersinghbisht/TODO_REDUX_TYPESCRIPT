import { FC } from 'react';
import CheckBox from './CheckBox';

type doneProps={
  work:string;
  shiftBack: (e: React.ChangeEvent<HTMLInputElement>) => void
    
}

const ThingsDone:FC<doneProps> = (props) => {
  
 
    
  return (
      <div className="flex space-x-4 p-2">
          <CheckBox value={props.work} className="mt-2"  onChange={props.shiftBack} checked ></CheckBox>
       <h1>{props.work}</h1>
        
      </div>
  );
}

export default ThingsDone;