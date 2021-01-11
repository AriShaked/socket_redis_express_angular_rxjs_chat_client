import { AuthenticationService } from './../../authentication.service';
import { Observable } from 'rxjs';
import { ChatService } from './../../chat.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';





@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css']
})
export class MainContainerComponent implements OnInit {
  user: string;
  message: string;
  channel: string;
  temp: any;
  messageHistoryArr;
  myName: Observable<string>;





  constructor(private chatService: ChatService, private route: ActivatedRoute, private router: Router,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {


    this.authenticationService.getuserName().subscribe(data => {
      this.myName = data;

      this.temp = localStorage.getItem('messageHistoryArr' + this.myName);
      this.messageHistoryArr = JSON.parse(this.temp);
      if (this.messageHistoryArr === null) {
        this.messageHistoryArr = [];

      }
    });

    this.chatService.joinedByChatMember().subscribe((data: any) => {
      this.messageHistoryArr.push(data);

    });


    this.chatService.newMessageRecived().subscribe((data: any) => {
      console.log(data);
      if (this.messageHistoryArr) {
        this.messageHistoryArr.push(data);
      }


    });
  }



  leaveConversation() {

    localStorage.setItem('messageHistoryArr' + this.myName, JSON.stringify(this.messageHistoryArr));

    this.router.navigate([`/home/${this.myName}`]);
  }



  sendMessage(message) {

    console.log(message);

    this.channel = window.location.pathname.split('/').slice(-1).slice(0)[0];
    console.log(this.channel);
    this.message = message;

    this.chatService.sendMessages({ message: this.myName + ' : ' + this.message, channel: this.channel });

  }
}
