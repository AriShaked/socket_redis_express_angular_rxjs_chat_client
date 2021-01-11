import { ChatService } from './../../chat.service';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../../authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, observable } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: Observable<any>;
  stringeResult: any;
  parsed: any;
  userName: any;

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit() {

    // this.authenticationService.getuserName().subscribe(data => {
    //   this.user = data;
    //   console.log(this.user);
    //   if (data) {
    //     this.userName = data;
    //     //     this.router.navigate([`/login`]);
    //   } else {
    //     // });

    this.authenticationService.checkIfUserLogin().subscribe((result: any) => {
      // console.log('fffffffffffffffffffffffffffffffddddddddddddd');
      // console.log(result);
      if (result) {
        // console.log('vvvvvvvvvvvvvvvvvvvvvvvvvvvvv');
        this.stringeResult = JSON.stringify(result);
        this.userName = JSON.parse(this.stringeResult);

        this.authenticationService.setUserName(this.userName);

        this.router.navigate([`/home/${this.userName}`]);
      } else {
        this.router.navigate([`/login`]);
      }
    });
    //  }

  }
  // )
  // }
}

