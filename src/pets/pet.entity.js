"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Pet = void 0;
var graphql_1 = require("@nestjs/graphql");
var owner_entity_1 = require("../owners/entities/owner.entity");
var typeorm_1 = require("typeorm");
var Pet = /** @class */ (function () {
    function Pet() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        graphql_1.Field(function (type) { return graphql_1.Int; })
    ], Pet.prototype, "id");
    __decorate([
        typeorm_1.Column(),
        graphql_1.Field()
    ], Pet.prototype, "name");
    __decorate([
        typeorm_1.Column(),
        graphql_1.Field()
    ], Pet.prototype, "type");
    __decorate([
        typeorm_1.Column(),
        graphql_1.Field(function (type) { return graphql_1.Int; })
    ], Pet.prototype, "ownerId");
    __decorate([
        typeorm_1.ManyToOne(function () { return owner_entity_1.Owner; }, function (owner) { return owner.pets; }),
        graphql_1.Field(function (type) { return owner_entity_1.Owner; })
    ], Pet.prototype, "owner");
    Pet = __decorate([
        typeorm_1.Entity(),
        graphql_1.ObjectType()
    ], Pet);
    return Pet;
}());
exports.Pet = Pet;
