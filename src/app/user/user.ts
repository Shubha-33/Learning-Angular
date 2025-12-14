import { NgIf } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [FormsModule,NgIf],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {

  userName:String | null ="";

  constructor(private route:ActivatedRoute){}

  ngOnInit(){
    this.route.paramMap.subscribe(params=>{
    console.log(params.get('name'));
    this.userName=params.get('name');
    })
  }


  userDetatils:any={};
addDetails(val :NgForm){
 console.log(val);
 this.userDetatils=val;
  }

  
}
