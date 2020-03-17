import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationFormComponent } from "./registration-form/registration-form.component";
import { homeComponent } from "./home/home.component";
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: " ",
    component: homeComponent,
  },

  {
    path: "home",
    component: homeComponent,
  },

  {
    path: "registration-form",
    component: RegistrationFormComponent
  },

  {
    path: "dashboard",
    component: DashboardComponent
  },

  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
