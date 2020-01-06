$(document).ready(function() {

$("#citySearch").on("click", function(event) {
  event.preventDefault();
  displayInputCurrentWeather();
  displayInput5DayForecast();
  displayHistory();
}); //closes click event

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


function display5DayForecast() {
  var cityName = "Boston";
  var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&mode=json&units=imperial&appid=47dc3b56adc3a5773ac8eaebd8b0c012";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {

  var dayOneForecast = $("#forecastWeather").append($("<div class='dayOneWeather>"));

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
  
  var dayTwoForecast = $("#forecastWeather").append($("<div class='dayTwoWeather>"));

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
  
  var dayThreeForecast = $("#forecastWeather").append($("<div class='dayThreeWeather>"));

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

  var dayFourForecast = $("#forecastWeather").append($("<div class='dayFourWeather>"));

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
  
  var dayFiveForecast = $("#forecastWeather").append($("<div class='dayFiveWeather>"));

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
display5DayForecast();


function displayInput5DayForecast() {
  var cityName = $("#city").val().trim();
  var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&mode=json&units=imperial&appid=47dc3b56adc3a5773ac8eaebd8b0c012";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    $("#forecastWeather").empty();

  var dayOneForecast = $("#forecastWeather").append($("<div class='dayOneWeather>"));

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
  
  var dayTwoForecast = $("#forecastWeather").append($("<div class='dayTwoWeather>"));

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
  
  var dayThreeForecast = $("#forecastWeather").append($("<div class='dayThreeWeather>"));

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

  var dayFourForecast = $("#forecastWeather").append($("<div class='dayFourWeather>"));

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
  
  var dayFiveForecast = $("#forecastWeather").append($("<div class='dayFiveWeather>"));

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

function displayHistory() {
  $(".recentCities").prepend($("<div class='searchAgain'>")).prepend($("#city").val().toUpperCase().trim());
}; 


}); //closes document.ready

/* NOTES DURING DEVELOPMENT========================================

Need to get previous searches stored locally
Need to properly format Date on current and forecast weather
Figure out UV Index for current weather
Should add alert when city not found


===========================================================================*/