import { Component, OnInit } from '@angular/core';
import { ClientComp,MainInv,itemVal } from './ClientComp';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit {

  currentInv:number;
  dt :Date;
  InvItem: itemVal={
    Name: "String",
    Qty: 1,
    Rate:25.10,
    Billed: 114.00,
    Tax:5.00,
    TaxableAmnt:0,
    TaxAmnt:0,
    Amount:0
  };
  trnNo: number;
  emailID: string;
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
  //  this.ClientCompany.Name="test";
   this.MainInvVar.InvNoNext=123467676767;
   this.currentInv=this.MainInvVar.InvNoNext;
    this.MainInvVar.Locked=true;
    this.InvItem.Name='Mutton';
    this.InvItem.Amount=this.InvItem.Billed*this.InvItem.Rate;
    this.InvItem.TaxableAmnt=this.InvItem.Amount;
    this.InvItem.TaxAmnt=this.InvItem.Amount*this.InvItem.Tax;
    this.TotalInvAmnt=this.InvItem.Amount+this.InvItem.TaxAmnt;
    
  }



}
