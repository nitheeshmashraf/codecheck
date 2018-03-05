var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var  invoiceSumm = new Schema({
  
Invoice_No:{       
    type:  Number     
},
Currency:{       
    type:  String     
},
Total_Billed_Qty:{       
    type:  Number     
},
Total_Amt:{       
    type:  Number     
},
Total_Taxable_Amt:{       
    type:  Number     
},
Total_Tax_Amt:{       
    type:  Number     
},
Total_Amt_inWords:{       
    type:  String     
},
Total_VAT_Amt_inWords:{       
    type:  String 
}
},{
    collection: 'invoicesummary'
});


module.exports = mongoose.model("InvSum", invoiceSumm);

