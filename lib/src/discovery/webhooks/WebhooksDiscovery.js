"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../../codegen/webhooks/index");
const rxjsStub_1 = require("../../../codegen/webhooks/rxjsStub");
const ApiClientConfigurator_1 = require("../../configuration/ApiClientConfigurator");
const ApiDecoratorService_1 = __importDefault(require("../../services/ApiDecoratorService"));
const validateSignature_1 = require("../../services/validateSignature");
class WebhooksDiscovery {
    constructor(config = {}) {
        const configuration = (0, index_1.createConfiguration)(ApiClientConfigurator_1.ApiClientConfigurator.getParams(config, index_1.ServerConfiguration, rxjsStub_1.Observable, rxjsStub_1.Observable));
        this.settingsApi = ApiDecoratorService_1.default.getInstance().apply(new index_1.SettingsApi(configuration), configuration);
        this.subscriptionsApi = ApiDecoratorService_1.default.getInstance().apply(new index_1.SubscriptionsApi(configuration), configuration);
    }
    validateSignature(signature, clientSecret, requestBody, signatureVersion = 'v1', webhooksUrl, webhooksMethod = 'POST') {
        return (0, validateSignature_1.validateSignature)(signature, clientSecret, requestBody, signatureVersion, webhooksUrl, webhooksMethod);
    }
}
exports.default = WebhooksDiscovery;
//# sourceMappingURL=WebhooksDiscovery.js.map