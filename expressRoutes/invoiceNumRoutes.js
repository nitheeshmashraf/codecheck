// invoiceNumRoutes.js

var express = require('express');
var invoiceNumRoutes = express.Router();

// Require Item model in our routes module
var InvoiceNum = require('../models/NextInvoiceNumber');

// Defined store route
invoiceNumRoutes.route('/add').post(function (req, res) {
 
  var invoicenum = new InvoiceNum(req.body);
  console.log(req);
  console.log("its here");
   invoicenum.save()
    .then(item => {
    res.status(200).json({'invoicenum': 'InvoiceNum added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
invoiceNumRoutes.route('/').get(function (req, res) {
   InvoiceNum.find(function (err, invoices){
    if(err){
      console.log(err);
    }
    else {
      res.json(invoices);
    }
  });
});

// Defined edit route
invoiceNumRoutes.route('/show/:id').get(function (req, res) {
  var id = req.params.id;
  InvoiceNum.findById(id, function (err, invoicenum){
    if (err) return next(err);
    var data = invoicenum.InvNoNext;
    invoicenum.InvNoNext+=1;
    invoicenum.save();
      res.json(data);
    //   console.log(invoicenum.InvNoNext);
  });
  
});

//  Defined update route
invoiceNumRoutes.route('/update').get(function (req, res) {
    var id='5a9bb669734d1d5a71e666d4';
   InvoiceNum.findById(id, function(err, invoicenum) {

        invoicenum.InvNoNext+=1;
      invoicenum.save().then(invoicenum => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    
  });
});

// Defined delete | remove | destroy route
invoiceNumRoutes.route('/delete/:id').get(function (req, res) {
   InvoiceNum.findByIdAndRemove({_id: req.params.id}, function(err, invoicenum){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = invoiceNumRoutes;
