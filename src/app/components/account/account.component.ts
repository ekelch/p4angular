import { Component, Input, OnInit } from '@angular/core';
import { Account } from 'src/app/interfaces/account';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  @Input() account!: Account;
  displayEdit: boolean = false;

  constructor(private userService: UserserviceService) { }

  ngOnInit(): void {
    
  }

  onClick() {
    this.displayEdit = !this.displayEdit;
  }

}
