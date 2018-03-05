// invoiceSumRoutes.js

var express = require('express');
var invoiceSumRoutes = express.Router();

// Require Item model in our routes module
var invoiceSum = require('../models/InvoiceSummary');

// Defined store route
invoiceSumRoutes.route('/add').post(function (req, res) {
 
  var invoicesum = new invoiceSum(req.body);
  // console.log(req);
  console.log("its here");
   invoicesum.save()
    .then(item => {
    res.status(200).json({'invoicesum': 'invoiceSum added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
invoiceSumRoutes.route('/').get(function (req, res) {
   invoiceSum.find(function (err, invoices){
    if(err){
      console.log(err);
    }
    else {
      res.json(invoices);
    }
  });
});

// Defined edit route
invoiceSumRoutes.route('/show/:id').get(function (req, res) {
  var id = req.params.id;
  invoiceSum.findById(id, function (err, invoicesum){
    if (err) return next(err);
    var data = invoicesum.InvNoNext;
    invoicesum.InvNoNext+=1;
    invoicesum.save();
      res.json(data);
    //   console.log(invoicesum.InvNoNext);
  });
  
});

//  Defined update route
invoiceSumRoutes.route('/update').get(function (req, res) {
    var id='5a9bb669734d1d5a71e666d4';
   invoiceSum.findById(id, function(err, invoicesum) {

        invoicesum.InvNoNext+=1;
      invoicesum.save().then(invoicesum => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    
  });
});

// Defined delete | remove | destroy route
invoiceSumRoutes.route('/delete/:id').get(function (req, res) {
   invoiceSum.findByIdAndRemove({_id: req.params.id}, function(err, invoicesum){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = invoiceSumRoutes;
