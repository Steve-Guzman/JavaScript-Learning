# Promise Chains

The provided code demonstrates a chain of Promises, utilizing the `.then()` method, and handlers for resolving or rejecting these Promises. Let's go through it step by step:

```javascript
function getWeather() {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            resolve('Sunny'); //The `resolve` function with the string `'Sunny'` as the resolved value
        }, 100);
    });
}
```
The `getWeather` function returns a new Promise that resolves to the string value `'Sunny'`. The `resolve` function is called after a delay of 100 milliseconds to simulate an asynchronous operation.

```javascript
function getWeatherIcon(weather) { //takes a `weather` parameter and returns a Promise
    return new Promise(function(resolve, reject) { //the Promise constructor
        setTimeout(() => {
            switch (weather) { //switch statement with `weather` parameter
                case 'Sunny':
                    resolve('sun icon');
                    break;
                case 'Cloudy':
                    resolve('cloudy icon');
                    break;
                case 'Rainy':
                    resolve('rain icon');
                    break;
                default:
                    reject('NO ICON FOUND');
            }
        }, 100);
    });
}
```
The `getWeatherIcon` function takes a `weather` parameter and returns a Promise. It uses the `setTimeout` function to simulate an asynchronous operation. Inside the Promise constructor, a switch statement is used to determine the appropriate icon based on the `weather` parameter. If a matching case is found, the corresponding icon is resolved; otherwise, the Promise is rejected with the message `'NO ICON FOUND'`.

```javascript
function onSuccess(data) { //the `data` value passed as an argument
    console.log(`Success ${data}`); //displaying the `data` value passed as an argument
}

function onError(error) { //the `error` value passed as an argument
    console.log(`Error: ${error}`); //displaying the `error` value passed as an argument
}
```
The `onSuccess` function is a success callback that logs a message to the console, indicating the success and displaying the `data` value passed as an argument. The `onError` function is an error callback that logs an error message to the console, displaying the `error` value passed as an argument.

```javascript
getWeather()
    .then(getWeatherIcon) //resolved value from `getWeather()` is passed as an argument to the next `.then()` method, which calls `getWeatherIcon()
    .then(onSuccess, onError); //resolved icon 'Sun icon'is passed as an argument - - invokes the `onSuccess` callback bc a resolved value was passed
                                // onError callback (the 2nd argument of .then()) (aka the reject of the getWeatherIcon Promise) gets triggered when the switch statement 'defaults' bc the getWeatherIcon promise is rejected SEE THE .CATCH() method example below line 71. **In this code snippet, if any Promise in the chain is rejected (either explicitly through a reject() call or due to an unhandled exception), the control flow will jump to the next available error callback provided in the .then() chain. In this case, the onError function is provided as the error callback.
                                
```
In this code snippet, the Promises are chained using the `.then()` method. 

1. First, the `getWeather()` Promise is initiated by calling `getWeather()`. It resolves after a delay of 100 milliseconds, passing the string `'Sunny'` as the resolved value.
2. The resolved value from `getWeather()` is passed as an argument to the next `.then()` method, which calls `getWeatherIcon()`.
3. Inside `getWeatherIcon()`, the appropriate icon is resolved based on the `weather` parameter. If `'Sunny'` is passed, `'sun icon'` will be resolved.
4. The resolved icon is passed as an argument to the next `.then()` method, which invokes the `onSuccess` callback. The success callback logs the message `"Success sun icon"` to the console.
5. If any Promise in the chain is rejected, the control flow jumps to the next `.catch()` method or the second argument of `.then()`. However, in this example, there is no `.catch()` method, so the `onError` callback is not triggered.

Overall, the code demonstrates the asynchronous execution of Promises and how they can be chained together using the `.then()` method to handle resolved values and potential errors.





Certainly! I will rewrite the code to demonstrate how a `.catch()` method can be used. Here's the modified code:

```javascript
function getWeather() {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            resolve('Windy'); // valued chained to something that will default in the switch statement
        }, 100);
    });
}

function getWeatherIcon(weather) {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            switch (weather) {
                case 'Sunny':
                    resolve('sun icon');
                    break;
                case 'Cloudy':
                    resolve('cloudy icon');
                    break;
                case 'Rainy':
                    resolve('rain icon');
                    break;
                default:
                    reject('NO ICON FOUND'); // 'Windy' is a default to the switch statement bc it does not match a case. Therefore, the Promise is rejected and
            }                                // not resolve. This leads to a .catch() method being triggered. It runs the onError callback and uses the value of  
        }, 100);                             // the reject() as the parameter  in the onError function.
    });                                      // This logs the "Error: 'No ICON FOUND' into the console.
}

function onSuccess(data) {
    console.log(`Success ${data}`);
}

function onError(error) { //() whats inside the () is known as the parameter
    console.log(`Error: ${error}`);
}

getWeather()
    .then(getWeatherIcon)
    .then(onSuccess)
    .catch(onError);
```

In this modified code, I have added a `.catch()` method to handle any rejected Promises. Here's how it works:

1. The `getWeather()` Promise is initiated by calling `getWeather()`, which resolves after a delay of 100 milliseconds, passing the string `'Sunny'` as the resolved value.
2. The resolved value from `getWeather()` is passed as an argument to the next `.then()` method, which calls `getWeatherIcon()`.
3. Inside `getWeatherIcon()`, the appropriate icon is resolved based on the `weather` parameter. If `'Sunny'` is passed, `'sun icon'` will be resolved.
4. The resolved icon is passed as an argument to the next `.then()` method, which invokes the `onSuccess` callback. The success callback logs the message `"Success sun icon"` to the console.
5. If any Promise in the chain is rejected, the control flow jumps to the `.catch()` method. In this example, the `.catch()` method is appended at the end of the Promise chain.
6. If the `getWeatherIcon()` Promise is rejected (for example, if the `weather` parameter is not recognized), the `onError` callback is triggered. It logs the error message, such as `"Error: NO ICON FOUND"`, to the console.

By adding the `.catch()` method at the end of the Promise chain, you can handle any errors that occur at any point in the chain, providing a centralized error handling mechanism.