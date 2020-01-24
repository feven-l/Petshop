import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-edit-pet',
  templateUrl: './edit-pet.component.html',
  styleUrls: ['./edit-pet.component.css']
})
export class EditPetComponent implements OnInit {
  petId: any;
  petToEdit: any;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this.petToEdit = {};
    this._route.params.subscribe((params: Params) => {
      this.petId = params['id'];
    })
    this.onePet();
  }
  onePet(){
    let obs = this._httpService.onePet(this.petId);
    obs.subscribe((data:any) => {
      console.log(data);
      if(data.message == "success"){
        console.log(data.results);
        this.petToEdit = data.results;
      }else{
        console.log("wrong");
      }
    })
  }
  editPet(petToEdit){
    let obs = this._httpService.editPet(petToEdit);
    obs.subscribe((data:any) => {
      if(data.message == "success"){
        console.log("edit success");
        this._router.navigate(['/pets', petToEdit._id]);
      }else{
        console.log("failed");
      }
    })
  }

}
