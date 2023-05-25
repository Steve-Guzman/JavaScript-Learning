//https://youtu.be/TnhCX0KkPqs?t=1994

function fetchData(){
    return new Promise(function(resolve, reject){
        fetch('https://api.weather.gov/gridpoints/OKX/35,35/forecast')
        .then(response => response.json())
        .then(data => resolve(data.properties.periods[1].shortForecast));
    

function displayData(weather){
    console.log(weather)
}

fetchData()
    .then(displayData) // Each .then() block is chained after the previous one, and it receives the resolved value from the previous Promise as its argument

    //"whatever is in the .then() gets passed into the displayData function"