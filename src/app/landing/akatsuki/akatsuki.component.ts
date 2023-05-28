import { Component } from '@angular/core';
import { Router } from '@angular/router';
import ak from '../../../assets/akatsuki.json';
import akh from '../../../assets/akatsukiheader.json';

@Component({
  selector: 'app-akatsuki',
  templateUrl: './akatsuki.component.html',
  styleUrls: ['./akatsuki.component.css']
})
export class AkatsukiComponent {

  constructor(private router: Router) { }
 
  akat: any[]= [];
  
  akath : any[]=[];
  
   ngOnInit(): void {
     this.akat = ak;
     this.akath=akh;
   }

}
