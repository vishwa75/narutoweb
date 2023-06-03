import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  {path:'', redirectTo: 'auth',pathMatch:'full'},
  {
    path:'auth',
    component:AuthComponent,
    loadChildren: ()=>{
      return import('./auth/auth.module').then((authmod)=>authmod.AuthModule)
    }
  },
  {
    path:'landing',
    component:LandingComponent,
    loadChildren: ()=>{
      return import('./landing/landing.module').then((landmod)=>landmod.LandingModule)
    }
  },
  {path:'**',redirectTo:'auth'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
