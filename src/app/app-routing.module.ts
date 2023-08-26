import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
  {
    path:'',
    loadChildren:()=> import('./student/student.module').then((m)=>m.StudentModule) //lazy loading
  },
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'aboutus',
    component:AboutUsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
