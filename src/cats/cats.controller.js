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
exports.CatsController = void 0;
var common_1 = require("@nestjs/common");
var cat_interface_1 = require("./intefaces/cat.interface");
var validation_pipe_1 = require("../validation/validation.pipe");
var CatsController = /** @class */ (function () {
    function CatsController(catsService) {
        this.catsService = catsService;
    }
    CatsController.prototype.create = function (
    /**
     * Exclusive validation can be used with new ValidationPipe() inside @Body() decorator
     */
    createCatDto) {
        var added = this.catsService.create(createCatDto);
        return {
            success: 'Cat Added',
            added: added
        };
        // return this.catsService.create(createCatDto)
    };
    CatsController.prototype.findAll = function () {
        return this.catsService.findAll();
    };
    CatsController.prototype.findOne = function (id) {
        return this.catsService.findOne(id);
    };
    CatsController.prototype.update = function (id, updateCatDto) {
        return this.catsService.update(id, updateCatDto);
    };
    CatsController.prototype.remove = function (id) {
        return this.catsService.remove(+id);
    };
    CatsController.prototype.getPussies = function (req, response) {
        response.status(200).send(this.catsService.getPussies());
        return this.catsService.getPussies();
    };
    CatsController.prototype.getPussiesWithExpress = function (req, response, query) {
        console.log(query);
        response.status(200).send(this.catsService.getPussies());
    };
    CatsController.prototype.addPussyWithExpress = function (res) {
        res.status(common_1.HttpStatus.CREATED).send({
            success: 'Added new cat'
        });
    };
    CatsController.prototype.getPussiesWithExpressAndNest = function (res) {
        return "<h3 style=\"font-family: sans-serif;\">Hello World</h3>";
    };
    __decorate([
        common_1.Post(),
        common_1.HttpCode(common_1.HttpStatus.CREATED),
        __param(0, common_1.Body(new validation_pipe_1.ValidationPipe()))
    ], CatsController.prototype, "create");
    __decorate([
        common_1.Get()
    ], CatsController.prototype, "findAll");
    __decorate([
        common_1.Get(':id'),
        __param(0, common_1.Param('id'))
    ], CatsController.prototype, "findOne");
    __decorate([
        common_1.Patch(':id'),
        __param(0, common_1.Param('id')),
        __param(1, common_1.Body())
    ], CatsController.prototype, "update");
    __decorate([
        common_1.Delete(':id'),
        __param(0, common_1.Param('id'))
    ], CatsController.prototype, "remove");
    __decorate([
        common_1.Get('cats'),
        __param(0, common_1.Req()),
        __param(1, common_1.Res())
    ], CatsController.prototype, "getPussies");
    __decorate([
        common_1.Get('cats-express'),
        common_1.HttpCode(200),
        common_1.Header('Hello-World', 'hi'),
        __param(0, common_1.Req()),
        __param(1, common_1.Res()),
        __param(2, common_1.Query())
    ], CatsController.prototype, "getPussiesWithExpress");
    __decorate([
        common_1.Post('cat'),
        __param(0, common_1.Res())
    ], CatsController.prototype, "addPussyWithExpress");
    __decorate([
        common_1.Get('cats-hybrid'),
        common_1.Header('Content-Type', 'text/html'),
        __param(0, common_1.Res({ passthrough: true }))
    ], CatsController.prototype, "getPussiesWithExpressAndNest");
    CatsController = __decorate([
        common_1.Controller('cats')
    ], CatsController);
    return CatsController;
}());
exports.CatsController = CatsController;
