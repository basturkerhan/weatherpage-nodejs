export class Weather{
    constructor(id,city){
        this.weather = require('openweather-apis');
        this.weather.setLang('en');
        this.weather.setUnits('metric');
        this.weather.setAPPID(id);
        this.weather.setCity(city);
    }

    setCity(city){
        this.weather.setCity(city);
    }

    setLang(language){
        this.weather.setLang(language);
    }

    getAllWeatherInfo(callback){
        this.weather.getAllWeather(function(err, JSONObj){
            callback(JSONObj);
        });
    }
}
