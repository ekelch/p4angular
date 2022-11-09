import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  private userUrl = "/api/user/test"; // TESTESTSETSETTSEESTTESTSETESTESTSETES

  constructor(private http: HttpClient) { }

  public getUser(): Observable<User> {
    return this.http.get<User>(environment.baseUrl + this.userUrl, {headers: environment.headers})
  }

}
