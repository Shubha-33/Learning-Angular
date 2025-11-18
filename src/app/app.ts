import { Component, signal } from '@angular/core';

import { single } from 'rxjs';

import { Counter } from './counter/counter';
import { Events } from './events/events';
import { ControlFlow}  from './control-flow/control-flow'; 
@Component({
  selector: 'app-root',
  imports: [Counter, Events,ControlFlow],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
name: string = "";
setName="";
fixedName="";


  getInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.name = input.value;
  }
  getName() {
  this.setName=this.name;
  }
  staticName() {
    this.fixedName="angular";
  }
   
}
