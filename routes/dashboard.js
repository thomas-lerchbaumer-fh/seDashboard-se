const express =require('express');
const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');
const Dashboard = require('../models/Dashboard');
const axios = require('axios');
const fetch = require('node-fetch');

const backend = require('../backend/index');


// @route       GET api/dashboard
// @desc        Get users saved dashboard config
// @access      Private
router.get('/',auth, async (req,res) => {
    try{
        const dashConfig = await Dashboard.find({user: req.user.id });
        res.json(dashConfig);
    }catch(err){
        console.error(err.msg);
        res.status(500).send('Server error')
    }
});

// @route       POST api/dashboard
// @desc        Save users Config on registration
// @access      Private
router.post('/',

 auth,

 async (req,res) => {

   const layout = req.body;
  
   try {
   const newConfig = new Dashboard({
        layout,
        user: req.user.id
       }); 
       //.log(layout)
       const dashboard = await newConfig.save();
       res.json(dashboard)
   } catch (err) {
       console.error(err.message);
       res.status(500).send('Server Error');      
       
   }
});



// @route       GET api/addLayout
// @desc        save users dashboardLayout whenever changed
// @access      Private
router.put('/:id',auth, async (req,res) => {
    try {
        let newLay = req.body
        let updated = await Dashboard.findByIdAndUpdate(
          req.params.id,
          {$set:{ layout: newLay}},
          {new: true}
        );
      
        res.json(updated);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
});

module.exports = router;