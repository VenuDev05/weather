let btn = document.querySelector('.btn')
let inp = document.querySelector('.inp')
let weather = document.querySelector('.weather')
let api = "5df83b6a8352839bedb7e41e0d0afebc"

btn.addEventListener('click', () => {
    let city = inp.value
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            weather.innerHTML = `Temperature: ${data.main.temp} °C`
        })
        .catch(err => console.log(err))
})
