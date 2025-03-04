"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../../../../codegen/crm/extensions/cards/index");
const rxjsStub_1 = require("../../../../../codegen/crm/extensions/cards/rxjsStub");
const ApiClientConfigurator_1 = require("../../../../configuration/ApiClientConfigurator");
const ApiDecoratorService_1 = __importDefault(require("../../../../services/ApiDecoratorService"));
class CardsDiscovery {
    constructor(config) {
        const configuration = (0, index_1.createConfiguration)(ApiClientConfigurator_1.ApiClientConfigurator.getParams(config, index_1.ServerConfiguration, rxjsStub_1.Observable, rxjsStub_1.Observable));
        this.cardsApi = ApiDecoratorService_1.default.getInstance().apply(new index_1.CardsApi(configuration), configuration);
        this.sampleResponseApi = ApiDecoratorService_1.default.getInstance().apply(new index_1.SampleResponseApi(configuration), configuration);
    }
}
exports.default = CardsDiscovery;
//# sourceMappingURL=CardsDiscovery.js.map