const axios = require('axios');
const mongoose = require('mongoose')
const CSVToJSON = require('csvtojson');

var Schema = mongoose.Schema 

var quoteSchema = new Schema ({ 
    quote : String, 
    movie : String, 
    character : String
}, {collection : 'quotes'})

    const getTempDataForecast = async () => {
        try {
            const weatherForecast = await axios.get('https://api.openweathermap.org/data/2.5/forecast?units=metric&q=Vienna&APPID=5dba23245d2e80d7bb7a49cc82c47cda');
            //temperature
            //icons
            //city
            return(weatherForecast.data);
        } catch (err) {
            console.error(err);
        }
    };

    const getTempCurrentData = async () => {
        try {
            const weatherCurrent = await axios.get('https://api.openweathermap.org/data/2.5/onecall?lat=48.2085&lon=16.3721&exclude=minutely,hourly,daily,alerts&units=metric&appid=b1f2d01d253273e36e3005b89b2e84db')
            return(weatherCurrent.data)
        } catch (err) {
            console.error(err);
        }
    };

    const getC19Data = async () => {
        try {
            const response = await axios.get('https://info.gesundheitsministerium.gv.at/data/timeline-faelle-bundeslaender.csv',{ responseType: 'blob',}); 
            const CSV = response.data
            //const jsonData = csvToJSON(CSV)
            return(CSV)
        }catch (err) {
            console.error(err);
        }

        /* try {
            const coronaData = await axios.get('https://info.gesundheitsministerium.gv.at/data/timeline-faelle-bundeslaender.csv')
            return(coronaData.data)
        } catch (err) {
            console.error(err);
        } */
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
            const arnieQuote = await axios.get('DatabseRequest')
            return(arnieQuote.data);
        } catch (err) {
            console.error(err);
        }
    }

    function csvToJSON(csvString) {
    var json = [];
    var csvArray = csvString.split("\n");

    // Remove the column names from csvArray into csvColumns.
    // Also replace single quote with double quote (JSON needs double).
    var csvColumns = JSON
            .parse("[" + csvArray.shift().replace(/'/g, '"') + "]");

    csvArray.forEach(function(csvRowString) {

        var csvRow = csvRowString.split(",");

        // Here we work on a single row.
        // Create an object with all of the csvColumns as keys.
        var jsonRow = new Object();
        for ( var colNum = 0; colNum < csvRow.length; colNum++) {
            // Remove beginning and ending quotes since stringify will add them.
            var colData = csvRow[colNum].replace(/^['"]|['"]$/g, "");
            jsonRow[csvColumns[colNum]] = colData;
        }
        json.push(jsonRow);
    });

    return json;
};

    module.exports={
        getTempDataForecast,
        getTempCurrentData,
        getC19Data,
        getStandardFeed,
        getArnieQuote
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