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
      },
      { 
        Id: 6,
        date: new Date(),
        description: "Chloe",
        amount: 500                  
      },
      { 
        Id: 7,
        date: new Date(),
        description: "KFC",
        amount: -199                  
      },
      { 
        Id: 8,
        date: new Date(),
        description: "Nandos",
        amount: -220                  
      },
      { 
        Id: 9,
        date: new Date(),
        description: "Rent",
        amount: -4500                  
      }
    ];
  }
}


