import React from 'react'

const Button = ({title}) => {
  return (
    <div className = "mr-2">
        <button className ="bg-gray-600 text-white px-3 py-2 rounded-lg">{title}</button>
    </div>
  )
}

export default Button