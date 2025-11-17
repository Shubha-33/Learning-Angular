import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  onClick(){
    console.log("button clicked");
    this.otherFunction();
  }
  otherFunction(){
    console.log("other function");
  }
}
