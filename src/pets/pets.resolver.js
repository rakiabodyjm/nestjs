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
exports.PetsResolver = void 0;
var graphql_1 = require("@nestjs/graphql");
var owner_entity_1 = require("../owners/entities/owner.entity");
var create_pet_input_1 = require("./dto/create-pet.input");
var pet_entity_1 = require("./pet.entity");
var pets_service_1 = require("./pets.service");
var PetsResolver = /** @class */ (function () {
    function PetsResolver(petsService) {
        this.petsService = petsService;
    }
    PetsResolver.prototype.getPet = function (id) {
        return this.petsService.findOne(id);
    };
    PetsResolver.prototype.pets = function () {
        return this.petsService.findAll();
    };
    PetsResolver.prototype.owner = function (pet) {
        return this.petsService.getOwner(pet.ownerId);
    };
    PetsResolver.prototype.createPet = function (createPetInput) {
        return this.petsService.createPet(createPetInput);
    };
    __decorate([
        graphql_1.Query(function (returns) { return pet_entity_1.Pet; }),
        __param(0, graphql_1.Args('id', { type: function () { return graphql_1.Int; } }))
    ], PetsResolver.prototype, "getPet");
    __decorate([
        graphql_1.Query(function (returns) { return [pet_entity_1.Pet]; })
    ], PetsResolver.prototype, "pets");
    __decorate([
        graphql_1.ResolveField(function (returns) { return owner_entity_1.Owner; }),
        __param(0, graphql_1.Parent())
    ], PetsResolver.prototype, "owner");
    __decorate([
        graphql_1.Mutation(function (returns) { return pet_entity_1.Pet; }),
        __param(0, graphql_1.Args('createPetInput'))
    ], PetsResolver.prototype, "createPet");
    PetsResolver = __decorate([
        graphql_1.Resolver(function (of) { return pet_entity_1.Pet; })
    ], PetsResolver);
    return PetsResolver;
}());
exports.PetsResolver = PetsResolver;
