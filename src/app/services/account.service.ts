import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Account } from '../interfaces/account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private accountURL = '/api/account';
  constructor(private http: HttpClient) { }

public deposit(id: number, depositAmount: number) {
  let depositURL = environment.baseUrl + this.accountURL + '/deposit';
  let payload = {id: id, amount: depositAmount};
  return this.http.put<Account>(depositURL, payload, {headers: environment.headers})
}

public withdraw(id: number, withdrawAmount: number) {
  let withdrawURL = environment.baseUrl + this.accountURL + '/withdraw';
  let payload = {id: id, amount: withdrawAmount};
  return this.http.put<Account>(withdrawURL, payload, {headers: environment.headers})
}

}
