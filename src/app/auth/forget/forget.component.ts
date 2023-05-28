import { Component } from '@angular/core';



@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css']
})
export class ForgetComponent {
  email: string | undefined;

  resetPassword() {
    
    console.log('Resetting password for email:', this.email);
  }


}
