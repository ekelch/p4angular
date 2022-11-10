import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })

  constructor(private userService: UserserviceService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    let username:string = this.loginForm.get('username')?.value || '';
    let password:string = this.loginForm.get('password')?.value || '';
    this.userService.login(username, password).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['/user'])
        sessionStorage.setItem('user', JSON.stringify(response))
      },
      (error) => console.log(error)
    )
  }

}
