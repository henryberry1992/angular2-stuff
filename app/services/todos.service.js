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
    var ToDoService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ToDoService = (function () {
                function ToDoService() {
                    this.taters = ['Yukon Gold', 'Baking', 'Laura', 'Melody', 'Kennebec'];
                }
                ToDoService.prototype.getPotato = function () {
                    return this.taters;
                };
                ToDoService.prototype.addPotato = function (potatopara) {
                    this.taters.push(potatopara);
                };
                ToDoService.prototype.removePotato = function (potatopara) {
                    this.taters.splice(this.taters.indexOf(potatopara), 1);
                };
                ToDoService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], ToDoService);
                return ToDoService;
            }());
            exports_1("ToDoService", ToDoService);
        }
    }
});
//# sourceMappingURL=todos.service.js.map