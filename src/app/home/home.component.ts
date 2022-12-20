import { Component, DoCheck } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements DoCheck {
  //get isLoggedIn(){
  //  return this.authService.isLoggedIn
  //}
  
  //isLoggedIn = false;

  constructor(private authService: AuthService){

  }
  
   ngDoCheck(): void {
  // this.isLoggedIn = this.authService.isLoggedIn;
   }
}
