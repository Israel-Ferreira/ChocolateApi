"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./app");
var app = app_1.default.app;
var PORT = process.env.PORT || 3450;
app.listen(PORT, function () { return console.log("Aee PORRA!!! T\u00E1 funcionando"); });
process.on("SIGUSR2", function () {
    app_1.default.closeDBConnection('nodemon restart', function () { return process.kill(process.pid, 'SIGUSR2'); });
});
process.on("SIGINT", function () {
    app_1.default.closeDBConnection('A Conexão foi interrompida', function () { return process.exit(0); });
});
//# sourceMappingURL=server.js.map