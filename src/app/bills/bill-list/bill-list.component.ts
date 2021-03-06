import { Component, Input, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";

import { Bill } from "../models//bill.model";
import { BillsService } from "../bills.services";

@Component({
  selector: "app-bill-list",
  templateUrl: "./bill-list.component.html",
  styleUrls: ["./bill-list.component.css"]
})
export class BillListComponent implements OnInit, OnDestroy {
  bills: Bill[] = [];
  isLoading = false;
  private billsSub: Subscription;

  constructor(public billsService: BillsService) {}

  ngOnInit() {
    this.isLoading = true;
    this.billsService.getBills();
    this.billsSub = this.billsService
      .getBillUpdateListener()
      .subscribe((bills: Bill[]) => {
        this.isLoading = false;
        this.bills = bills;
        //console.log("********************");
        //console.log(this.customers);
        console.log(this.bills.length);
      });
  }
  onDelete(billId: string) {
    //this.billsService.deleteBill(billId);
  }
  ngOnDestroy() {
    this.billsSub.unsubscribe();
  }
}
