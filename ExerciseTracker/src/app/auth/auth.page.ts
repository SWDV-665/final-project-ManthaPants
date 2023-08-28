import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage {
  email: string = '';      
  password: string = '';   

  constructor(private navCtrl: NavController) {}

  login() {
    if (this.email === 'user@example.com' && this.password === 'password') {
      console.log('Login successful');
    } else {
      console.log('Login failed. Invalid credentials.');
    }
  }
}
