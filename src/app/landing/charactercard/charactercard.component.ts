

import { Component, OnInit } from '@angular/core';
import narutojson from '../../../assets/allCharacture.json';
import { Router } from '@angular/router';


@Component({
  selector: 'app-charactercard',
  templateUrl: './charactercard.component.html',
  styleUrls: ['./charactercard.component.css']
})
export class CharactercardComponent implements OnInit {
  
  
  
  searchTerm: string = '';
  noResult: Boolean = false;


  constructor(private router: Router) { }
 
  nd: any[] =[]
 
  ngOnInit(): void {
   this.nd = narutojson;
  }


  filterCards() {
    if (!this.searchTerm) {
      this.noResult = false;
      this.nd = narutojson;
    } else {
      this.noResult = false;
      this.nd = narutojson.filter((nu: { name: string; }) =>
        nu.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
    if(this.nd.length == 0){
     this.noResult=true
    }
  }
  

  onCardClick() {
    
  }
  

}

