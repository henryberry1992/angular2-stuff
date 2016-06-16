import { Component } from '@angular/core';
// import {MyComponent} from './my-component.component';
import {ToDoComponent} from './todos.component';
import {MyComponent} from './my-component.component';
import {IOComponent} from './inputoutput.component';

@Component({
	selector: 'my-app',
	template: `
	<h1>My First Angular 2 App</h1>
	<todos [rnJesus] = "myNumber"></todos>
	<my-component></my-component>
	<inputoutput [counter] ="myCounter" (counterChange) = "myValueChange($event)"></inputoutput>
	`,
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