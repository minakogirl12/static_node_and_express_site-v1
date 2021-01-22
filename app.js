//set up dependencies
const express = require('express');

//access to data
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
    //console.log(projects);
    res.locals = data;
    res.render('index', data.projects);
    
    //console.log(data);
});

//about route 
app.get('/about', (req, res) => {
    res.render('about');
});

//import project routes
const projectsRoute = require('./routes/projects');
app.use('/projects', projectsRoute);


//creates new error object for 404 errors and undefined routes
//should log error message and set message property to something user friendly
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/**
 * Global error handler that will deal with any server errors
 * 
 */
//error handler
app.use((err, req, res, next) =>{
    console.log(err.message);

    res.locals.error = err;
    const status = err.status || 500;
    res.locals.error = err;
    res.status(err.status);
    res.render('error', err)

});


app.listen(3000);
console.log("Listening on port 3000...");