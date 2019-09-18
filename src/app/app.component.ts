

import { Component } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

// export class AppComponent{
//  myform:FormGroup;
// submit=false ;
// name:string;
// password:string;

//   constructor(private fb:FormBuilder) {
//     this.myform = this.fb.group({
//       name:['', Validators.required],
//       password:['', Validators.required]
//     });
//    }

//    onSubmit(){
//     this.submit = true;
//     if (this.myform.valid) {
//       return;
//     }
//     console.log(this.myform.value);
//   }
// }

export class AppComponent {
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          firstName: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(6)]]
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }

      alert('SUCCESS!! :-)')
  }
}
