$(document).ready(function() {

  //function for button click
$("#citySearch").on("click", function(event) {
  event.preventDefault();
  displayInputCurrentWeather();
  displayInput5DayForecast();
  displayHistory();
  var value = $(this).siblings("#city").val().toUpperCase();
  var city = $(this).parent().attr("id");
  localStorage.setItem(city, value);
}); 

//on page load, get local storage and diplay on page
var searchedCity = localStorage.getItem("searchTerm");
  $(".recentCities").text(searchedCity);

//displays current weather for default city, or most recently searched city
function displayCurrentWeather() {
  var cityName = "Conshohocken";  
  if (localStorage.getItem("searchTerm") !== null) {
    cityName = localStorage.getItem("searchTerm")
  }
  var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&APPID=47dc3b56adc3a5773ac8eaebd8b0c012&units=imperial";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    $("#currentWeather").empty();

    var currentWeather = $("#currentWeather").append($("<div class='currentWeather'>"));

    var icon = response.weather[0].icon;
    var weatherImg = $("<img>").attr("src", ("https://openweathermap.org/img/w/" + icon + ".png"));
    currentWeather.append(weatherImg);

    var city = response.name; 
    var pOne = $("<p>").text("City: " + city);
    currentWeather.append(pOne);

    var date = response.dt; //convert from UTC
    var pTwo = $("<p>").text("Date: " + date);
    currentWeather.append(pTwo);

    var temperature = response.main.temp;
    var pThree = $("<p>").text("Temperature: " + temperature + "  \u2109");
    currentWeather.append(pThree);

    var humidity = response.main.humidity;
    var pFour = $("<p>").text("Humidity: " + humidity + "%");
    currentWeather.append(pFour);

    var windSpeed = response.wind.speed;
    var pFive = $("<p>").text("Wind Speed: " + windSpeed + " mph");
    currentWeather.append(pFive);

    var lat = response.coord.lat;
    var lon = response.coord.lon;
    var cityNameUV = "Boston";  
    var queryURLUV = "http://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + lon + "&APPID=47dc3b56adc3a5773ac8eaebd8b0c012&units=imperial";

    $.ajax({
      url: queryURLUV,
      method: "GET"
    }).then(function(response) {
    
    var uvIndex = response.value; //whatever "uv index" is called
    var pSix = $("<p>").text("UV Index: " + uvIndex);
    currentWeather.append(pSix);
    }); //closes UV Index ajax call
  }); //closes first ajax call (everything but UV)
}; //closes displayCurrentWeather function

//display current weather for default city on page load
displayCurrentWeather();

//displays current weather for user-input city
function displayInputCurrentWeather() {
  var cityName = $("#city").val().trim();  
  var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&APPID=47dc3b56adc3a5773ac8eaebd8b0c012&units=imperial";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    $("#currentWeather").empty();

    var currentWeather = $("#currentWeather").append($("<div class='currentWeather'>"));

    var icon = response.weather[0].icon;
    var weatherImg = $("<img>").attr("src", ("https://openweathermap.org/img/w/" + icon + ".png"));
    currentWeather.append(weatherImg);

    var city = response.name; 
    var pOne = $("<p>").text("City: " + city);
    currentWeather.append(pOne);

    var date = response.dt; //convert from UTC
    var pTwo = $("<p>").text("Date: " + date);
    currentWeather.append(pTwo);

    var temperature = response.main.temp;
    var pThree = $("<p>").text("Temperature: " + temperature + "  \u2109");
    currentWeather.append(pThree);

    var humidity = response.main.humidity;
    var pFour = $("<p>").text("Humidity: " + humidity + "%");
    currentWeather.append(pFour);

    var windSpeed = response.wind.speed;
    var pFive = $("<p>").text("Wind Speed: " + windSpeed + " mph");
    currentWeather.append(pFive);
    
    var uvIndex = response.uvindex; //whatever "uv index" is called
    var pSix = $("<p>").text("UV Index: " + uvIndex);
    currentWeather.append(pSix);

  }); //closes ajax call
}; //closes displayInputCurrentWeather function

