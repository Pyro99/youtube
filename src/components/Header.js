import React from 'react'

const Header = () => {
  return (
    <div>
      <div>
        <img
          src="https://image.shutterstock.com/image-vector/thick-hamburger-menu-bar-line-260nw-274138187.jpg"
          alt="hamburger_icon"
        />

        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuE54d8krphaVP1AQ1Jd4G1uRqLcA2N81TnA&usqp=CAU"
          alt="logo"
        />
      </div>
      <div>
        <input type="text" />
        <button>Search</button>
      </div>
      <div>
        <img
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="user_icon"
        />
      </div>
    </div>
  );
}

export default Header