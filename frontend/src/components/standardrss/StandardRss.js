import React, { Fragment, useEffect, useContext, useState } from 'react';
import NewsContext from '../../context/news/newsContext';
import { v4 as uuidv4 } from 'uuid';
import BeatLoader from "react-spinners/BeatLoader";
import { css } from "@emotion/react";


const StandardRss = () => {
  const newsUpdate = useContext(NewsContext);
  const { getNews, news, loading } = newsUpdate;

  let [color, setColor] = useState("#ffffff");
  const override = css`
  display: block;
  margin: 0 auto;
  border-color: white;
`;


  useEffect(() => {
    getNews();
    console.log(loading, 'loading after get news')
    // eslint-disable-next-line

  }, []);

  return (
    <Fragment>
      <div className="container-dash-rss">
        {loading ? (
          <div className="spinner-placement">
            <BeatLoader color={color} loading={loading} css={override} size={20}></BeatLoader>
          </div>
        ) : (

          <ul className="ul-newsroom-scroolbar">
            {news.map(item => {
              return (
                <li className="li-newsroom-text" key={uuidv4()}>
                  <a href={`${item.link}`}>{item.title}</a>
                  <img className="li-newsroom-img" src={`${item.thumbnail}`} alt="derStandard" width="100%" height="100%" />
                </li>
              )
            })}

          </ul>
        )}


      </div>
    </Fragment>

  )
};

export default StandardRss;