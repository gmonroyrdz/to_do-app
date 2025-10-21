import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo',
  imports: [FormsModule,CommonModule],
  templateUrl: './todo.html',
  styleUrl: './todo.css'
})
export class Todo {
  tasks = [
    {name: 'Aprender Angular', done: false},
    {name: 'Hacer ejercicio (físico)', done:false},
    {name: 'Estudiar para el examen sorpresa', done:false}
  ];

  newTask = '';

  addTask(){
    if(this.newTask.trim()){
      this.tasks.push({name: this.newTask, done:false });
      this.newTask = '';
    }
  }

  deleteTask(index: number){
    this.tasks.splice(index, 1);
  }
}
