const express =require('express');
const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');
const Dashboard = require('../models/Dashboard');
const axios = require('axios');
const fetch = require('node-fetch');

var {getTempDataForecast} = require('../backend/index');
var {getTempCurrentData} = require('../backend/index');
var {getC19Data} = require('../backend/index');
var {getStandardFeed} = require('../backend/index');
var {getArnieQuote} = require('../backend/index');


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

router.get('/tempForecast', async (req,res) => {
        await getTempDataForecast()
        .then(data => {res.json(data)})
        .catch(function (error) {
          console.log(error);
       });
});

router.get('/tempCurrent', async (req,res) => {
        await getTempCurrentData()
        .then(data => {res.json(data)})
        .catch(function (error) {
          console.log(error);
        });
});

router.get('/coronaData', async (req,res) => {
        await getC19Data()
        .then(data => {res.json(data)})
        .catch(function (error) {
          console.log(error);
        });
});

router.get('/standardFeed', async (req,res) => {
  await getStandardFeed()
  .then(data => {res.json(data)})
  .catch(function (error) {
    console.log(error);
  });
});

router.get('/arnieQuote', async (req,res) => {
  await getArnieQuote()
  .then(data => {res.json(data)})
  .catch(function (error) {
    console.log(error);
  });
});






module.exports = router;