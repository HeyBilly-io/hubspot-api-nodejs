"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../../../codegen/crm/associations/index");
const rxjsStub_1 = require("../../../../codegen/crm/associations/rxjsStub");
const ApiClientConfigurator_1 = require("../../../configuration/ApiClientConfigurator");
const ApiDecoratorService_1 = __importDefault(require("../../../services/ApiDecoratorService"));
class AssociationsDiscovery {
    constructor(config) {
        const configuration = (0, index_1.createConfiguration)(ApiClientConfigurator_1.ApiClientConfigurator.getParams(config, index_1.ServerConfiguration, rxjsStub_1.Observable, rxjsStub_1.Observable));
        this.batchApi = ApiDecoratorService_1.default.getInstance().apply(new index_1.BatchApi(configuration), configuration);
        this.typesApi = ApiDecoratorService_1.default.getInstance().apply(new index_1.TypesApi(configuration), configuration);
    }
}
exports.default = AssociationsDiscovery;
//# sourceMappingURL=AssociationsDiscovery.js.map