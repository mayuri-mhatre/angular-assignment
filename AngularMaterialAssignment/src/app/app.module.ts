import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/Material-module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { homeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    RegistrationFormComponent,
    homeComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
