import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScienceComponent } from './science/science.component';
import { SchoolComponent } from './school/school.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { PropertyComponent } from './property/property.component';
import { TwowayComponent } from './twoway/twoway.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    ScienceComponent,
    SchoolComponent,
    WelcomeComponent,
    InterpolationComponent,
    EventbindingComponent,
    PropertyComponent,
    TwowayComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
