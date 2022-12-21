import { Component } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { matchPasswordValidator } from 'src/app/shared/validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  form = this.fb.group({
   email: ['', [Validators.required, Validators.email]],
   username: ['', [Validators.required, Validators.minLength(5)]],
   passwords: this.fb.group({
    password: ['', [Validators.required, Validators.minLength(5)]],
    repass: []
   },{
    validators: [matchPasswordValidator('password', 'repass') ]
   })
  }); 
 
   
  constructor(private fb: FormBuilder) { }

  registerHandler(){
    console.log(this.form.value)
  }

}
