import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [RouterLink],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
userName :string |null ="";
  constructor( private route:ActivatedRoute){}
ngOnInit() {
    // -----process 1 using subscribe to get param value----
  // this.route.paramMap.subscribe(params => {
  //   this.userName = params.get('name');
  //   console.log(this.userName);
  // });
      // -----process 2 using snapshot to get param value----

  // this.userName=this.route.snapshot.paramMap.get('name');
  //   console.log(this.userName);

    //---- process 3 
   this.route.queryParams.subscribe(params=>{
      this.userName=params['name'];
      console.log(params);
        })

}

User: { id: number; name: string; age: number }[] =[
  {
  id:1,
  name:"shubha",
  age:22
  },
   {
  id:2,
  name:"mama",
  age:23
  },
     {
  id:3,
  name:"sima",
  age:24
  },
   { 
  id:4,
  name:"ram",
  age:26
  }]
  
}
