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
__exportStar(require("../models/AccountingAppSettings"), exports);
__exportStar(require("../models/AccountingAppUrls"), exports);
__exportStar(require("../models/AccountingExtensionCustomer"), exports);
__exportStar(require("../models/AccountingExtensionInvoice"), exports);
__exportStar(require("../models/AccountingExtensionTerm"), exports);
__exportStar(require("../models/AccountingFeatures"), exports);
__exportStar(require("../models/ActionResponse"), exports);
__exportStar(require("../models/Address"), exports);
__exportStar(require("../models/CreateInvoiceFeature"), exports);
__exportStar(require("../models/CreateInvoiceSubFeatures"), exports);
__exportStar(require("../models/CreateUserAccountRequestExternal"), exports);
__exportStar(require("../models/CustomerSearchResponseExternal"), exports);
__exportStar(require("../models/ErrorDetail"), exports);
__exportStar(require("../models/ExchangeRateResponse"), exports);
__exportStar(require("../models/ImportInvoiceFeature"), exports);
__exportStar(require("../models/InvoiceCreatePaymentRequest"), exports);
__exportStar(require("../models/InvoicePdfResponse"), exports);
__exportStar(require("../models/InvoiceReadResponse"), exports);
__exportStar(require("../models/InvoiceSearchResponse"), exports);
__exportStar(require("../models/InvoiceUpdateRequest"), exports);
__exportStar(require("../models/InvoiceUpdateResponse"), exports);
__exportStar(require("../models/InvoicesResponseExternal"), exports);
__exportStar(require("../models/ModelError"), exports);
__exportStar(require("../models/ObjectSyncFeature"), exports);
__exportStar(require("../models/Product"), exports);
__exportStar(require("../models/ProductSearchResponse"), exports);
__exportStar(require("../models/ResultIdAccountingResponse"), exports);
__exportStar(require("../models/SyncContactsRequest"), exports);
__exportStar(require("../models/SyncProductsRequest"), exports);
__exportStar(require("../models/Tax"), exports);
__exportStar(require("../models/TaxSearchResponse"), exports);
__exportStar(require("../models/TaxType"), exports);
__exportStar(require("../models/TermsResponse"), exports);
__exportStar(require("../models/UnitPrice"), exports);
__exportStar(require("../models/UpdatedContact"), exports);
__exportStar(require("../models/UpdatedProduct"), exports);
const AccountingAppSettings_1 = require("../models/AccountingAppSettings");
const AccountingAppUrls_1 = require("../models/AccountingAppUrls");
const AccountingExtensionCustomer_1 = require("../models/AccountingExtensionCustomer");
const AccountingExtensionInvoice_1 = require("../models/AccountingExtensionInvoice");
const AccountingExtensionTerm_1 = require("../models/AccountingExtensionTerm");
const AccountingFeatures_1 = require("../models/AccountingFeatures");
const ActionResponse_1 = require("../models/ActionResponse");
const Address_1 = require("../models/Address");
const CreateInvoiceFeature_1 = require("../models/CreateInvoiceFeature");
const CreateInvoiceSubFeatures_1 = require("../models/CreateInvoiceSubFeatures");
const CreateUserAccountRequestExternal_1 = require("../models/CreateUserAccountRequestExternal");
const CustomerSearchResponseExternal_1 = require("../models/CustomerSearchResponseExternal");
const ErrorDetail_1 = require("../models/ErrorDetail");
const ExchangeRateResponse_1 = require("../models/ExchangeRateResponse");
const ImportInvoiceFeature_1 = require("../models/ImportInvoiceFeature");
const InvoiceCreatePaymentRequest_1 = require("../models/InvoiceCreatePaymentRequest");
const InvoicePdfResponse_1 = require("../models/InvoicePdfResponse");
const InvoiceReadResponse_1 = require("../models/InvoiceReadResponse");
const InvoiceSearchResponse_1 = require("../models/InvoiceSearchResponse");
const InvoiceUpdateRequest_1 = require("../models/InvoiceUpdateRequest");
const InvoiceUpdateResponse_1 = require("../models/InvoiceUpdateResponse");
const InvoicesResponseExternal_1 = require("../models/InvoicesResponseExternal");
const ModelError_1 = require("../models/ModelError");
const ObjectSyncFeature_1 = require("../models/ObjectSyncFeature");
const Product_1 = require("../models/Product");
const ProductSearchResponse_1 = require("../models/ProductSearchResponse");
const ResultIdAccountingResponse_1 = require("../models/ResultIdAccountingResponse");
const SyncContactsRequest_1 = require("../models/SyncContactsRequest");
const SyncProductsRequest_1 = require("../models/SyncProductsRequest");
const Tax_1 = require("../models/Tax");
const TaxSearchResponse_1 = require("../models/TaxSearchResponse");
const TaxType_1 = require("../models/TaxType");
const TermsResponse_1 = require("../models/TermsResponse");
const UnitPrice_1 = require("../models/UnitPrice");
const UpdatedContact_1 = require("../models/UpdatedContact");
const UpdatedProduct_1 = require("../models/UpdatedProduct");
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
    "AccountingExtensionInvoiceStatusEnum",
    "ActionResponseStatusEnum",
    "CustomerSearchResponseExternalResultEnum",
    "ExchangeRateResponseResultEnum",
    "InvoicePdfResponseResultEnum",
    "InvoiceReadResponseInvoiceStatusEnum",
    "InvoiceSearchResponseResultEnum",
    "InvoiceUpdateResponseInvoiceStatusEnum",
    "InvoicesResponseExternalResultEnum",
    "ProductSearchResponseResultEnum",
    "ResultIdAccountingResponseResultEnum",
    "TaxSearchResponseResultEnum",
    "TermsResponseResultEnum",
    "UpdatedContactSyncActionEnum",
    "UpdatedContactCustomerTypeEnum",
    "UpdatedProductSyncActionEnum",
]);
let typeMap = {
    "AccountingAppSettings": AccountingAppSettings_1.AccountingAppSettings,
    "AccountingAppUrls": AccountingAppUrls_1.AccountingAppUrls,
    "AccountingExtensionCustomer": AccountingExtensionCustomer_1.AccountingExtensionCustomer,
    "AccountingExtensionInvoice": AccountingExtensionInvoice_1.AccountingExtensionInvoice,
    "AccountingExtensionTerm": AccountingExtensionTerm_1.AccountingExtensionTerm,
    "AccountingFeatures": AccountingFeatures_1.AccountingFeatures,
    "ActionResponse": ActionResponse_1.ActionResponse,
    "Address": Address_1.Address,
    "CreateInvoiceFeature": CreateInvoiceFeature_1.CreateInvoiceFeature,
    "CreateInvoiceSubFeatures": CreateInvoiceSubFeatures_1.CreateInvoiceSubFeatures,
    "CreateUserAccountRequestExternal": CreateUserAccountRequestExternal_1.CreateUserAccountRequestExternal,
    "CustomerSearchResponseExternal": CustomerSearchResponseExternal_1.CustomerSearchResponseExternal,
    "ErrorDetail": ErrorDetail_1.ErrorDetail,
    "ExchangeRateResponse": ExchangeRateResponse_1.ExchangeRateResponse,
    "ImportInvoiceFeature": ImportInvoiceFeature_1.ImportInvoiceFeature,
    "InvoiceCreatePaymentRequest": InvoiceCreatePaymentRequest_1.InvoiceCreatePaymentRequest,
    "InvoicePdfResponse": InvoicePdfResponse_1.InvoicePdfResponse,
    "InvoiceReadResponse": InvoiceReadResponse_1.InvoiceReadResponse,
    "InvoiceSearchResponse": InvoiceSearchResponse_1.InvoiceSearchResponse,
    "InvoiceUpdateRequest": InvoiceUpdateRequest_1.InvoiceUpdateRequest,
    "InvoiceUpdateResponse": InvoiceUpdateResponse_1.InvoiceUpdateResponse,
    "InvoicesResponseExternal": InvoicesResponseExternal_1.InvoicesResponseExternal,
    "ModelError": ModelError_1.ModelError,
    "ObjectSyncFeature": ObjectSyncFeature_1.ObjectSyncFeature,
    "Product": Product_1.Product,
    "ProductSearchResponse": ProductSearchResponse_1.ProductSearchResponse,
    "ResultIdAccountingResponse": ResultIdAccountingResponse_1.ResultIdAccountingResponse,
    "SyncContactsRequest": SyncContactsRequest_1.SyncContactsRequest,
    "SyncProductsRequest": SyncProductsRequest_1.SyncProductsRequest,
    "Tax": Tax_1.Tax,
    "TaxSearchResponse": TaxSearchResponse_1.TaxSearchResponse,
    "TaxType": TaxType_1.TaxType,
    "TermsResponse": TermsResponse_1.TermsResponse,
    "UnitPrice": UnitPrice_1.UnitPrice,
    "UpdatedContact": UpdatedContact_1.UpdatedContact,
    "UpdatedProduct": UpdatedProduct_1.UpdatedProduct,
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