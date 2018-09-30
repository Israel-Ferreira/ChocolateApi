"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var repository_1 = require("./repository");
var chocolateIsEmpty = function (obj) {
    var arr = [obj.nome, obj.tipo, obj.foto, obj.pais];
    return arr.some(function (prop) { return prop === ""; });
};
var ChocolateController = /** @class */ (function () {
    function ChocolateController() {
    }
    ChocolateController.prototype.getAll = function () {
        return repository_1.default.find({});
    };
    ChocolateController.prototype.getById = function (id) {
        return repository_1.default.findById(id);
    };
    ChocolateController.prototype.create = function (chocolate) {
        if (!chocolateIsEmpty(chocolate)) {
            return repository_1.default.create(chocolate);
        }
    };
    ChocolateController.prototype.update = function (id, chocolate) {
        var nome = chocolate.nome, tipo = chocolate.tipo, pais = chocolate.pais, foto = chocolate.foto;
        var updateChoco = { nome: nome, tipo: tipo, pais: pais, foto: foto };
        return repository_1.default.findByIdAndUpdate(id, updateChoco);
    };
    ChocolateController.prototype.delete = function (id) {
        return repository_1.default.remove(id);
    };
    return ChocolateController;
}());
exports.default = new ChocolateController;
//# sourceMappingURL=controllers.js.map