var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=47dc3b56adc3a5773ac8eaebd8b0c012";

$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {




}