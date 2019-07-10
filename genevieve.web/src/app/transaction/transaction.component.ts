import { Component, OnInit } from '@angular/core';
import { transaction } from '../models/transaction';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {

  transactions: transaction[];

  constructor() { }

  ngOnInit() {
    this.transactions = 
    [
      { 
        Id: 1,
        date: new Date(),
        description: "Salary",
        amount: 10000                  
      },
      { 
        Id: 2,
        date: new Date(),
        description: "Insurance",
        amount: -1000                  
      },
      {   
        Id: 3,
        date: new Date(),
        description: "Car Payment",
        amount: -2000                  
      },
      { 
        Id: 4,
        date: new Date(),
        description: "Credit Card",
        amount: -1250                  
      },
      { 
        Id: 5,
        date: new Date(),
        description: "Vitality Cash Back",
        amount: 220                  
      }
    ];
  }
}


