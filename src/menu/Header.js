import { Link } from 'react-router-dom';

import './Header.css'

export default function Header() {
  return(
    <header className="header">
      <div className="header-fix"></div>
      <div className="header-head">
        <div className="header-logo"
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/img/maynut_logo_black.png)`}}
        >
          <Link to='/' />
        </div>
        <button className="header-navBtn" type='button'>
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