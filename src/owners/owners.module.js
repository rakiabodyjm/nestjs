"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.OwnersModule = void 0;
var common_1 = require("@nestjs/common");
var owners_service_1 = require("./owners.service");
var owners_resolver_1 = require("./owners.resolver");
var typeorm_1 = require("@nestjs/typeorm");
var owner_entity_1 = require("./entities/owner.entity");
var pets_module_1 = require("../pets/pets.module");
var OwnersModule = /** @class */ (function () {
    function OwnersModule() {
    }
    OwnersModule = __decorate([
        common_1.Module({
            imports: [typeorm_1.TypeOrmModule.forFeature([owner_entity_1.Owner]), common_1.forwardRef(function () { return pets_module_1.PetsModule; })],
            providers: [owners_resolver_1.OwnersResolver, owners_service_1.OwnersService],
            exports: [owners_service_1.OwnersService]
        })
    ], OwnersModule);
    return OwnersModule;
}());
exports.OwnersModule = OwnersModule;
