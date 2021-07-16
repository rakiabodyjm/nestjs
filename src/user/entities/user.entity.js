"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.User = void 0;
var graphql_1 = require("@nestjs/graphql");
var todo_entity_1 = require("../../todo/entities/todo.entity");
var typeorm_1 = require("typeorm");
var User = /** @class */ (function () {
    function User() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        graphql_1.Field(function (type) { return graphql_1.Int; })
    ], User.prototype, "id");
    __decorate([
        typeorm_1.Column(),
        graphql_1.Field()
    ], User.prototype, "name");
    __decorate([
        typeorm_1.OneToMany(function () { return todo_entity_1.Todo; }, function (todo) { return todo.user; }),
        graphql_1.Field(function () { return [todo_entity_1.Todo]; })
    ], User.prototype, "todos");
    User = __decorate([
        typeorm_1.Entity(),
        graphql_1.ObjectType()
    ], User);
    return User;
}());
exports.User = User;
