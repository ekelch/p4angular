import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Account } from 'src/app/interfaces/account';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {

  @Input() account!: Account;

  depositForm = new FormGroup({
    depo: new FormControl()
  })

  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit():void {
    let amount = this.depositForm.get('depo')?.value;
    this.accountService.deposit(this.account.id, amount).subscribe(
      (response) => console.log(response),
      (error) => console.log(error),
      () => window.location.reload()
    )
  }

}
