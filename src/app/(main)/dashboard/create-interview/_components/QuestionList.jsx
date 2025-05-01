import React, { useEffect } from 'react'

const QuestionList = ({formData}) => {
  useEffect(()=>{
    if(formData){
      generateQuestions()
    }
  } , [])
  return (
    <div>QuestionList</div>
  )
}

export default QuestionList