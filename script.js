let weather = {
    apiKey: "88a60b12ad29c27dde6165ef423786a4",
    fetchWeather : function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
        +city
        + "&units=metric&appid="
        +this.apiKey)
        .then((result) => result.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather : function(data){
        const{name} = data;
        const{speed} = data.wind;
        const{icon, description} = data.weather[0];
        const{temp, humidity} = data.main;
        document.querySelector(".city").innerText = name;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".description").innerText = description;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector(".wind").innerText = "Wind Speed: " + speed + " km/h";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".weather").classList.remove("loading")
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')"
    },
    search: function(){
        this.fetchWeather(document.querySelector(".search-box").value);
    }
};

document.querySelector(".search button")
.addEventListener("click", function(){
    weather.search();
})

document.querySelector(".search-box")
.addEventListener("keyup", function(event){
    if(event.key == "Enter"){
        weather.search();
    }
})

weather.fetchWeather("Medina");