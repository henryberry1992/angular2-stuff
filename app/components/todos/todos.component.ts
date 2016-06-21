import {Component, Input} from '@angular/core';
import {ToDoService} from '../../services/todos.service';

@Component ({
	selector: 'todos',
	templateUrl: './app/components/todos/todos.component.html',
	providers: [ToDoService]

})

export class ToDoComponent
{
	todos: string;
	@Input() rnJesus: number;
	chore: string;
	newToDo: string;
	potatoes: Array<string>;
	constructor(private ToDoService: ToDoService)
	{
		this.chore = '';
		this.potatoes = ToDoService.getPotato();
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
			this.ToDoService.addPotato(this.newToDo);
		}
		
	}
	removeToDo(potato)
	{
		this.ToDoService.removePotato(potato);
	}
}