import { Link, Routes, Route, useParams } from 'react-router-dom';

import './News.css';

export default function News() {
  return(
    <main>
      <Routes>
        <Route path='/' element={<NewsList />} />
        <Route path='/:newsId' element={<NewsDetail />} />
      </Routes>
    </main>
  );
}

function NewsList() {
  const newsList = [1,2,3,4,5,6,7,8,9,10];

  return(
    <div className='news-section'>
      <div className='section-header'>
        <h1>NEWS</h1>
      </div>
      <div className='news-wrap'>
        <ol className='news-list'>
          {newsList.map(no => { 
            return <NewsItem id={no} key={`news_${no}`} /> 
          })}
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
      <p className='news-title'>텍스트가 들어갈 자리 id_{props.id}</p>
    </li>
  );
}

function NewsDetail() {
  let { newsId } = useParams();

  return(
    <div className='news-detail'>
      ID : {newsId}
    </div>
  );
}