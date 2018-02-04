import { Component, OnInit } from '@angular/core';
import { ClientComp,MainInv } from './ClientComp';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit {

  
  dt :Date;
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
  MainInvVar: MainInv={
    InvNoNext:1234,
    Locked:true
  };
  constructor() { }

  ngOnInit() {
    this.dt= new Date();
    this.trnNo=1098988234923648;
    this.emailID="info@sashfoodstuff.ae";
   this.ClientCompany.Name="test";
   this.MainInvVar.InvNoNext=123467676767;

  }

}
