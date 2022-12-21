import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

   URL_PATTERN = /^https?:\/\/.+/i 

  constructor(private fb: FormBuilder){ }

  form = this.fb.group({
     destination: ['', [Validators.required]],
     price: ['', [Validators.required, Validators.min(0.01)]],
     people: ['', [Validators.required, Validators.min(0.01)]],
     imgUrl: ['', [Validators.required, Validators.pattern(this.URL_PATTERN)]],
     description: ['', [Validators.required, Validators.minLength(10)]]
  })

  newTripHandler(): void {
    console.log(this.form.value)
  }
}
