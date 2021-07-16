"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TodoModule = void 0;
var common_1 = require("@nestjs/common");
var todo_service_1 = require("./todo.service");
var todo_resolver_1 = require("./todo.resolver");
var typeorm_1 = require("@nestjs/typeorm");
var todo_entity_1 = require("./entities/todo.entity");
var user_module_1 = require("../user/user.module");
var TodoModule = /** @class */ (function () {
    function TodoModule() {
    }
    TodoModule = __decorate([
        common_1.Module({
            imports: [typeorm_1.TypeOrmModule.forFeature([todo_entity_1.Todo]), user_module_1.UserModule],
            providers: [todo_resolver_1.TodoResolver, todo_service_1.TodoService],
            exports: [todo_service_1.TodoService]
        })
    ], TodoModule);
    return TodoModule;
}());
exports.TodoModule = TodoModule;
