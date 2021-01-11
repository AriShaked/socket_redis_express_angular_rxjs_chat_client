import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private userName = new BehaviorSubject(this.userName);


  constructor(private http: HttpClient) { }

  url = 'http://localhost:8080';


  getPwByUserName(userName, password) {

    const options = { withCredentials: true };

    const data = {
      'password': password
    };
    return this.http.post(`${this.url}/login/${userName}`, data, options);
  }


  setUserName(userName) {
    return this.userName.next(userName);
  }


  getuserName() {
    return this.userName;
  }


  checkIfUserLogin() {
    return this.http.get(`${this.url}/loginValidation`, {
      withCredentials: true  // <=========== important!
    });
  }


}
