import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './Header.css'

export default function Header() {
  const [fixNavOpen, setFixNevOpen] = useState(false);
  const fixNavCheck = () => {
    if (!fixNavOpen) document.querySelector('body').style.overflowY = 'hidden';
    else document.querySelector('body').style.overflowY = 'auto';
    setFixNevOpen(fixNavOpen ? false : true);
  }
  
  const [headNavOpen, setHeadNevOpen] = useState(false);
  const headNavCheck = () => {
    window.scrollTo(0, 0);
    if (!headNavOpen) document.querySelector('body').style.overflowY = 'hidden';
    else document.querySelector('body').style.overflowY = 'auto';
    setHeadNevOpen(headNavOpen ? false : true);
  };

  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  }
  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
  }, [scrollPosition]);

  const headerClose = () => {
    setFixNevOpen(false);
    setHeadNevOpen(false);
    document.querySelector('body').style.overflowY = 'auto';
    window.scrollTo(0, 0);
  };

  return(
    <header className='header'>
      <div className={`header-fix ${fixNavOpen ? 'header-navOpen' : ''} ${scrollPosition > 64 ? 'on' : ''}`}>
        <div className="header-logo">
          <span>MAYNUT</span>
          <Link to='/' onClick={headerClose} />
        </div>
        <button className="header-navBtn" onClick={fixNavCheck} type='button'>
          <div className='header-navBtn-border'></div>
          <div className='header-navBtn-border'></div>
          <div className='header-navBtn-border'></div>
        </button>
        <HeaderInner pf={headerClose}/>
        <div className='header-bg'></div>
      </div>
      <div className={`header-head ${headNavOpen ? 'header-navOpen' : ''}`}>
        <div className="header-logo"
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/img/maynut_logo_black.png)`}}
        >
          <Link to='/' onClick={headerClose} />
        </div>
        <button className="header-navBtn" onClick={headNavCheck} type='button'>
          <div className='header-navBtn-border'></div>
          <div className='header-navBtn-border'></div>
          <div className='header-navBtn-border'></div>
        </button>
        <HeaderInner pf={headerClose}/>
        <div className='header-bg'></div>
      </div>
    </header>
  );
}

function HeaderInner(props) {
  const navClick = () => {
    props.pf();
  };

  return(
    <div className='header-inner'>
      <nav className='nav-wrap'>
        <ul>
          <li><Link to='/news' onClick={navClick}>NEWS</Link></li>
          <li><Link to='/games'>GAMES</Link></li>
          <li><Link to='/projects'>PROJECTS</Link></li>
        </ul>
      </nav>
    </div>
  );
}