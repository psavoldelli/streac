"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var react_dom_1 = __importDefault(require("react-dom"));
var react_hot_loader_1 = require("react-hot-loader");
var app_1 = __importDefault(require("./app"));
var render = function (Application) {
    var app = (React.createElement(react_hot_loader_1.AppContainer, null,
        React.createElement(Application, null)));
    react_dom_1.default.render(app, document.getElementById('root'));
};
render(app_1.default);
if (module.hot) {
    module.hot.accept('./app', function () {
        render(require('./app').default);
    });
}
//# sourceMappingURL=index.js.map