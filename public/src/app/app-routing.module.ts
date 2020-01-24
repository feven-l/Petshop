import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowPetsComponent } from './show-pets/show-pets.component';
import { AddPetComponent } from './add-pet/add-pet.component';
import { PetDetailComponent } from './pet-detail/pet-detail.component';
import { EditPetComponent } from './edit-pet/edit-pet.component';


const routes: Routes = [
  { path: '', component: ShowPetsComponent},
  { path: 'pets/new', component: AddPetComponent},
  { path: 'pets/:id', component: PetDetailComponent},
  { path: 'pets/edit/:id', component: EditPetComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
