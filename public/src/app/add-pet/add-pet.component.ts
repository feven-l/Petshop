import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router'

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.css']
})
export class AddPetComponent implements OnInit {
  newPet: any;
  dupError: boolean;
  constructor(private _httpService: HttpService,
            private _route: ActivatedRoute,
            private _router: Router
            ) { }

  ngOnInit() {
    this.newPet = {name: "", petType: "", description: "", skillOne: "", skillTwo: "", skillThree: ""};
    this.dupError = false;
  }
  createPet(newPet){
    let obs = this._httpService.createPet(newPet);
    obs.subscribe((data:any) => {
      if(data.message == "success"){
        console.log("success");
        this._router.navigate(['']);
      }else{
        this.dupError = true;
      }
    })
  }

}
