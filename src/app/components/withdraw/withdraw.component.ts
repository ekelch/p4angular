import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Account } from 'src/app/interfaces/account';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {

  @Input() account!: Account;

  withdrawForm = new FormGroup({
    withdraw: new FormControl()
  })

  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit():void {
    let amount = this.withdrawForm.get('withdraw')?.value;
    this.accountService.withdraw(this.account.id, amount).subscribe(
      (response) => console.log(response),
      (error) => console.log(error),
      () => window.location.reload()
    )
  }

}
