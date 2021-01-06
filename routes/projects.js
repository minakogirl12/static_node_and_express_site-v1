const express = require('express');
const router = express.Router();
const {data} = require('../data.json'); //converts data to a json object
const {projects} = data;
router.get('/:id', (req, res) => {
    const {id} = req.params;
    console.log(id);
    
    //verify that project exists
    const projectData = projects[id];
    res.render('project', projectData);
   
    

    //if project doesn't exist throw an error

});

module.exports = router;