import React from 'react';
import { hamburger, user_logo, youtube_logo } from '../constants';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
const Header = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
      <div className='flex col-span-1'>
        <img
        className ="h-8 cursor-pointer"
          onClick={() => toggleMenuHandler()}
          src={hamburger}
          alt='hamburger_icon'
        />
        <a href='/'>
          <img
            className='h-8 mx-2'
            src={youtube_logo}
            alt='logo'
          />
        </a>
      </div>
      <div className='col-span-10 ml-80'>
        <input
          type='text'
          className='px-5 w-1/2 border border-gray-400 p-2 rounded-l-full'
        />
        <button className='border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100'>
          Search
        </button>
      </div>
      <div className='col-span-1'>
        <img
          className='h-8'
          src={user_logo}
          alt='user_icon'
        />
      </div>
    </div>
  );
};

export default Header;
