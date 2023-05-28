

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

  constructor(private router: Router) { }
 
  nd: any[] =[]
 
  ngOnInit(): void {
   this.nd = narutojson;
  }


  filterCards() {
    if (!this.searchTerm) {
      this.nd = narutojson;
    } else {
      this.nd = narutojson.filter((nu: { name: string; }) =>
        nu.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }
  

  onCardClick() {
    
  }
  

}

