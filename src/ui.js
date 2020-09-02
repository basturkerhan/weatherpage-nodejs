import { Weather } from "./weather";

export class UI{
    constructor(){
        this.weatherArea = document.getElementById('weatherArea');
        this.cityList = document.getElementById('cityList');
    }

    showWeather(weatherJ){
        weatherArea.innerHTML = 
        `<div class="col-md-4 bg-primary text-center">
            <img src="http://openweathermap.org/img/wn/${weatherJ.weather[0].icon}@2x.png" class="img-fluid">
            <p class="lead text-white">${weatherJ.main.temp} C°</p>
            <p class="lead text-white">${weatherJ.name}</p>
        </div>
        <div class="col-md-8">
            <ul class="list-group list-group-flush" id="cityInfoWeatherArea">
                <li class="list-group-item">${weatherJ.weather[0].description}</li>
                <li class="list-group-item">Feels Like: ${weatherJ.main.feels_like}</li>
                <li class="list-group-item">Maximum: ${weatherJ.main.temp_min}</li>
                <li class="list-group-item">Minimum: ${weatherJ.main.temp_max}</li>
            </ul>
        </div>`;
    }

    addCityToList(cityName){
        this.cityList.innerHTML += 
        `<tr>
            <td class="w-75">${cityName}</td>
            <td><div class="btn-group" role="group">
                    <button type="button" class="btn btn-primary" id="show">Show</button>
                    <button type="button" class="btn btn-danger" id="delete">Delete</button>
                </div></td>
        </tr>`;
    }

    loadCitiesFromStorageToList(cities){
        let html = "";
        cities.forEach(city => {
            html += 
            `<tr>
                <td class="w-75">${city}</td>
                <td><div class="btn-group" role="group">
                    <button type="button" class="btn btn-primary" id="show">Show</button>
                    <button type="button" class="btn btn-danger" id="delete">Delete</button>
                </div></td>
            </tr>`;
        });
        this.cityList.innerHTML = html;
    }

    deleteAllCitiesFromList(){
        this.cityList.innerHTML = "";
    }
}