import { UsersService } from './../../users.service';
import { AuthenticationService } from './../../authentication.service';
import { Component, OnInit, Input } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  @Input() usersList = [];
  user: Observable<any>;


  constructor(private authenticationService: AuthenticationService, private usersService: UsersService, private router: Router) { }


  ngOnInit() {
    this.authenticationService.getuserName().subscribe(data => {
      this.user = data;
    });


    this.usersService.memberConnected().subscribe((data: any) => {
      console.log(data);
      this.usersList = data;
      console.log(this.usersList);

    });

    this.usersService.memberLeft().subscribe((data: any) => {
      console.log(data);
      this.usersList = data;
      console.log(this.usersList);

    });


  }

  newUserConnectToChat() {
    this.usersService.newUserConnected({ user: this.user });
  }

  openPrivateChannel(channel) {
    console.log('channel', channel);
    this.usersService.joinToUser({ 'channel': channel });
    this.router.navigate([`/home/${channel}`]);

  }
  quitChat() {
    this.usersService.userLeftChat({ user: this.user });
    this.router.navigate([`/login`]);
  }
}
