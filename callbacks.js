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