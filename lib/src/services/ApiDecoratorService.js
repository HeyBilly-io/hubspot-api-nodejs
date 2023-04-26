"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ApiDecoratorService {
    static getInstance() {
        if (!this.instance) {
            this.instance = new ApiDecoratorService();
        }
        return this.instance;
    }
    constructor() {
        this.decorators = new Array();
    }
    setDecorators(decorators) {
        this.decorators = decorators;
    }
    apply(api, configuration) {
        if (this.decorators.length > 0) {
            const clientPrototype = Object.getPrototypeOf(api);
            const methodsNamesToPatch = Object.getOwnPropertyNames(clientPrototype);
            const constructorIndex = methodsNamesToPatch.indexOf('constructor');
            if (constructorIndex !== -1) {
                methodsNamesToPatch.splice(constructorIndex, 1);
            }
            methodsNamesToPatch.forEach((methodName) => {
                let patchedMethod = clientPrototype[methodName].bind(api);
                for (const decorator of this.decorators) {
                    patchedMethod = decorator.decorate(patchedMethod);
                }
                clientPrototype[methodName] = patchedMethod;
            });
            return new clientPrototype.constructor(configuration);
        }
        return api;
    }
}
exports.default = ApiDecoratorService;
//# sourceMappingURL=ApiDecoratorService.js.map