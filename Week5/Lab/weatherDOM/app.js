const sunny = document.querySelector('.sunny')
const cloudy = document.querySelector('.cloudy')
const rain = document.querySelector('.rain')
const snow = document.querySelector('.snow')

const forecast = {
    sunny: {
        temp: "89 degrees",
        summary: "The sun is out. Perfect weather to visit the beach!",
        gif: 'https://media4.giphy.com/media/uqpK3SuxEY4W9YQvdg/giphy.gif'
    },
    cloudy: {
        temp: "60 degrees",
        summary: "Dark clouds are forming, a big storm is coming our way.",
        gif: 'https://media0.giphy.com/media/RNveokQhEObpqyvYb5/200w.gif?cid=6c09b952dhrfvrx0wjxdzkunw3bbzp7p14xd6q46jy0y6z6h&rid=200w.gif&ct=g'
    },
    rain: {
        temp: "65 degrees",
        summary: "It's pouring outside, advise to stay indoors.",
        gif: 'https://media1.giphy.com/media/3o7ablnVnKUdqkJ6cE/200w.gif?cid=6c09b952945wi66hot245v87u5htdww3du0ptlz3cigqhh0b&rid=200w.gif&ct=g'
    },
    snow: {
        temp: "20 degrees",
        summary: "It's cold outside and going to expect 2 feet of snow.",
        gif: 'https://www.baldwinpl.org/wp-content/uploads/2020/12/Snoopy-Reading-in-the-Snow-GIF.gif'
    }
}

//Target button
sunny.addEventListener('click', (e)=>{
    //allow button do something => running an eventListener
    let newWeather = document.querySelector('.weather')
    //target input to snatch out value
    newWeather.setAttribute('src', forecast.sunny.gif)
    let temp = document.querySelector(".temperature")
    temp.innerHTML = forecast.sunny.temp
    let summary = document.querySelector('.summary')
    summary.innerHTML = forecast.sunny.summary
})

cloudy.addEventListener('click', (e)=>{
    //allow button do something => running an eventListener
    let newWeather = document.querySelector('.weather')
    //target input to snatch out value
    newWeather.setAttribute('src', forecast.cloudy.gif)
    let temp = document.querySelector(".temperature")
    temp.innerHTML = forecast.cloudy.temp
    let summary = document.querySelector('.summary')
    summary.innerHTML = forecast.cloudy.summary
})

rain.addEventListener('click', (e)=>{
    //allow button do something => running an eventListener
    let newWeather = document.querySelector('.weather')
    //target input to snatch out value
    newWeather.setAttribute('src', forecast.rain.gif)
    let temp = document.querySelector(".temperature")
    temp.innerHTML = forecast.rain.temp
    let summary = document.querySelector('.summary')
    summary.innerHTML = forecast.rain.summary
})

snow.addEventListener('click', (e)=>{
    //allow button do something => running an eventListener
    let newWeather = document.querySelector('.weather')
    //target input to snatch out value
    newWeather.setAttribute('src', forecast.snow.gif)
    let temp = document.querySelector(".temperature")
    temp.innerHTML = forecast.snow.temp
    let summary = document.querySelector('.summary')
    summary.innerHTML = forecast.snow.summary
})