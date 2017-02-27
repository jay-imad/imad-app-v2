var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    article-one : {
        title: 'Article One | Jay GS',
        heading: 'Article One',
        date: 'Feb 27, 2017',
        content: `  <p>
                    This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article.
                    </p>
                    <p>
                    This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article.
                    </p>
                    <p>
                    This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article.
                    </p>`
    },
    article-two : {
        title: 'Article Two | Jay GS',
        heading: 'Article Two',
        date: 'Feb 27, 2017',
        content: `  <p>
                    This is the content for my second article.
                    </p>`},
    Article-three : {
        title: 'Article Three | Jay GS',
        heading: 'Article Three',
        date: 'Feb 27, 2017',
        content: `  <p>
                    This is the content for my third article.
                    </p>`
    }
};

function createTemplate(data){
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
    
    var htmlTemplate = `
    <html>
    <head>
        <title>
            ${title}
        </title>
        <meta name = "viewport" content = "width=device-width, initial-scale=1" />
        <link href="/ui/style.css" rel="stylesheet" />
        <style>
    
        </style>
    </head>
    <body>
        <div class='container'>
            <div>
                <a href= '/'>Home</a>
            </div>
            <hr/>
            <h3>
                ${heading}
            </h3>
            <div>
                ${date}
            </div>
            <div>
                ${content}
            </div>
        </div>
    </body>
    </html>
    `;
    return htmlTemplate;

}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/articleName', function(req,res) {
    //articleName =  article-one
    //articles[articleName] == {} content object for article one
  res.send(createTemplate(articles[articleName]));
});


app.get('/ui/main.js', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


var counter = 0;
app.get('/counter', function(req,res){
    counter = counter + 1;
    res.send(counter.toString());
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var names =[];
app.get('/submit-name', function (req, res) { //URL: /submit-name?name = xxxxx
   //Get the name from the request object
   var name = req.query.name;
   
   names.push(name);
   // JSON; 
   res.send(JSON.stringify(names));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
