import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchwebComponent } from './searchweb/searchweb.component';



@NgModule({
  declarations: [
    SearchwebComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[SearchwebComponent]
})
export class NarutoshareModule { }
