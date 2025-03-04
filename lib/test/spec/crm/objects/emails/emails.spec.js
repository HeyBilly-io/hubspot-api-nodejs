"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../../../../index");
describe('api client', () => {
    it('is discoverable', () => {
        const client = new index_1.Client().crm.objects.emails;
        expect(client.hasOwnProperty('associationsApi')).toBeTruthy();
        expect(client.hasOwnProperty('basicApi')).toBeTruthy();
        expect(client.hasOwnProperty('batchApi')).toBeTruthy();
        expect(client.hasOwnProperty('publicObjectApi')).toBeTruthy();
        expect(client.hasOwnProperty('searchApi')).toBeTruthy();
    });
});
//# sourceMappingURL=emails.spec.js.map