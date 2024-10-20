import React from 'react'
import './Button.css';
const Button = ({sport,activeTab,idx,tabChange}) => {
  
  return (
    <>
        <button className={activeTab===idx?"active":""} onClick={()=>tabChange(idx,sport)}>{sport.tabName}</button>
    </>
  )
}

export default Button