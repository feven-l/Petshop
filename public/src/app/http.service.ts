import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  getPets(){
    return this._http.get('/pets');
  }
  createPet(newPet){
    return this._http.post('/pets', newPet);
  }
  onePet(id){
    return this._http.get(`/pets/${id}`);
  }
  editPet(petToEdit){
    return this._http.put(`/pets/${petToEdit._id}`, petToEdit);
  }
  deletePet(petId){
    return this._http.delete(`/pets/${petId}`);
  }
  likePet(petId){
    return this._http.put(`/pets/like/${petId}`, null);
  }

  constructor(private _http: HttpClient) { }
}
