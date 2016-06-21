import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
	selector: 'inputoutput',
	templateUrl: './app/components/inputoutput/inputoutput.component.html'
})
export class IOComponent
{
	@Input() public counter: number;
	@Output() counterChange = new EventEmitter();

	decrement()
	{
		this.counter--;
		this.counterChange.emit({
			value: this.counter
		})
	}

	increment()
	{
		this.counter++;
		this.counterChange.emit({
			value:this.counter
		})
	}
}