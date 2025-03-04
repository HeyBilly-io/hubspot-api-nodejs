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
__exportStar(require("../models/AssociatedId"), exports);
__exportStar(require("../models/AssociationSpec"), exports);
__exportStar(require("../models/AssociationSpecWithLabel"), exports);
__exportStar(require("../models/BatchInputSimplePublicObjectBatchInput"), exports);
__exportStar(require("../models/BatchInputSimplePublicObjectId"), exports);
__exportStar(require("../models/BatchInputSimplePublicObjectInput"), exports);
__exportStar(require("../models/BatchReadInputSimplePublicObjectId"), exports);
__exportStar(require("../models/BatchResponseSimplePublicObject"), exports);
__exportStar(require("../models/BatchResponseSimplePublicObjectWithErrors"), exports);
__exportStar(require("../models/CollectionResponseAssociatedId"), exports);
__exportStar(require("../models/CollectionResponseMultiAssociatedObjectWithLabelForwardPaging"), exports);
__exportStar(require("../models/CollectionResponseSimplePublicObjectWithAssociationsForwardPaging"), exports);
__exportStar(require("../models/CollectionResponseWithTotalSimplePublicObjectForwardPaging"), exports);
__exportStar(require("../models/ErrorCategory"), exports);
__exportStar(require("../models/ErrorDetail"), exports);
__exportStar(require("../models/Filter"), exports);
__exportStar(require("../models/FilterGroup"), exports);
__exportStar(require("../models/ForwardPaging"), exports);
__exportStar(require("../models/LabelsBetweenObjectPair"), exports);
__exportStar(require("../models/ModelError"), exports);
__exportStar(require("../models/MultiAssociatedObjectWithLabel"), exports);
__exportStar(require("../models/NextPage"), exports);
__exportStar(require("../models/Paging"), exports);
__exportStar(require("../models/PreviousPage"), exports);
__exportStar(require("../models/PublicMergeInput"), exports);
__exportStar(require("../models/PublicObjectSearchRequest"), exports);
__exportStar(require("../models/SimplePublicObject"), exports);
__exportStar(require("../models/SimplePublicObjectBatchInput"), exports);
__exportStar(require("../models/SimplePublicObjectId"), exports);
__exportStar(require("../models/SimplePublicObjectInput"), exports);
__exportStar(require("../models/SimplePublicObjectWithAssociations"), exports);
__exportStar(require("../models/StandardError"), exports);
__exportStar(require("../models/ValueWithTimestamp"), exports);
const AssociatedId_1 = require("../models/AssociatedId");
const AssociationSpec_1 = require("../models/AssociationSpec");
const AssociationSpecWithLabel_1 = require("../models/AssociationSpecWithLabel");
const BatchInputSimplePublicObjectBatchInput_1 = require("../models/BatchInputSimplePublicObjectBatchInput");
const BatchInputSimplePublicObjectId_1 = require("../models/BatchInputSimplePublicObjectId");
const BatchInputSimplePublicObjectInput_1 = require("../models/BatchInputSimplePublicObjectInput");
const BatchReadInputSimplePublicObjectId_1 = require("../models/BatchReadInputSimplePublicObjectId");
const BatchResponseSimplePublicObject_1 = require("../models/BatchResponseSimplePublicObject");
const BatchResponseSimplePublicObjectWithErrors_1 = require("../models/BatchResponseSimplePublicObjectWithErrors");
const CollectionResponseAssociatedId_1 = require("../models/CollectionResponseAssociatedId");
const CollectionResponseMultiAssociatedObjectWithLabelForwardPaging_1 = require("../models/CollectionResponseMultiAssociatedObjectWithLabelForwardPaging");
const CollectionResponseSimplePublicObjectWithAssociationsForwardPaging_1 = require("../models/CollectionResponseSimplePublicObjectWithAssociationsForwardPaging");
const CollectionResponseWithTotalSimplePublicObjectForwardPaging_1 = require("../models/CollectionResponseWithTotalSimplePublicObjectForwardPaging");
const ErrorCategory_1 = require("../models/ErrorCategory");
const ErrorDetail_1 = require("../models/ErrorDetail");
const Filter_1 = require("../models/Filter");
const FilterGroup_1 = require("../models/FilterGroup");
const ForwardPaging_1 = require("../models/ForwardPaging");
const LabelsBetweenObjectPair_1 = require("../models/LabelsBetweenObjectPair");
const ModelError_1 = require("../models/ModelError");
const MultiAssociatedObjectWithLabel_1 = require("../models/MultiAssociatedObjectWithLabel");
const NextPage_1 = require("../models/NextPage");
const Paging_1 = require("../models/Paging");
const PreviousPage_1 = require("../models/PreviousPage");
const PublicMergeInput_1 = require("../models/PublicMergeInput");
const PublicObjectSearchRequest_1 = require("../models/PublicObjectSearchRequest");
const SimplePublicObject_1 = require("../models/SimplePublicObject");
const SimplePublicObjectBatchInput_1 = require("../models/SimplePublicObjectBatchInput");
const SimplePublicObjectId_1 = require("../models/SimplePublicObjectId");
const SimplePublicObjectInput_1 = require("../models/SimplePublicObjectInput");
const SimplePublicObjectWithAssociations_1 = require("../models/SimplePublicObjectWithAssociations");
const StandardError_1 = require("../models/StandardError");
const ValueWithTimestamp_1 = require("../models/ValueWithTimestamp");
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
    "AssociationSpecAssociationCategoryEnum",
    "AssociationSpecWithLabelCategoryEnum",
    "BatchResponseSimplePublicObjectStatusEnum",
    "BatchResponseSimplePublicObjectWithErrorsStatusEnum",
    "ErrorCategoryHttpStatusEnum",
    "FilterOperatorEnum",
]);
let typeMap = {
    "AssociatedId": AssociatedId_1.AssociatedId,
    "AssociationSpec": AssociationSpec_1.AssociationSpec,
    "AssociationSpecWithLabel": AssociationSpecWithLabel_1.AssociationSpecWithLabel,
    "BatchInputSimplePublicObjectBatchInput": BatchInputSimplePublicObjectBatchInput_1.BatchInputSimplePublicObjectBatchInput,
    "BatchInputSimplePublicObjectId": BatchInputSimplePublicObjectId_1.BatchInputSimplePublicObjectId,
    "BatchInputSimplePublicObjectInput": BatchInputSimplePublicObjectInput_1.BatchInputSimplePublicObjectInput,
    "BatchReadInputSimplePublicObjectId": BatchReadInputSimplePublicObjectId_1.BatchReadInputSimplePublicObjectId,
    "BatchResponseSimplePublicObject": BatchResponseSimplePublicObject_1.BatchResponseSimplePublicObject,
    "BatchResponseSimplePublicObjectWithErrors": BatchResponseSimplePublicObjectWithErrors_1.BatchResponseSimplePublicObjectWithErrors,
    "CollectionResponseAssociatedId": CollectionResponseAssociatedId_1.CollectionResponseAssociatedId,
    "CollectionResponseMultiAssociatedObjectWithLabelForwardPaging": CollectionResponseMultiAssociatedObjectWithLabelForwardPaging_1.CollectionResponseMultiAssociatedObjectWithLabelForwardPaging,
    "CollectionResponseSimplePublicObjectWithAssociationsForwardPaging": CollectionResponseSimplePublicObjectWithAssociationsForwardPaging_1.CollectionResponseSimplePublicObjectWithAssociationsForwardPaging,
    "CollectionResponseWithTotalSimplePublicObjectForwardPaging": CollectionResponseWithTotalSimplePublicObjectForwardPaging_1.CollectionResponseWithTotalSimplePublicObjectForwardPaging,
    "ErrorCategory": ErrorCategory_1.ErrorCategory,
    "ErrorDetail": ErrorDetail_1.ErrorDetail,
    "Filter": Filter_1.Filter,
    "FilterGroup": FilterGroup_1.FilterGroup,
    "ForwardPaging": ForwardPaging_1.ForwardPaging,
    "LabelsBetweenObjectPair": LabelsBetweenObjectPair_1.LabelsBetweenObjectPair,
    "ModelError": ModelError_1.ModelError,
    "MultiAssociatedObjectWithLabel": MultiAssociatedObjectWithLabel_1.MultiAssociatedObjectWithLabel,
    "NextPage": NextPage_1.NextPage,
    "Paging": Paging_1.Paging,
    "PreviousPage": PreviousPage_1.PreviousPage,
    "PublicMergeInput": PublicMergeInput_1.PublicMergeInput,
    "PublicObjectSearchRequest": PublicObjectSearchRequest_1.PublicObjectSearchRequest,
    "SimplePublicObject": SimplePublicObject_1.SimplePublicObject,
    "SimplePublicObjectBatchInput": SimplePublicObjectBatchInput_1.SimplePublicObjectBatchInput,
    "SimplePublicObjectId": SimplePublicObjectId_1.SimplePublicObjectId,
    "SimplePublicObjectInput": SimplePublicObjectInput_1.SimplePublicObjectInput,
    "SimplePublicObjectWithAssociations": SimplePublicObjectWithAssociations_1.SimplePublicObjectWithAssociations,
    "StandardError": StandardError_1.StandardError,
    "ValueWithTimestamp": ValueWithTimestamp_1.ValueWithTimestamp,
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