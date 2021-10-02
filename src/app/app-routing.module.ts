import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { UsersListComponent } from './users-list/users-list.component'
import {UsersComponent} from '../app/users/users.component';
const routes: Routes = [
  { path: 'users', component:  UsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const userComponent = [UsersComponent]
