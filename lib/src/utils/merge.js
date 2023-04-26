"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isObject(o) {
    return !!o && typeof o === 'object' && !Array.isArray(o);
}
function merge(target, ...sources) {
    if (sources.length < 1)
        return target;
    const src = sources.shift();
    if (isObject(target) && isObject(src)) {
        for (const key in src) {
            if (isObject(src[key])) {
                if (!target[key])
                    Object.assign(target, { [key]: {} });
                merge(target[key], src[key]);
            }
            else {
                Object.assign(target, { [key]: src[key] });
            }
        }
    }
    return merge(target, ...sources);
}
exports.default = merge;
//# sourceMappingURL=merge.js.map