import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  imports: [ReactiveFormsModule],
  templateUrl:'./sign-up.html',
  styleUrl: './sign-up.css',
})
export class SignUp {
  SignUp =new FormGroup({
  name :new FormControl(),
  password :new FormControl(),
  email :new FormControl()
 });

//    SignUp =new FormGroup({   // set default value 
//   name :new FormControl('mama'),
//   password :new FormControl('1234'),
//   email :new FormControl('mama@123')
//  });

Name:String="";
Email:String="";
Pass:String="";
 getData(){
  console.log(this.SignUp.value);
  this.Name=this.SignUp.value.name;
    this.Email=this.SignUp.value.email;
  this.Pass=this.SignUp.value.password;

 }
setData(){
  this.SignUp.setValue({
    name:'shubha',
    email:'shubha@123',
    password:'1234'
  })
}

}
