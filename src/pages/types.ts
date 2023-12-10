/* eslint-disable @typescript-eslint/no-explicit-any */

export type TCard = {
  name: string;
  value: number;
};

// Shared types
export interface PostalAddress {
  cityName: string;
  countyName?: string;
  postalCode: string;
  provinceCode?: string;
  addressLine1?: string;
  addressLine2?: string;
  countryCode: string;
}

export interface ServiceArea {
  code: string;
  description: string;
  facilityCode?: string;
}

export interface ServiceArea2 extends ServiceArea {
  facilityCode: string;
}

export interface ServiceArea3 extends ServiceArea {
  facilityCode?: string;
}

// Backend data typing
export interface Root {
  message: string;
  data: Data;
  success: boolean;
}

export interface Data {
  bookingCount: number;
  topBooking: TopBooking[];
  trackingResult: TrackingResult[];
  stateCount: StateCount[];
  totalValue: TotalValue[];
}

export interface TopBooking {
  shipmentMeta: ShipmentMeta;
  document: string;
  _id: string;
  packages: Package2[];
  description: string;
  number_items: number;
  delivery_info: DeliveryInfo[];
  customerId: string;
  declaredValue: number;
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
  referenceNumber?: number;
  trackingNumber?: string;
  trackingUrl?: string;
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

export interface ContactInformation {
  email: string;
  phone: string;
  companyName: string;
  fullName: string;
}

export interface TrackingResult {
  shipments: Shipment[];
}

export interface Shipment {
  shipmentTrackingNumber: string;
  status: string;
  shipmentTimestamp: string;
  productCode: string;
  description: string;
  shipperDetails: ShipperDetails;
  receiverDetails: ReceiverDetails;
  totalWeight: number;
  unitOfMeasurements: string;
  shipperReferences: any[];
  events: Event[];
  numberOfPieces: number;
}

export interface ShipperDetails {
  name: string;
  postalAddress: PostalAddress2;
  serviceArea: ServiceArea[];
}

export interface PostalAddress2 extends PostalAddress {
  provinceCode?: string;
}

export interface ReceiverDetails {
  name: string;
  postalAddress: PostalAddress3;
  serviceArea: ServiceArea2[];
}

export interface PostalAddress3 extends PostalAddress {
  provinceCode?: string;
}

export interface StateCount {
  _id: string;
  count: number;
}

export interface TotalValue {
  _id: any;
  declaredValue: number;
}

// Shipment tracking type
export interface IShipment {
  shipmentTrackingNumber: string;
  status: string;
  shipmentTimestamp: string;
  productCode: string;
  description: string;
  shipperDetails: ShipperDetails;
  receiverDetails: ReceiverDetails;
  totalWeight: number;
  unitOfMeasurements: string;
  shipperReferences: any[];
  events: Event[];
  numberOfPieces: number;
}

export interface Event {
  date: string;
  time: string;
  typeCode: string;
  description: string;
  serviceArea: ServiceArea3[];
  signedBy?: string;
}

export interface RootFilter {
  message: string
  data: DataFilter
  success: boolean
}

export interface DataFilter {
  docs: Doc[]
  totalDocs: number
  limit: number
  totalPages: number
  page: number
  pagingCounter: number
  hasPrevPage: boolean
  hasNextPage: boolean
  prevPage: any
  nextPage: any
}

export interface Doc {
  shipmentMeta: ShipmentMeta
  _id: string
  document: string
  packages: PackageFilter[]
  description: string
  number_items: number
  delivery_info: DeliveryInfo[]
  customerId: string
  declaredValue: number
  channel: string
  environment: string
  createdAt: string
  updatedAt: string
  __v: number
  id: string
}

export interface ShipmentMeta {
  trackingId: string
  trackingUrl: string
  packages: Package[]
  documents: Document[]
}

export interface Package {
  _id: string
  referenceNumber?: number;
  trackingNumber?: string;
  trackingUrl?: string;
  id: string
}

export interface Document {
  _id: string
  imageFormat: string
  content: string
  id: string
}

export interface PackageFilter {
  dimensions: Dimensions
  _id: string
  weight: number
  description: string
  id: string
}