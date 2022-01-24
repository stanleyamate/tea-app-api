const express = require('express'); //import express
const multer = require('multer');
const upload = multer();


// 1.
const router  = express.Router(); 
// 2.
const teaController = require('../controllers/tea').default; 
// 3.
router.post("/tea", upload.none(), teaController.newTea);
router.get('/tea', teaController.getAlltea);
router.delete('/tea', teaController.deleteAllTea);

router.post('/tea/:name', teaController.newComment);
router.get('/tea/:name', teaController.getOneTea);
router.delete('/tea/:name', teaController.deleteOneTea);
// 4. 
module.exports = router; // export to use in server.js
