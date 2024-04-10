// Generated by Xata Codegen 0.29.4. Please do not edit.
import { buildClient } from "@xata.io/client";
import type {
  BaseClientOptions,
  SchemaInference,
  XataRecord,
} from "@xata.io/client";

const tables = [
  {
    name: "AdminUser",
    columns: [
      {
        name: "userId",
        type: "text",
        notNull: true,
        unique: true,
        defaultValue: null,
      },
      {
        name: "xata_createdat",
        type: "timestamp(6) with time zone",
        notNull: true,
        unique: false,
        defaultValue: "CURRENT_TIMESTAMP",
      },
      {
        name: "xata_id",
        type: "text",
        notNull: true,
        unique: true,
        defaultValue: "('rec_'::text || (xata_private.xid())::text)",
      },
      {
        name: "xata_updatedat",
        type: "timestamp(6) with time zone",
        notNull: true,
        unique: false,
        defaultValue: "CURRENT_TIMESTAMP",
      },
      {
        name: "xata_version",
        type: "int",
        notNull: true,
        unique: false,
        defaultValue: "0",
      },
    ],
  },
  {
    name: "Deal",
    columns: [
      {
        name: "approved",
        type: "bool",
        notNull: true,
        unique: false,
        defaultValue: "false",
      },
      {
        name: "category",
        type: "varchar(50)",
        notNull: true,
        unique: false,
        defaultValue: null,
      },
      {
        name: "contactEmail",
        type: "varchar(255)",
        notNull: true,
        unique: false,
        defaultValue: null,
      },
      {
        name: "contactName",
        type: "varchar(255)",
        notNull: true,
        unique: false,
        defaultValue: null,
      },
      {
        name: "coupon",
        type: "varchar(255)",
        notNull: false,
        unique: false,
        defaultValue: null,
      },
      {
        name: "couponPercent",
        type: "int",
        notNull: false,
        unique: false,
        defaultValue: "0",
      },
      {
        name: "coverImageId",
        type: "varchar(255)",
        notNull: false,
        unique: true,
        defaultValue: null,
      },
      {
        name: "coverImageURL",
        type: "varchar(255)",
        notNull: false,
        unique: false,
        defaultValue: null,
      },
      {
        name: "description",
        type: "varchar(255)",
        notNull: true,
        unique: false,
        defaultValue: null,
      },
      {
        name: "endDate",
        type: "timestamp(3) without time zone",
        notNull: true,
        unique: false,
        defaultValue: "CURRENT_TIMESTAMP",
      },
      {
        name: "featured",
        type: "bool",
        notNull: true,
        unique: false,
        defaultValue: "false",
      },
      {
        name: "id",
        type: "text",
        notNull: true,
        unique: true,
        defaultValue: null,
      },
      {
        name: "link",
        type: "varchar(255)",
        notNull: true,
        unique: false,
        defaultValue: null,
      },
      {
        name: "name",
        type: "varchar(255)",
        notNull: true,
        unique: false,
        defaultValue: null,
      },
      {
        name: "startDate",
        type: "timestamp(3) without time zone",
        notNull: true,
        unique: false,
        defaultValue: "CURRENT_TIMESTAMP",
      },
      {
        name: "xata_createdat",
        type: "timestamp(6) with time zone",
        notNull: true,
        unique: false,
        defaultValue: "CURRENT_TIMESTAMP",
      },
      {
        name: "xata_id",
        type: "text",
        notNull: true,
        unique: true,
        defaultValue: "('rec_'::text || (xata_private.xid())::text)",
      },
      {
        name: "xata_updatedat",
        type: "timestamp(6) with time zone",
        notNull: true,
        unique: false,
        defaultValue: "CURRENT_TIMESTAMP",
      },
      {
        name: "xata_version",
        type: "int",
        notNull: true,
        unique: false,
        defaultValue: "0",
      },
    ],
  },
  {
    name: "DealImage",
    columns: [
      {
        name: "image",
        type: "file",
        file: { defaultPublicAccess: false },
        notNull: true,
        unique: false,
        defaultValue: null,
      },
      {
        name: "xata_createdat",
        type: "datetime",
        notNull: true,
        unique: false,
        defaultValue: "now()",
      },
      {
        name: "xata_id",
        type: "text",
        notNull: true,
        unique: true,
        defaultValue: "('rec_'::text || (xata_private.xid())::text)",
      },
      {
        name: "xata_updatedat",
        type: "datetime",
        notNull: true,
        unique: false,
        defaultValue: "now()",
      },
      {
        name: "xata_version",
        type: "int",
        notNull: true,
        unique: false,
        defaultValue: "0",
      },
    ],
  },
  {
    name: "Subscriber",
    columns: [
      {
        name: "conferenceNotifications",
        type: "bool",
        notNull: true,
        unique: false,
        defaultValue: "false",
      },
      {
        name: "courseNotifications",
        type: "bool",
        notNull: true,
        unique: false,
        defaultValue: "false",
      },
      {
        name: "ebookNotifications",
        type: "bool",
        notNull: true,
        unique: false,
        defaultValue: "false",
      },
      {
        name: "email",
        type: "varchar(255)",
        notNull: true,
        unique: false,
        defaultValue: null,
      },
      {
        name: "id",
        type: "text",
        notNull: true,
        unique: true,
        defaultValue: null,
      },
      {
        name: "miscNotifications",
        type: "bool",
        notNull: true,
        unique: false,
        defaultValue: "false",
      },
      {
        name: "officeEquipmentNotifications",
        type: "bool",
        notNull: true,
        unique: false,
        defaultValue: "false",
      },
      {
        name: "status",
        type: "text",
        notNull: true,
        unique: false,
        defaultValue: null,
      },
      {
        name: "token",
        type: "varchar(255)",
        notNull: true,
        unique: false,
        defaultValue: null,
      },
      {
        name: "toolNotifications",
        type: "bool",
        notNull: true,
        unique: false,
        defaultValue: "false",
      },
      {
        name: "verified",
        type: "bool",
        notNull: true,
        unique: false,
        defaultValue: "false",
      },
      {
        name: "xata_createdat",
        type: "timestamp(6) with time zone",
        notNull: true,
        unique: false,
        defaultValue: "CURRENT_TIMESTAMP",
      },
      {
        name: "xata_id",
        type: "text",
        notNull: true,
        unique: true,
        defaultValue: "('rec_'::text || (xata_private.xid())::text)",
      },
      {
        name: "xata_updatedat",
        type: "timestamp(6) with time zone",
        notNull: true,
        unique: false,
        defaultValue: "CURRENT_TIMESTAMP",
      },
      {
        name: "xata_version",
        type: "int",
        notNull: true,
        unique: false,
        defaultValue: "0",
      },
    ],
  },
] as const;

export type SchemaTables = typeof tables;
export type InferredTypes = SchemaInference<SchemaTables>;

export type AdminUser = InferredTypes["AdminUser"];
export type AdminUserRecord = AdminUser & XataRecord;

export type Deal = InferredTypes["Deal"];
export type DealRecord = Deal & XataRecord;

export type DealImage = InferredTypes["DealImage"];
export type DealImageRecord = DealImage & XataRecord;

export type Subscriber = InferredTypes["Subscriber"];
export type SubscriberRecord = Subscriber & XataRecord;

export type DatabaseSchema = {
  AdminUser: AdminUserRecord;
  Deal: DealRecord;
  DealImage: DealImageRecord;
  Subscriber: SubscriberRecord;
};

const DatabaseClient = buildClient();

const defaultOptions = {
  databaseURL: "https://Chris-Wix-fa3idr.us-east-1.xata.sh/db/deals-for-devs",
};

export class XataClient extends DatabaseClient<DatabaseSchema> {
  constructor(options?: BaseClientOptions) {
    super({ ...defaultOptions, ...options }, tables);
  }
}

let instance: XataClient | undefined = undefined;

export const getXataClient = () => {
  if (instance) return instance;

  instance = new XataClient();
  return instance;
};
