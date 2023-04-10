import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
const TodoList = (props) => {
  const deleteItem = () => {
    console.log('deleted');
  }
  return (
    <div className='todo_style'>
        <CloseIcon className='fa-times' onClick={()=>{props.onSelect(props.id)} } />
        <li>{props.text}</li>
      </div>
  );
}

export default TodoList;
