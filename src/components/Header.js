import React from 'react';
import './../styles/styles.scss';
import { CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <div className="base-header">
      <div className="base-header__element">
        <div> <span><CiSearch/></span> <input className="base-header__input" /></div>
        <ul>
          <li><a href="/home">Categories</a></li>
          <li><a href="/website">Website Builders</a></li>
          <li><a href="/websites">Today`s Deals</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
