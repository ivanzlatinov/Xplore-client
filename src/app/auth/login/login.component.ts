import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
   
  constructor(private acrtivatedRoute: ActivatedRoute,private router: Router, private authService: AuthService) {
  
    
  }
  loginHandler(form: NgForm): void {
    if(form.invalid) { return; }
    this.authService.user = {
       username: 'josh',
        email: 'josh123@gmail.com',
       password: '123'
     }as any
     const returnUrl = this.acrtivatedRoute.snapshot.queryParams['returnUrl'] || '/'

     this.router.navigate([returnUrl])

  }
}
