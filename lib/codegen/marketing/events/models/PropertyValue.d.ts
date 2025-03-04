export declare class PropertyValue {
    'name': string;
    'value': string;
    'timestamp': number;
    'sourceId': string;
    'sourceLabel': string;
    'source': PropertyValueSourceEnum;
    'selectedByUser': boolean;
    'selectedByUserTimestamp': number;
    'sourceVid': Array<number>;
    'sourceMetadata': string;
    'requestId': string;
    'updatedByUserId'?: number;
    'persistenceTimestamp'?: number;
    static readonly discriminator: string | undefined;
    static readonly attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
        format: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
        format: string;
    }[];
    constructor();
}
export type PropertyValueSourceEnum = "IMPORT" | "API" | "FORM" | "ANALYTICS" | "MIGRATION" | "SALESFORCE" | "INTEGRATION" | "CONTACTS_WEB" | "WAL_INCREMENTAL" | "TASK" | "EMAIL" | "WORKFLOWS" | "CALCULATED" | "SOCIAL" | "BATCH_UPDATE" | "SIGNALS" | "BIDEN" | "DEFAULT" | "COMPANIES" | "DEALS" | "ASSISTS" | "PRESENTATIONS" | "TALLY" | "SIDEKICK" | "CRM_UI" | "MERGE_CONTACTS" | "PORTAL_USER_ASSOCIATOR" | "INTEGRATIONS_PLATFORM" | "BCC_TO_CRM" | "FORWARD_TO_CRM" | "ENGAGEMENTS" | "SALES" | "HEISENBERG" | "LEADIN" | "GMAIL_INTEGRATION" | "ACADEMY" | "SALES_MESSAGES" | "AVATARS_SERVICE" | "MERGE_COMPANIES" | "SEQUENCES" | "COMPANY_FAMILIES" | "MOBILE_IOS" | "MOBILE_ANDROID" | "CONTACTS" | "ASSOCIATIONS" | "EXTENSION" | "SUCCESS" | "BOT" | "INTEGRATIONS_SYNC" | "AUTOMATION_PLATFORM" | "CONVERSATIONS" | "EMAIL_INTEGRATION" | "CONTENT_MEMBERSHIP" | "QUOTES" | "BET_ASSIGNMENT" | "QUOTAS" | "BET_CRM_CONNECTOR" | "MEETINGS" | "MERGE_OBJECTS" | "RECYCLING_BIN" | "ADS" | "AI_GROUP" | "COMMUNICATOR" | "SETTINGS" | "PROPERTY_SETTINGS" | "PIPELINE_SETTINGS" | "COMPANY_INSIGHTS" | "BEHAVIORAL_EVENTS" | "PAYMENTS" | "GOALS" | "PORTAL_OBJECT_SYNC" | "APPROVALS" | "FILE_MANAGER" | "MARKETPLACE" | "INTERNAL_PROCESSING" | "FORECASTING" | "SLACK_INTEGRATION" | "CRM_UI_BULK_ACTION" | "WORKFLOW_CONTACT_DELETE_ACTION";
