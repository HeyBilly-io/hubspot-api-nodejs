"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketingEventUpdateRequestParams = void 0;
class MarketingEventUpdateRequestParams {
    static getAttributeTypeMap() {
        return MarketingEventUpdateRequestParams.attributeTypeMap;
    }
    constructor() {
    }
}
exports.MarketingEventUpdateRequestParams = MarketingEventUpdateRequestParams;
MarketingEventUpdateRequestParams.discriminator = undefined;
MarketingEventUpdateRequestParams.attributeTypeMap = [
    {
        "name": "eventName",
        "baseName": "eventName",
        "type": "string",
        "format": ""
    },
    {
        "name": "eventType",
        "baseName": "eventType",
        "type": "string",
        "format": ""
    },
    {
        "name": "startDateTime",
        "baseName": "startDateTime",
        "type": "Date",
        "format": "date-time"
    },
    {
        "name": "endDateTime",
        "baseName": "endDateTime",
        "type": "Date",
        "format": "date-time"
    },
    {
        "name": "eventOrganizer",
        "baseName": "eventOrganizer",
        "type": "string",
        "format": ""
    },
    {
        "name": "eventDescription",
        "baseName": "eventDescription",
        "type": "string",
        "format": ""
    },
    {
        "name": "eventUrl",
        "baseName": "eventUrl",
        "type": "string",
        "format": ""
    },
    {
        "name": "eventCancelled",
        "baseName": "eventCancelled",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "customProperties",
        "baseName": "customProperties",
        "type": "Array<PropertyValue>",
        "format": ""
    }
];
//# sourceMappingURL=MarketingEventUpdateRequestParams.js.map