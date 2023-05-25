//https://www.youtube.com/watch?v=TnhCX0KkPqs&ab_channel=ColorCode



function getWeather(){
    return new Promise(function(resolve, reject){
        resolve('Sunny') //AA.) a reference to the function passed into .then()'s first parameter // 'Sunny' is what you passed into the resolve() function
                        // resolve corresponds to the first parameter of the .then(). In this case the onSuccess function
        reject('Error') //
    })                   
}

function onSuccess(data){          //the 'data' being passed-in is that of what's in the resolve() parenthesis 
    console.log(`Success ${data}`)
}

function onError(error) {          // //the 'error' being passed-in is that of what's in the reject() parenthesis 
    console.log(`Error: ${error}`)
}

getWeather()
    .then(onSuccess, onError) //AA.) .then() takes two parameters. A resolve and a reject. what should be done if the Promise resolves successful/unsuccessful.



