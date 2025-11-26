import { NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  imports: [NgIf,NgFor,NgSwitch,NgSwitchCase,NgSwitchDefault],
  templateUrl: './directives.html',
  styleUrl: './directives.css',
})
export class Directives {
 login= true;
 toggleLogin(){
  this.login=!this.login;
 }

 students=[
  {name:'jhon',age:23,course:{name:'angular',duration:'2 month'}},
  {name:'Hari',age:28,course:{name:'react',duration:'3 month'}},
  {name:'Ram',age:26,course:{name:'vue',duration:'4 month'}}
 ]

 color:String='blue';

 toggleColor(value:string){
  this.color=value;
 }

}
