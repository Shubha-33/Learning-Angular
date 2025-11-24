import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  imports: [FormsModule],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css',
})
export class TodoList {
  task: string = "";

taskList:{id:number,task:string}[]=[];
edditTask=false;
eddiId:number  |null=null;

addTask(taskname:string){
  if(taskname.trim().length===0) return;
  if(this.edditTask && this.eddiId!==null){
    const item = this.taskList.find(t => t.id === this.eddiId);
      if (item) {
        item.task = taskname;
        this.edditTask=false;
        this.eddiId=null;
        this.task="";
        return;
      }
  }
 this.taskList.push({id:this.taskList.length+1,task:taskname});
 console.log(this.taskList);
 this.task="";
}
deleteTask(id:number){
this.taskList=this.taskList.filter(task=>task.id!==id);

}
updateTask(id: number ,task:string) {
  const item = this.taskList.find(task => task.id === id);
  if (!item) return;
this.edditTask=true;
this.eddiId=id;
console.log(task);
  this.task = task;   

}

}
