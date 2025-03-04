"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiClientConfigurator = void 0;
const merge_1 = __importDefault(require("../utils/merge"));
const version_1 = require("./version");
class ApiClientConfigurator {
    static getParams(config, serverConfigurationClass, observableRequestContextParam, observableResponseContextParam) {
        const params = {
            middleware: [
                this.getHeaderMiddleware(config, observableRequestContextParam, observableResponseContextParam),
            ],
            authMethods: this.getAuthMethods(config),
        };
        (0, merge_1.default)(params, this.getBaseServer(config, serverConfigurationClass));
        return params;
    }
    static getUserAgent() {
        return `hubspot-api-client-nodejs; ${version_1.VERSION}`;
    }
    static getAuthMethods(config) {
        let authMethods = {};
        if (config.accessToken) {
            authMethods = Object.assign(authMethods, {
                oauth2: {
                    accessToken: config.accessToken,
                },
            });
            authMethods = Object.assign(authMethods, {
                oauth2_legacy: {
                    accessToken: config.accessToken,
                },
            });
        }
        if (config.apiKey) {
            authMethods = Object.assign(authMethods, {
                hapikey: config.apiKey,
            });
        }
        if (config.developerApiKey) {
            authMethods = Object.assign(authMethods, {
                developer_hapikey: config.developerApiKey,
            });
        }
        return authMethods;
    }
    static getBaseServer(config, serverConfigurationClass) {
        if (config.basePath) {
            return { baseServer: new serverConfigurationClass(config.basePath, {}) };
        }
        return {};
    }
    static getHeaderMiddleware(config, observableRequestContextParam, observableResponseContextParam) {
        const headers = (0, merge_1.default)(config.defaultHeaders, { 'User-agent': this.getUserAgent() });
        return {
            pre(context) {
                for (const key in headers) {
                    if (headers.hasOwnProperty(key)) {
                        context.setHeaderParam(key, headers[key]);
                    }
                }
                return new observableRequestContextParam(Promise.resolve(context));
            },
            post(context) {
                return new observableResponseContextParam(Promise.resolve(context));
            },
        };
    }
}
exports.ApiClientConfigurator = ApiClientConfigurator;
//# sourceMappingURL=ApiClientConfigurator.js.map