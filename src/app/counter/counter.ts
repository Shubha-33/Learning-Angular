import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
 count: number = 0;

  // increment(){
  //   this.count=this.count+1;
  // }
  //  reset(){
  //   this.count=0;
  // }
  //  decrement(){
  //    this.count=this.count-1;
  // }

  counterHandler(value: string) {
    if (value == 'plus') {
      this.count = this.count + 1;
    } else if (value == 'minus') {
      this.count = this.count - 1;
    }
    else {
      this.count = 0;
    }
  }
}
