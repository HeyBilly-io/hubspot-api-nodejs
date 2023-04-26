import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { CollectionResponseSimplePublicObjectWithAssociationsForwardPaging } from '../models/CollectionResponseSimplePublicObjectWithAssociationsForwardPaging';
import { SimplePublicObject } from '../models/SimplePublicObject';
import { SimplePublicObjectInput } from '../models/SimplePublicObjectInput';
import { SimplePublicObjectWithAssociations } from '../models/SimplePublicObjectWithAssociations';
export declare class BasicApiRequestFactory extends BaseAPIRequestFactory {
    archive(callId: string, _options?: Configuration): Promise<RequestContext>;
    create(simplePublicObjectInput: SimplePublicObjectInput, _options?: Configuration): Promise<RequestContext>;
    getById(callId: string, properties?: Array<string>, propertiesWithHistory?: Array<string>, associations?: Array<string>, archived?: boolean, idProperty?: string, _options?: Configuration): Promise<RequestContext>;
    getPage(limit?: number, after?: string, properties?: Array<string>, propertiesWithHistory?: Array<string>, associations?: Array<string>, archived?: boolean, _options?: Configuration): Promise<RequestContext>;
    update(callId: string, simplePublicObjectInput: SimplePublicObjectInput, idProperty?: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class BasicApiResponseProcessor {
    archive(response: ResponseContext): Promise<void>;
    create(response: ResponseContext): Promise<SimplePublicObject>;
    getById(response: ResponseContext): Promise<SimplePublicObjectWithAssociations>;
    getPage(response: ResponseContext): Promise<CollectionResponseSimplePublicObjectWithAssociationsForwardPaging>;
    update(response: ResponseContext): Promise<SimplePublicObject>;
}