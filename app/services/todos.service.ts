import {Injectable} from '@angular/core';

@Injectable()
export class ToDoService
{
	taters: Array<string> = ['Yukon Gold', 'Baking', 'Laura', 'Melody', 'Kennebec'];
	getPotato()
	{
		return this.taters;
	}

	addPotato(potatopara)
	{
		this.taters.push(potatopara);
	}

	removePotato(potatopara)
	{
		this.taters.splice(this.taters.indexOf(potatopara), 1);
	}
}