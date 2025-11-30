import { Routes } from '@angular/router';
import { Directives } from './directives/directives';
import { ControlFlow } from './control-flow/control-flow';
import { TodoList } from './todo-list/todo-list';
import { Login } from './login/login';
import { Signup } from './signup/signup';

export const routes: Routes = [
   {path:'directives',component:Directives},
    {path:'todolist',component:TodoList},
   {path:'controlflow',component:ControlFlow},
    {path:'login',component:Login},
     {path:'signup',component:Signup}


];
