import { Observable } from 'rxjs';
import { AuthenticationService } from './../../authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  stringeResult: any;
  error: any;
  status: any;
  userName: Observable<any>;
  parsed: any;


  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  checkPwValidation(userName, password) {
    this.authenticationService.getPwByUserName(userName, password).subscribe((result: any) => {
      this.userName = userName;
      this.stringeResult = JSON.stringify(result);
      this.parsed = JSON.parse(this.stringeResult);


      if (this.parsed.result === 'please insert valid password and username') {
        return this.error = this.parsed.result;

      } else {

        console.log(this.parsed.result);

        if (this.parsed.result === 'passwordIsValid') {

          console.log(this.userName);

          this.authenticationService.setUserName(this.userName);

          this.router.navigate([`/home/${userName}`]);
        }

      }
    });
  }

}
