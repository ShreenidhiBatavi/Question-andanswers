import React from 'react'
import { ContextProvider } from '../context/globalState'
import { FcCheckmark } from "react-icons/fc";
const Result = ({score}) => {
    const {questions}=ContextProvider()

  return (
    <>
    <div className='result-box'>
         
              <h3>You have got {score}/{questions.questions.length}</h3>
                <div className='results'>
                    {questions.questions.map((que)=>(<div className='heading'>
                         <div>Q {que.questionid} .  </div>
                        <div>selected option - {que.selected}</div>
                        <div>Correct option  - {que.correctoption}</div>
                        <div>{que.selected===que.correctoption?<span className='right'><FcCheckmark/></span>:<span className='wrong'>X</span>}</div>
                    </div>
                    ))}
                </div>
    </div>
</>
  )
}

export default Result