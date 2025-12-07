import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [],
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
}
