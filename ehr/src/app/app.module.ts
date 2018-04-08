import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { PatientComponent } from './patient/patient.component';
import { SearchPatientComponent} from './searchpatient/searchpatient.component';
import { NewPatientDescriptionComponent} from './newpatientdescription/newpatientdescription.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PatientComponent,
    SearchPatientComponent,
    NewPatientDescriptionComponent
  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot([
      { path: 'patient', component: PatientComponent },
      { path: 'searchpatient', component: SearchPatientComponent},
      { path: 'newpatientdescription', component: NewPatientDescriptionComponent}


    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
