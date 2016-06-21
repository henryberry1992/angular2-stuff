import { Component } from '@angular/core';

@Component({
	selector: 'my-component',
	templateUrl: './app/components/my-component/my-component.component.html'
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