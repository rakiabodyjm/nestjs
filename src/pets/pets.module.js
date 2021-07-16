"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PetsModule = void 0;
var common_1 = require("@nestjs/common");
var pets_service_1 = require("./pets.service");
var pets_resolver_1 = require("./pets.resolver");
var typeorm_1 = require("@nestjs/typeorm");
var pet_entity_1 = require("./pet.entity");
var owners_module_1 = require("../owners/owners.module");
var PetsModule = /** @class */ (function () {
    function PetsModule() {
    }
    PetsModule = __decorate([
        common_1.Module({
            imports: [typeorm_1.TypeOrmModule.forFeature([pet_entity_1.Pet]), owners_module_1.OwnersModule],
            providers: [pets_service_1.PetsService, pets_resolver_1.PetsResolver],
            exports: [pets_service_1.PetsService]
        })
    ], PetsModule);
    return PetsModule;
}());
exports.PetsModule = PetsModule;
