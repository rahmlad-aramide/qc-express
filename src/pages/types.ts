// types.ts

export type Dimensions = {
    length: number;
    width: number;
    height: number;
  };
  
  export type Package = {
    dimensions: Dimensions;
    _id: string;
    weight: number;
    description: string;
    id: string;
  };
  
  export type PostalAddress = {
    postalCode: string;
    cityName: string;
    countryCode: string;
    addressLine1: string;
    countyName?: string;
  };
  
  export type ContactInformation = {
    email: string;
    phone: string;
    companyName?: string;
    fullName?: string;
  };
  
  export type DeliveryInfo = {
    postalAddress: PostalAddress;
    contactInformation: ContactInformation;
    _id: string;
    type: "CUSTOMER" | "RECEIVER";
    id: string;
  };
  
  export type ShipmentMeta = {
    trackingId: string;
    trackingUrl: string;
    packages: Package[];
  };
  
  export type Shipment = {
    shipmentMeta: ShipmentMeta;
    document: string;
    _id: string;
    packages: Package[];
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
  };
  
  export type TopBookingData = {
    topBooking: Shipment[];
  };
  
  export type Ticons = {
    [key: string]: React.ElementType;
  }
  
  export type TCard = {
    name: string,
    value: number
  }
  
  export type TableProps = {
    data: TopBookingData;
  }