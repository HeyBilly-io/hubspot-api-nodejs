"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../../../codegen/crm/objects/index");
const rxjsStub_1 = require("../../../../codegen/crm/objects/rxjsStub");
const ApiClientConfigurator_1 = require("../../../configuration/ApiClientConfigurator");
const ApiDecoratorService_1 = __importDefault(require("../../../services/ApiDecoratorService"));
const BaseDiscovery_1 = __importDefault(require("../../BaseDiscovery"));
class ObjectsDiscovery extends BaseDiscovery_1.default {
    constructor(config) {
        super(config);
        const configuration = (0, index_1.createConfiguration)(ApiClientConfigurator_1.ApiClientConfigurator.getParams(config, index_1.ServerConfiguration, rxjsStub_1.Observable, rxjsStub_1.Observable));
        this.associationsApi = ApiDecoratorService_1.default.getInstance().apply(new index_1.AssociationsApi(configuration), configuration);
        this.basicApi = ApiDecoratorService_1.default.getInstance().apply(new index_1.BasicApi(configuration), configuration);
        this.batchApi = ApiDecoratorService_1.default.getInstance().apply(new index_1.BatchApi(configuration), configuration);
        this.gdprApi = ApiDecoratorService_1.default.getInstance().apply(new index_1.GDPRApi(configuration), configuration);
        this.publicObjectApi = ApiDecoratorService_1.default.getInstance().apply(new index_1.PublicObjectApi(configuration), configuration);
        this.searchApi = ApiDecoratorService_1.default.getInstance().apply(new index_1.SearchApi(configuration), configuration);
    }
    get calls() {
        if (!this._calls) {
            const requiredClass = require('./calls/CallsDiscovery');
            this._calls = new requiredClass.default(this.config);
        }
        return this._calls;
    }
    get emails() {
        if (!this._emails) {
            const requiredClass = require('./emails/EmailsDiscovery');
            this._emails = new requiredClass.default(this.config);
        }
        return this._emails;
    }
    get feedbackSubmissions() {
        if (!this._feedbackSubmissions) {
            const requiredClass = require('./feedback_submissions/FeedbackSubmissionsDiscovery');
            this._feedbackSubmissions = new requiredClass.default(this.config);
        }
        return this._feedbackSubmissions;
    }
    get meetings() {
        if (!this._meetings) {
            const requiredClass = require('./meetings/MeetingsDiscovery');
            this._meetings = new requiredClass.default(this.config);
        }
        return this._meetings;
    }
    get notes() {
        if (!this._notes) {
            const requiredClass = require('./notes/NotesDiscovery');
            this._notes = new requiredClass.default(this.config);
        }
        return this._notes;
    }
    get postalMail() {
        if (!this._postalMail) {
            const requiredClass = require('./postal_mail/PostalMailDiscovery');
            this._postalMail = new requiredClass.default(this.config);
        }
        return this._postalMail;
    }
    get tasks() {
        if (!this._tasks) {
            const requiredClass = require('./tasks/TasksDiscovery');
            this._tasks = new requiredClass.default(this.config);
        }
        return this._tasks;
    }
}
exports.default = ObjectsDiscovery;
//# sourceMappingURL=ObjectsDiscovery.js.map