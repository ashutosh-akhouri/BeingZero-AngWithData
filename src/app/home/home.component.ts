import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user:string = "TEXT"

  constructor() { }

  ngOnInit() {
  }

  btnClick(){
    this.user = this.user + " new text";
  }

}
