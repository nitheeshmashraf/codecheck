export interface ClientComp{
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