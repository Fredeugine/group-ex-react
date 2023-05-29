import React from "react";
import "./App.css";
import CardComponent from "./CardComponent.jsx";
import {useState} from "react";

function App() {
    const [items,setItems] = useState([])
    const [inputText,setInputText] = useState('')

  return (
    <div>
        <input type={"text"} onChange={(event)=>{
            setInputText(event.target.value)

        }}/>
        <button>Click me</button>
        <button onClick={()=>{
            setItems([...items,inputText])
        }}>Add item</button>
        {items.map((value, index)=>{
            return <CardComponent content={index}></CardComponent>
        })}



    </div>
  );
}

export default App;
