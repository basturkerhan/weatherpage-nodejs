export class Storage{

    static getAllCitiesFromStorage(){
        let cities;
        if (localStorage.getItem('cities')===null){
            cities = [];
        }else{
            cities = JSON.parse(localStorage.getItem('cities'));
        }
        return cities;
    }
    
    static addCityToStorage(cityName){
        let cities = Storage.getAllCitiesFromStorage();
        if(cities.indexOf(cityName) === -1){
            cities.push(cityName);
            localStorage.setItem('cities',JSON.stringify(cities));
            return true;
        }
        return false;
    }

    static removeCityFromStorage(cityName){
        let cities = Storage.getAllCitiesFromStorage();
        let index = cities.indexOf(cityName);
        if(index !== -1){
            cities.splice(index,1);
        }
        localStorage.setItem('cities',JSON.stringify(cities));
    }

    static clearStorage(){
        localStorage.removeItem('cities');
    }
}