export interface ClientComp{
  // companyId: number,
  Name:String,
  Add1:String,
  Add2:String,
  Add3:String,
  BuyerOrderNo:number,
  DespThru:String,
  ModeOfPay:String,
  ModeOfPayAr:String,
  PlaceOfSupply:String  
};

export interface MainInv{
  InvNoNext:number,
  Locked:boolean
}

export interface itemVal {
  Name: String,
  Qty: String,
  Rate:number,
  Billed: number,
  Tax:number,
  TaxableAmnt:number,
  Amount:number,
  TaxAmnt:number
}

export interface InvSummary{
  Invoice_No: number,
  Currency: string,
  Total_Billed_Qty: number,
  Total_Amt: number,
  Total_Taxable_Amt: number,
  Total_Tax_Amt: number,
  Total_Amt_inWords: string,
  Total_VAT_Amt_inWords: string

  
}

// export interface InvoiceDetails {
//   Invoice_No: number,
//   Company: {
//     Name:String,
//     Add1:String,
//     Add2:String,
//     Add3:String,
//     BuyerOrderNo:number,
//     DespThru:String,
//     ModeOfPay:String,
//     ModeOfPayAr:String,
//     PlaceOfSupply:String  
//   },
//   item: [{
//       Name: String,
//       Qty: String,
//       Rate:number,
//       Billed: number,
//       Tax:number,
//       TaxableAmnt:number,
//       Amount:number,
//       TaxAmnt:number
//     }, {
//       Name: String,
//       Qty: String,
//       Rate:number,
//       Billed: number,
//       Tax:number,
//       TaxableAmnt:number,
//       Amount:number,
//       TaxAmnt:number
//     }, {
//       Name: String,
//       Qty: String,
//       Rate:number,
//       Billed: number,
//       Tax:number,
//       TaxableAmnt:number,
//       Amount:number,
//       TaxAmnt:number
//     }, {
//       Name: String,
//       Qty: String,
//       Rate:number,
//       Billed: number,
//       Tax:number,
//       TaxableAmnt:number,
//       Amount:number,
//       TaxAmnt:number
//     }, {
//       Name: String,
//       Qty: String,
//       Rate:number,
//       Billed: number,
//       Tax:number,
//       TaxableAmnt:number,
//       Amount:number,
//       TaxAmnt:number
//     }, {
//       Name: String,
//       Qty: String,
//       Rate:number,
//       Billed: number,
//       Tax:number,
//       TaxableAmnt:number,
//       Amount:number,
//       TaxAmnt:number
//     }, {
//       Name: String,
//       Qty: String,
//       Rate:number,
//       Billed: number,
//       Tax:number,
//       TaxableAmnt:number,
//       Amount:number,
//       TaxAmnt:number
//   }],
//   Invoice_Summary: {
//     Invoice_No: number,
//     Currency: string,
//     Total_Billed_Qty: number,
//     Total_Amt: number,
//     Total_Taxable_Amt: number,
//     Total_Tax_Amt: number,
//     Total_Amt_inWords: string,
//     Total_VAT_Amt_inWords: string
  
//   }
// }