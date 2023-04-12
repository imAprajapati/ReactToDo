import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
const TodoList = (props) => {
  return (
    <div className='todo_style'>
        {/* <CloseIcon className='fa-times' onClick={()=>{props.onSelect(props.id)} } /> */}
        <DeleteIcon style={{padding:"5px"}} className='fa-times' onClick={()=>{props.onSelect(props.id)}} />
        <li style={{
          textShadow: "1px 0px 1px #000000",
        }}>{props.text}</li>
      </div>
  );
}

export default TodoList;
