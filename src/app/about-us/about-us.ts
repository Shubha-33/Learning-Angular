import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-about-us',
  imports: [RouterLink],
  templateUrl: './about-us.html',
  styleUrl: './about-us.css',
})
export class AboutUs {
  constructor(private router:Router){}
goToProfile(name: String){
  this.router.navigate(['/profile'],{queryParams:{name}})
}
}
