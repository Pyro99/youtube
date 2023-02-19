import React from 'react'
import Button from './Button'

const ButtonList = () => {
    const buttons =["All","Gaming","Live","Fashion & Beauty","Learning","Sports","News","Films","Music","Shopping","Trending","Computer Science",
    "Science & Technology","Food","Travel","Entertiainment","Comedy"];
  return (
    <div className ="pl-5 flex">
        {buttons.map((button,index) => <Button key={index} title={button} />)}
    </div>
  )
}

export default ButtonList