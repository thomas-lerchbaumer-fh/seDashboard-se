const axios = require('axios');

var { getTempDataForecast, 
      getTempCurrentData, 
      getC19Data, 
      getStandardFeed, 
      getArnieQuote
    } = require('./APIHandler');

const getTempValuesOneDay = async () => {
    try {
        var test = {}
        const currentTemp = await getTempCurrentData();
        var temp = currentTemp.current.temp
        var feelsLike = currentTemp.current.feels_like
        var humidity = currentTemp.current.humidity
        var pressure = currentTemp.current.pressure
        var minTemp = currentTemp.daily[0].temp.min
        var maxTemp = currentTemp.daily[0].temp.max
        var icon = currentTemp.current.weather[0].icon
        
        test = {temp, feelsLike, humidity, pressure, minTemp, maxTemp, icon}

        return(test) 
    } catch (err) {
        console.error(err);
    }

};

const getTempForecastHourlyOneDay = async () => {
    try {
        var test = {}
        var dt = []
        var temp = []
        var icon = []
        const forecastTemp = await getTempDataForecast();  
        var city = forecastTemp.timezone
        var cityName = city.substring((city.indexOf("/")+1))
        for(var i = 0; i < 24; i++){
            dt.push(forecastTemp.hourly[i].dt)
            temp.push(forecastTemp.hourly[i].temp)
            icon.push(forecastTemp.hourly[i].weather[0].icon)
        }
        test = {cityName, dt, temp, icon}
        return(test)
    } catch (err) {
        console.error(err)
    }
};

const getStandardRSSFeed = async () => {
    try {
        var test = {}
        var headline = []
        var thumbnail = []
        var link = []
        const rssFeed = await getStandardFeed();
        for(var i = 0; i < rssFeed.items.length; i++){
            headline.push(rssFeed.items[i].title)
            thumbnail.push(rssFeed.items[i].thumbnail)
            link.push(rssFeed.items[i].link)
        }
        test = {headline, thumbnail, link}
        return(test)
    } catch (err) {
        console.error(err)
    }
};

const getOneArnieQuote = async () => {
    try {
        var test = {}
        const greatQuote = await getArnieQuote();
        var quote = greatQuote.quote
        var movie = greatQuote.movie

        test = {quote, movie}
        return(test)
    } catch (err) {
        console.error(err)
    }
}

const getC19DataAustria = async () => {
    try {
        var test = {}
        const covidData = await getC19Data();
        var count = covidData.length
        var dataString = JSON.stringify(covidData[count-1])
        var subString = dataString.substring(dataString.indexOf(":")+1)
        var dataArray = subString.split(';')
        console.log(dataArray)

        test = {
            confCases : dataArray[3],
            deaths : dataArray[4],
            recovered : dataArray [5]
        }
        return(test)
        //console.log(result)
    } catch (err) {
        console.error(err)
    }
}

module.exports={
    getTempValuesOneDay,
    getTempForecastHourlyOneDay,
    getStandardRSSFeed,
    getOneArnieQuote,
    getC19DataAustria
}