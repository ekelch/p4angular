import { Component, Input, OnInit } from '@angular/core';
import { Account } from 'src/app/interfaces/account';

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.component.html',
  styleUrls: ['./edit-account.component.css']
})
export class EditAccountComponent implements OnInit {

  @Input() display: boolean = false;
  @Input() account!: Account;
  displayDeposit: boolean = false;
  displayWithdraw: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.toggle();
  }

  toggle(): void{
    this.display = !this.display;
  }

  toggleDeposit(): void{
    this.displayDeposit = !this.displayDeposit;
  }

  toggleWithdraw(): void{
    this.displayWithdraw = !this.displayWithdraw;
  }

}
