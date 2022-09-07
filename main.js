let weather ={
    "apikey":"69d789bc3dbdd231385038925f42b539",
    fetchWeather:function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apikey
        )
        .then((Response)=>Response.json())
        .then((data)=>this.displayeWeather(data));

    },
    displayeWeather:function(data){
        const {name} = data;
        const {icon ,description} = data.weather[0];
        const {temp, humidity} = data.main;
        const { speed } = data.wind;
        console.log(name,icon,description,temp,humidity,speed);
        document.querySelector(".city").innerHTML = "weather in"+ " " + name;
        document.querySelector(".description").innerHTML = description;
        document.querySelector(".icon").src ="http://openweathermap.org/img/wn/"+ icon +"@2x.png";
        document.querySelector(".temp").innerHTML = temp + "°C";
        document.querySelector(".humidity").innerHTML = "humidity:" + " " + humidity + "%";
        document.querySelector(".wind").innerHTML = "windspeed:" +" " + speed +"km/h";
    },
    search:function(){
        this.fetchWeather(document.querySelector(".search-bar").value)
    }
};
document.querySelector(".search button").addEventListener("click",function(){
    weather.search();
});
document.querySelector(".search-bar").addEventListener("keyup",function(event){
    if(event.key== "Enter"){
        weather.search();
    }
});
