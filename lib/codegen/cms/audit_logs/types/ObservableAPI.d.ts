import { Configuration } from '../configuration';
import { Observable } from '../rxjsStub';
import { CollectionResponsePublicAuditLog } from '../models/CollectionResponsePublicAuditLog';
import { AuditLogsApiRequestFactory, AuditLogsApiResponseProcessor } from "../apis/AuditLogsApi";
export declare class ObservableAuditLogsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: AuditLogsApiRequestFactory, responseProcessor?: AuditLogsApiResponseProcessor);
    getPage(objectId?: Array<string>, userId?: Array<string>, after?: string, before?: string, sort?: Array<string>, eventType?: Array<string>, limit?: number, objectType?: Array<string>, _options?: Configuration): Observable<CollectionResponsePublicAuditLog>;
}