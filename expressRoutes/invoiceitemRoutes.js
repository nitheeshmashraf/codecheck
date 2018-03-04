// invoiceitemRoutes.js

var express = require('express');
var invoiceitemRoutes = express.Router();

// Require Item model in our routes module
var InvoiceItem = require('../models/InvoiceItem');

// Defined store route
invoiceitemRoutes.route('/add').post(function (req, res) {
 
  var invoiceitem = new InvoiceItem(req.body);
  console.log(req.body);
  console.log("its here");
   invoiceitem.save()
    .then(item => {
    res.status(200).json({'invoiceitem': 'InvoiceItem added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
invoiceitemRoutes.route('/').get(function (req, res) {
   InvoiceItem.find(function (err, invoices){
    if(err){
      console.log(err);
    }
    else {
      res.json(invoices);
    }
  });
});

// Defined edit route
invoiceitemRoutes.route('/show/:id').get(function (req, res) {
  var id = req.params.id;
  InvoiceItem.findById(id, function (err, invoiceitem){
      res.json(invoiceitem);
  });
});

//  Defined update route
invoiceitemRoutes.route('/update/:id').post(function (req, res) {
   InvoiceItem.findById(req.params.id, function(err, invoiceitem) {
    if (!invoiceitem)
      return next(new Error('Could not load Document'));
    else {
      invoiceitem.Name = req.body.Name;
      invoiceitem.Qty = req.body.Qty;
      invoiceitem.Rate = req.body.Rate;
      invoiceitem.Billed = req.body.Billed;
      invoiceitem.Tax = req.body.Tax;
      invoiceitem.TaxableAmnt = req.body.TaxableAmnt;
      invoiceitem.Amount = req.body.Amount;
      invoiceitem.TaxAmnt = req.body.TaxAmnt;

      invoiceitem.save().then(invoiceitem => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
invoiceitemRoutes.route('/delete/:id').get(function (req, res) {
   InvoiceItem.findByIdAndRemove({_id: req.params.id}, function(err, invoiceitem){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = invoiceitemRoutes;
