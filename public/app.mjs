window.getWeather = function () {
let cityName = document.querySelector("#cityName").value;
axios.get(`weather/${cityName}`)
    .then(function (response) {
        // handle success
        console.log(response.data);
       
        document.querySelector("#result").innerHTML =
         `current temperature is ${response.data.tempInC}°C`

    })
    .catch(function (error) {
        // handle error
        console.log(error.data);
        document.querySelector("#result").innerHTML = "error in getting weather data"
    })

}

