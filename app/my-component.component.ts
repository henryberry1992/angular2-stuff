import { Component } from '@angular/core';

@Component({
	selector: 'my-component',
	template: `
	<h1> Hello {{name}} </h1>
	<input [(ngModel)] = "name" placeholder = "name" (ngModelChange) = "setUpperCase($event)"/>
	<div><img [src] = "imageUrl"/></div>
	<br />
	<button (click) = "changeMessage()">Button</button>
	<h1> {{clickMessage}}</h1>
	<input [(ngModel)] = "clickMessage"/>
	`
})

export class MyComponent
{
	name: string;
	imageUrl: string;
	isActive: boolean;
	clickMessage;
	constructor()
	{
		this.imageUrl = "http://lorempixel.com/400/200";
		this.isActive = true;
	}

	changeMessage()
	{
		this.clickMessage = Math.random().toString(36).substring(3);
	}

	setUpperCase(e)
	{
		this.name = e.toUpperCase();
	}
}