//displays 5-day forecast for default city 
function display5DayForecast() {
  var cityName = "Conshohocken";
  if (localStorage.getItem("searchTerm") !== null) {
    cityName = localStorage.getItem("searchTerm")
  }
  var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&mode=json&units=imperial&appid=47dc3b56adc3a5773ac8eaebd8b0c012";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {

  var dayOneForecast = $("#forecastWeather").append($("<div class='dayOneWeather'>"));

  var date = response.list[3].dt; //convert from UTC
  var pTwo = $("<p>").text("Date: " + date);
  dayOneForecast.append(pTwo);
  
  var icon = response.list[3].weather[0].icon;
  var weatherImg = $("<img>").attr("src", ("https://openweathermap.org/img/w/" + icon + ".png"));
  dayOneForecast.append(weatherImg);

  var temperature = response.list[3].main.temp;
  var pThree = $("<p>").text("Temp. " + temperature + "  \u2109");
  dayOneForecast.append(pThree);

  var humidity = response.list[3].main.humidity;
  var pFour = $("<p>").text("Humidity " + humidity + "%");
  dayOneForecast.append(pFour);
  
  var dayTwoForecast = $("#forecastWeather").append($("<div class='dayTwoWeather'>"));

  var date = response.list[11].dt; //convert from UTC
  var pTwo = $("<p>").text("Date: " + date);
  dayTwoForecast.append(pTwo);
  
  var icon = response.list[11].weather[0].icon;
  var weatherImg = $("<img>").attr("src", ("https://openweathermap.org/img/w/" + icon + ".png"));
  dayTwoForecast.append(weatherImg);

  var temperature = response.list[11].main.temp;
  var pThree = $("<p>").text("Temp. " + temperature + "  \u2109");
  dayTwoForecast.append(pThree);

  var humidity = response.list[11].main.humidity;
  var pFour = $("<p>").text("Humidity " + humidity + "%");
  dayTwoForecast.append(pFour);
  
  var dayThreeForecast = $("#forecastWeather").append($("<div class='dayThreeWeather'>"));

  var date = response.list[19].dt; //convert from UTC
  var pTwo = $("<p>").text("Date: " + date);
  dayThreeForecast.append(pTwo);
  
  var icon = response.list[19].weather[0].icon;
  var weatherImg = $("<img>").attr("src", ("https://openweathermap.org/img/w/" + icon + ".png"));
  dayThreeForecast.append(weatherImg);

  var temperature = response.list[19].main.temp;
  var pThree = $("<p>").text("Temp. " + temperature + "  \u2109");
  dayThreeForecast.append(pThree);

  var humidity = response.list[19].main.humidity;
  var pFour = $("<p>").text("Humidity " + humidity + "%");
  dayThreeForecast.append(pFour);

  var dayFourForecast = $("#forecastWeather").append($("<div class='dayFourWeather'>"));

  var date = response.list[27].dt; //convert from UTC
  var pTwo = $("<p>").text("Date: " + date);
  dayFourForecast.append(pTwo);
  
  var icon = response.list[27].weather[0].icon;
  var weatherImg = $("<img>").attr("src", ("https://openweathermap.org/img/w/" + icon + ".png"));
  dayFourForecast.append(weatherImg);

  var temperature = response.list[27].main.temp;
  var pThree = $("<p>").text("Temp. " + temperature + "  \u2109");
  dayFourForecast.append(pThree);

  var humidity = response.list[27].main.humidity;
  var pFour = $("<p>").text("Humidity " + humidity + "%");
  dayFourForecast.append(pFour);
  
  var dayFiveForecast = $("#forecastWeather").append($("<div class='dayFiveWeather'>"));

  var date = response.list[35].dt; //convert from UTC
  var pTwo = $("<p>").text("Date: " + date);
  dayFiveForecast.append(pTwo);
  
  var icon = response.list[35].weather[0].icon;
  var weatherImg = $("<img>").attr("src", ("https://openweathermap.org/img/w/" + icon + ".png"));
  dayFiveForecast.append(weatherImg);

  var temperature = response.list[35].main.temp;
  var pThree = $("<p>").text("Temp. " + temperature + "  \u2109");
  dayFiveForecast.append(pThree);

  var humidity = response.list[35].main.humidity;
  var pFour = $("<p>").text("Humidity " + humidity + "%");
  dayFiveForecast.append(pFour);

  }); //closes the ajax call
}; //closes display5DayForecast

//display 5-day forecast for default city on page load
display5DayForecast();

