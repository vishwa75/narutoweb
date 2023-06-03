import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { TopnavComponent } from './topnav/topnav.component';
import { CharactercardComponent } from './charactercard/charactercard.component';
import { AllcharactureComponent } from './allcharacture/allcharacture.component';
import { TailedbeastComponent } from './tailedbeast/tailedbeast.component';
import { VillagesComponent } from './villages/villages.component';
import { HokageComponent } from './hokage/hokage.component';
import { AkatsukiComponent } from './akatsuki/akatsuki.component';
import { NarutoshareModule } from '../-narutoshare/-narutoshare.module'


@NgModule({
  declarations: [
    LandingComponent,
    TopnavComponent,
    CharactercardComponent,
    AllcharactureComponent,
    TailedbeastComponent,
    VillagesComponent,
    HokageComponent,
    AkatsukiComponent,
    
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    NarutoshareModule,
    FormsModule
  ]
})
export class LandingModule { }
