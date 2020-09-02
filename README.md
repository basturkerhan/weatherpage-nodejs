weatherpage-nodejs is a nodejs project with openweather-apis, LocationIQ api, babel and webpack to show the weather of cities.
It contains city name table and city name input form to add the cities you want to know the weather forecast. Also it contains weather area. 
In the weather area, you can see current temperature, weather description, max temperature and min temperature of the selected city.

When the page is first loaded, it will ask for permission to access your location information. Because on first load, page will access your current city name and it will show current city weather.

SETUP

Please go to http://openweathermap.org/appid address and get your free openweather id. (src/index.js=>appId)

Please go to https://locationiq.com/ address and get your free locationIQ key. (src/index.js=>locationIQ_key)

npm install -> To create the node_modules folder

npm install openweather-apis

npm install -g openweather-apis -> To install the Openweather library

npm run start -> To open webpack-dev-server. Please open a separate terminal for this.

In my location, LocationIQ API doesn't show city information correctly. To reach city information, I used;
"let city = addressInfo.display_name.split(",")[3];" in (src/index.js). 

If you have a problem, change it to "let city = addressInfo.address.city" or look addressInfo object.
You can also use another location finder service.







