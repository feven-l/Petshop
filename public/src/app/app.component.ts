import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'public';
  pets: any;
  constructor(private _httpService: HttpService){
  }
  ngOnInit(){
    this.pets = [];
    this.getQuotesFromService();
  }
  getQuotesFromService(){
    let obs = this._httpService.getPets();
    obs.subscribe((data:any) => {
      console.log(data.results);
      this.pets = data.results;
    })
  }

}
