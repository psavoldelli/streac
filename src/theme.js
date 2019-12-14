"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var styled_components_1 = require("styled-components");
var styled_reset_1 = require("styled-reset");
var theme = {
    navbar: {
        background: 'blue',
        color: 'grey'
    }
};
var Theme = function (_a) {
    var children = _a.children;
    return (react_1.default.createElement(react_1.Fragment, null,
        react_1.default.createElement(styled_reset_1.Reset, null),
        react_1.default.createElement(styled_components_1.ThemeProvider, { theme: theme }, children)));
};
exports.default = Theme;
//# sourceMappingURL=theme.js.map