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
__exportStar(require("../models/BatchInputHubDbTableRowV3Request"), exports);
__exportStar(require("../models/BatchInputJsonNode"), exports);
__exportStar(require("../models/BatchInputString"), exports);
__exportStar(require("../models/BatchResponseHubDbTableRowV3"), exports);
__exportStar(require("../models/BatchResponseHubDbTableRowV3WithErrors"), exports);
__exportStar(require("../models/CollectionResponseWithTotalHubDbTableRowV3ForwardPaging"), exports);
__exportStar(require("../models/CollectionResponseWithTotalHubDbTableV3ForwardPaging"), exports);
__exportStar(require("../models/Column"), exports);
__exportStar(require("../models/ColumnRequest"), exports);
__exportStar(require("../models/ErrorDetail"), exports);
__exportStar(require("../models/ForeignId"), exports);
__exportStar(require("../models/ForwardPaging"), exports);
__exportStar(require("../models/HubDbTableCloneRequest"), exports);
__exportStar(require("../models/HubDbTableRowV3"), exports);
__exportStar(require("../models/HubDbTableRowV3Request"), exports);
__exportStar(require("../models/HubDbTableV3"), exports);
__exportStar(require("../models/HubDbTableV3Request"), exports);
__exportStar(require("../models/ImportResult"), exports);
__exportStar(require("../models/ModelError"), exports);
__exportStar(require("../models/NextPage"), exports);
__exportStar(require("../models/Option"), exports);
__exportStar(require("../models/SimpleUser"), exports);
__exportStar(require("../models/StandardError"), exports);
const BatchInputHubDbTableRowV3Request_1 = require("../models/BatchInputHubDbTableRowV3Request");
const BatchInputJsonNode_1 = require("../models/BatchInputJsonNode");
const BatchInputString_1 = require("../models/BatchInputString");
const BatchResponseHubDbTableRowV3_1 = require("../models/BatchResponseHubDbTableRowV3");
const BatchResponseHubDbTableRowV3WithErrors_1 = require("../models/BatchResponseHubDbTableRowV3WithErrors");
const CollectionResponseWithTotalHubDbTableRowV3ForwardPaging_1 = require("../models/CollectionResponseWithTotalHubDbTableRowV3ForwardPaging");
const CollectionResponseWithTotalHubDbTableV3ForwardPaging_1 = require("../models/CollectionResponseWithTotalHubDbTableV3ForwardPaging");
const Column_1 = require("../models/Column");
const ColumnRequest_1 = require("../models/ColumnRequest");
const ErrorDetail_1 = require("../models/ErrorDetail");
const ForeignId_1 = require("../models/ForeignId");
const ForwardPaging_1 = require("../models/ForwardPaging");
const HubDbTableCloneRequest_1 = require("../models/HubDbTableCloneRequest");
const HubDbTableRowV3_1 = require("../models/HubDbTableRowV3");
const HubDbTableRowV3Request_1 = require("../models/HubDbTableRowV3Request");
const HubDbTableV3_1 = require("../models/HubDbTableV3");
const HubDbTableV3Request_1 = require("../models/HubDbTableV3Request");
const ImportResult_1 = require("../models/ImportResult");
const ModelError_1 = require("../models/ModelError");
const NextPage_1 = require("../models/NextPage");
const Option_1 = require("../models/Option");
const SimpleUser_1 = require("../models/SimpleUser");
const StandardError_1 = require("../models/StandardError");
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
    "BatchResponseHubDbTableRowV3StatusEnum",
    "BatchResponseHubDbTableRowV3WithErrorsStatusEnum",
    "ColumnTypeEnum",
    "ColumnRequestTypeEnum",
]);
let typeMap = {
    "BatchInputHubDbTableRowV3Request": BatchInputHubDbTableRowV3Request_1.BatchInputHubDbTableRowV3Request,
    "BatchInputJsonNode": BatchInputJsonNode_1.BatchInputJsonNode,
    "BatchInputString": BatchInputString_1.BatchInputString,
    "BatchResponseHubDbTableRowV3": BatchResponseHubDbTableRowV3_1.BatchResponseHubDbTableRowV3,
    "BatchResponseHubDbTableRowV3WithErrors": BatchResponseHubDbTableRowV3WithErrors_1.BatchResponseHubDbTableRowV3WithErrors,
    "CollectionResponseWithTotalHubDbTableRowV3ForwardPaging": CollectionResponseWithTotalHubDbTableRowV3ForwardPaging_1.CollectionResponseWithTotalHubDbTableRowV3ForwardPaging,
    "CollectionResponseWithTotalHubDbTableV3ForwardPaging": CollectionResponseWithTotalHubDbTableV3ForwardPaging_1.CollectionResponseWithTotalHubDbTableV3ForwardPaging,
    "Column": Column_1.Column,
    "ColumnRequest": ColumnRequest_1.ColumnRequest,
    "ErrorDetail": ErrorDetail_1.ErrorDetail,
    "ForeignId": ForeignId_1.ForeignId,
    "ForwardPaging": ForwardPaging_1.ForwardPaging,
    "HubDbTableCloneRequest": HubDbTableCloneRequest_1.HubDbTableCloneRequest,
    "HubDbTableRowV3": HubDbTableRowV3_1.HubDbTableRowV3,
    "HubDbTableRowV3Request": HubDbTableRowV3Request_1.HubDbTableRowV3Request,
    "HubDbTableV3": HubDbTableV3_1.HubDbTableV3,
    "HubDbTableV3Request": HubDbTableV3Request_1.HubDbTableV3Request,
    "ImportResult": ImportResult_1.ImportResult,
    "ModelError": ModelError_1.ModelError,
    "NextPage": NextPage_1.NextPage,
    "Option": Option_1.Option,
    "SimpleUser": SimpleUser_1.SimpleUser,
    "StandardError": StandardError_1.StandardError,
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