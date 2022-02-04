import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Scrollbar, Autoplay } from 'swiper';
import { Link } from 'react-router-dom';

import 'swiper/css';
import './Main.css'

export default function Main() {
  return (
    <main>
      <NewGames />
      <News />
      <Games />
    </main>
  );
}

function NewGames() {
  return(
    <section className="main-section newgames">
      <Swiper
        className='banner'
        modules={[Pagination, Scrollbar, Autoplay]}
        loop
        autoplay={{
          delay: 4000,
          loop: true,
          disableOnInteraction: false,
        }}
        spaceBetween={22}
        slidesPerView='auto'
      >
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

function News() {
  return(
    <section className='main-section news'>
      <div className='section-header'>
        <h1>NEWS</h1>
        <Link to='/'>MORE</Link>
      </div>
      <div className='news-wrap'>
        <ol className='news-list'>
          <NewsItem id={1}/>
          <NewsItem id={2}/>
          <NewsItem id={3}/>
          <NewsItem id={4}/>
          <NewsItem id={5}/>
        </ol>
      </div>
    </section>
  );
}

function NewsItem(props) {
  return(
    <li className='news-item' id={props.id}>
      <Link to='/' className='news-link'></Link>
      <span className='news-date'>2022.02.03</span>
      <span className='news-tag'>#신작</span>
      <p className='news-title'>{props.id}</p>
    </li>
  );
}

function Games() {
  return(
    <section className='main-section games'>
      <div className='section-header'>
        <h1>GAMES</h1>
        <Link to='/'>MORE</Link>
      </div>
    </section>
  );
}