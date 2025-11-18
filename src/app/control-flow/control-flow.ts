import { Component } from '@angular/core';

@Component({
  selector: 'app-control-flow',
  imports: [],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css',
})
export class ControlFlow {
color:String="";
colorChange(value:String){
  this.color=value;
}

Name=['Angular','React','Vue','Svelte','Ember' ];
Student=[{
  name:'jhon',age:23
},
{
  name:'Hari',age:28
},
{
  name:'Ram',age:26
},
]

}
