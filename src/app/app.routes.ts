import { Routes } from '@angular/router';
import { Directives } from './directives/directives';
import { ControlFlow } from './control-flow/control-flow';
import { TodoList } from './todo-list/todo-list';
import { Login } from './login/login';
import { PageNotFound } from './page-not-found/page-not-found';
import { AboutUs } from './about-us/about-us';
import { Profile } from './profile/profile';
import { User } from './user/user';

export const routes: Routes = [
   {path:'directives',component:Directives},
    {path:'todolist',component:TodoList},
   {path:'controlflow',component:ControlFlow},
    {path:'login',component:Login},
  { path: 'aboutus', component: AboutUs },
    { path: 'profile', component: Profile},
    {path:'user/:id/:name',component:User},

       {path:'**',component:PageNotFound}, // this is called wildcard route if any route does not match then we have to show this component
// we have to keep this route at bottom

];
