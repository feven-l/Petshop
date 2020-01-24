import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-pet-detail',
  templateUrl: './pet-detail.component.html',
  styleUrls: ['./pet-detail.component.css']
})
export class PetDetailComponent implements OnInit {
  thisPet: any;
  petId: any;
  clicked: boolean;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this.thisPet = {};
    this._route.params.subscribe((params: Params) => {
      this.petId = params['id'];
    })
    this.onePet();
    this.clicked = false;
  }
  onePet(){
    let obs = this._httpService.onePet(this.petId);
    obs.subscribe((data:any) => {
      console.log(data);
      if(data.message == "success"){
        console.log(data.results);
        this.thisPet = data.results;
      }else{
        console.log("wrong");
      }
    })
  }
  deletePet(delPet){
    let obs = this._httpService.deletePet(delPet._id);
    obs.subscribe((data:any) => {
      if(data.message == "success"){
        console.log("delete success");
        this._router.navigate(['']);
      }else{
        console.log("failed");
      }
    })
  }
  likePet(likeThis){
    let obs = this._httpService.likePet(likeThis._id);
    this.onePet();
    obs.subscribe((data:any) => {
      if(data.message == "success"){
        console.log(data.results);
        this.clicked = true;
      }else{
        console.log("couldn't like");
      }
    })
  }

}
