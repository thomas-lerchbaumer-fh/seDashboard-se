const axios = require('axios');

    const getTempDataForecast = async () => {
            try {
                const weather = await axios.get('api.openweathermap.org/data/2.5/forecast?units=metric&q=Vienna&APPID=b1f2d01d253273e36e3005b89b2e84db');
                res.send(weather);
            } catch (err) {
                console.error(err);
            }
        };

    