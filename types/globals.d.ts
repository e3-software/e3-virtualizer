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

  type AddressPoint = {
    latitude: number;
    longitude: number;
  };

  type AddressRecord = {
    addressLine1: string;
    addressLine2?: string;
    addressLine3?: string;
    city: string;
    state: string;
    zip: string;
    organizationId: number;
    location: AddressPoint;
  };

  type AddressRecordInput = { data: AddressRecord & AddressPoint };
}
