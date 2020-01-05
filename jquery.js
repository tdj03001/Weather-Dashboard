$(document).ready(function() {


function displayCurrentWeather() {
  var cityName = "boston";
  var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&APPID=47dc3b56adc3a5773ac8eaebd8b0c012";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    $("#currentWeather").empty();

    var currentWeather = $("#currentWeather").append($("<div class='currentWeather'>"));

    var icon = response.weather.icon;
    var weatherImg = $("<img>").attr("src", icon);
    currentWeather.append(weatherImg);

    var city = response.name; 
    var pOne = $("<p>").text("City: " + city);
    currentWeather.append(pOne);

    var date = response.date; //whatever "date" is called
    var pTwo = $("<p>").text("Date: " + date);
    currentWeather.append(pTwo);

    var temperature = response.main.temp;
    var pThree = $("<p>").text("Temperature: " + temperature + " Kelvin");
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

  });
}; //closes displayCurrentWeather function

displayCurrentWeather();


}); //document.ready closing