const express = require('express');
const router = express.Router();
// import tea.js from controllers folder
const teaController =require('../controllers/tea');

 //list of routes to the tea controllers.
 
 router.get('/tea', teaController.getAllTea);
 router.post('/tea', teaController.newTea);
 router.delete('/tea', teaController.deleteAllTea);


 router.get('/tea/:name', teaController.getOneTea);
 router.post('/tea/:name', teaController.newComment);
 router.delete('/tea/:name', teaController.deleteOneTea);


 module.exports = router; // export to use in server.js