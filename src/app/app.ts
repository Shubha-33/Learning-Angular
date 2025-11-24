import { Component, signal } from '@angular/core';

import { single } from 'rxjs';

import { Counter } from './counter/counter';
import { Events } from './events/events';
import { ControlFlow}  from './control-flow/control-flow'; 
import{ SignalConcept} from './signal-concept/signal-concept';
import { TodoList } from './todo-list/todo-list';
@Component({
  selector: 'app-root',
  imports: [Counter, Events,ControlFlow,SignalConcept ,TodoList],
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
