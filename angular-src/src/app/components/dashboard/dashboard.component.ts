import { Component, OnInit } from '@angular/core';
import { ClientComp,MainInv,itemVal,InvSummary } from './ClientComp';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit {

  currentInv:number;
  dt :Date;
  i: number=-1;
  k: number=0;
  buffer:number;
  showinvoice:boolean=true;
  InvItem: itemVal[]=[{
    Name: "itemName_1",
    Billed: 0,
    Rate:0,
    Qty: 'Kg',
    Tax:5.00,
    TaxableAmnt:0,
    TaxAmnt:0,
    Amount:0
  },{
    Name: "itemName_2",
    Billed: 0,
    Rate:0,
    Qty: 'Kg',
    Tax:5.00,
    TaxableAmnt:0,
    TaxAmnt:0,
    Amount:0
  },{
    Name: "itemName_3",
    Billed: 0,
    Rate:0,
    Qty: 'Kg',
    Tax:5.00,
    TaxableAmnt:0,
    TaxAmnt:0,
    Amount:0
  },{
    Name: "itemName_4",
    Billed: 0,
    Rate:0,
    Qty: 'Kg',
    Tax:5.00,
    TaxableAmnt:0,
    TaxAmnt:0,
    Amount:0
  },{
    Name: "itemName_5",
    Billed: 0,
    Rate:0,
    Qty: 'Kg',
    Tax:5.00,
    TaxableAmnt:0,
    TaxAmnt:0,
    Amount:0
  },{
    Name: "itemName_6",
    Billed: 0,
    Rate:0,
    Qty: 'Kg',
    Tax:5.00,
    TaxableAmnt:0,
    TaxAmnt:0,
    Amount:0
  },{
    Name: "itemName_7",
    Billed: 0,
    Rate:0,
    Qty: 'Kg',
    Tax:5.00,
    TaxableAmnt:0,
    TaxAmnt:0,
    Amount:0
  },{
    Name: "itemName_8",
    Billed: 0,
    Rate:0,
    Qty: 'Kg',
    Tax:5.00,
    TaxableAmnt:0,
    TaxAmnt:0,
    Amount:0
  }
];

ItemList: itemVal[]=[{
  Name: "Mutton",
  Billed: 1,
  Rate:124,
  Qty: 'Kg',
  Tax:5.00,
  TaxableAmnt:0,
  TaxAmnt:0,
  Amount:0
},{
  Name: "Beef",
  Billed: 126,
  Rate:1,
  Qty: 'Kg',
  Tax:5.00,
  TaxableAmnt:0,
  TaxAmnt:0,
  Amount:0
},{
  Name: "Mutton SP",
  Billed: 23,
  Rate:1,
  Qty: 'Kg',
  Tax:5.00,
  TaxableAmnt:0,
  TaxAmnt:0,
  Amount:0
},{
  Name: "Beef SP",
  Billed: 0,
  Rate:0,
  Qty: 'Kg',
  Tax:5.00,
  TaxableAmnt:0,
  TaxAmnt:0,
  Amount:0
},{
  Name: "Sausage",
  Billed: 0,
  Rate:0,
  Qty: 'Kg',
  Tax:5.00,
  TaxableAmnt:0,
  TaxAmnt:0,
  Amount:0
},{
  Name: "itemName_6",
  Billed: 0,
  Rate:0,
  Qty: 'Kg',
  Tax:5.00,
  TaxableAmnt:0,
  TaxAmnt:0,
  Amount:0
},{
  Name: "itemName_7",
  Billed: 0,
  Rate:0,
  Qty: 'Kg',
  Tax:5.00,
  TaxableAmnt:0,
  TaxAmnt:0,
  Amount:0
},{
  Name: "itemName_8",
  Billed: 0,
  Rate:0,
  Qty: 'Kg',
  Tax:5.00,
  TaxableAmnt:0,
  TaxAmnt:0,
  Amount:0
}];

invoicesum: InvSummary={
  Invoice_No: 0,
  Currency: 'AED',
  Total_Billed_Qty: 0,
  Total_Amt: 0,
  Total_Taxable_Amt: 0,
  Total_Tax_Amt: 0,
  Total_Amt_inWords: 'string',
  Total_VAT_Amt_inWords: 'string'

  
};
  selected: string;
  trnNo: number;
  emailID: string;
  currComp: string;
  count:number=1;
  item_array_counter: Array<number>=[0];

  CompanyList: ClientComp[]=[{
    Name:"ClientName1",
    Add1:'fzllc',
    Add2:'address2',
    Add3:'address 3',
    BuyerOrderNo:135790,
    DespThru:'nith',
    ModeOfPay:'CASH',
    ModeOfPayAr:'CASH AR',
    PlaceOfSupply:'Emirate' 
  },{
    Name:"ClientName2",
    Add1:'fzllc',
    Add2:'address2',
    Add3:'address 3',
    BuyerOrderNo:135790,
    DespThru:'nith',
    ModeOfPay:'CASH',
    ModeOfPayAr:'CASH AR',
    PlaceOfSupply:'Emirate' 
  },{
    Name:"ClientName3",
    Add1:'fzllc',
    Add2:'address2',
    Add3:'address 3',
    BuyerOrderNo:135790,
    DespThru:'nith',
    ModeOfPay:'CASH',
    ModeOfPayAr:'CASH AR',
    PlaceOfSupply:'Emirate' 
  },{
    Name:"ClientName4",
    Add1:'fzllc',
    Add2:'address2',
    Add3:'address 3',
    BuyerOrderNo:135790,
    DespThru:'nith',
    ModeOfPay:'CASH',
    ModeOfPayAr:'CASH AR',
    PlaceOfSupply:'Emirate' 
  },{
    Name:"ClientName5",
    Add1:'fzllc',
    Add2:'address2',
    Add3:'address 3',
    BuyerOrderNo:135790,
    DespThru:'nith',
    ModeOfPay:'CASH',
    ModeOfPayAr:'CASH AR',
    PlaceOfSupply:'Emirate' 
  }];

  ClientCompany: ClientComp={
    Name:"ClientName",
    Add1:'fzllc',
    Add2:'address2',
    Add3:'address 3',
    BuyerOrderNo:135790,
    DespThru:'nith',
    ModeOfPay:'CASH',
    ModeOfPayAr:'CASH AR',
    PlaceOfSupply:'Emirate'  
  };

  TotalInvAmnt: number;
  MainInvVar: MainInv={
    InvNoNext:1234,
    Locked:false
  };
  constructor() { }

  ngOnInit() {
    this.dt= new Date();
    this.trnNo=100397147800003;
    this.emailID="info@sashfoodstuff.ae";
   this.MainInvVar.InvNoNext=123467676767;
   this.currentInv=this.MainInvVar.InvNoNext;
    this.MainInvVar.Locked=true;
   
    
  }

  selectCompany(){
    do{
      this.i=this.i+1;
      this.ClientCompany=this.CompanyList[this.i];
    }while(this.selected!=this.CompanyList[this.i].Name);
    this.i=-1;
  console.log(this.selected);
  }

  additem(k){
    // this.InvItem[k].Name='revoke';
    console.log('here');
    
    this.InvItem[k].TaxableAmnt=this.InvItem[k].Billed*this.InvItem[k].Rate;
    this.InvItem[k].TaxAmnt=this.InvItem[k].TaxableAmnt*(this.InvItem[k].Tax/100);
    this.InvItem[k].Amount=this.InvItem[k].TaxAmnt+this.InvItem[k].TaxableAmnt;
    console.log('taxable'+this.InvItem[k].TaxableAmnt);
    console.log('tax'+this.InvItem[k].TaxAmnt);
    console.log('amt'+this.InvItem[k].Amount);
    
    this.totalcheck();
  }

  totalcheck(){
    this.k=0;
    this.TotalInvAmnt=0;
    this.invoicesum.Total_Billed_Qty=0;
    for(this.k=0;this.k<this.InvItem.length;this.k++){
      if(this.InvItem[this.k].Amount>0){
        this.TotalInvAmnt+=this.InvItem[this.k].Amount;
        this.invoicesum.Total_Tax_Amt+=this.InvItem[this.k].Tax;
        this.invoicesum.Total_Taxable_Amt+=this.InvItem[this.k].TaxableAmnt;
        this.invoicesum.Total_Billed_Qty+=this.InvItem[this.k].Billed;
      }
    }
    this.invoicesum.Total_Amt=this.TotalInvAmnt;
  }

  selectItem(item,o){
    this.k=0;
    console.log('listitem:'+this.ItemList.length);
    console.log(item+','+o);
    
    for(this.k=0;this.k<this.ItemList.length;this.k++){
      if(this.ItemList[this.k].Name==item){
        // this.InvItem[o].=this.ItemList[this.k];
        this.InvItem[o].Name=this.ItemList[this.k].Name;
        this.InvItem[o].Billed=this.ItemList[this.k].Billed;
        this.InvItem[o].Rate=this.ItemList[this.k].Rate;
        this.InvItem[o].Qty=this.ItemList[this.k].Qty;
        this.InvItem[o].Tax=this.ItemList[this.k].Tax;
        this.InvItem[o].TaxableAmnt=this.InvItem[o].Billed*this.InvItem[o].Rate;
        this.InvItem[o].TaxAmnt=this.InvItem[o].TaxableAmnt*(this.InvItem[o].Tax/100);
        this.InvItem[o].Amount=this.InvItem[o].TaxAmnt+this.InvItem[o].TaxableAmnt;
        console.log(this.ItemList[this.k].Name);
        console.log(this.InvItem[o].Name);
        

        console.log('runs at '+this.k);
      }
      
    }
    
        // this.additem(o);
        // this.totalcheck();
  }

  counterfilling()
{
  
  this.k=0;
  while(this.k<this.count){
    this.item_array_counter[this.k]=this.k;
    this.InvItem[this.k].Name='item '+this.k;
    console.log(this.k);
    console.log(this.item_array_counter[this.k]);
    this.k+=1;
  }
}

AddCounter(){
  this.item_array_counter[this.item_array_counter.length]=this.item_array_counter.length;
  this.buffer = this.item_array_counter[this.item_array_counter.length];
  this.InvItem[this.buffer].Name='item '+this.buffer;
}


}
