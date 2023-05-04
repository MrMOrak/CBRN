"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var app_module_1 = require("./app/app.module");
var main = /** @class */ (function () {
    function main() {
    }
    main.prototype.ngOnInit = function () {
        var options = {
            center: latLng(51.433237, 7.661594),
            layers: ['https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png',
                {
                    maxZoom: 18,
                    attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
                }],
            zoom: 5
        };
    };
    return main;
}());
exports.main = main;
(0, platform_browser_dynamic_1.platformBrowserDynamic)().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.error(err); });
