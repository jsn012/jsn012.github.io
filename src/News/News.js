import { Link, Routes, Route } from 'react-router-dom';

import './News.css';

export default function News() {
  return(
    <main>
      <Routes>
        <Route path='/' element={<NewsList />} />
        <Route path='/*' element={<NewsDetail />} />
      </Routes>
    </main>
  );
}

function NewsList() {
  return(
    <div className='news-section'>
      <div className='section-header'>
        <h1>NEWS</h1>
      </div>
      <div className='news-wrap'>
        <ol className='news-list'>
          <NewsItem id={1} />
          <NewsItem id={2} />
          <NewsItem id={3} />
          <NewsItem id={4} />
          <NewsItem id={5} />
          <NewsItem id={6} />
        </ol>
      </div>
    </div>
  );
}

function NewsItem(props) {
  return (
    <li className='news-item' id={props.id}>
      <Link to={`/news/${props.id}`} className='news-link'></Link>
      <span className='news-date'>2022.01.01</span>
      <span className='news-tag'>#신작 #게임명 #국가</span>
      <p className='news-title'>텍스트가 들어갈 자리</p>
    </li>
  );
}

function NewsDetail() {
  return(
    <div className='news-detail'>
      NEWSDETAIL
    </div>
  );
}