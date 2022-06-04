import React, { useState } from 'react'
import {ContextProvider} from '../context/globalState'
import Result from './Result'

const Question = () => {
    const {questions}=ContextProvider()
    const [currentQuestion,setCurrentQuestion]=useState(0)
    const [score,setScore]=useState(0)
   
    const [show,setShow]=useState(false)
    const handleClick=(option,correctOption)=>{
      if(option===correctOption){
        setScore((score)=>score+1)
      }
       questions.questions[currentQuestion].selected=option
            if(currentQuestion+1===questions.questions.length){
              setShow(true)
            }
            else{
               setCurrentQuestion((currentQuestion)=>currentQuestion+1)
            }
           
      }
 
  return (
    <>
            
            {!show?<div className='question-box'>
            
                  <h3>{questions.questions[currentQuestion].questionid} {questions.questions[currentQuestion].question}</h3>
                  <div className='options'>
                        {questions.questions[currentQuestion].questionoption.map((option,index)=>(
                             <button onClick={()=>handleClick(option.optionid,questions.questions[currentQuestion].correctoption)}>{option.optionvalue}</button>
                        ))}
                  </div>
            </div>:<Result score={score}/>}
            
    </>
  )
}

export default Question