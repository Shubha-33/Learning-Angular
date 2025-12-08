import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  // onClick(){
  //   console.log("button clicked");
  //   this.otherFunction();
  // }
  // otherFunction(){
  //   console.log("other function");
  // }
 name=new FormControl();
 password=new FormControl();
//  name=new FormControl('mama');  // default value
//  password=new FormControl('1234'); // default value
 display(){
  console.log(this.name.value);
 }
}
