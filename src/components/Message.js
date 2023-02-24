import React from 'react'
import { user_logo } from '../utils/constants';

const Message = ({name, message}) => {
  return (
    <div className="flex p-2 items-center shadow-sm">
      <img
        className="h-7"
        src={user_logo}
        alt="user_icon"
      />
      <span className="font-bold px-2 text-gray-700">{name}</span>
      <span>{message}</span>
    </div>
  );
}

export default Message