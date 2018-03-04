

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var Invandcomp = new Schema({
  Invoice_No: { type: Number },
  Name		:	{	type:	String	}	,
  Add1		:	{	type:	String	}	,
  Add2		:	{	type:	String	}	,
  Add3		:	{	type:	String	}	,
  BuyerOrderNo		:	{	type:	Number	}	,
  DespThru		:	{	type:	String	}	,
  ModeOfPay		:	{	type:	String	}	,
  ModeOfPayAr		:	{	type:	String	}	,
  PlaceOfSupply		:	{	type:	String	}	
  
},{
    collection: 'invCompany'
});


module.exports = mongoose.model("InvComp", Invandcomp);


