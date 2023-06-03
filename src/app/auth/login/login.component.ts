import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import logshock from '../../../assets/loginShock.json'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string | undefined;
  password: string | undefined;
  incorrectPs: boolean = false;
  stars = 0;
  warningLine: string | undefined;
  numarr: any[] = [];
  ls: any[] =[]

  constructor(private router: Router) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  
  onCardClick() {
    this.ls = logshock;
  }

  onSubmit() {
    
    // Send form data to server or perform other actions
    if (this.email == "naruto@gmail.com" && this.password == "naruto") {
      console.log("Email: " + this.email);
      console.log("Password: " + this.password);  
      this.router.navigate(['/landing/naruto/cardchar']);
  }else{
    if(this.stars < 3){
    this.warningLine = "incorrect Password"
    this.incorrectPs = true;
    this.stars++   
    if (logshock.length > 0) {
      const firstItem = logshock.shift(); // Remove the first item from logshock
      this.numarr.push(firstItem.epath); // Push the "epath" value to ls
    }
    
    }else{
      this.warningLine = "wasted!! account locked, contact sysadmin"
    }
    
  }
    
  }

}
