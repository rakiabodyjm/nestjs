"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.CatsService = void 0;
var CatsService = /** @class */ (function () {
    function CatsService() {
        // private readonly cats: Cat[] = []
        this.cats = [];
    }
    CatsService.prototype.create = function (cat) {
        var _a;
        var initCat = __assign({ id: ((_a = this.cats).length || (_a.length = 0)).toString() }, cat);
        console.log('creating cats');
        this.cats.push(initCat);
        return initCat;
        // return this.cats
        // return 'This action adds a new cat'
    };
    CatsService.prototype.findAll = function () {
        return this.cats;
        // return `This action returns all cats`
    };
    CatsService.prototype.findOne = function (id) {
        return this.cats.find(function (fi) { return fi.id === id; });
        // return `This action returns a #${id} cat`
    };
    CatsService.prototype.update = function (id, updateCatDto) {
        var temp = this.cats;
        var newObject = __assign(__assign({}, temp.find(function (ea) { return ea.id === id; })), updateCatDto);
        // const index = this.cats.indexOf(newObject)
        var index = this.cats.findIndex(function (fi) { return fi.id === id; });
        temp[index] = newObject;
        this.cats = temp;
        return this.cats;
    };
    CatsService.prototype.remove = function (id) {
        return "This action removes a #" + id + " cat";
    };
    CatsService.prototype.getPussies = function () {
        return this.cats;
    };
    return CatsService;
}());
exports.CatsService = CatsService;
