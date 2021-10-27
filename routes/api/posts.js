const express = require('express');


const router = express.Router();

router.get('/test',(req,res)=>res.json({msg:'POSTS GO Here'}));


module.exports = router;