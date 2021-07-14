"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.TodoResolver = void 0;
var graphql_1 = require("@nestjs/graphql");
var todo_entity_1 = require("./entities/todo.entity");
var user_entity_1 = require("../user/entities/user.entity");
var TodoResolver = /** @class */ (function () {
    function TodoResolver(todoService) {
        this.todoService = todoService;
    }
    TodoResolver.prototype.createTodo = function (createTodoInput) {
        return this.todoService.create(createTodoInput);
    };
    TodoResolver.prototype.findAll = function () {
        return this.todoService.findAll();
    };
    TodoResolver.prototype.user = function (todo) {
        return this.todoService.findUser(todo.userId);
    };
    TodoResolver.prototype.findOne = function (id) {
        return this.todoService.findOne(id);
    };
    TodoResolver.prototype.updateTodo = function (updateTodoInput) {
        return this.todoService.update(updateTodoInput.id, updateTodoInput);
    };
    TodoResolver.prototype.removeTodo = function (id) {
        return this.todoService.remove(id);
    };
    __decorate([
        graphql_1.Mutation(function () { return todo_entity_1.Todo; }),
        __param(0, graphql_1.Args('createTodoInput'))
    ], TodoResolver.prototype, "createTodo");
    __decorate([
        graphql_1.Query(function () { return [todo_entity_1.Todo]; }, { name: 'todos' })
    ], TodoResolver.prototype, "findAll");
    __decorate([
        graphql_1.ResolveField(function () { return user_entity_1.User; }),
        __param(0, graphql_1.Parent())
    ], TodoResolver.prototype, "user");
    __decorate([
        graphql_1.Query(function () { return todo_entity_1.Todo; }, { name: 'todo' }),
        __param(0, graphql_1.Args('id', { type: function () { return graphql_1.Int; } }))
    ], TodoResolver.prototype, "findOne");
    __decorate([
        graphql_1.Mutation(function () { return todo_entity_1.Todo; }),
        __param(0, graphql_1.Args('updateTodoInput'))
    ], TodoResolver.prototype, "updateTodo");
    __decorate([
        graphql_1.Mutation(function () { return String; }),
        __param(0, graphql_1.Args('id', { type: function () { return graphql_1.Int; } }))
    ], TodoResolver.prototype, "removeTodo");
    TodoResolver = __decorate([
        graphql_1.Resolver(function () { return todo_entity_1.Todo; })
    ], TodoResolver);
    return TodoResolver;
}());
exports.TodoResolver = TodoResolver;
