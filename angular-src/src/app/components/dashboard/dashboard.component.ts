import { Component, OnInit } from "@angular/core";
import { ClientComp, MainInv, itemVal, InvSummary } from "./ClientComp";
@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  AddButtonShow: boolean = true;
  currentInv: number;
  dt: Date;
  i: number = -1;
  k: number = 0;
  buffer: number;
  showinvoice: boolean = true;
  selected: string;
  trnNo: number;
  emailID: string;
  currComp: string;
  count: number = 1;
  TotalInvAmnt: number;
  item_array_counter: Array<number> = [0];
  total_tax_amt: number = 0;

  

  InvItem: itemVal[] = [
    {
      Name: "",
      Billed: 0.00,
      Rate: 0.00,
      Qty: "Kg",
      Tax: 0.00,
      TaxableAmnt: 0.00,
      TaxAmnt: 0.00,
      Amount: 0.00
    },
    {
      Name: "",
      Billed: 0.00,
      Rate: 0.00,
      Qty: "Kg",
      Tax: 0.00,
      TaxableAmnt: 0.00,
      TaxAmnt: 0.00,
      Amount: 0.00
    },
    {
      Name: "",
      Billed: 0.00,
      Rate: 0.00,
      Qty: "Kg",
      Tax: 0.00,
      TaxableAmnt: 0.00,
      TaxAmnt: 0.00,
      Amount: 0.00
    },
    {
      Name: "",
      Billed: 0.00,
      Rate: 0.00,
      Qty: "Kg",
      Tax: 0.00,
      TaxableAmnt: 0.00,
      TaxAmnt: 0.00,
      Amount: 0.00
    },
    {
      Name: "",
      Billed: 0.00,
      Rate: 0.00,
      Qty: "Kg",
      Tax: 0.00,
      TaxableAmnt: 0.00,
      TaxAmnt: 0.00,
      Amount: 0.00
    },
    {
      Name: "",
      Billed: 0.00,
      Rate: 0.00,
      Qty: "Kg",
      Tax: 0.00,
      TaxableAmnt: 0.00,
      TaxAmnt: 0.00,
      Amount: 0.00
    },
    {
      Name: "",
      Billed: 0.00,
      Rate: 0.00,
      Qty: "Kg",
      Tax: 0.00,
      TaxableAmnt: 0.00,
      TaxAmnt: 0.00,
      Amount: 0.00
    },
    {
      Name: "",
      Billed: 0.00,
      Rate: 0.00,
      Qty: "Kg",
      Tax: 0.00,
      TaxableAmnt: 0.00,
      TaxAmnt: 0.00,
      Amount: 0.00
    }
  ];

  ItemList: itemVal[] = [
    {
      Name: "Mutton",
      Billed: 1.00,
      Rate: 24.00,
      Qty: "Kg",
      Tax: 5.00,
      TaxableAmnt: 0.00,
      TaxAmnt: 0.00,
      Amount: 0.00
    },
    {
      Name: "Beef",
      Billed: 1.00,
      Rate: 26.00,
      Qty: "Kg",
      Tax: 5.00,
      TaxableAmnt: 0.00,
      TaxAmnt: 0.00,
      Amount: 0.00
    },
    {
      Name: "Mutton SP",
      Billed: 1.00,
      Rate: 23.00,
      Qty: "Kg",
      Tax: 5.00,
      TaxableAmnt: 0.00,
      TaxAmnt: 0.00,
      Amount: 0.00
    },
    {
      Name: "Beef SP",
      Billed: 0.00,
      Rate: 0.00,
      Qty: "Kg",
      Tax: 5.00,
      TaxableAmnt: 0.00,
      TaxAmnt: 0.00,
      Amount: 0.00
    },
    {
      Name: "Sausage",
      Billed: 0.00,
      Rate: 0.00,
      Qty: "Kg",
      Tax: 5.00,
      TaxableAmnt: 0.00,
      TaxAmnt: 0.00,
      Amount: 0.00
    },
    {
      Name: "itemName_6",
      Billed: 0.00,
      Rate: 0.00,
      Qty: "Kg",
      Tax: 5.00,
      TaxableAmnt: 0.00,
      TaxAmnt: 0.00,
      Amount: 0.00
    },
    {
      Name: "itemName_7",
      Billed: 0.00,
      Rate: 0.00,
      Qty: "Kg",
      Tax: 5.00,
      TaxableAmnt: 0.00,
      TaxAmnt: 0.00,
      Amount: 0.00
    },
    {
      Name: "itemName_8",
      Billed: 0.00,
      Rate: 0.00,
      Qty: "Kg",
      Tax: 5.00,
      TaxableAmnt: 0.00,
      TaxAmnt: 0.00,
      Amount: 0.00
    }
  ];

  invoicesum: InvSummary = {
    Invoice_No: 0,
    Currency: "AED",
    Total_Billed_Qty: 0,
    Total_Amt: 0,
    Total_Taxable_Amt: 0,
    Total_Tax_Amt: 0,
    Total_Amt_inWords: "string",
    Total_VAT_Amt_inWords: "string"
  };
  
  CompanyList: ClientComp[] = [
    {
      Name: "ClientName1",
      Add1: "fzllc",
      Add2: "address2",
      Add3: "address 3",
      BuyerOrderNo: 135790,
      DespThru: "nith",
      ModeOfPay: "CASH",
      ModeOfPayAr: "CASH AR",
      PlaceOfSupply: "Emirate"
    },
    {
      Name: "ClientName2",
      Add1: "fzllc",
      Add2: "address2",
      Add3: "address 3",
      BuyerOrderNo: 135790,
      DespThru: "nith",
      ModeOfPay: "CASH",
      ModeOfPayAr: "CASH AR",
      PlaceOfSupply: "Emirate"
    },
    {
      Name: "ClientName3",
      Add1: "fzllc",
      Add2: "address2",
      Add3: "address 3",
      BuyerOrderNo: 135790,
      DespThru: "nith",
      ModeOfPay: "CASH",
      ModeOfPayAr: "CASH AR",
      PlaceOfSupply: "Emirate"
    },
    {
      Name: "ClientName4",
      Add1: "fzllc",
      Add2: "address2",
      Add3: "address 3",
      BuyerOrderNo: 135790,
      DespThru: "nith",
      ModeOfPay: "CASH",
      ModeOfPayAr: "CASH AR",
      PlaceOfSupply: "Emirate"
    },
    {
      Name: "ClientName5",
      Add1: "fzllc",
      Add2: "address2",
      Add3: "address 3",
      BuyerOrderNo: 135790,
      DespThru: "nith",
      ModeOfPay: "CASH",
      ModeOfPayAr: "CASH AR",
      PlaceOfSupply: "Emirate"
    }
  ];

  ClientCompany: ClientComp = {
    Name: "",
    Add1: "",
    Add2: "",
    Add3: "",
    BuyerOrderNo: 0,
    DespThru: "",
    ModeOfPay: "",
    ModeOfPayAr: "",
    PlaceOfSupply: ""
  };

  MainInvVar: MainInv = {
    InvNoNext: 1234,
    Locked: false
  };
  constructor() {}

  ngOnInit() {
    this.dt = new Date();
    this.trnNo = 100397147800003;
    this.emailID = "info@sashfoodstuff.ae";
    //  this.MainInvVar.InvNoNext=123467676767;
    this.currentInv = this.MainInvVar.InvNoNext;
    this.MainInvVar.Locked = true;
  }

  selectCompany() { 
    console.log("selectCompany");
    do {
      this.i = this.i + 1;
      this.ClientCompany = this.CompanyList[this.i];
    } while (this.selected != this.CompanyList[this.i].Name);
    this.i = -1;
    console.log(this.selected);
  }

  additem(k) {
    console.log("additem");
    this.InvItem[k].TaxableAmnt = this.InvItem[k].Billed * this.InvItem[k].Rate;
    this.InvItem[k].TaxAmnt =
      this.InvItem[k].TaxableAmnt * (this.InvItem[k].Tax / 100);
    this.InvItem[k].Amount =
      this.InvItem[k].TaxAmnt + this.InvItem[k].TaxableAmnt;
    console.log("taxable" + this.InvItem[k].TaxableAmnt);
    console.log("tax" + this.InvItem[k].TaxAmnt);
    console.log("amt" + this.InvItem[k].Amount);

    this.totalcheck();
  }

  totalcheck() {
    console.log("totalcheck");
    this.k = 0;
    this.TotalInvAmnt = 0.00;
    this.invoicesum.Total_Billed_Qty = 0.00;
    this.total_tax_amt = 0.00;

    for (this.k = 0; this.k < this.InvItem.length; this.k++) {
      if (this.InvItem[this.k].Amount > 0) {
        this.TotalInvAmnt += this.InvItem[this.k].Amount;
        this.invoicesum.Total_Tax_Amt += this.InvItem[this.k].TaxAmnt;
        this.invoicesum.Total_Taxable_Amt += this.InvItem[this.k].TaxableAmnt;
        this.invoicesum.Total_Billed_Qty += this.InvItem[this.k].Billed;
      }
    }
    this.invoicesum.Total_Amt = this.TotalInvAmnt;
    this.total_tax_amt = this.invoicesum.Total_Tax_Amt / this.TotalInvAmnt;
  }

  selectItem(item, o) {
    console.log("selectItem");
    this.k = 0;
    console.log("listitem:" + this.ItemList.length);
    console.log(item + "," + o);

    for (this.k = 0; this.k < this.ItemList.length; this.k++) {
      if (this.ItemList[this.k].Name == item) {
        // this.InvItem[o].=this.ItemList[this.k];
        this.InvItem[o].Name = this.ItemList[this.k].Name;
        this.InvItem[o].Billed = this.ItemList[this.k].Billed;
        this.InvItem[o].Rate = this.ItemList[this.k].Rate;
        this.InvItem[o].Qty = this.ItemList[this.k].Qty;
        this.InvItem[o].Tax = this.ItemList[this.k].Tax;
        this.InvItem[o].TaxableAmnt =
          this.InvItem[o].Billed * this.InvItem[o].Rate;
        this.InvItem[o].TaxAmnt =
          this.InvItem[o].TaxableAmnt * (this.InvItem[o].Tax / 100);
        this.InvItem[o].Amount =
          this.InvItem[o].TaxAmnt + this.InvItem[o].TaxableAmnt;
        console.log(this.ItemList[this.k].Name);
        console.log(this.InvItem[o].Name);

        console.log("runs at " + this.k);
      }
    }

    // this.additem(o);
    this.totalcheck();
  }

  counterfilling() {
    console.log("counterfilling");
      this.k = 0;
      while (this.k < this.count) {
        if(this.item_array_counter.length==8){
          console.log("Maximum limit reached");
          }else{
          this.item_array_counter[this.k] = this.k;
          this.InvItem[this.k].Name = "item " + this.k;
          console.log(this.k);
          console.log(this.item_array_counter[this.k]);
        }
        this.k += 1;
    }
  }

  AddCounter() {
    console.log("AddCounter");
    console.log(this.item_array_counter);
    console.log(this.item_array_counter.length);
    
    this.k=this.item_array_counter.length;
    this.item_array_counter[this.k] = this.item_array_counter.length;
    this.AddButtonShow = true;
    if (this.item_array_counter.length== 8) {
      this.AddButtonShow = false;
    }
  }

  print() {
    console.log("print");
    window.print();
  }

  SavetoDB()
  {
    this.showinvoice=!this.showinvoice;
    
    
  }
}
