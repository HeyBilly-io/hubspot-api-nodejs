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
__exportStar(require("../models/BatchInputTimelineEvent"), exports);
__exportStar(require("../models/BatchResponseTimelineEventResponse"), exports);
__exportStar(require("../models/BatchResponseTimelineEventResponseWithErrors"), exports);
__exportStar(require("../models/CollectionResponseTimelineEventTemplateNoPaging"), exports);
__exportStar(require("../models/ErrorCategory"), exports);
__exportStar(require("../models/ErrorDetail"), exports);
__exportStar(require("../models/EventDetail"), exports);
__exportStar(require("../models/ModelError"), exports);
__exportStar(require("../models/StandardError"), exports);
__exportStar(require("../models/TimelineEvent"), exports);
__exportStar(require("../models/TimelineEventIFrame"), exports);
__exportStar(require("../models/TimelineEventResponse"), exports);
__exportStar(require("../models/TimelineEventTemplate"), exports);
__exportStar(require("../models/TimelineEventTemplateCreateRequest"), exports);
__exportStar(require("../models/TimelineEventTemplateToken"), exports);
__exportStar(require("../models/TimelineEventTemplateTokenOption"), exports);
__exportStar(require("../models/TimelineEventTemplateTokenUpdateRequest"), exports);
__exportStar(require("../models/TimelineEventTemplateUpdateRequest"), exports);
const BatchInputTimelineEvent_1 = require("../models/BatchInputTimelineEvent");
const BatchResponseTimelineEventResponse_1 = require("../models/BatchResponseTimelineEventResponse");
const BatchResponseTimelineEventResponseWithErrors_1 = require("../models/BatchResponseTimelineEventResponseWithErrors");
const CollectionResponseTimelineEventTemplateNoPaging_1 = require("../models/CollectionResponseTimelineEventTemplateNoPaging");
const ErrorCategory_1 = require("../models/ErrorCategory");
const ErrorDetail_1 = require("../models/ErrorDetail");
const EventDetail_1 = require("../models/EventDetail");
const ModelError_1 = require("../models/ModelError");
const StandardError_1 = require("../models/StandardError");
const TimelineEvent_1 = require("../models/TimelineEvent");
const TimelineEventIFrame_1 = require("../models/TimelineEventIFrame");
const TimelineEventResponse_1 = require("../models/TimelineEventResponse");
const TimelineEventTemplate_1 = require("../models/TimelineEventTemplate");
const TimelineEventTemplateCreateRequest_1 = require("../models/TimelineEventTemplateCreateRequest");
const TimelineEventTemplateToken_1 = require("../models/TimelineEventTemplateToken");
const TimelineEventTemplateTokenOption_1 = require("../models/TimelineEventTemplateTokenOption");
const TimelineEventTemplateTokenUpdateRequest_1 = require("../models/TimelineEventTemplateTokenUpdateRequest");
const TimelineEventTemplateUpdateRequest_1 = require("../models/TimelineEventTemplateUpdateRequest");
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
    "BatchResponseTimelineEventResponseStatusEnum",
    "BatchResponseTimelineEventResponseWithErrorsStatusEnum",
    "ErrorCategoryHttpStatusEnum",
    "TimelineEventTemplateTokenTypeEnum",
]);
let typeMap = {
    "BatchInputTimelineEvent": BatchInputTimelineEvent_1.BatchInputTimelineEvent,
    "BatchResponseTimelineEventResponse": BatchResponseTimelineEventResponse_1.BatchResponseTimelineEventResponse,
    "BatchResponseTimelineEventResponseWithErrors": BatchResponseTimelineEventResponseWithErrors_1.BatchResponseTimelineEventResponseWithErrors,
    "CollectionResponseTimelineEventTemplateNoPaging": CollectionResponseTimelineEventTemplateNoPaging_1.CollectionResponseTimelineEventTemplateNoPaging,
    "ErrorCategory": ErrorCategory_1.ErrorCategory,
    "ErrorDetail": ErrorDetail_1.ErrorDetail,
    "EventDetail": EventDetail_1.EventDetail,
    "ModelError": ModelError_1.ModelError,
    "StandardError": StandardError_1.StandardError,
    "TimelineEvent": TimelineEvent_1.TimelineEvent,
    "TimelineEventIFrame": TimelineEventIFrame_1.TimelineEventIFrame,
    "TimelineEventResponse": TimelineEventResponse_1.TimelineEventResponse,
    "TimelineEventTemplate": TimelineEventTemplate_1.TimelineEventTemplate,
    "TimelineEventTemplateCreateRequest": TimelineEventTemplateCreateRequest_1.TimelineEventTemplateCreateRequest,
    "TimelineEventTemplateToken": TimelineEventTemplateToken_1.TimelineEventTemplateToken,
    "TimelineEventTemplateTokenOption": TimelineEventTemplateTokenOption_1.TimelineEventTemplateTokenOption,
    "TimelineEventTemplateTokenUpdateRequest": TimelineEventTemplateTokenUpdateRequest_1.TimelineEventTemplateTokenUpdateRequest,
    "TimelineEventTemplateUpdateRequest": TimelineEventTemplateUpdateRequest_1.TimelineEventTemplateUpdateRequest,
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