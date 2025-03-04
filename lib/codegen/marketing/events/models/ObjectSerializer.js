"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectSerializer = void 0;
__exportStar(require("../models/BatchInputMarketingEventCreateRequestParams"), exports);
__exportStar(require("../models/BatchInputMarketingEventEmailSubscriber"), exports);
__exportStar(require("../models/BatchInputMarketingEventExternalUniqueIdentifier"), exports);
__exportStar(require("../models/BatchInputMarketingEventSubscriber"), exports);
__exportStar(require("../models/BatchResponseMarketingEventPublicDefaultResponse"), exports);
__exportStar(require("../models/BatchResponseSubscriberEmailResponse"), exports);
__exportStar(require("../models/BatchResponseSubscriberVidResponse"), exports);
__exportStar(require("../models/CollectionResponseMarketingEventExternalUniqueIdentifierNoPaging"), exports);
__exportStar(require("../models/ErrorCategory"), exports);
__exportStar(require("../models/ErrorDetail"), exports);
__exportStar(require("../models/EventDetailSettings"), exports);
__exportStar(require("../models/EventDetailSettingsUrl"), exports);
__exportStar(require("../models/MarketingEventCompleteRequestParams"), exports);
__exportStar(require("../models/MarketingEventCreateRequestParams"), exports);
__exportStar(require("../models/MarketingEventDefaultResponse"), exports);
__exportStar(require("../models/MarketingEventEmailSubscriber"), exports);
__exportStar(require("../models/MarketingEventExternalUniqueIdentifier"), exports);
__exportStar(require("../models/MarketingEventPublicDefaultResponse"), exports);
__exportStar(require("../models/MarketingEventPublicReadResponse"), exports);
__exportStar(require("../models/MarketingEventSubscriber"), exports);
__exportStar(require("../models/MarketingEventUpdateRequestParams"), exports);
__exportStar(require("../models/ModelError"), exports);
__exportStar(require("../models/PropertyValue"), exports);
__exportStar(require("../models/StandardError"), exports);
__exportStar(require("../models/SubscriberEmailResponse"), exports);
__exportStar(require("../models/SubscriberVidResponse"), exports);
const BatchInputMarketingEventCreateRequestParams_1 = require("../models/BatchInputMarketingEventCreateRequestParams");
const BatchInputMarketingEventEmailSubscriber_1 = require("../models/BatchInputMarketingEventEmailSubscriber");
const BatchInputMarketingEventExternalUniqueIdentifier_1 = require("../models/BatchInputMarketingEventExternalUniqueIdentifier");
const BatchInputMarketingEventSubscriber_1 = require("../models/BatchInputMarketingEventSubscriber");
const BatchResponseMarketingEventPublicDefaultResponse_1 = require("../models/BatchResponseMarketingEventPublicDefaultResponse");
const BatchResponseSubscriberEmailResponse_1 = require("../models/BatchResponseSubscriberEmailResponse");
const BatchResponseSubscriberVidResponse_1 = require("../models/BatchResponseSubscriberVidResponse");
const CollectionResponseMarketingEventExternalUniqueIdentifierNoPaging_1 = require("../models/CollectionResponseMarketingEventExternalUniqueIdentifierNoPaging");
const ErrorCategory_1 = require("../models/ErrorCategory");
const ErrorDetail_1 = require("../models/ErrorDetail");
const EventDetailSettings_1 = require("../models/EventDetailSettings");
const EventDetailSettingsUrl_1 = require("../models/EventDetailSettingsUrl");
const MarketingEventCompleteRequestParams_1 = require("../models/MarketingEventCompleteRequestParams");
const MarketingEventCreateRequestParams_1 = require("../models/MarketingEventCreateRequestParams");
const MarketingEventDefaultResponse_1 = require("../models/MarketingEventDefaultResponse");
const MarketingEventEmailSubscriber_1 = require("../models/MarketingEventEmailSubscriber");
const MarketingEventExternalUniqueIdentifier_1 = require("../models/MarketingEventExternalUniqueIdentifier");
const MarketingEventPublicDefaultResponse_1 = require("../models/MarketingEventPublicDefaultResponse");
const MarketingEventPublicReadResponse_1 = require("../models/MarketingEventPublicReadResponse");
const MarketingEventSubscriber_1 = require("../models/MarketingEventSubscriber");
const MarketingEventUpdateRequestParams_1 = require("../models/MarketingEventUpdateRequestParams");
const ModelError_1 = require("../models/ModelError");
const PropertyValue_1 = require("../models/PropertyValue");
const StandardError_1 = require("../models/StandardError");
const SubscriberEmailResponse_1 = require("../models/SubscriberEmailResponse");
const SubscriberVidResponse_1 = require("../models/SubscriberVidResponse");
let primitives = [
    "string",
    "boolean",
    "double",
    "integer",
    "long",
    "float",
    "number",
    "any"
];
const supportedMediaTypes = {
    "application/json": Infinity,
    "application/octet-stream": 0,
    "application/x-www-form-urlencoded": 0
};
let enumsMap = new Set([
    "BatchResponseMarketingEventPublicDefaultResponseStatusEnum",
    "BatchResponseSubscriberEmailResponseStatusEnum",
    "BatchResponseSubscriberVidResponseStatusEnum",
    "ErrorCategoryHttpStatusEnum",
    "PropertyValueSourceEnum",
]);
let typeMap = {
    "BatchInputMarketingEventCreateRequestParams": BatchInputMarketingEventCreateRequestParams_1.BatchInputMarketingEventCreateRequestParams,
    "BatchInputMarketingEventEmailSubscriber": BatchInputMarketingEventEmailSubscriber_1.BatchInputMarketingEventEmailSubscriber,
    "BatchInputMarketingEventExternalUniqueIdentifier": BatchInputMarketingEventExternalUniqueIdentifier_1.BatchInputMarketingEventExternalUniqueIdentifier,
    "BatchInputMarketingEventSubscriber": BatchInputMarketingEventSubscriber_1.BatchInputMarketingEventSubscriber,
    "BatchResponseMarketingEventPublicDefaultResponse": BatchResponseMarketingEventPublicDefaultResponse_1.BatchResponseMarketingEventPublicDefaultResponse,
    "BatchResponseSubscriberEmailResponse": BatchResponseSubscriberEmailResponse_1.BatchResponseSubscriberEmailResponse,
    "BatchResponseSubscriberVidResponse": BatchResponseSubscriberVidResponse_1.BatchResponseSubscriberVidResponse,
    "CollectionResponseMarketingEventExternalUniqueIdentifierNoPaging": CollectionResponseMarketingEventExternalUniqueIdentifierNoPaging_1.CollectionResponseMarketingEventExternalUniqueIdentifierNoPaging,
    "ErrorCategory": ErrorCategory_1.ErrorCategory,
    "ErrorDetail": ErrorDetail_1.ErrorDetail,
    "EventDetailSettings": EventDetailSettings_1.EventDetailSettings,
    "EventDetailSettingsUrl": EventDetailSettingsUrl_1.EventDetailSettingsUrl,
    "MarketingEventCompleteRequestParams": MarketingEventCompleteRequestParams_1.MarketingEventCompleteRequestParams,
    "MarketingEventCreateRequestParams": MarketingEventCreateRequestParams_1.MarketingEventCreateRequestParams,
    "MarketingEventDefaultResponse": MarketingEventDefaultResponse_1.MarketingEventDefaultResponse,
    "MarketingEventEmailSubscriber": MarketingEventEmailSubscriber_1.MarketingEventEmailSubscriber,
    "MarketingEventExternalUniqueIdentifier": MarketingEventExternalUniqueIdentifier_1.MarketingEventExternalUniqueIdentifier,
    "MarketingEventPublicDefaultResponse": MarketingEventPublicDefaultResponse_1.MarketingEventPublicDefaultResponse,
    "MarketingEventPublicReadResponse": MarketingEventPublicReadResponse_1.MarketingEventPublicReadResponse,
    "MarketingEventSubscriber": MarketingEventSubscriber_1.MarketingEventSubscriber,
    "MarketingEventUpdateRequestParams": MarketingEventUpdateRequestParams_1.MarketingEventUpdateRequestParams,
    "ModelError": ModelError_1.ModelError,
    "PropertyValue": PropertyValue_1.PropertyValue,
    "StandardError": StandardError_1.StandardError,
    "SubscriberEmailResponse": SubscriberEmailResponse_1.SubscriberEmailResponse,
    "SubscriberVidResponse": SubscriberVidResponse_1.SubscriberVidResponse,
};
class ObjectSerializer {
    static findCorrectType(data, expectedType) {
        if (data == undefined) {
            return expectedType;
        }
        else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        }
        else if (expectedType === "Date") {
            return expectedType;
        }
        else {
            if (enumsMap.has(expectedType)) {
                return expectedType;
            }
            if (!typeMap[expectedType]) {
                return expectedType;
            }
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType;
            }
            else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if (typeMap[discriminatorType]) {
                        return discriminatorType;
                    }
                    else {
                        return expectedType;
                    }
                }
                else {
                    return expectedType;
                }
            }
        }
    }
    static serialize(data, type, format) {
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) {
            let subType = type.replace("Array<", "");
            subType = subType.substring(0, subType.length - 1);
            let transformedData = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.serialize(date, subType, format));
            }
            return transformedData;
        }
        else if (type === "Date") {
            if (format == "date") {
                let month = data.getMonth() + 1;
                month = month < 10 ? "0" + month.toString() : month.toString();
                let day = data.getDate();
                day = day < 10 ? "0" + day.toString() : day.toString();
                return data.getFullYear() + "-" + month + "-" + day;
            }
            else {
                return data.toISOString();
            }
        }
        else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) {
                return data;
            }
            type = this.findCorrectType(data, type);
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance = {};
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type, attributeType.format);
            }
            return instance;
        }
    }
    static deserialize(data, type, format) {
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) {
            let subType = type.replace("Array<", "");
            subType = subType.substring(0, subType.length - 1);
            let transformedData = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.deserialize(date, subType, format));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return new Date(data);
        }
        else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) {
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                let value = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type, attributeType.format);
                if (value !== undefined) {
                    instance[attributeType.name] = value;
                }
            }
            return instance;
        }
    }
    static normalizeMediaType(mediaType) {
        if (mediaType === undefined) {
            return undefined;
        }
        return mediaType.split(";")[0].trim().toLowerCase();
    }
    static getPreferredMediaType(mediaTypes) {
        if (!mediaTypes) {
            return "application/json";
        }
        const normalMediaTypes = mediaTypes.map(this.normalizeMediaType);
        let selectedMediaType = undefined;
        let selectedRank = -Infinity;
        for (const mediaType of normalMediaTypes) {
            if (supportedMediaTypes[mediaType] > selectedRank) {
                selectedMediaType = mediaType;
                selectedRank = supportedMediaTypes[mediaType];
            }
        }
        if (selectedMediaType === undefined) {
            throw new Error("None of the given media types are supported: " + mediaTypes.join(", "));
        }
        return selectedMediaType;
    }
    static stringify(data, mediaType) {
        if (mediaType === "text/plain") {
            return String(data);
        }
        if (mediaType === "application/json") {
            return JSON.stringify(data);
        }
        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.stringify.");
    }
    static parse(rawData, mediaType) {
        if (mediaType === undefined) {
            throw new Error("Cannot parse content. No Content-Type defined.");
        }
        if (mediaType === "text/plain") {
            return rawData;
        }
        if (mediaType === "application/json") {
            return JSON.parse(rawData);
        }
        if (mediaType === "text/html") {
            return rawData;
        }
        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.parse.");
    }
}
exports.ObjectSerializer = ObjectSerializer;
//# sourceMappingURL=ObjectSerializer.js.map