"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Owner = void 0;
var graphql_1 = require("@nestjs/graphql");
var pet_entity_1 = require("../../pets/pet.entity");
var typeorm_1 = require("typeorm");
var Owner = /** @class */ (function () {
    function Owner() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        graphql_1.Field(function (type) { return graphql_1.Int; })
    ], Owner.prototype, "id");
    __decorate([
        typeorm_1.Column(),
        graphql_1.Field()
    ], Owner.prototype, "name");
    __decorate([
        typeorm_1.OneToMany(function () { return pet_entity_1.Pet; }, function (pet) { return pet.owner; }),
        graphql_1.Field(function (type) { return [pet_entity_1.Pet]; }, { nullable: true })
    ], Owner.prototype, "pets");
    Owner = __decorate([
        typeorm_1.Entity(),
        graphql_1.ObjectType()
    ], Owner);
    return Owner;
}());
exports.Owner = Owner;
