export interface Root {
  message: string;
  data: MoreData;
  success: boolean;
}

export interface MoreData {
  docs: Doc[];
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number | null;
  nextPage: number | null;
}

export interface Doc {
  shipmentMeta: ShipmentMeta;
  _id: string;
  packages: Package2[];
  description: string;
  number_items: number;
  delivery_info: DeliveryInfo[];
  customerId: string;
  channel: string;
  environment: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  id: string;
}

export interface ShipmentMeta {
  trackingId: string;
  trackingUrl: string;
  packages: Package[];
}

export interface Package {
  _id: string;
  referenceNumber: number;
  trackingNumber: string;
  trackingUrl: string;
  id: string;
}

export interface Package2 {
  dimensions: Dimensions;
  _id: string;
  weight: number;
  description: string;
  id: string;
}

export interface Dimensions {
  length: number;
  width: number;
  height: number;
}

export interface DeliveryInfo {
  postalAddress: PostalAddress;
  contactInformation: ContactInformation;
  _id: string;
  type: string;
  id: string;
}

export interface PostalAddress {
  postalCode: string;
  cityName: string;
  countryCode: string;
  addressLine1: string;
  countyName?: string;
}

export interface ContactInformation {
  email: string;
  phone: string;
  companyName: string;
  fullName: string;
}
