import { Component } from '@angular/core';
    import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-events',
  imports: [ FormsModule],
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
 // ng model -  2 way binding
 userName: string = '';


}
