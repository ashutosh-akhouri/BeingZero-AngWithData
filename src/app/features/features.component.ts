import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {
  users:any = []

  constructor(private data : DataService) { }

  ngOnInit() {
    this.data.getGitUserData().subscribe(d => {
      this.users = d;
    })
  }



}
