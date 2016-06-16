System.register(['@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var ToDoComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ToDoComponent = (function () {
                function ToDoComponent() {
                    this.chore = '';
                    this.potatoes = ['Yukon Gold', 'Baking', 'Laura', 'Melody', 'Kennebec'];
                }
                ToDoComponent.prototype.randomNum = function () {
                    this.rnJesus = Math.floor((Math.random() * 10) + 1);
                };
                ToDoComponent.prototype.addToDo = function () {
                    if (!this.newToDo) {
                        return;
                    }
                    else {
                        this.potatoes.push(this.newToDo);
                    }
                };
                ToDoComponent.prototype.removeToDo = function (potato) {
                    this.potatoes.splice(this.potatoes.indexOf(potato), 1);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], ToDoComponent.prototype, "rnJesus", void 0);
                ToDoComponent = __decorate([
                    core_1.Component({
                        selector: 'todos',
                        template: "\n\t<h1> to do list </h1>\n\t<button (click) = \"randomNum()\"> Spin the wheel baby!</button>\n\t<div *ngIf=\"rnJesus >5\">\n\t\tBig Number {{rnJesus}}\n\t</div>\n\t<br />\n\t<input type = \"text\" class = \"form-control\" [(ngModel)] = \"newToDo\" (keyup.enter)=\"addToDo()\" />\n\n\t<br />\n\t<input [(ngModel)] = \"chore\" placeholder = \"chore\"/>\n\t<div [ngSwitch] = \"chore\">\n\t\t<div *ngSwitchWhen = \"'mopping'\">\n\t\t\t{{1+1}}\n\t\t</div>\n\t\t<div *ngSwitchWhen = \"'sweeping'\">\n\t\t\tSweeping\n\t\t</div>\n\t\t<div *ngSwitchDefault>\n\t\t\tDoing Nothing\n\t\t</div>\n\t</div>\n\t<ul class =\"list-group\">\n\t\t<li *ngFor =\"let potato of potatoes\" class=\"list-group-item\">\n\t\t\t<a href =\"#\" (dblclick)=\"removeToDo(potato)\">\n\t\t\t\t{{potato}}\n\t\t\t</a>\n\t\t</li>\n\t</ul>\n\t\n\t"
                    }), 
                    __metadata('design:paramtypes', [])
                ], ToDoComponent);
                return ToDoComponent;
            }());
            exports_1("ToDoComponent", ToDoComponent);
        }
    }
});
//# sourceMappingURL=todos.component.js.map