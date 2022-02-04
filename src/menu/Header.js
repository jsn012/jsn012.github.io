import { useState } from 'react';
import { Link } from 'react-router-dom';

import './Header.css'

export default function Header() {
  const [navOpen, setNevOpen] = useState({
    class: '',
    check: false,
  });

  const navOpenCheck = () => {
    if (!navOpen.check) document.querySelector('body').style.overflowY = 'hidden';
    else document.querySelector('body').style.overflowY = 'auto';

    setNevOpen((prevState) => {
      return {
        ...prevState,
        class: navOpen.check ? '' : 'header-navOpen',
        check: navOpen.check ? false : true,
      }
    });
  };

  return(
    <header className={`header ${navOpen.class}`}>
      <div className="header-fix">
        <div className="header-logo">
          <span>MAYNUT</span>
          <Link to='/' />
        </div>
        <button className="header-navBtn" onClick={navOpenCheck} type='button'>
          <div className='header-navBtn-border'></div>
          <div className='header-navBtn-border'></div>
          <div className='header-navBtn-border'></div>
        </button>
        <div className='header-inner'></div>
        <div className='header-bg'></div>
      </div>
      <div className='header-head'>
        <div className="header-logo"
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/img/maynut_logo_black.png)`}}
        >
          <Link to='/' />
        </div>
        <button className="header-navBtn" onClick={navOpenCheck} type='button'>
          <div className='header-navBtn-border'></div>
          <div className='header-navBtn-border'></div>
          <div className='header-navBtn-border'></div>
        </button>
        <div className='header-inner'></div>
        <div className='header-bg'></div>
      </div>
    </header>
  );
}