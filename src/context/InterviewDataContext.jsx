"use client"
import { createContext, useContext, useEffect, useState } from "react"

 const InterviewContext = createContext()

 export const InterviewContextProvider = ({ children }) =>{
  const [interviewInfo, setInterviewInfo] = useState(null)
  // useEffect(()=>{
  //   // console.log(interviewInfo)
  // }, [interviewInfo])
  return(
    <InterviewContext.Provider value={{interviewInfo , setInterviewInfo}}>{children}</InterviewContext.Provider>
  )
} 

export const useInterview =()=>{
  const context = useContext(InterviewContext)
  return context
}
