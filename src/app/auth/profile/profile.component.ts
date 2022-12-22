import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
   
  EMAIL_PATTERN = /^[a-z0-9A-Z\.-]{3,}@[a-z]+\.[a-z]+$/

   showEditMode = false;
   formSubmited = false;
   
   get user(){
    const { username, email } = this.authService.user!
    return {
      username,
      email
    }
   }

   form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, Validators.pattern(this.EMAIL_PATTERN)]],
    
   })
   
   constructor(private fb: FormBuilder, private authService: AuthService) {
    this.form.setValue(this.user)
   }
   
   toggleEditMode(): void {
    this.showEditMode = !this.showEditMode;
    if(this.showEditMode) {
      this.formSubmited = false;
    }
   }

   saveProfile(): void {
    this.formSubmited = true;
    if(this.form.invalid) { return; }
    const { username, email } = this.form.value;
    this.authService.user = {
      username, 
      email
    } as any;
    this.toggleEditMode();
   }

  }
