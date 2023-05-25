//https://www.youtube.com/watch?v=TnhCX0KkPqs&ab_channel=ColorCode


//  Each .then() block is chained after the previous one, and it receives the resolved value from the previous Promise as its argument.



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
.then(getWeatherIcon) // Each .then() block is chained after the previous one, and it receives the resolved value from the previous Promise as its argument.
.then(onSuccess, onError) //AA.) .then() takes two parameters. A resolve and a reject. what should be done if the Promise resolves successful/unsuccessful.


//

function fun1(){
    return new Promise ((resolve, reject) =>{
        setTimeout(() => {
           resolve('404') 
        }, 100);
    })
}

function fun2(){
    console.log('Function 2')
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve ("mask face")
        }, 100)
    })
}

function onSuccess(data){          //the 'data' being passed-in is that of what's in the resolve() parenthesis 
    console.log(data)
}

function onError(errorCode) {          // //the 'error' being passed-in is that of what's in the reject() parenthesis 
    console.log(`Error: ${errorCode}`)
}

function onFinally (){
    console.log('Finally We Be Done Yo')
}

fun1()
.then(fun2)
.then(onSuccess)
.catch(onError) // If any error occurs in any of the Promises within the chain, the control flow will jump directly to the nearest .catch() block,
                // allowing you to handle and log the error in a centralized manner.
.finally(onFinally)

//.finally() is ran at the end when all  .then() and .catch() have been cycled through.
//Can be used to remove event listeners, reset variables you created 



///

