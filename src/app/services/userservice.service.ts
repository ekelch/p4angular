import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  private userUrl = "/api/user";
  constructor(private http: HttpClient) { }

  public getUser(id: string): Observable<User> {
    let getUrl = environment.baseUrl + this.userUrl + '/' + id;
    console.log(getUrl)
    return this.http.get<User>(getUrl, {headers: environment.headers, withCredentials: environment.withCredentials})
  }

  public login(username: string, password: string): Observable<User> {
    const payload = {username: username, password: password};
    let postUrl = environment.baseUrl + this.userUrl + '/login';
    return this.http.post<User>(postUrl, payload, {headers: environment.headers})
  }

}
