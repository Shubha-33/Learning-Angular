import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  imports: [ReactiveFormsModule,NgIf],
  templateUrl:'./sign-up.html',
  styleUrl: './sign-up.css',
})
export class SignUp {
  signUpForm = new FormGroup({
    name: new FormControl('', Validators.required),
    password: new FormControl('', Validators.minLength(5)),
    email: new FormControl('', Validators.pattern(
      '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}'
    ))
  });

//    SignUp =new FormGroup({   // set default value 
//   name :new FormControl('mama'),
//   password :new FormControl('1234'),
//   email :new FormControl('mama@123')
//  });

 name = '';
  email = '';
  pass = '';

  getData() {
    console.log(this.signUpForm.value);

    this.name = this.signUpForm.value.name ?? '';
    this.email = this.signUpForm.value.email ?? '';
    this.pass = this.signUpForm.value.password ?? '';
  }

  setData() {
    this.signUpForm.setValue({
      name: 'shubha',
      email: 'shubha@gmail.com',
      password: '12345'
    });
  }
}