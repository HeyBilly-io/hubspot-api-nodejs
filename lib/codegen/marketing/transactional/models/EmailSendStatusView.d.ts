import { EventIdView } from '../models/EventIdView';
export declare class EmailSendStatusView {
    'statusId': string;
    'sendResult'?: EmailSendStatusViewSendResultEnum;
    'requestedAt'?: Date;
    'startedAt'?: Date;
    'completedAt'?: Date;
    'status': EmailSendStatusViewStatusEnum;
    'eventId'?: EventIdView;
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
export type EmailSendStatusViewSendResultEnum = "SENT" | "IDEMPOTENT_IGNORE" | "QUEUED" | "IDEMPOTENT_FAIL" | "THROTTLED" | "EMAIL_DISABLED" | "PORTAL_SUSPENDED" | "INVALID_TO_ADDRESS" | "BLOCKED_DOMAIN" | "PREVIOUSLY_BOUNCED" | "EMAIL_UNCONFIRMED" | "PREVIOUS_SPAM" | "PREVIOUSLY_UNSUBSCRIBED_MESSAGE" | "PREVIOUSLY_UNSUBSCRIBED_PORTAL" | "INVALID_FROM_ADDRESS" | "CAMPAIGN_CANCELLED" | "VALIDATION_FAILED" | "MTA_IGNORE" | "BLOCKED_ADDRESS" | "PORTAL_OVER_LIMIT" | "PORTAL_EXPIRED" | "PORTAL_MISSING_MARKETING_SCOPE" | "MISSING_TEMPLATE_PROPERTIES" | "MISSING_REQUIRED_PARAMETER" | "PORTAL_AUTHENTICATION_FAILURE" | "MISSING_CONTENT" | "CORRUPT_INPUT" | "TEMPLATE_RENDER_EXCEPTION" | "GRAYMAIL_SUPPRESSED" | "UNCONFIGURED_SENDING_DOMAIN" | "UNDELIVERABLE" | "CANCELLED_ABUSE" | "QUARANTINED_ADDRESS" | "ADDRESS_ONLY_ACCEPTED_ON_PROD" | "PORTAL_NOT_AUTHORIZED_FOR_APPLICATION" | "ADDRESS_LIST_BOMBED" | "ADDRESS_OPTED_OUT" | "RECIPIENT_FATIGUE_SUPPRESSED" | "TOO_MANY_RECIPIENTS" | "PREVIOUSLY_UNSUBSCRIBED_BRAND" | "NON_MARKETABLE_CONTACT" | "PREVIOUSLY_UNSUBSCRIBED_BUSINESS_UNIT";
export type EmailSendStatusViewStatusEnum = "PENDING" | "PROCESSING" | "CANCELED" | "COMPLETE";
