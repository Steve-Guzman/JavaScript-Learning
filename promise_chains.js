//https://www.youtube.com/watch?v=TnhCX0KkPqs&ab_channel=ColorCode


function getWeather(){
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            resolve('Sunny')
        }, 100)
    })
}

function getWeatherIcon(weather){
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            switch(weather){
                case 'Sunny':
                    resolve('sun icon')
                    break
                case 'Cloudy':
                    resolve('cloudy icon')
                    break
                case 'Rainy':
                    resolve('rain icon')
                    break
                default:
                    reject('NO ICON FOUND')
            }
        }, 100)
    })
}

function onSuccess(data){          //the 'data' being passed-in is that of what's in the resolve() parenthesis 
    console.log(`Success ${data}`)
}

function onError(error) {          // //the 'error' being passed-in is that of what's in the reject() parenthesis 
    console.log(`Error: ${error}`)
}

getWeather()
.then(getWeatherIcon)
.then(onSuccess, onError) //AA.) .then() takes two parameters. A resolve and a reject. what should be done if the Promise resolves successful/unsuccessful.


//