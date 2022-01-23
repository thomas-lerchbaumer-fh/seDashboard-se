import React, { Fragment, useEffect, useContext, useState } from 'react';
import CovidContext from '../../context/covid/covidContext';
import { css } from "@emotion/react";
import BeatLoader from "react-spinners/BeatLoader";

const Covid = () => {
    const covidContext = useContext(CovidContext);
    const { getCovid, covidData, loading } = covidContext;

    useEffect(() => {
        getCovid();
        // eslint-disable-next-line
    }, []);

    const override = css`
    display: block;
    margin: 0 auto;
    border-color: white;
`;
    let [color, setColor] = useState("#ffffff");

    const { confCases, deaths, recovered, activeCases, newCases } = covidData;
    return (
        <Fragment>
            <div className="container-covid">
                {loading ? (
                    <div className="spinner-placement">
                        <BeatLoader color={color} loading={loading} css={override} size={20}></BeatLoader>
                    </div>
                ) : (
                    <Fragment>
                        <div className="grid-covid">
                            <div><i className="fas fa-virus"> </i> </div>
                            Total Cases {confCases}
                        </div>
                        <div className="grid-covid">
                            <div><i className="fas fa-user-injured"> </i> </div>
                            Active Cases {activeCases}
                        </div>
                        <div className="grid-covid">
                            <div><i className="fas fa-dove"> </i> </div>
                            Total Deaths {deaths}
                        </div>

                        <div className="grid-covid">
                            <div><i className="fas fa-thermometer-full"> </i> </div>
                            New Cases {newCases}
                        </div>

                        <div className="grid-covid">
                            <div><i className="fas fa-medkit"> </i> </div>
                            Recovered {recovered}
                        </div>
                    </Fragment>
                )}

            </div>
        </Fragment>

    )
};

export default Covid;