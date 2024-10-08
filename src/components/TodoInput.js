import React, { useState } from 'react'

function TodoInput(props) {
    const [inputText, setInputText]= useState('');
    const handleEnterPress = (e)=>{
        if(e.keyCode===13){
            props.addList(inputText);
            setInputText("")
        }
    }
  return (
    <>
      <div className="input-container">
        <input type="text" className="input-box-todo mx-2" placeholder='Enter your text here...' 
        value ={inputText}
        onKeyDown={handleEnterPress}
        onChange={e=>{
            setInputText(e.target.value)
        }}/>
        
        <button className="add-btn mx-2"
        onClick={()=>{
            props.addList(inputText)
            setInputText("")
        }}>+</button>
      </div>
    </>
  )
}

export default TodoInput
