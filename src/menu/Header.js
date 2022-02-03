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
          <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-list" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
          </svg>
        </button>
        <div className='header-inner'></div>
        <div className='header-bg'></div>
      </div>
    </header>
  );
}