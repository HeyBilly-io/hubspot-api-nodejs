"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../../../../codegen/crm/extensions/accounting/index");
const rxjsStub_1 = require("../../../../../codegen/crm/extensions/accounting/rxjsStub");
const ApiClientConfigurator_1 = require("../../../../configuration/ApiClientConfigurator");
const ApiDecoratorService_1 = __importDefault(require("../../../../services/ApiDecoratorService"));
class AccountingDiscovery {
    constructor(config) {
        const configuration = (0, index_1.createConfiguration)(ApiClientConfigurator_1.ApiClientConfigurator.getParams(config, index_1.ServerConfiguration, rxjsStub_1.Observable, rxjsStub_1.Observable));
        this.callbacksApi = ApiDecoratorService_1.default.getInstance().apply(new index_1.CallbacksApi(configuration), configuration);
        this.invoiceApi = ApiDecoratorService_1.default.getInstance().apply(new index_1.InvoiceApi(configuration), configuration);
        this.settingsApi = ApiDecoratorService_1.default.getInstance().apply(new index_1.SettingsApi(configuration), configuration);
        this.syncApi = ApiDecoratorService_1.default.getInstance().apply(new index_1.SyncApi(configuration), configuration);
        this.userAccountsApi = ApiDecoratorService_1.default.getInstance().apply(new index_1.UserAccountsApi(configuration), configuration);
    }
}
exports.default = AccountingDiscovery;
//# sourceMappingURL=AccountingDiscovery.js.map