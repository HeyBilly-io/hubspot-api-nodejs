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
__exportStar(require("../models/CollectionResponsePipelineNoPaging"), exports);
__exportStar(require("../models/CollectionResponsePipelineStageNoPaging"), exports);
__exportStar(require("../models/CollectionResponsePublicAuditInfoNoPaging"), exports);
__exportStar(require("../models/ErrorDetail"), exports);
__exportStar(require("../models/ModelError"), exports);
__exportStar(require("../models/Pipeline"), exports);
__exportStar(require("../models/PipelineInput"), exports);
__exportStar(require("../models/PipelinePatchInput"), exports);
__exportStar(require("../models/PipelineStage"), exports);
__exportStar(require("../models/PipelineStageInput"), exports);
__exportStar(require("../models/PipelineStagePatchInput"), exports);
__exportStar(require("../models/PublicAuditInfo"), exports);
const CollectionResponsePipelineNoPaging_1 = require("../models/CollectionResponsePipelineNoPaging");
const CollectionResponsePipelineStageNoPaging_1 = require("../models/CollectionResponsePipelineStageNoPaging");
const CollectionResponsePublicAuditInfoNoPaging_1 = require("../models/CollectionResponsePublicAuditInfoNoPaging");
const ErrorDetail_1 = require("../models/ErrorDetail");
const ModelError_1 = require("../models/ModelError");
const Pipeline_1 = require("../models/Pipeline");
const PipelineInput_1 = require("../models/PipelineInput");
const PipelinePatchInput_1 = require("../models/PipelinePatchInput");
const PipelineStage_1 = require("../models/PipelineStage");
const PipelineStageInput_1 = require("../models/PipelineStageInput");
const PipelineStagePatchInput_1 = require("../models/PipelineStagePatchInput");
const PublicAuditInfo_1 = require("../models/PublicAuditInfo");
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
let enumsMap = new Set([]);
let typeMap = {
    "CollectionResponsePipelineNoPaging": CollectionResponsePipelineNoPaging_1.CollectionResponsePipelineNoPaging,
    "CollectionResponsePipelineStageNoPaging": CollectionResponsePipelineStageNoPaging_1.CollectionResponsePipelineStageNoPaging,
    "CollectionResponsePublicAuditInfoNoPaging": CollectionResponsePublicAuditInfoNoPaging_1.CollectionResponsePublicAuditInfoNoPaging,
    "ErrorDetail": ErrorDetail_1.ErrorDetail,
    "ModelError": ModelError_1.ModelError,
    "Pipeline": Pipeline_1.Pipeline,
    "PipelineInput": PipelineInput_1.PipelineInput,
    "PipelinePatchInput": PipelinePatchInput_1.PipelinePatchInput,
    "PipelineStage": PipelineStage_1.PipelineStage,
    "PipelineStageInput": PipelineStageInput_1.PipelineStageInput,
    "PipelineStagePatchInput": PipelineStagePatchInput_1.PipelineStagePatchInput,
    "PublicAuditInfo": PublicAuditInfo_1.PublicAuditInfo,
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