"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../../../codegen/crm/tickets/index");
const rxjsStub_1 = require("../../../../codegen/crm/tickets/rxjsStub");
const ApiClientConfigurator_1 = require("../../../configuration/ApiClientConfigurator");
const getAll_1 = require("../../../services/getAll");
class TicketsDiscovery {
    constructor(config) {
        const configuration = (0, index_1.createConfiguration)(ApiClientConfigurator_1.ApiClientConfigurator.getParams(config, index_1.ServerConfiguration, rxjsStub_1.Observable, rxjsStub_1.Observable));
        this.associationsApi = new index_1.AssociationsApi(configuration);
        this.basicApi = new index_1.BasicApi(configuration);
        this.batchApi = new index_1.BatchApi(configuration);
        this.publicObjectApi = new index_1.PublicObjectApi(configuration);
        this.searchApi = new index_1.SearchApi(configuration);
    }
    getAll(limit, after, properties, propertiesWithHistory, associations, archived) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, getAll_1.getAll)(this.basicApi, limit, after, properties, propertiesWithHistory, associations, archived);
        });
    }
}
exports.default = TicketsDiscovery;
//# sourceMappingURL=TicketsDiscovery.js.map