//display 5-day forecast for user-input city
function displayInput5DayForecast() {
  var cityName = $("#city").val().trim();
  var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&mode=json&units=imperial&appid=47dc3b56adc3a5773ac8eaebd8b0c012";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    $("#forecastWeather").empty();

  var dayOneForecast = $("#forecastWeather").append($("<div class='dayOneWeather'>"));

  var date = response.list[3].dt; //convert from UTC
  var pTwo = $("<p>").text("Date: " + date);
  dayOneForecast.append(pTwo);
  
  var icon = response.list[3].weather[0].icon;
  var weatherImg = $("<img>").attr("src", ("https://openweathermap.org/img/w/" + icon + ".png"));
  dayOneForecast.append(weatherImg);

  var temperature = response.list[3].main.temp;
  var pThree = $("<p>").text("Temp. " + temperature + "  \u2109");
  dayOneForecast.append(pThree);

  var humidity = response.list[3].main.humidity;
  var pFour = $("<p>").text("Humidity " + humidity + "%");
  dayOneForecast.append(pFour);
  
  var dayTwoForecast = $("#forecastWeather").append($("<div class='dayTwoWeather'>"));

  var date = response.list[11].dt; //convert from UTC
  var pTwo = $("<p>").text("Date: " + date);
  dayTwoForecast.append(pTwo);
  
  var icon = response.list[11].weather[0].icon;
  var weatherImg = $("<img>").attr("src", ("https://openweathermap.org/img/w/" + icon + ".png"));
  dayTwoForecast.append(weatherImg);

  var temperature = response.list[11].main.temp;
  var pThree = $("<p>").text("Temp. " + temperature + "  \u2109");
  dayTwoForecast.append(pThree);

  var humidity = response.list[11].main.humidity;
  var pFour = $("<p>").text("Humidity " + humidity + "%");
  dayTwoForecast.append(pFour);
  
  var dayThreeForecast = $("#forecastWeather").append($("<div class='dayThreeWeather'>"));

  var date = response.list[19].dt; //convert from UTC
  var pTwo = $("<p>").text("Date: " + date);
  dayThreeForecast.append(pTwo);
  
  var icon = response.list[19].weather[0].icon;
  var weatherImg = $("<img>").attr("src", ("https://openweathermap.org/img/w/" + icon + ".png"));
  dayThreeForecast.append(weatherImg);

  var temperature = response.list[19].main.temp;
  var pThree = $("<p>").text("Temp. " + temperature + "  \u2109");
  dayThreeForecast.append(pThree);

  var humidity = response.list[19].main.humidity;
  var pFour = $("<p>").text("Humidity " + humidity + "%");
  dayThreeForecast.append(pFour);

  var dayFourForecast = $("#forecastWeather").append($("<div class='dayFourWeather'>"));

  var date = response.list[27].dt; //convert from UTC
  var pTwo = $("<p>").text("Date: " + date);
  dayFourForecast.append(pTwo);
  
  var icon = response.list[27].weather[0].icon;
  var weatherImg = $("<img>").attr("src", ("https://openweathermap.org/img/w/" + icon + ".png"));
  dayFourForecast.append(weatherImg);

  var temperature = response.list[27].main.temp;
  var pThree = $("<p>").text("Temp. " + temperature + "  \u2109");
  dayFourForecast.append(pThree);

  var humidity = response.list[27].main.humidity;
  var pFour = $("<p>").text("Humidity " + humidity + "%");
  dayFourForecast.append(pFour);
  
  var dayFiveForecast = $("#forecastWeather").append($("<div class='dayFiveWeather'>"));

  var date = response.list[35].dt; //convert from UTC
  var pTwo = $("<p>").text("Date: " + date);
  dayFiveForecast.append(pTwo);
  
  var icon = response.list[35].weather[0].icon;
  var weatherImg = $("<img>").attr("src", ("https://openweathermap.org/img/w/" + icon + ".png"));
  dayFiveForecast.append(weatherImg);

  var temperature = response.list[35].main.temp;
  var pThree = $("<p>").text("Temp. " + temperature + "  \u2109");
  dayFiveForecast.append(pThree);

  var humidity = response.list[35].main.humidity;
  var pFour = $("<p>").text("Humidity " + humidity + "%");
  dayFiveForecast.append(pFour);

  }); //closes the ajax call
}; //closes display5DayForecast

//display recently searched cities
function displayHistory() {
  $(".recentCities").prepend($("<div class='searchAgain'>")).prepend($("#city").val().toUpperCase().trim());
}; 

//this function will run when user clicks on a previously searched city
$(".searchAgain").on("click", function(){
 //run displayInputCurrentWeather() but have to substitute the clicked city's name into the queryURL
 //run displayInput5DayForecast() but have to substitute the clicked city's name into the queryURL
});




}); //closes document.ready

/* DEVELOPMENT NOTES========================================

Remaining MVP:
Get more than one previous search stored locally and display them all on page load/refresh
Properly format Date on current and forecast weather
Clean up CSS 


Enhancements:
Should add alert when city not found
Allow City, State input

===========================================================================*/