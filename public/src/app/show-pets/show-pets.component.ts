import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-show-pets',
  templateUrl: './show-pets.component.html',
  styleUrls: ['./show-pets.component.css']
})
export class ShowPetsComponent implements OnInit {
  pets: any;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.pets = [];
    this.getPetsFromService();
  }
  getPetsFromService(){
    let obs = this._httpService.getPets();
    obs.subscribe((data:any) => {
      this.pets = data.results;
    })
  }

}
