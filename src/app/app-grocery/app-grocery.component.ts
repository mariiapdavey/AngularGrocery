import { Component } from '@angular/core';

@Component({
  selector: 'app-app-grocery',
  templateUrl: './app-grocery.component.html',
  styleUrl: './app-grocery.component.css'
})
export class AppGroceryComponent {
task: string = ''; // Holds the current task input
tasks: {name:string}[] = []; // Array of objects with a name property

onClick(){
  this.tasks.push({name: this.task});// Push the object
  this.task = '';
}
}
