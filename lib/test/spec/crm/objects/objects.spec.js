"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../../../index");
const CallsDiscovery_1 = __importDefault(require("../../../../src/discovery/crm/objects/calls/CallsDiscovery"));
const EmailsDiscovery_1 = __importDefault(require("../../../../src/discovery/crm/objects/emails/EmailsDiscovery"));
const FeedbackSubmissionsDiscovery_1 = __importDefault(require("../../../../src/discovery/crm/objects/feedback_submissions/FeedbackSubmissionsDiscovery"));
const MeetingsDiscovery_1 = __importDefault(require("../../../../src/discovery/crm/objects/meetings/MeetingsDiscovery"));
const NotesDiscovery_1 = __importDefault(require("../../../../src/discovery/crm/objects/notes/NotesDiscovery"));
const PostalMailDiscovery_1 = __importDefault(require("../../../../src/discovery/crm/objects/postal_mail/PostalMailDiscovery"));
const TasksDiscovery_1 = __importDefault(require("../../../../src/discovery/crm/objects/tasks/TasksDiscovery"));
describe('api client', () => {
    it('is discoverable', () => {
        const client = new index_1.Client().crm.objects;
        expect(CallsDiscovery_1.default.name).toBe(client.calls.constructor.name);
        expect(EmailsDiscovery_1.default.name).toBe(client.emails.constructor.name);
        expect(FeedbackSubmissionsDiscovery_1.default.name).toBe(client.feedbackSubmissions.constructor.name);
        expect(MeetingsDiscovery_1.default.name).toBe(client.meetings.constructor.name);
        expect(NotesDiscovery_1.default.name).toBe(client.notes.constructor.name);
        expect(PostalMailDiscovery_1.default.name).toBe(client.postalMail.constructor.name);
        expect(TasksDiscovery_1.default.name).toBe(client.tasks.constructor.name);
        expect(client.hasOwnProperty('associationsApi')).toBeTruthy();
        expect(client.hasOwnProperty('basicApi')).toBeTruthy();
        expect(client.hasOwnProperty('batchApi')).toBeTruthy();
        expect(client.hasOwnProperty('gdprApi')).toBeTruthy();
        expect(client.hasOwnProperty('publicObjectApi')).toBeTruthy();
        expect(client.hasOwnProperty('searchApi')).toBeTruthy();
    });
});
//# sourceMappingURL=objects.spec.js.map