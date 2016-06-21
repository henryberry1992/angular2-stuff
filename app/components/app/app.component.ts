import { Component } from '@angular/core';
// import {MyComponent} from './my-component.component';
import {ToDoComponent} from '../todos/todos.component';
import {MyComponent} from '../my-component/my-component.component';
import {IOComponent} from '../inputoutput/inputoutput.component';

@Component({
	selector: 'my-app',
	templateUrl: './app/components/app/app.component.html',
	directives: [ToDoComponent, MyComponent, IOComponent]
})
export class AppComponent 
{
	public myNumber: number = 8;
	public myCounter: number = 69;
	myValueChange(event)
	{
		console.log(event);
	}
}
