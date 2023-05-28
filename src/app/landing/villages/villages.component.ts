import { Component } from '@angular/core';
import villagejson from '../../../assets/village.json';
import headervillagejson from '../../../assets/villageheader.json';

@Component({
  selector: 'app-villages',
  templateUrl: './villages.component.html',
  styleUrls: ['./villages.component.css']
})
export class VillagesComponent {

 
  vjs: any[] =[]
  vhjs: any[] =[]
 
  ngOnInit(): void {
   this.vjs = villagejson;
   this.vhjs = headervillagejson;
  }

}


