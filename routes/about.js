var express = require('express');
const fetch = require('node-fetch');

var router = express.Router();


/* GET users listing. */
router.get('/about', async function(req, res, next) {

  let jsonData = await fetch('https://jsonplaceholder.typicode.com/posts').then(response =>{
    
   return response;
  }).then(data =>{
    console.log(data)
    
  }).catch(err =>{
    console.info(err)
  })
  res.json([{name:'Dev'}, {name:'John'}]);
});


module.exports = router;
