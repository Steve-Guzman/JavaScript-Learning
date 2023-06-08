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

function createPost(post, callback){
    setTimeout(()=>{
        posts.push(post);
        callback(); // is used to be able to call back / run a function. i.e. it runs what ever function we pass it. Line 24 us running the getPosts function.
     }, 2000);
}

createPost({title: 'Post Three', body: 'This is post three'}, getPosts); //createPost takes 2 parameters. It uses the 1st parameter and pushes it to the const 'posts; array


//https://www.youtube.com/watch?v=PoRJizFvM7s&ab_channel=TraversyMedia


// CHAT GPT Example of a callback function

function fetchData(callback) {
    // Simulating an asynchronous operation
    setTimeout(() => {
        const data = 'Some data';
        callback(data);
    }, 2000);
}

function processData(data) {
    console.log('Processing data:', data);
}

fetchData(processData);

// In the provided example, the 'fetchData' function simulates an asynchronous operation using setTimeout. After a delay of 2 seconds, it triggers the completion of the 
// operation and --> wants to pass the retrieved data to the callback function. <--

// Here's a breakdown of the process:

// The 'fetchData' function is called, and the 'processData' function is passed as an argument. This means that 'processData' is designated as the callback function to be 
// executed later.

// Inside 'fetchData', after the 2-second delay simulated by setTimeout, the callback function ('processData') is invoked.

// During the invocation of the callback function, the retrieved data (in this case, the string 'Some data') is passed as an argument to the callback function.

// The callback function ('processData') receives the data as a parameter. In this example, the parameter 'data' represents the retrieved data that was passed when the
//  callback was invoked.

// Inside the callback function ('processData'), you can process the received data or perform any desired operations using that data. In the example, the code logs a
// message with the received data.

// In summary, when I mentioned "and passes it the retrieved data," I meant that the data obtained from the asynchronous operation is supplied as an argument to the
//  callback function when it is called or invoked. This allows you to work with the retrieved data and perform specific actions or logic using that data within the 
//  callback function.


//Parameters define the structure of a function, and
// arguments provide the actual values that the function works with when it is called.