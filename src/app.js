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
var router_1 = require("@reach/router");
var theme_1 = __importDefault(require("./theme"));
var Navbar_1 = __importDefault(require("@components/navbar/Navbar"));
var Sidebar_1 = __importDefault(require("@components/sidebar/Sidebar"));
var Content_1 = __importDefault(require("@components/layout/Content"));
var Home_1 = __importDefault(require("@components/home/Home"));
var About_1 = __importDefault(require("@components/home/About"));
var SidebarLogo_1 = __importDefault(require("@components/sidebar/SidebarLogo"));
var SidebarMenu_1 = __importDefault(require("@components/sidebar/SidebarMenu"));
var NotFound_1 = __importDefault(require("@components/error/NotFound"));
var react_loadable_1 = __importDefault(require("react-loadable"));
var Dashboard = react_loadable_1.default({
    loader: function () { return Promise.resolve().then(function () { return __importStar(require('@components/dashboard/Dashboard')); }); },
    loading: function () {
        return React.createElement("div", null, "Loading...");
    }
});
var App = function () {
    return (React.createElement(theme_1.default, null,
        React.createElement(Navbar_1.default, null),
        React.createElement(Sidebar_1.default, null,
            React.createElement(SidebarLogo_1.default, null),
            React.createElement(router_1.Router, null,
                React.createElement(SidebarMenu_1.default, { path: '/*' }))),
        React.createElement(Content_1.default, null,
            React.createElement(router_1.Router, null,
                React.createElement(Home_1.default, { path: '/' }),
                React.createElement(About_1.default, { path: 'about' }),
                React.createElement(Dashboard, { path: 'dashboard' }),
                React.createElement(NotFound_1.default, { default: true })))));
};
exports.default = App;
//# sourceMappingURL=app.js.map