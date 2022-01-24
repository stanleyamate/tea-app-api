const express = require('express'); //import express
const router  = express.Router(); 
// importing tea controllers
const teaController = require('../controllers/tea'); 

//list of routes
router.post("/tea", teaController.uploadImg , teaController.newTea);
router.get('/tea', teaController.getAlltea);
router.delete('/tea', teaController.deleteAllTea);

router.post('/tea/:name', teaController.newComment);
router.get('/tea/:name', teaController.getOneTea);
router.delete('/tea/:name', teaController.deleteOneTea);

module.exports = router; // export to use in server.js

