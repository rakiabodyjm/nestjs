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
exports.OwnersResolver = void 0;
var graphql_1 = require("@nestjs/graphql");
var owner_entity_1 = require("./entities/owner.entity");
var pet_entity_1 = require("../pets/pet.entity");
var OwnersResolver = /** @class */ (function () {
    function OwnersResolver(ownersService) {
        this.ownersService = ownersService;
    }
    OwnersResolver.prototype.createOwner = function (createOwnerInput) {
        return this.ownersService.create(createOwnerInput);
    };
    OwnersResolver.prototype.findAll = function () {
        return this.ownersService.findAll();
    };
    OwnersResolver.prototype.findOne = function (id) {
        return this.ownersService.findOne(id);
    };
    OwnersResolver.prototype.updateOwner = function (updateOwnerInput) {
        return this.ownersService.update(updateOwnerInput.id, updateOwnerInput);
    };
    // @Mutation(() => String)
    OwnersResolver.prototype.removeOwner = function (id) {
        return this.ownersService.remove(id);
    };
    __decorate([
        graphql_1.Mutation(function () { return owner_entity_1.Owner; }),
        __param(0, graphql_1.Args('createOwnerInput'))
    ], OwnersResolver.prototype, "createOwner");
    __decorate([
        graphql_1.Query(function () { return [owner_entity_1.Owner]; }, { name: 'owners' })
    ], OwnersResolver.prototype, "findAll");
    __decorate([
        graphql_1.Query(function () { return owner_entity_1.Owner; }, { name: 'owner' }),
        __param(0, graphql_1.Args('id', { type: function () { return graphql_1.Int; } }))
    ], OwnersResolver.prototype, "findOne");
    __decorate([
        graphql_1.Mutation(function () { return owner_entity_1.Owner; }),
        __param(0, graphql_1.Args('updateOwnerInput'))
    ], OwnersResolver.prototype, "updateOwner");
    __decorate([
        graphql_1.Mutation(function () { return String; }),
        __param(0, graphql_1.Args('id', { type: function () { return graphql_1.Int; } }))
    ], OwnersResolver.prototype, "removeOwner");
    OwnersResolver = __decorate([
        graphql_1.Resolver(function () { return owner_entity_1.Owner; })
    ], OwnersResolver);
    return OwnersResolver;
}());
exports.OwnersResolver = OwnersResolver;
