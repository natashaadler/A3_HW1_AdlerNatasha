//statment chaning syntax 

(() => {
    //make an AJAX request (fetch) using the Fetch API (look for it)
    fetch('./data/classData.json')
    //parce the strigified object to make it something that js can read
    //res is short for response
    .then(res => res.json())
    .then(data => {
        debugger;
        console.log(data);
    //handle data
    //here is where you would call the function that puts the pieces on the page
    })
    //catch will catch an error if there is one 
    .catch((err) => {
        console.log(err);
    })

})();