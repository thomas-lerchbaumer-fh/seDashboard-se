import React, { Fragment, useEffect, useContext } from 'react';
import NewsContext from '../../context/news/newsContext';
import {v4 as uuidv4} from 'uuid';

const StandardRss = () => {
  const newsUpdate = useContext(NewsContext); 
  const {getNews, news} = newsUpdate;

      useEffect(()=>{
        getNews();
        // eslint-disable-next-line
    },[]); 

 return (
    <Fragment>
      <div className="container-dash-rss">
 
        <ul className="ul-newsroom-scroolbar">
        {news.map(item =>{
          return(
            <li className="li-newsroom-text" key={uuidv4()}>
            <a href={`${item.link}`}>{item.title}</a>  
            <img className="li-newsroom-img" src={`${item.thumbnail}`}  alt="derStandard" width="100%" height="100%"/>
            </li>
            )            
        })}
        </ul>          
       
      </div>
    </Fragment>

)
};

export default StandardRss;