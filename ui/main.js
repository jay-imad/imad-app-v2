// Counter codes

var button = document.getElementById('Counter');

button.onclick = function() {
    // Create a request object
    var request = new XMLHttpRequest();
    
    
    //Capture the response and store it in a variable\
    request.onreadystatechange = function() {
        if (request.readystate === XMLHttpRequest.DONE) {
            //Take some action
            if (request.status === 200) {
                var counter1 = request.responseText
                var span = document.getElementById('count');
                span.innerHTML = counter1.toString();
            }
        }
        //Not done yet
    };
    
    //Make the request
    request.open('GET', 'http://jay-imad.imad.hasura-app.io/counter', true);
    request.send(null);


};
