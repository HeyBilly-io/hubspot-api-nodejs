import { AssociationsApi, BasicApi, BatchApi, PublicObjectApi, SearchApi, SimplePublicObjectWithAssociations } from '../../../../codegen/crm/products/index';
import IConfiguration from '../../../configuration/IConfiguration';
export default class ProductsDiscovery {
    associationsApi: AssociationsApi;
    basicApi: BasicApi;
    batchApi: BatchApi;
    publicObjectApi: PublicObjectApi;
    searchApi: SearchApi;
    constructor(config: IConfiguration);
    getAll(limit?: number, after?: string, properties?: string[], propertiesWithHistory?: string[], associations?: string[], archived?: boolean): Promise<SimplePublicObjectWithAssociations[]>;
}
