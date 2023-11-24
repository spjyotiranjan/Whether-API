//Complete the Weather API Backend part using openweathermap api

// Progression 1: Create a function and fetch data using "fetch" from openweathermap api and display the data as given in reference image.
let newDate = new Date()
let newerDate = `${newDate}`
let cityName = document.getElementById("cityName")
let country = document.getElementById("country")
let date = document.getElementById("date")
let temp = document.getElementById("temp")
let whether = document.getElementById("whether")
let minTemp = document.getElementById("min-temp")
let maxTemp = document.getElementById("max-temp")
let input = document.getElementById("input")

async function getData(){
    
    let cityInput = input.value
    
    
    
    
    try {
        let response  = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=9168ba7aa8bcc63e94e002baaea808ae`)
        let data = await response.json()
        console.log(data);
        
        
        cityName.textContent = `${data.name} , `
        country.textContent = data.sys.country
        date.textContent = newerDate.slice(0,15)
        temp.textContent = `${Math.floor(data.main.temp - 273)}°c`
        whether.textContent = data.weather[0].main
        minTemp.textContent = `${Math.floor(data.main.temp_min - 273)}°c`
        maxTemp.textContent = `${Math.floor(data.main.temp_max - 273)}°c`
    } catch (error) {
        console.log(error);
        cityName.textContent = "Location Not Found"
        country.textContent = ""
        date.textContent = newerDate.slice(0,15)
        temp.textContent = ""
        whether.textContent = ""
        minTemp.textContent = ""
        maxTemp.textContent = ""
    }

    input.value = ""

}

document.getElementById("submit").addEventListener("click", getData)