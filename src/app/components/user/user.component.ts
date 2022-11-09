import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/interfaces/account';
import { User } from 'src/app/interfaces/user';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  
  user?: User;
  accounts!: Account[];
  constructor(private userService: UserserviceService) { }

  ngOnInit(): void {

    this.userService.getUser().subscribe(
      (response) => {
        this.user = new User(response.id, response.username, response.password, response.firstName, response.lastName, response.permission, response.accounts);
        this.accounts = response.accounts;
      },
      (error) => console.log(error)
    )

  }

}
