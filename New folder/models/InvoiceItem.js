var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var InvoiceItem = new Schema({
  InvoiceNum:{
      type:  Number
  },
  Name: {     
      type:  String
    },
  Qty: {     
      type:  String
    },
  Rate: {     
      type: Number
    },
  Billed: {     
      type:  Number
    },
  Tax: {     
      type: Number
    },
  TaxableAmnt: {     
      type: Number
    },
  Amount: {     
      type: Number
    },
  TaxAmnt: {     
      type: Number
    }
},{
    collection: 'invoiceitems'
});


module.exports = mongoose.model("InvItem", InvoiceItem);


