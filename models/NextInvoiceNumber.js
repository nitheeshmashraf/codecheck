var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// schema invoice number
var nextInvoiceNumber = new Schema({
  InvNoNext:{
      type:  Number
  },
  Locked: {     
      type:  String
    }
},{
    collection: 'nextinvoice'
});
module.exports = mongoose.model("MainInv", nextInvoiceNumber);
