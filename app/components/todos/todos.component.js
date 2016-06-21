System.register(['@angular/core', '../../services/todos.service'], function(exports_1, context_1) {
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
    var core_1, todos_service_1;
    var ToDoComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (todos_service_1_1) {
                todos_service_1 = todos_service_1_1;
            }],
        execute: function() {
            ToDoComponent = (function () {
                function ToDoComponent(ToDoService) {
                    this.ToDoService = ToDoService;
                    this.chore = '';
                    this.potatoes = ToDoService.getPotato();
                }
                ToDoComponent.prototype.randomNum = function () {
                    this.rnJesus = Math.floor((Math.random() * 10) + 1);
                };
                ToDoComponent.prototype.addToDo = function () {
                    if (!this.newToDo) {
                        return;
                    }
                    else {
                        this.ToDoService.addPotato(this.newToDo);
                    }
                };
                ToDoComponent.prototype.removeToDo = function (potato) {
                    this.ToDoService.removePotato(potato);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], ToDoComponent.prototype, "rnJesus", void 0);
                ToDoComponent = __decorate([
                    core_1.Component({
                        selector: 'todos',
                        templateUrl: './app/components/todos/todos.component.html',
                        providers: [todos_service_1.ToDoService]
                    }), 
                    __metadata('design:paramtypes', [todos_service_1.ToDoService])
                ], ToDoComponent);
                return ToDoComponent;
            }());
            exports_1("ToDoComponent", ToDoComponent);
        }
    }
});
//# sourceMappingURL=todos.component.js.map