const fetchPromise = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
  );
  
  console.log(fetchPromise);
  
  fetchPromise.then((response) => {
    console.log(`Received response: ${response.status}`);
  });
  
  console.log("Started request…");
  

// 1. calling the fetch() API, and assigning the return value to the fetchPromise variable
// 2. immediately after, logging the fetchPromise variable. This should output something like: Promise { <state>: "pending" }, telling us that we have a Promise object, and it has a state whose value is "pending". The "pending" state means that the fetch operation is still going on.
// 3. passing a handler function into the Promise's then() method. When (and if) the fetch operation succeeds, the promise will call our handler, passing in a Response object, which contains the server's response.
// 4. logging a message that we have started the request.

// Note that Started request… is logged before we receive the response. Unlike a synchronous function, fetch() returns while the request is still going on, 
// enabling our program to stay responsive. The response shows the 200 (OK) status code, meaning that our request succeeded.