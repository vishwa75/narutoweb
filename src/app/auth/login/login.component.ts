import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string | undefined;
  password: string | undefined;
  incorrectPs: boolean = false;

  constructor(private router: Router) { }

  onSubmit() {
    
    // Send form data to server or perform other actions
    if (this.email == "naruto@gmail.com" && this.password == "naruto") {
      console.log("Email: " + this.email);
      console.log("Password: " + this.password);  
      this.router.navigate(['/landing/naruto/cardchar']);
  }else{
    console.log("incorrect Password");
    this.incorrectPs = true;
    console.log("Email: " + this.email);
    console.log("Password: " + this.password); 
    this.email = "";
    this.password=""
  }
    
  }

}
