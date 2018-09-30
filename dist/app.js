"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require("body-parser");
var morgan = require("morgan");
var routes_1 = require("./modules/routes");
var db_1 = require("./config/db");
var App = /** @class */ (function () {
    function App() {
        this.app = express();
        this.middleware();
        this.routes();
        this.database = new db_1.default();
        this.databaseConnection();
    }
    App.prototype.middleware = function () {
        this.app.use(morgan('dev'));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
    };
    App.prototype.databaseConnection = function () {
        this.database.createConnection();
    };
    App.prototype.closeDBConnection = function (message, callback) {
        this.database.closeConnection(message, callback);
    };
    App.prototype.routes = function () {
        this.app.get("/", function (req, res) { return res.send({ message: "Hello Everyone" }); });
        this.app.get("/api/chocolate", routes_1.default.getAll);
        this.app.get("/api/chocolate/:id", routes_1.default.getById);
        this.app.post("/api/chocolate", routes_1.default.createChocolate);
        this.app.put("/api/chocolate/:id", routes_1.default.updateChocolate);
        this.app.delete("/api/chocolate/:id", routes_1.default.deleteChocolate);
    };
    return App;
}());
exports.default = new App();
//# sourceMappingURL=app.js.map