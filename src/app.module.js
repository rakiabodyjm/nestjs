"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var common_1 = require("@nestjs/common");
var graphql_1 = require("@nestjs/graphql");
var typeorm_1 = require("@nestjs/typeorm");
var app_controller_1 = require("./app.controller");
var app_service_1 = require("./app.service");
var cats_module_1 = require("./cats/cats.module");
var pets_module_1 = require("./pets/pets.module");
var owners_module_1 = require("./owners/owners.module");
var pet_entity_1 = require("./pets/pet.entity");
var owner_entity_1 = require("./owners/entities/owner.entity");
var user_module_1 = require("./user/user.module");
var user_entity_1 = require("./user/entities/user.entity");
var todo_entity_1 = require("./todo/entities/todo.entity");
var todo_module_1 = require("./todo/todo.module");
var serve_static_1 = require("@nestjs/serve-static");
var path_1 = require("path");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        common_1.Module({
            imports: [
                graphql_1.GraphQLModule.forRoot({
                    autoSchemaFile: path_1.join(process.cwd(), 'src/schema.gql'),
                    path: '/api/graphql'
                }),
                /**
                 * Include modules as entities here
                 */
                typeorm_1.TypeOrmModule.forRoot({
                    // type: 'sqlite',
                    // database: ':memory:',
                    // entities: ['dist/**/*entity{.ts,.js}'],
                    // synchronize: true,
                    type: 'mysql',
                    host: 'localhost',
                    username: 'root',
                    password: 'Rakiabodyjm_4690$',
                    database: 'todo',
                    entities: [pet_entity_1.Pet, owner_entity_1.Owner, user_entity_1.User, todo_entity_1.Todo],
                    synchronize: true,
                    logging: false
                }),
                /**
                 * static serving client and excluding /api* endpoints
                 */
                serve_static_1.ServeStaticModule.forRoot({
                    rootPath: path_1.join(__dirname, '../client'),
                    exclude: ['/api*']
                }),
                cats_module_1.CatsModule,
                pets_module_1.PetsModule,
                owners_module_1.OwnersModule,
                user_module_1.UserModule,
                todo_module_1.TodoModule,
            ],
            controllers: [app_controller_1.AppController],
            providers: [app_service_1.AppService]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
