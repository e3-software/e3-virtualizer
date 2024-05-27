import { Organization } from "@clerk/nextjs/server";

export {};

declare global {
  interface CustomJwtSessionClaims {
    orgs: Organization[];
    publicMeta: {
      isAdmin?: boolean;
      appOrgId?: number;
      appUserId?: number;
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
    tags: Tag[]?;
    organizationId: number;
    location: AddressPoint;
  };

  type RecordInput = { data: E3Record & RecordPoint };
}
