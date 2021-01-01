//set up dependencies
const express = require('express');
const {data} = require('./data.json'); //converts data to a json object


//creates express application
const app = express();

//set view engine to pug
app.set('view engine', 'pug');

//static route for files located in public folder
app.use('/static', express.static('public'));

//index route
//create a route (path, callback function for route)
app.get('/', (req, res) => {
    res.render('index');
    res.locals = data.projects;
    //console.log(res.locals);
    //console.log(data.projects[0].project_name);
});
//about route 
app.get('/about', (req, res) => {
    res.render('about');
});
//project routes
app.get('/projects/:id', (req, res) => {
    const {id} = req.params; //req.params = :id in the web address
    res.render('project');
});


//handle errors
//create error for undefined routes

//creates new error object for 404 errors
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});


app.listen(3000);
console.log("Listening on port 3000...");