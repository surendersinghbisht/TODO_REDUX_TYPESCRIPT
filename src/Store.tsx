import {createStore, Reducer} from 'redux';
import {ADD_TODO, TODO_COMPLETE, TODO_INCOMPLETE} from "./Action";
  


type State = {
 completed: number;
 incomplete: number;
}

const initialState: State ={completed: 0, incomplete: 0}

export const reducer: Reducer<State> = (currentState = initialState, action) =>{
switch (action.type){
  case ADD_TODO : {
    return {...currentState, incomplete: currentState.incomplete + 1};
  }
 case TODO_COMPLETE: {
 return { ...currentState, completed: currentState.completed + 1, incomplete: currentState.incomplete - 1};
 }
case TODO_INCOMPLETE: {
 return { ...currentState, incomplete: currentState.incomplete + 1, completed: currentState.completed - 1  };
  }
  default: {
 return currentState;
  }
}
}

const store = createStore(reducer);

export default store;

