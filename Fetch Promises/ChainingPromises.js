const fetchPromise = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
  );
  
  fetchPromise
    .then((response) => response.json())
    .then((data) => {
      console.log(data[0].name);
    });

    // elegant feature of promises is that then() itself returns a promise, which will be completed with the result of the function passed to it. 
    // This means that we can (and certainly should) rewrite the above code like this:

    // Here in this code we return the promise returned by json(), and call the second then() on that return value. This is called promise chaining and means we can 
    // avoid ever-increasing levels of indentation when we need to make consecutive asynchronous function calls.