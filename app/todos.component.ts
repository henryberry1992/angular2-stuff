import {Component, Input} from '@angular/core';

@Component ({
	selector: 'todos',
	template: `
	<h1> to do list </h1>
	<button (click) = "randomNum()"> Spin the wheel baby!</button>
	<div *ngIf="rnJesus >5">
		Big Number {{rnJesus}}
	</div>
	<br />
	<input type = "text" class = "form-control" [(ngModel)] = "newToDo" (keyup.enter)="addToDo()" />

	<br />
	<input [(ngModel)] = "chore" placeholder = "chore"/>
	<div [ngSwitch] = "chore">
		<div *ngSwitchWhen = "'mopping'">
			{{1+1}}
		</div>
		<div *ngSwitchWhen = "'sweeping'">
			Sweeping
		</div>
		<div *ngSwitchDefault>
			Doing Nothing
		</div>
	</div>
	<ul class ="list-group">
		<li *ngFor ="let potato of potatoes" class="list-group-item">
			<a href ="#" (dblclick)="removeToDo(potato)">
				{{potato}}
			</a>
		</li>
	</ul>
	
	`

})

export class ToDoComponent
{
	todos: string;
	@Input() rnJesus: number;
	chore: string;
	newToDo: string;
	potatoes: Array<string>;
	constructor()
	{
		this.chore = '';
		this.potatoes = ['Yukon Gold', 'Baking', 'Laura', 'Melody', 'Kennebec'];
	}

	randomNum()
	{
		this.rnJesus = Math.floor((Math.random() * 10) + 1);
	}

	addToDo()
	{
		if(!this.newToDo)
		{
			return;
		}
		else
		{
			this.potatoes.push(this.newToDo);
		}
		
	}
	removeToDo(potato)
	{
		console.log(potato);
	}
}