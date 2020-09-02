import {Weather} from "./weather";
import {UI} from "./ui";
import {Storage} from "./storage";

const form = document.getElementById('city-form');
const cityNameInput = document.getElementById('cityNameInput');
const cityhelp = document.getElementById('cityhelp');
const cityList = document.getElementById('cityList');
const deleteAllList = document.getElementById('deleteAllList');

const ui = new UI();

let weather;
const appId = "6c7adab3f510b1b17f2d470720e2726c";
const locationIQ_key = "4801df79e083bc";

eventListeners();

function eventListeners(){
    form.addEventListener('submit',addCityToList);

    document.addEventListener('DOMContentLoaded',()=>{
        loadCitiesFromStorage();
        findPosition()
        .then( response => {
            const addressInfo = getCity(response);
            return addressInfo;
        })
        .then(addressInfo => {
            let city = addressInfo.display_name.split(",")[3];
            return city;
        })
        .then(city => {
            weather = new Weather(appId,city);
            weather.getAllWeatherInfo(ui.showWeather);
        })
        .catch(err => console.log(err));
    })

    cityList.addEventListener('click',buttonEvents);

    deleteAllList.addEventListener('click',()=>{
        Storage.clearStorage();
        ui.deleteAllCitiesFromList();
    })
}


function addCityToList(e){
    if (cityNameInput.value.trim() === ""){
        //
    }else{
        let cityName = cityNameInput.value.trim();
        if(Storage.addCityToStorage(cityName)){
            ui.addCityToList(cityName);
        }
    }
    cityNameInput.value = "";
    e.preventDefault();
}

function findPosition() {
    return new Promise((resolve,reject) =>{
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                resolve({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                })
    
            })
        } else {
            reject("Sorry, your browser does not support HTML5 geolocation.");
        }
    })
}

function loadCitiesFromStorage(){
    let cities = Storage.getAllCitiesFromStorage();
    ui.loadCitiesFromStorageToList(cities);
}

function buttonEvents(e){
    switch (e.target.id){
        case 'show':
            let cityName = e.target.parentElement.parentElement.previousElementSibling.textContent;
            showWeather(cityName);
            break;

        case 'delete':
            Storage.removeCityFromStorage(e.target.parentElement.parentElement.previousElementSibling.textContent);
            e.target.parentElement.parentElement.parentElement.remove();
            break;
    }
    e.preventDefault();
}

function showWeather(cityName){
    weather.setCity(cityName);
    weather.getAllWeatherInfo(ui.showWeather);
    //weather.getAllWeatherInfo(ui.showWeather);
}


async function getCity(coordinates) {  
    var lat = coordinates.latitude; 
    var lng = coordinates.longitude; 
  
    const response = await fetch(`https://us1.locationiq.com/v1/reverse.php?key=${locationIQ_key}&lat=${lat}&lon=${lng}&format=json`);
    const data = await response.json();
    return data;
} 