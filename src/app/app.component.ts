import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'chatApp';
  user: any;
  usersList = [];
  constructor(private route: ActivatedRoute, private router: Router) { }
  ngOnInit() {


  }

}