import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient ) { }

  getGitUserData(){
    return this.http.get('https://api.github.com/users');
    // https://jsonplaceholder.typicode.com/photos
  }

  

}
