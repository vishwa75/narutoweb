import { Component } from '@angular/core';
import { Router } from '@angular/router';
import allc from '../../../assets/allCharacture.json';
import alh from '../../../assets/allcharheader.json';



@Component({
  selector: 'app-allcharacture',
  templateUrl: './allcharacture.component.html',
  styleUrls: ['./allcharacture.component.css']
})
export class AllcharactureComponent {


  constructor(private router: Router) { }
 
 allchar: any[]= [];
 
 allcharheader : any[]=[];
 
  ngOnInit(): void {
    this.allchar = allc;
    this.allcharheader=alh;
  }

}


