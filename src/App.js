import logo from './logo.svg';
import './App.css';
import {Button,Alert} from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import React,{useState} from 'react';
import TodoList from './components/TodoList'; 
function App() {
  
  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);
  const itemEvent = () => {
    if(inputList!== ""){
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  }else{
    alert("Please Enter the Value");
    // <Alert severity="error">This is an error alert — check it out!</Alert>
  }
  };
  const deleteItem = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      })
    })
  }
  return (
    <div className='main_div'>
    <div className='center_div'>
      <br />
      <h1> ToDo List </h1>
      <br />
      <input
      type='text'
      placeholder='Add an Items'
      value={inputList}
      onChange={(event) => setInputList(event.target.value)}
      />
      <Button  sx={{borderRadius:'30px'
    ,width:'50px',height:'50px',backgroundColor:'#2aad46',
    color:'white',margin:'10px',padding:'10px',border:'none',
    outline:'none',boxShadow:'0 0 10px 0 rgba(0,0,0,0.5)'}} 
    onClick={itemEvent} variant="contained" color="success">
    <AddIcon/> 
    </Button>
      <ol>
        {
          Items.map((itemval,index) => {
            return <TodoList 
            key={index} 
            id={index}
            text={itemval} 
            onSelect={deleteItem}
            />
          }
          )
        }
        <li>{inputList}</li>
      </ol>
      </div>
  </div>
  );
}

export default App;
