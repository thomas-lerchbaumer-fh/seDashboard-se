const axios = require('axios');
const mongoose = require('mongoose')
const Quote = require('../models/Quote');

var csv = require('csvtojson');

var Schema = mongoose.Schema 


    const getTempDataForecast = async () => {
        try {
            const weatherForecast = await axios.get('https://api.openweathermap.org/data/2.5/onecall?lat=48.2085&lon=16.3721&exclude=minutely,current,alerts&units=metric&appid=b1f2d01d253273e36e3005b89b2e84db');
            return(weatherForecast.data);
        } catch (err) {
            console.error(err);
        }
    };

    const getTempCurrentData = async () => {
        try {
            const weatherCurrent = await axios.get('https://api.openweathermap.org/data/2.5/onecall?lat=48.2085&lon=16.3721&exclude=minutely,hourly,alerts&units=metric&appid=b1f2d01d253273e36e3005b89b2e84db')
            return(weatherCurrent.data)
        } catch (err) {
            console.error(err);
        }
    };

    const getC19Data = async () => {
        try {
            const response = await axios.get('https://info.gesundheitsministerium.gv.at/data/timeline-faelle-bundeslaender.csv',{ responseType: 'blob',}); 
            const CSVDATA = response.data

            csv()
            .fromString(CSVDATA)
            .then((jsonObj)=>{
                return jsonObj
            })

            const data = await csv().fromString(CSVDATA);
            return data
        }catch (err) {
            console.error(err);
        }
    }

    const getStandardFeed = async () => {
        try {
            const standardRSSFeed = await axios.get('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.derstandard.at%2Frss')
            return(standardRSSFeed.data);
        } catch (err) {
            console.error(err);
        }
    }

    const getArnieQuote = async () => {
        try {
            var randNumb = getRandomInt(100);
            let quote = await Quote.findOne({ _id : randNumb });
            console.log(quote);
            return(quote);
        } catch (err) {
            console.error(err);
        }
    }

    function getRandomInt(max){
        return Math.floor(Math.random()*max);
    }

    module.exports={
        getTempDataForecast,
        getTempCurrentData,
        getC19Data,
        getStandardFeed,
        getArnieQuote,
    }
            //*************************************/
            //endpoint getCurrentWeather (OneCall)
            //*************************************/
            //filter to return 
            //temperature - Min 
            //temperature - Max
            //temperature - current
            //temperature Feels - Like 
            //City
            //Wind
            //Humidity
            //icons

            //*************************************/
            //endpoint derStandard RSS Feed
            //*************************************/
            //rss to json parser 


            //*************************************/
            //endpoint Covid or Covid Map
            //*************************************/
            //