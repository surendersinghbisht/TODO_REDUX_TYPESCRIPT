import React, { FC } from 'react';
import Button from './Button';
import TodoForm from './TodoForm';
import ThingsToDo from './ThingsToDo';
import ThingsDone from './ThingsDone';
import { useDispatch } from 'react-redux';
import { ADD_TODO, TODO_COMPLETE, TODO_INCOMPLETE } from './Action';
import CompleteDisplay from './CompleteDisplay'
import IncompleteDisplayer from './IncompleteDisplayer'

type FullProps = {
  
}

const Full:FC<FullProps> =() => {


  const [showTodoForm, updateshowTodoForm] = React.useState(false);
  const [inputValue, updateInputValue] = React.useState('');
  const [todoList, updateTodoList] = React.useState<any[]>([]);
  const [doneList, updateDoneList] = React.useState<any[]>([]);



  function todoForm() {
    updateshowTodoForm(true);
  }

  function hideTodoForm() {
    updateshowTodoForm(false);
  }

  


  function onInputChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    updateInputValue(event.target.value);
  }

  function saveTodo() {
    if (inputValue === '') {
      return;
    }
    updateTodoList([...todoList, inputValue])
    updateInputValue('');
    addTodo();
  };

const dispatch2 = useDispatch();
const addTodo = () =>{
  dispatch2({type:ADD_TODO})
}


  const shiftToDone = (e: React.ChangeEvent<HTMLInputElement>) => {
    const list = todoList.filter(work => work !== e.target.value);
    doneList.push(e.target.value);
    updateTodoList(list);
    updatecompTodo();
  };

  const shiftBack = (e: React.ChangeEvent<HTMLInputElement>) => {
    const list = doneList.filter(work => work !== e.target.value);
    todoList.push(e.target.value);
    updateDoneList(list);
    updatenotDone();
  };

  const dispatch3 = useDispatch();
  const updatenotDone = () =>{
    dispatch3 ({ type: TODO_INCOMPLETE });
  }

  const dispatch = useDispatch();
  const updatecompTodo = () => {
    dispatch({ type: TODO_COMPLETE });
  };

  return (
    
    <div className="px-10 py-5">
      <h1 className='font-semibold text-2xl mb-3'>Surender's ToDo</h1>
      <CompleteDisplay />
      <IncompleteDisplayer />
      <hr></hr>
      <h1 className='font-bold text-3xl py-3'>Things to
     get done</h1>
      <h3 className='font-semibold  text-xl py-3'>Things to do</h3>
      {todoList.length < 1 &&
        <h3 className="text-gray-500">no todo's here!</h3>
      }
      {todoList.length > 0 &&
        todoList.map(e => <ThingsToDo work={e} key={e}  shiftToComp={shiftToDone}  ></ThingsToDo>)
      }

      {!showTodoForm && <Button onClick={todoForm}>+ add todo</Button>
      }

      {showTodoForm && <TodoForm onClose={hideTodoForm} inputValue={inputValue} inputChange={onInputChange} save={saveTodo} ></TodoForm>
      }
      <h3 className='font-semibold  text-xl py-3'>things done</h3>
      {doneList.length < 1 &&
        <h3 className="text-gray-500">no todo's here!</h3>
      }
      {doneList.length > 0 &&
        doneList.map(e => <ThingsDone  work={e} key={e}  shiftBack={shiftBack}  ></ThingsDone>)
      }

    </div>
  )
}
export default Full;