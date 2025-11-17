import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  imports: [],
  templateUrl: './events.html',
  styleUrl: './events.css',
})
export class Events {
 handleClick(Events :any){
  console.log("Button Clicked");
  console.log("event called " ,Events.type);
 }
 handleClickInput(Event:Event){
   console.log("Event Clicked");
  console.log("Event type is " ,Event.type);
  const inputElemnt=Event.target as HTMLInputElement;
  console.log("input value is ",inputElemnt.value)
 }

}
