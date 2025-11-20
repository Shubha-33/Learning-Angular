import { Component, computed, effect, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signal-concept',
  imports: [],
  templateUrl: './signal-concept.html',
  styleUrl: './signal-concept.css',
})
export class SignalConcept {
 count=signal(0);
 increment(){
  this.count.set(this.count()+1);
 }

 x=signal<number | String >(10);//writable signal
 y: WritableSignal<number | string> =signal(20) 

z = computed(() => 10);
 //computed signal

 a=signal(10);
 b=signal(20);
l = computed(() => this.a() + this.b());  // computed

updateA(){
  this.a.update(value => value + 6);   //change the computes signal value by changing realted signal value
  console.log(this.l());
  
}

// effect in signal 

constructor(){
  effect(()=>{
    console.log("running ",this.count());// in each update we can get the value of count 
  })
}
}
