import { Component } from '@angular/core';

@Component({ //decorator links the TypeScript code with the HTML and CSS.
  selector: 'app-app-grocery',
  templateUrl: './app-grocery.component.html',
  styleUrl: './app-grocery.component.css'
})
export class AppGroceryComponent {
task: string = ''; // This is the string that holds the current input from the user.
tasks: {name:string}[] = []; // This is an array of objects where each object has a name property. 
                            // Every time a user adds a task, a new object is pushed into this array.
onClick(){ 
  //Method: When the user clicks the button, this method:
//Adds a new task to the tasks array with the name of the task.
//Clears the input field by resetting the task variable to an empty string ('')
  this.tasks.push({name: this.task});// Push the object
  this.task = '';
}
}
