"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var controllers_1 = require("./controllers");
var httpStatus = require("http-status");
var sendResponse = function (res, statusCd, data) { return res.status(statusCd).json({ 'result': data }); };
var ChocolateRoutes = /** @class */ (function () {
    function ChocolateRoutes() {
    }
    ChocolateRoutes.prototype.getAll = function (req, res) {
        controllers_1.default.getAll()
            .then(function (chocolate) { return sendResponse(res, httpStatus.OK, chocolate); })
            .catch(function (err) { return console.error("Erro: " + err); });
    };
    ChocolateRoutes.prototype.getById = function (req, res) {
        var id = req.params.id;
        if (!id) {
            sendResponse(res, httpStatus.OK, "Chocolate não encontrado");
        }
        controllers_1.default.getById(id)
            .then(function (choco) { return sendResponse(res, httpStatus.OK, choco); })
            .catch(function (err) { return console.error("Erro: " + err); });
    };
    ChocolateRoutes.prototype.createChocolate = function (req, res) {
        var chocolate = req.body;
        controllers_1.default.create(chocolate)
            .then(function (choco) { return sendResponse(res, httpStatus.OK, "Chocolate Criado com Sucesso"); })
            .catch(function (err) { return console.error("Erro: " + err); });
    };
    ChocolateRoutes.prototype.updateChocolate = function (req, res) {
        var id = req.params.id;
        var chocolate = req.body;
        controllers_1.default.update(id, chocolate)
            .then(function (chc) { return sendResponse(res, httpStatus.OK, "Chocolate Alterado Com Sucesso"); })
            .catch(function (err) { return console.error("Erro: " + err); });
    };
    ChocolateRoutes.prototype.deleteChocolate = function (req, res) {
        var id = req.params.id;
        controllers_1.default.delete(id)
            .then(function (reslt) { return sendResponse(res, httpStatus.OK, reslt); })
            .catch(function (err) { return console.error("Erro: " + err); });
    };
    return ChocolateRoutes;
}());
exports.default = new ChocolateRoutes;
//# sourceMappingURL=routes.js.map