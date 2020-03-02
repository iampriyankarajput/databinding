import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertyComponent } from './property/property.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
// import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:'',
    component:WelcomeComponent
  },
  {
    path:'inter',
    component:InterpolationComponent
  },
  {
    path:'prop',
    component:PropertyComponent
  },
  {
    path:'event',
    component:EventbindingComponent
  },
  // {
  //   path:'login',
  //   component:LoginComponent
  // },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
