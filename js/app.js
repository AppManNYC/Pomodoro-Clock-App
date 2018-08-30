var classApp = angular.module('weatherApp', []);

classApp.controller('weatherCtrl', function($scope, $http){
  var vm = $scope;
  vm. channelInfo = {
    heading:"Open Weather API"
  };
  
  $http.get("http://ip-api.com/json").success(function(data){
  vm.lat= data.lat;
  vm.lon=data.lon;
 var apiKey=  "14dca8b499f079a1da6c67d2c6be120e";
 var openWeatherURL = "http://api.openweathermap.org/data/2.5/weather?lat="+ vm.lat + "&lon="+vm.lon+ "&appid=" +apiKey;
    
$http.get(openWeatherURL).success(function(data){
vm.description= data.weather[0].description;
vm.speed= (data.wind.speed)+" m/s";
vm.name= data.name; 
vm.temp= data.main.temp;
vm.fTemp= (vm.temp*(9/5)-459.67).toFixed(1) + "  (°F)";
vm.cTemp= (vm.temp-273).toFixed(1) + "  (°C)";
  vm.icon= "http://openweathermap.org/img/w/"+ data.weather[0].icon + ".png";
  
  switch(vm.description){
    case 'clear sky':{
      vm.weatherBackground= {
        "background": "url('http://codingtutorials360.com/img/FreeCodeCamp/OpenWeather/clearSky.jpg')",
        "background-size": "cover"
      };
      break;
    }
       case "broken clouds": {
          vm.weatherBackground = {"background": "url(' http://codingtutorials360.com/img/FreeCodeCamp/OpenWeather/brokenClouds.jpg')",
             "background-size": "cover" };
            break;
          }
             case "few clouds": {
          vm.weatherBackground = {"background": "url('http://codingtutorials360.com/img/FreeCodeCamp/OpenWeather/fewClouds.jpg')",
             "background-size": "cover" };
            break;
          }
           case "mist": {
          vm.weatherBackground = {"background": "url('http://codingtutorials360.com/img/FreeCodeCamp/OpenWeather/mist.jpg')",
             "background-size": "cover" };
            break;
          }
        case "rain": {
          vm.weatherBackground = {"background": "url('http://codingtutorials360.com/img/FreeCodeCamp/OpenWeather/rain.jpg')",
             "background-size": "cover" };
            break;
          }
            case "scattered clouds": {
          vm.weatherBackground = {"background": "url('http://codingtutorials360.com/img/FreeCodeCamp/OpenWeather/scatteredClouds.jpg')",
             "background-size": "cover" };
            break;
          }
          case "shower rain": {
          vm.weatherBackground = {"background": "url('http://codingtutorials360.com/img/FreeCodeCamp/OpenWeather/showerRain.jpg')",
             "background-size": "cover" };
            break;
          }
          case "snow": {
          vm.weatherBackground = {"background": "url('http://codingtutorials360.com/img/FreeCodeCamp/OpenWeather/snow.jpg')",
             "background-size": "cover" };
            break;
          }
          case "thunderstorm": {
          vm.weatherBackground = {"background": "url('http://codingtutorials360.com/img/FreeCodeCamp/OpenWeather/Thunder.jpg')",
             "background-size": "cover" };
            break;
          }
    default:
      vm.weatherBackground= 
        {"background": "url('http://codingtutorials360.com/img/FreeCodeCamp/OpenWeather/sun.jpg')",
             "background-size": "cover" };
    break;
      
                       }
  
});
    
  });
});

$(document).ready(function() { 
    
    $("button, h1").hide(0).delay(500).fadeIn(500);
    
});