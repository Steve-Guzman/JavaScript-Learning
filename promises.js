//https://www.youtube.com/watch?v=PoRJizFvM7s&ab_channel=TraversyMedia
// Promise in JavaScript is an object that represents the eventual completion or failure of an asynchronous operation.
//AKA, A Promise represents the result of an asynchronous operation, such as fetching data from a server. 
//Promises have two primary methods:

//then(): Allows you to specify what to do when a Promise is fulfilled, i.e., when it successfully completes. You can provide a callback function 
//that receives the resolved value as an argument.
//--------//
//catch(): Allows you to specify what to do when a Promise is rejected, i.e., when an error occurs during the operation. You can provide a callback
 //function that receives the reason for rejection as an argument.

const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'}

];

function getPosts() {
    setTimeout(() => { // waits 1 second to run the arrow function
        let output = '';
        posts.forEach((post, index) => { //for each 'post' grab the title and add it to the 'output' var
            output += `<li>${post.title}</li>`; // '+=' adds the right side value to 'output' variable. "keeps updating the 'output' variable" 
        });
        document.body.innerHTML = output; // sets 'output' value has a string into the <body> of the .html
    }, 1000);
}

function createPost(post){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            posts.push(post);
            
            const error = false; 

            if (!error) { // aka if "not false" which means "true" run resolve. If what is within () is false it will run the else. AKA runs the reject.
                resolve(); // 2) Then it is going to resolve               
            } else {
                reject('Error: Something went wrong');
            }
         }, 2000); // 1) waits for the two seconds to pass
    });
}

createPost({title: 'Post Four', body: 'This is post four'})
.then(getPosts) // 3) once resolves it will then getPosts
.catch(err => console.log(err)); // 'err' wording can be what you want, it grabs the stuff in the () in the if/else reject statement

// In JavaScript, `new Promise` is used to create a new Promise object. Promises are a way to handle asynchronous operations in a more structured and manageable manner.

// The `Promise` object represents the eventual completion or failure of an asynchronous operation and provides methods for handling the operation's outcome. 
// It encapsulates a value that may not be available yet or an error that might occur in the future.

// Here's an example of creating a new Promise:

// ```
// const myPromise = new Promise((resolve, reject) => {
//   // Perform some asynchronous operation
//   // For example, make an HTTP request or read a file

//   // If the operation is successful, call the resolve function with the result
//   resolve("Operation successful!");

//   // If there is an error, call the reject function with the error
//   // reject("An error occurred!");
// });
// ```

// In the example above, we create a new Promise by passing a callback function to the `Promise` constructor. The callback function takes two arguments: 
//`resolve` and `reject`. Within the callback, we can perform asynchronous operations, such as making an HTTP request or reading a file.

// If the operation is successful, we call the `resolve` function with the result or value we want the Promise to fulfill with. If there is an error or failure, 
//we call the `reject` function with an error object or an error message.

// Once the Promise is created, you can chain methods like `.then()` and `.catch()` to handle the resolved value or catch any errors that may occur during the 
//asynchronous operation.

// Promises provide a more structured approach to handling asynchronous code and allow you to write cleaner and more maintainable code by avoiding excessive
// nesting and managing the flow of asynchronous operations.

//-----------//

// Async / Await
// A more elegant way to handle promises
async function init() {
    await createPost({title: 'Post Five', body: 'This is post five'}); //The await keyword pauses the execution of the function until the promise returned by createPost() resolves.

    getPosts();
}

init();

//^^In summary, the code above initializes an asynchronous function init() that awaits the creation of a new post using the createPost() function. Once that operation
// is complete, it calls the getPosts() function. The init() function is then invoked to start the execution of the entire sequence.

 // Promise.all

//We use Promise.all() to combine all the promises into a single Promise. This method takes an array of promises as an argument and returns a new Promise that resolves 
//when all the input promises have resolved. The resolved values of each promise are collected into an array.

// -------------------//

// Async / Await / Fetch
async function fetchUsers(){
    const res = await fetch //The await keyword pauses the execution of the function until the promise returned by fetch() is resolved. ie the response has been received from the specified URL.
     ('https://jsonplaceholder.typicode.com/users')

     const data = await res.json();//waits for the res.json() method to execute. The json() method parses the response body as JSON and returns a Promise that resolves to the parsed data
// The await keyword pauses the execution until the Promise returned by res.json() is resolved, meaning the data has been successfully parsed from the response.
     console.log(data);
}

fetchUsers();


 const promise1 = Promise.resolve('Hello World');
 const promise2 = 10;
 const promise3 = new Promise((resolve, reject) => 
    setTimeout(resolve, 2000, 'Goodbye')
);
const promise4 = fetch
('https://jsonplaceholder.typicode.com/users').then(res => res.json());

Promise.all([promise1, promise2, promise3, promise4]) //returns a new Promise that resolves when all the input promises have resolved. The resolved values of each promise are collected into an array.
.then(values => console.log(values)); //In the .then() callback, we receive the array of resolved values and simply log it to the console.

