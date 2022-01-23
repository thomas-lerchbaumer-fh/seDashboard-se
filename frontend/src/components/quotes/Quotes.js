import React, { Fragment, useEffect, useContext, useState } from 'react';
import QuotesContext from '../../context/quotes/quotesContext';
import { v4 as uuidv4 } from 'uuid';
import BeatLoader from "react-spinners/BeatLoader";
import { css } from "@emotion/react";


const Quotes = () => {
  const quotesUpdate = useContext(QuotesContext);
  const { getQuotes, quotes, loading } = quotesUpdate;

  let [color, setColor] = useState("#ffffff");
  const override = css`
  display: block;
  margin: 0 auto;
  border-color: white;
`;


  useEffect(() => {
    getQuotes();
    console.log(quotes)
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
          <div className="quotes">
              <div className="img-quotes">
                <img src={`https://safe.hbox.at/index.php/apps/files_sharing/publicpreview/X6abCTrdGAc9Ncc?x=2560&y=947&a=true&file=arnie_port.png`} align="left" alt="Arnie" />
              </div>
                <div className="text-quotes">
                    <p>
                        { quotes.quote}
                    </p>
                    <p>
                        - { quotes.movie}
                    </p>
                </div>
          </div>
        )}


      </div>
    </Fragment>

  )
};

export default Quotes;