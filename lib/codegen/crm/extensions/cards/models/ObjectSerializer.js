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
__exportStar(require("../models/ActionConfirmationBody"), exports);
__exportStar(require("../models/ActionHookActionBody"), exports);
__exportStar(require("../models/CardActions"), exports);
__exportStar(require("../models/CardCreateRequest"), exports);
__exportStar(require("../models/CardDisplayBody"), exports);
__exportStar(require("../models/CardDisplayProperty"), exports);
__exportStar(require("../models/CardFetchBody"), exports);
__exportStar(require("../models/CardFetchBodyPatch"), exports);
__exportStar(require("../models/CardListResponse"), exports);
__exportStar(require("../models/CardObjectTypeBody"), exports);
__exportStar(require("../models/CardPatchRequest"), exports);
__exportStar(require("../models/CardResponse"), exports);
__exportStar(require("../models/DisplayOption"), exports);
__exportStar(require("../models/ErrorDetail"), exports);
__exportStar(require("../models/IFrameActionBody"), exports);
__exportStar(require("../models/IntegratorCardPayloadResponse"), exports);
__exportStar(require("../models/IntegratorObjectResult"), exports);
__exportStar(require("../models/IntegratorObjectResultActionsInner"), exports);
__exportStar(require("../models/ModelError"), exports);
__exportStar(require("../models/ObjectToken"), exports);
__exportStar(require("../models/TopLevelActions"), exports);
const ActionConfirmationBody_1 = require("../models/ActionConfirmationBody");
const ActionHookActionBody_1 = require("../models/ActionHookActionBody");
const CardActions_1 = require("../models/CardActions");
const CardCreateRequest_1 = require("../models/CardCreateRequest");
const CardDisplayBody_1 = require("../models/CardDisplayBody");
const CardDisplayProperty_1 = require("../models/CardDisplayProperty");
const CardFetchBody_1 = require("../models/CardFetchBody");
const CardFetchBodyPatch_1 = require("../models/CardFetchBodyPatch");
const CardListResponse_1 = require("../models/CardListResponse");
const CardObjectTypeBody_1 = require("../models/CardObjectTypeBody");
const CardPatchRequest_1 = require("../models/CardPatchRequest");
const CardResponse_1 = require("../models/CardResponse");
const DisplayOption_1 = require("../models/DisplayOption");
const ErrorDetail_1 = require("../models/ErrorDetail");
const IFrameActionBody_1 = require("../models/IFrameActionBody");
const IntegratorCardPayloadResponse_1 = require("../models/IntegratorCardPayloadResponse");
const IntegratorObjectResult_1 = require("../models/IntegratorObjectResult");
const IntegratorObjectResultActionsInner_1 = require("../models/IntegratorObjectResultActionsInner");
const ModelError_1 = require("../models/ModelError");
const ObjectToken_1 = require("../models/ObjectToken");
const TopLevelActions_1 = require("../models/TopLevelActions");
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
    "ActionHookActionBodyTypeEnum",
    "ActionHookActionBodyHttpMethodEnum",
    "CardDisplayPropertyDataTypeEnum",
    "CardObjectTypeBodyNameEnum",
    "DisplayOptionTypeEnum",
    "IFrameActionBodyTypeEnum",
    "IntegratorCardPayloadResponseResponseVersionEnum",
    "IntegratorObjectResultActionsInnerTypeEnum",
    "IntegratorObjectResultActionsInnerHttpMethodEnum",
    "ObjectTokenDataTypeEnum",
]);
let typeMap = {
    "ActionConfirmationBody": ActionConfirmationBody_1.ActionConfirmationBody,
    "ActionHookActionBody": ActionHookActionBody_1.ActionHookActionBody,
    "CardActions": CardActions_1.CardActions,
    "CardCreateRequest": CardCreateRequest_1.CardCreateRequest,
    "CardDisplayBody": CardDisplayBody_1.CardDisplayBody,
    "CardDisplayProperty": CardDisplayProperty_1.CardDisplayProperty,
    "CardFetchBody": CardFetchBody_1.CardFetchBody,
    "CardFetchBodyPatch": CardFetchBodyPatch_1.CardFetchBodyPatch,
    "CardListResponse": CardListResponse_1.CardListResponse,
    "CardObjectTypeBody": CardObjectTypeBody_1.CardObjectTypeBody,
    "CardPatchRequest": CardPatchRequest_1.CardPatchRequest,
    "CardResponse": CardResponse_1.CardResponse,
    "DisplayOption": DisplayOption_1.DisplayOption,
    "ErrorDetail": ErrorDetail_1.ErrorDetail,
    "IFrameActionBody": IFrameActionBody_1.IFrameActionBody,
    "IntegratorCardPayloadResponse": IntegratorCardPayloadResponse_1.IntegratorCardPayloadResponse,
    "IntegratorObjectResult": IntegratorObjectResult_1.IntegratorObjectResult,
    "IntegratorObjectResultActionsInner": IntegratorObjectResultActionsInner_1.IntegratorObjectResultActionsInner,
    "ModelError": ModelError_1.ModelError,
    "ObjectToken": ObjectToken_1.ObjectToken,
    "TopLevelActions": TopLevelActions_1.TopLevelActions,
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