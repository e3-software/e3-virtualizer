import { Organization } from "@clerk/nextjs/server";

export {};

declare global {
  interface CustomJwtSessionClaims {
    orgs: Organization[];
    publicMeta: {
      isAdmin?: boolean;
      appOrgId?: number;
      appUserId?: number;
      theme?: string;
    };
  }

  type RecordPoint = {
    latitude: number;
    longitude: number;
  };

  type E3Record = {
    externalSystemId: string;
    firstName: string?;
    lastName: string?;
    fullName: string?;
    phone: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    recordToTags: RecordTotags[]?;
    organizationId: number;
    location: AddressPoint;
  };

  type RecordInput = { data: E3Record & RecordPoint };

  type RecordToTagWithTag = RecordToTags & {
    tag: Tag;
  };

  type RecordWithTags = Record & {
    recordToTags: RecordToTagWithTag;
  };
}
