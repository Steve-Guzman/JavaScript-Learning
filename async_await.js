 //https://www.youtube.com/watch?v=spvYqO_Kp9Q&ab_channel=ColorCode

 function getData(){
    return new Promise(resolve  => {
        setTimeout(() => {
            resolve(46)
        }, 1);
    })
 } 

 async function start1(){
    const result = await getData() // you can call getData as if was a asynchronous function - and assign its value to result (cont. below)
    console.log(result) //await is waiting for the Promise to get resolved or rejected and then assigns the value to the variable 
 }
 
 // let write it out using .then()
 // you can see how start2 is a bit messy. 
 //start1 funct. you can already start using the result from the async operation as a regular variable 

 async function start2(){
    getData()
        .then(result => {
            console.log(result)
        })
 }

 start1()
 
 // ------------------------------------------------------------------------------------------------------------------- //

 async function start(){
    const data = await fetch('https://api.weather.gov/gridpoints/OKX/35,35/forecast') // wait for the results of the fetch call 'await' and once we got it assign it to 'data'
    const result = await data.json() // waits for 'data' variable above to complete, then it parses it to json and assigns it to 'result' variable
    console.log(result.properties.periods[1].shortForecast)
 }

 start()

 // this way of writing async function is easy to read from top to bottom. Unlike function start2() from below

 async function start2(){
    fetch('https://api.weather.gov/gridpoints/OKX/35,35/forecast')
    .then(data => data.json())
    .then(result => {
        console.log(result.properties.periods[1].shortForecast)
    })
 }

 start2()

    // Try catch  //

 function getData2(){
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            reject('Something went wrong')
            //resolve('Here is your data')
        }, 1);
    })
 } 

 async function start3() {
    try {
        const result = await getData2()
    } catch (error) {
        console.log(`ERROR: ${error}`)
    }
 }

//

 async function start4() {
    const result = await getData2()
    .catch (error => {
        console.log(`ERROR: ${error}`)
    }) 
    //console.log(result); console.log() is only ran on resolved?? I am not sure
 }

 start4()


 /// Using try{} / catch for organization and how to best use it. Most people use this for async awaits 

 function onSuccess(){

 }

 function onFailure(){
    
 }
 
 
 
 async function start5() {
    try {
        const result = await getData2()
        onSuccess() // best practice to have a function in the try / catch to make it code readable 
    } catch (error) {
        onFailure() // same note as above
    }
 }

 start5()


 //Note though that async functions always return a promise (promise object)