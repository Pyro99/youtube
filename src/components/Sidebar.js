import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const menu = useSelector((store) => store.sidebar.isMenuOpen);
  if (!menu) return null;

  return (
    <div className='p-2 m-2'>
      <ul>
        <li className='pb-2'>
          <Link to='/'>Home</Link>
        </li>
        <li className='pb-2'>Shorts</li>
        <li className='pb-2'>Subscriptions</li>
        <hr className='pb-2' />
        <li className='pb-2'>Library</li>
        <li className='pb-2'>History</li>
        <li className='pb-2'>Your Videos</li>
        <li className='pb-2'>Watch Later</li>
        <li className='pb-2'>Liked Videos</li>
        <hr className='pb-2' />
        <li className='pb-2'>Trending</li>
        <li className='pb-2'>Shopping</li>
        <li className='pb-2'>Music</li>
        <li className='pb-2'>Films</li>
        <li className='pb-2'>Live</li>
        <li className='pb-2'>Gaming</li>
        <li className='pb-2'>News</li>
        <li className='pb-2'>Sports</li>
        <li className='pb-2'>Learning</li>
        <li className='pb-2'>Fashion & Beauty</li>
        <hr className='pb-2' />
        <li className='pb-2'>Youtube Premium</li>
        <li className='pb-2'>Creator Studio</li>
        <li className='pb-2'>Youtube Music</li>
        <li className='pb-2'>Youtube Kids</li>
        <li className='pb-2'>Youtube Tv</li>
        <hr className='pb-2' />
        <li className='pb-2'>Settings</li>
        <li className='pb-2'>Report History</li>
        <li className='pb-2'>Help</li>
        <li className='pb-2'>Send Feedback</li>
        <hr className='pb-2' />
      </ul>
    </div>
  );
};

export default Sidebar;
