"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function get(o, path, defaultValue) {
    const paths = Array.isArray(path) ? path : path.split('.');
    let i = 0;
    let len = paths.length;
    let obj = o;
    for (; obj !== null && i < len; i++) {
        obj = o[paths[i]];
    }
    const value = i && i === len ? obj : defaultValue;
    return value;
}
exports.default = get;
//# sourceMappingURL=get.js.map