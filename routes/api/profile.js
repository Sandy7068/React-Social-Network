const express = require('express');


const router = express.Router();

router.get('/test',(req,res)=>res.json({msg:'PROFILE GO Here'}));

module.exports = router;