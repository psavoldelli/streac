"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var router_1 = require("@reach/router");
var SidebarMenu = function (props) {
    return (React.createElement("div", null,
        React.createElement(router_1.Link, { to: "/" }, "Home"),
        " ",
        React.createElement(router_1.Link, { to: "dashboard" }, "Dashboard"),
        " ",
        React.createElement(router_1.Link, { to: "about" }, "about")));
};
exports.default = SidebarMenu;
//# sourceMappingURL=SidebarMenu.js.map