const express = require('express');
const router = express.Router();
const {data} = require('../data.json'); //converts data to a json object
const {projects} = data;
router.get('/:id', (req, res, next) => {
    const {id} = req.params;
    //console.log(id);
    
    //verify that project exists
    if(isNaN(id) || id === '0' || id > projects.length){
            //if project doesn't exist redirect to error page
           res.redirect('/error');        
    }
    else{
        const projectData = projects[id-1];
        //console.log(projectData.image_urls);
        res.render('project', projectData);
    }

});

module.exports = router;