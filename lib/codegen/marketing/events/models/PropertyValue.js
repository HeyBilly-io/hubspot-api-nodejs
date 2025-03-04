"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertyValue = void 0;
class PropertyValue {
    static getAttributeTypeMap() {
        return PropertyValue.attributeTypeMap;
    }
    constructor() {
    }
}
exports.PropertyValue = PropertyValue;
PropertyValue.discriminator = undefined;
PropertyValue.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "name",
        "type": "string",
        "format": ""
    },
    {
        "name": "value",
        "baseName": "value",
        "type": "string",
        "format": ""
    },
    {
        "name": "timestamp",
        "baseName": "timestamp",
        "type": "number",
        "format": "int64"
    },
    {
        "name": "sourceId",
        "baseName": "sourceId",
        "type": "string",
        "format": ""
    },
    {
        "name": "sourceLabel",
        "baseName": "sourceLabel",
        "type": "string",
        "format": ""
    },
    {
        "name": "source",
        "baseName": "source",
        "type": "PropertyValueSourceEnum",
        "format": ""
    },
    {
        "name": "selectedByUser",
        "baseName": "selectedByUser",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "selectedByUserTimestamp",
        "baseName": "selectedByUserTimestamp",
        "type": "number",
        "format": "int64"
    },
    {
        "name": "sourceVid",
        "baseName": "sourceVid",
        "type": "Array<number>",
        "format": "int64"
    },
    {
        "name": "sourceMetadata",
        "baseName": "sourceMetadata",
        "type": "string",
        "format": ""
    },
    {
        "name": "requestId",
        "baseName": "requestId",
        "type": "string",
        "format": ""
    },
    {
        "name": "updatedByUserId",
        "baseName": "updatedByUserId",
        "type": "number",
        "format": "int32"
    },
    {
        "name": "persistenceTimestamp",
        "baseName": "persistenceTimestamp",
        "type": "number",
        "format": "int64"
    }
];
//# sourceMappingURL=PropertyValue.js.map