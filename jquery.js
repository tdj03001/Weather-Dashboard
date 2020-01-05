$(document).ready(function() {


function displayCurrentWeather() {
  var cityName = "Boston";  
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

    // var date = response.dt; //convert from UTC
    // var pTwo = $("<p>").text("Date: " + date);
    // currentWeather.append(pTwo);

    var temperature = response.main.temp;
    var pThree = $("<p>").text("Temperature: " + temperature + "  Fahrenheit");
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
}; //closes displayCurrentWeather function

displayCurrentWeather();

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

    // var date = response.dt; //convert from UTC
    // var pTwo = $("<p>").text("Date: " + date);
    // currentWeather.append(pTwo);

    var temperature = response.main.temp;
    var pThree = $("<p>").text("Temperature: " + temperature + "  Fahrenheit");
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



$("#citySearch").on("click", function(event) {
  event.preventDefault();
  displayInputCurrentWeather();
}); //closes click event


}); //document.ready closing