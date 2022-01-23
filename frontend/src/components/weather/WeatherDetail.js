import React, { useState, useContext, useEffect, Fragment } from 'react';
import WeatherForecastContext from '../../context/weatherForecast/weatherForecastContext';
import { Line } from 'react-chartjs-2';
import { css } from "@emotion/react";
import BeatLoader from "react-spinners/BeatLoader";


const WeatherDetail = () => {
  const weatherForecastContext = useContext(WeatherForecastContext);
  const { hourlyForecast, getHourlyForecast, loading } = weatherForecastContext;
  const { dt, temp } = hourlyForecast;

  useEffect(() => {
    getHourlyForecast();
    // eslint-disable-next-line
  }, []);


  const override = css`
        display: block;
        margin: 0 auto;
        border-color: white;
    `;

  let [color, setColor] = useState("#ffffff");
  //dt --> change Unix time stamp 


  const data = {
    labels: dt,
    datasets: [
      {
        label: '24h temprature forecast',
        data: temp,
        fill: false,
        backgroundColor: 'rgb(255, 255, 255)',
        borderColor: 'rgba(255, 255, 255, 0.5)',
        fontColor: 'rgba(255,255,255)',
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        labels: {
          fontColor: 'rgb(255, 255, 255)'
        }
      }
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };




  return (
    <Fragment>
      <div className="container-dash">
        {loading ? (
          <div className="spinner-placement">
            <BeatLoader color={color} loading={loading} css={override} size={20}></BeatLoader>
          </div>
        ) :
          (<div className="line-chart-dash">
            <div>
              <Line data={data} options={options} />
            </div>
          </div>)
        }

      </div>
    </Fragment>

  )
};

export default WeatherDetail;