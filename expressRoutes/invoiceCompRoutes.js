// invoiceCompRoutes.js

var express = require('express');
var invoiceCompRoutes = express.Router();

// Require Item model in our routes module
var invoiceComp = require('../models/InvCompany');

// Defined store route
invoiceCompRoutes.route('/add').post(function (req, res) {
 
  var invoicecompany = new invoiceComp(req.body);
  console.log(req);
  console.log("its here");
  invoicecompany.save()
    .then(item => {
    res.status(200).json({'invoiceComp': 'invoiceComp added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
invoiceCompRoutes.route('/').get(function (req, res) {
   invoiceComp.find(function (err, invoices){
    if(err){
      console.log(err);
    }
    else {
      res.json(invoices);
    }
  });
});

// Defined edit route
invoiceCompRoutes.route('/show/:id').get(function (req, res) {
  var id = req.params.id;
  invoiceComp.findById(id, function (err, invoiceComp){
    if (err) return next(err);
    var data = invoiceComp.InvNoNext;
    invoiceComp.InvNoNext+=1;
    invoiceComp.save();
      res.json(data);
    //   console.log(invoiceComp.InvNoNext);
  });
  
});

//  Defined update route
invoiceCompRoutes.route('/update').get(function (req, res) {
    var id='5a9bb669734d1d5a71e666d4';
   invoiceComp.findById(id, function(err, invoiceComp) {

        invoiceComp.InvNoNext+=1;
      invoiceComp.save().then(invoiceComp => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    
  });
});

// Defined delete | remove | destroy route
invoiceCompRoutes.route('/delete/:id').get(function (req, res) {
   invoiceComp.findByIdAndRemove({_id: req.params.id}, function(err, invoiceComp){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = invoiceCompRoutes;
