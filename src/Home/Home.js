import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Scrollbar, Autoplay } from 'swiper';
import { Link } from 'react-router-dom';

import 'swiper/css';
import './Home.css'

export default function Home() {
  return (
    <main>
      <HomeNewGames />
      <HomeNews />
      <HomeGames />
      <HomeProjects />
    </main>
  );
}

function HomeNewGames() {
  const swiperParams = {
    className: 'banner',
    modules: [Pagination, Scrollbar, Autoplay],
    loop: true,
    autoplay: {
      delay: 4000,
      loop: true,
      disableOnInteraction: false,
    },
    spaceBetween: 22,
    slidesPerView: 'auto',
  }

  return(
    <section className="main-section Home-newgames">
      <Swiper {...swiperParams}>
        <SwiperSlide>
          <SlideItem no={'projectsnow'} />
        </SwiperSlide>
        <SwiperSlide>
          <SlideItem no={null} />
        </SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
      </Swiper>
    </section>
  );
}

function SlideItem(props) {
  const [detailActive, setDetailActive] = useState({
    slideClass: 'detail-none',
    check: false,
  });

  const slideDetail = () => {
    setDetailActive((prevState) => {
      return {
        ...prevState,
        slideClass: detailActive.check ? 'detail-none' : 'detail-active',
        check: detailActive.check ? false : true,
      }
    });
  };

  return(
    <div className='slide-item'>
      <div className='slide-item-img'
        onClick={slideDetail}
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/img/${props.no}-info-1.jpg)` }}
      ></div>
      <div className={`slide-detail ${detailActive.slideClass}`}
        onClick={slideDetail}
      >
        <div className='slide-detail-icon'></div>
        <div className='slide-detail-title'>프로젝트 스노우</div>
        <div className='slide-detail_wrap'>
          <div className='slide-detail-dev'>狸花猫工作室</div>
          <hr />
          <div className='slide-detail-pub'>狸花猫工作室</div>
        </div>
        <div className='slide-detail-tag'>TAG</div>
      </div>
    </div>
  );
}

function HomeNews() {
  return(
    <section className='main-section Home-news'>
      <div className='section-header'>
        <h1>NEWS</h1>
        <Link to='/news'>MORE</Link>
      </div>
      <div className='news-wrap'>
        <ol className='news-list'>
          <HomeNewsItem id={1}/>
          <HomeNewsItem id={2}/>
          <HomeNewsItem id={3}/>
          <HomeNewsItem id={4}/>
          <HomeNewsItem id={5}/>
        </ol>
      </div>
    </section>
  );
}

function HomeNewsItem(props) {
  return(
    <li className='news-item' id={props.id}>
      <Link to={`/news/${props.id}`} className='news-link'></Link>
      <span className='news-date'>2022.01.01</span>
      <span className='news-tag'>#신작 #게임명 #국가</span>
      <p className='news-title'>텍스트가 들어갈 자리</p>
    </li>
  );
}

function HomeGames() {
  return(
    <section className='main-section Home-games'>
      <div className='section-header'>
        <h1>GAMES</h1>
        <Link to='/'>MORE</Link>
      </div>
    </section>
  );
}

function HomeProjects() {
  return(
    <section className='main-section Home-projects'>
      <div className='section-header'>
        <h1>PROJECTS</h1>
        <Link to='/'>MORE</Link>
      </div>
    </section>
  );
}