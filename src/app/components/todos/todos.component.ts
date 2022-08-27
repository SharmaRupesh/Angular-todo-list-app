import { Component, OnInit } from '@angular/core';
import {todo} from './../models/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:todo[];

  inputTodo: string= "";
  displayClearAll:boolean = false;
  doneTitle: string="Done";
  // activeButtonId: number ;

  constructor() { }

  ngOnInit(): void {
    this.todos=[];
  }



  toggleDone(id:number)
  {
    this.todos.map((v,i) => {
      if(i==id) {
        v.completed=!v.completed;
        // this.activeButtonId=id;
        document.getElementById("btn-"+id).innerHTML = document.getElementById("btn-"+id).innerHTML == "Undone" ? "Done" : "Undone";
      }
      
      // if(this.doneTitle=="Done")
      // {
      //   this.doneTitle="Undone";
      // }
      // else
      // {
      //   this.doneTitle="Done";
      // }
      return v;
    })
  }

  deleteTodo(id:number){
    this.todos = this.todos.filter((v,i) => i!==id);
    if(this.todos.length==0)
      this.displayClearAll=false;
  }

  addTodo(){
    this.todos.push({
      content : this.inputTodo, 
      completed : false
    });
    
    this.displayClearAll=true;
    this.inputTodo="";
  }


  // getButtonText(id: number)
  // {
  //   let buttontext;
  //   id==this.activeButtonId ? buttontext="Undone" : buttontext="Done"; 
  //   return buttontext;
  // }

  clearAllList()
  {
    this.todos=[];
    this.displayClearAll=false;
  }

}
