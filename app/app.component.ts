import { Component } from '@angular/core';
// import {MyComponent} from './my-component.component';
import {ToDoComponent} from './todos.component';
import {MyComponent} from './my-component.component';

@Component({
	selector: 'my-app',
	template: `
	<h1>My First Angular 2 App</h1>
	<todos [rnJesus] = "myNumber"></todos>
	<my-component></my-component>
	`,
	directives: [ToDoComponent, MyComponent]
})
export class AppComponent 
{
	public myNumber: number = 8;
}