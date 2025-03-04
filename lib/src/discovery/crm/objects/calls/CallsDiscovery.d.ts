import { AssociationsApi, BasicApi, BatchApi, PublicObjectApi, SearchApi } from '../../../../../codegen/crm/objects/calls/index';
import IConfiguration from '../../../../configuration/IConfiguration';
export default class CallsDiscovery {
    associationsApi: AssociationsApi;
    basicApi: BasicApi;
    batchApi: BatchApi;
    publicObjectApi: PublicObjectApi;
    searchApi: SearchApi;
    constructor(config: IConfiguration);
}
