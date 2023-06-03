import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopnavComponent } from './topnav/topnav.component';
import { CharactercardComponent } from './charactercard/charactercard.component';
import { AllcharactureComponent } from './allcharacture/allcharacture.component';
import { VillagesComponent } from './villages/villages.component';
import { TailedbeastComponent } from './tailedbeast/tailedbeast.component';
import { HokageComponent } from './hokage/hokage.component';
import { AkatsukiComponent } from './akatsuki/akatsuki.component';

const routes: Routes = [
  { path: 'naruto',component:TopnavComponent,
  children:[
    {
      path:"cardchar",component:CharactercardComponent,
    },
    {
      path:'allchar',component:AllcharactureComponent,
    },
    {
      path:"villages",component:VillagesComponent,
    },
    {
      path:"tailedbeast",component:TailedbeastComponent,
    },
    {
      path:"hokage",component:HokageComponent,
    },
    {
      path:"Akatsuki",component:AkatsukiComponent,
    },
  ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
