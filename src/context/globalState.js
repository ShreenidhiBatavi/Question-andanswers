import { createContext,useContext,useState } from "react";
import question from './question.json'

const GlobalContext=createContext()

export function ContextProvider(){
    return useContext(GlobalContext)
}

export const GlobalProvider=({children})=>{
    
    const [questions,setQuestion]=useState(question)
    console.log(questions)
    return(
        <GlobalContext.Provider value={{questions}}>
            {children}
      </GlobalContext.Provider>
    )
}