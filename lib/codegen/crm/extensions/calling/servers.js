"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.servers = exports.server1 = exports.ServerConfiguration = void 0;
const http_1 = require("./http/http");
class ServerConfiguration {
    constructor(url, variableConfiguration) {
        this.url = url;
        this.variableConfiguration = variableConfiguration;
    }
    setVariables(variableConfiguration) {
        Object.assign(this.variableConfiguration, variableConfiguration);
    }
    getConfiguration() {
        return this.variableConfiguration;
    }
    getUrl() {
        let replacedUrl = this.url;
        for (const key in this.variableConfiguration) {
            var re = new RegExp("{" + key + "}", "g");
            replacedUrl = replacedUrl.replace(re, this.variableConfiguration[key]);
        }
        return replacedUrl;
    }
    makeRequestContext(endpoint, httpMethod) {
        return new http_1.RequestContext(this.getUrl() + endpoint, httpMethod);
    }
}
exports.ServerConfiguration = ServerConfiguration;
exports.server1 = new ServerConfiguration("https://api.hubapi.com", {});
exports.servers = [exports.server1];
//# sourceMappingURL=servers.js.map