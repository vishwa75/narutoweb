
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import tb from '../../../assets/tailedbeast.json';
import tbh from '../../../assets/tailedbeastheader.json';

@Component({
  selector: 'app-tailedbeast',
  templateUrl: './tailedbeast.component.html',
  styleUrls: ['./tailedbeast.component.css']
})
export class TailedbeastComponent {

  constructor(private router: Router) { }
 
 tailb: any[]= [];
 
 tailbh : any[]=[];
 
  ngOnInit(): void {
    this.tailb = tb;
    this.tailbh=tbh;
  }

}
