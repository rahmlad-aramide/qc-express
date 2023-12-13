export const data = {
      "shipments": [
        {
          "shipmentTrackingNumber": "9356579890",
          "status": "Success",
          "shipmentTimestamp": "2023-10-20T20:53:09",
          "productCode": "N",
          "description": "MATERIAL DIVERSO",
          "shipperDetails": {
            "name": "PRIVALIA MEXICO",
            "postalAddress": {
              "cityName": "Tepozotlan",
              "postalCode": "54605",
              "provinceCode": "MC",
              "countryCode": "MX"
            },
            "serviceArea": [
              {
                "code": "MEX",
                "description": "Mexico City-MX"
              }
            ]
          },
          "receiverDetails": {
            "name": "EDNA EDITH QUINTERO COTA",
            "postalAddress": {
              "cityName": "cabo san lucas",
              "countyName": "ventanas fase 1 sn 84 a lado",
              "postalCode": "23454",
              "provinceCode": "BS",
              "countryCode": "MX"
            },
            "serviceArea": [
              {
                "code": "LAP",
                "description": "La Paz-MX",
                "facilityCode": "CSL"
              }
            ]
          },
          "totalWeight": 2.7,
          "unitOfMeasurements": "metric",
          "shipperReferences": [],
          "events": [
            {
              "date": "2023-10-23",
              "time": "14:29:00",
              "typeCode": "PU",
              "description": "Shipment picked up",
              "serviceArea": [
                {
                  "code": "MEX",
                  "description": "Mexico City-MX"
                }
              ]
            },
            {
              "date": "2023-10-23",
              "time": "21:28:00",
              "typeCode": "PL",
              "description": "Processed at MEXICO CITY HUB-MEXICO",
              "serviceArea": [
                {
                  "code": "JJC",
                  "description": "Mexico City Hub-MX"
                }
              ]
            },
            {
              "date": "2023-10-23",
              "time": "21:31:00",
              "typeCode": "DF",
              "description": "Shipment has departed from a DHL facility MEXICO CITY HUB-MEXICO",
              "serviceArea": [
                {
                  "code": "JJC",
                  "description": "Mexico City Hub-MX"
                }
              ]
            },
            {
              "date": "2023-10-23",
              "time": "23:50:00",
              "typeCode": "AF",
              "description": "Arrived at DHL Sort Facility  QUERETARO-MEXICO",
              "serviceArea": [
                {
                  "code": "QRO",
                  "description": "Queretaro-MX"
                }
              ]
            },
            {
              "date": "2023-10-24",
              "time": "04:58:00",
              "typeCode": "PL",
              "description": "Processed at QUERETARO-MEXICO",
              "serviceArea": [
                {
                  "code": "QRO",
                  "description": "Queretaro-MX"
                }
              ]
            },
            {
              "date": "2023-10-24",
              "time": "05:00:00",
              "typeCode": "DF",
              "description": "Shipment has departed from a DHL facility QUERETARO-MEXICO",
              "serviceArea": [
                {
                  "code": "QRO",
                  "description": "Queretaro-MX"
                }
              ]
            },
            {
              "date": "2023-10-24",
              "time": "08:44:00",
              "typeCode": "AR",
              "description": "Arrived at DHL Delivery Facility  LA PAZ-MEXICO",
              "serviceArea": [
                {
                  "code": "LAP",
                  "description": "La Paz-MX"
                }
              ]
            },
            {
              "date": "2023-10-24",
              "time": "10:16:00",
              "typeCode": "WC",
              "description": "Shipment is out with courier for delivery",
              "serviceArea": [
                {
                  "code": "LAP",
                  "description": "La Paz-MX"
                }
              ]
            },
            {
              "date": "2023-10-24",
              "time": "15:07:00",
              "typeCode": "OK",
              "description": "Delivered",
              "serviceArea": [
                {
                  "code": "LAP",
                  "description": "La Paz-MX"
                }
              ],
              "signedBy": "edgna Edith"
            }
          ],
          "numberOfPieces": 1
        }
      ]
    }
   
export const dashboardData = {
    "message": "kpis fetched",
    "data": {
        "bookingCount": 3,
        "topBooking": [
            {
                "shipmentMeta": {
                    "trackingId": "1494896465",
                    "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896465/tracking",
                    "packages": [
                        {
                            "_id": "6568fd9dbf8577003e5abc6e",
                            "referenceNumber": 1,
                            "trackingNumber": "JD014600004790042206",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896465/tracking?pieceTrackingNumber=JD014600004790042206",
                            "id": "6568fd9dbf8577003e5abc6e"
                        },
                        {
                            "_id": "6568fd9dbf8577003e5abc6f",
                            "referenceNumber": 2,
                            "trackingNumber": "JD014600004790042207",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896465/tracking?pieceTrackingNumber=JD014600004790042207",
                            "id": "6568fd9dbf8577003e5abc6f"
                        }
                    ]
                },
                "document": "PACKAGE",
                "_id": "6568fd9dbf8577003e5abc69",
                "packages": [
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "6568fd9dbf8577003e5abc6a",
                        "weight": 0.5,
                        "description": "Piece content description",
                        "id": "6568fd9dbf8577003e5abc6a"
                    },
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "6568fd9dbf8577003e5abc6b",
                        "weight": 5,
                        "description": "2 Piece content description",
                        "id": "6568fd9dbf8577003e5abc6b"
                    }
                ],
                "description": "description goes here",
                "number_items": 1,
                "delivery_info": [
                    {
                        "postalAddress": {
                            "postalCode": "100001",
                            "cityName": "Akure",
                            "countryCode": "NG",
                            "addressLine1": "yaba, lagos",
                            "countyName": "Ondo"
                        },
                        "contactInformation": {
                            "email": "shipper_create_shipmentapi@dhltestmail.com",
                            "phone": "18211309039",
                            "companyName": "Cider BookStore",
                            "fullName": "Anyanwu Chinedu"
                        },
                        "_id": "6568fd9dbf8577003e5abc6c",
                        "type": "CUSTOMER",
                        "id": "6568fd9dbf8577003e5abc6c"
                    },
                    {
                        "postalAddress": {
                            "postalCode": "GA015",
                            "cityName": "Accra",
                            "countryCode": "GH",
                            "addressLine1": "Some random place in Accra"
                        },
                        "contactInformation": {
                            "email": "recipient_create_shipmentapi@dhltestmail.com",
                            "phone": "9402825665",
                            "companyName": "Baylee Marshall",
                            "fullName": "Baylee Marshall"
                        },
                        "_id": "6568fd9dbf8577003e5abc6d",
                        "type": "RECIEVER",
                        "id": "6568fd9dbf8577003e5abc6d"
                    }
                ],
                "customerId": "6568f828bf8577003e5abc3d",
                "declaredValue": 5000,
                "channel": "api",
                "environment": "sandbox",
                "createdAt": "2023-11-30T21:24:45.536Z",
                "updatedAt": "2023-11-30T21:24:45.536Z",
                "__v": 0,
                "id": "6568fd9dbf8577003e5abc69"
            },
            {
                "shipmentMeta": {
                    "trackingId": "1494896443",
                    "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896443/tracking",
                    "packages": [
                        {
                            "_id": "6568fd67bf8577003e5abc61",
                            "referenceNumber": 1,
                            "trackingNumber": "JD014600004790042203",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896443/tracking?pieceTrackingNumber=JD014600004790042203",
                            "id": "6568fd67bf8577003e5abc61"
                        },
                        {
                            "_id": "6568fd67bf8577003e5abc62",
                            "referenceNumber": 2,
                            "trackingNumber": "JD014600004790042204",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896443/tracking?pieceTrackingNumber=JD014600004790042204",
                            "id": "6568fd67bf8577003e5abc62"
                        }
                    ]
                },
                "document": "PACKAGE",
                "_id": "6568fd67bf8577003e5abc5c",
                "packages": [
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "6568fd67bf8577003e5abc5d",
                        "weight": 0.5,
                        "description": "Piece content description",
                        "id": "6568fd67bf8577003e5abc5d"
                    },
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "6568fd67bf8577003e5abc5e",
                        "weight": 5,
                        "description": "2 Piece content description",
                        "id": "6568fd67bf8577003e5abc5e"
                    }
                ],
                "description": "description goes here",
                "number_items": 2,
                "delivery_info": [
                    {
                        "postalAddress": {
                            "postalCode": "100001",
                            "cityName": "Yaba",
                            "countryCode": "NG",
                            "addressLine1": "yaba, lagos",
                            "countyName": "Lagos"
                        },
                        "contactInformation": {
                            "email": "shipper_create_shipmentapi@dhltestmail.com",
                            "phone": "18211309039",
                            "companyName": "Cider BookStore",
                            "fullName": "Anyanwu Chinedu"
                        },
                        "_id": "6568fd67bf8577003e5abc5f",
                        "type": "CUSTOMER",
                        "id": "6568fd67bf8577003e5abc5f"
                    },
                    {
                        "postalAddress": {
                            "postalCode": "GA015",
                            "cityName": "Accra",
                            "countryCode": "GH",
                            "addressLine1": "Some random place in Accra"
                        },
                        "contactInformation": {
                            "email": "recipient_create_shipmentapi@dhltestmail.com",
                            "phone": "9402825665",
                            "companyName": "Baylee Marshall",
                            "fullName": "Baylee Marshall"
                        },
                        "_id": "6568fd67bf8577003e5abc60",
                        "type": "RECIEVER",
                        "id": "6568fd67bf8577003e5abc60"
                    }
                ],
                "customerId": "6568f828bf8577003e5abc3d",
                "declaredValue": 5000,
                "channel": "api",
                "environment": "sandbox",
                "createdAt": "2023-11-30T21:23:51.925Z",
                "updatedAt": "2023-11-30T21:23:51.925Z",
                "__v": 0,
                "id": "6568fd67bf8577003e5abc5c"
            },
            {
                "shipmentMeta": {
                    "trackingId": "1494896373",
                    "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896373/tracking",
                    "packages": [
                        {
                            "_id": "6568fd30bf8577003e5abc52",
                            "referenceNumber": 1,
                            "trackingNumber": "JD014600004790042195",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896373/tracking?pieceTrackingNumber=JD014600004790042195",
                            "id": "6568fd30bf8577003e5abc52"
                        },
                        {
                            "_id": "6568fd30bf8577003e5abc53",
                            "referenceNumber": 2,
                            "trackingNumber": "JD014600004790042196",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896373/tracking?pieceTrackingNumber=JD014600004790042196",
                            "id": "6568fd30bf8577003e5abc53"
                        }
                    ]
                },
                "document": "PACKAGE",
                "_id": "6568fd2fbf8577003e5abc4d",
                "packages": [
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "6568fd30bf8577003e5abc4e",
                        "weight": 0.5,
                        "description": "Piece content description",
                        "id": "6568fd30bf8577003e5abc4e"
                    },
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "6568fd30bf8577003e5abc4f",
                        "weight": 5,
                        "description": "2 Piece content description",
                        "id": "6568fd30bf8577003e5abc4f"
                    }
                ],
                "description": "description goes here",
                "number_items": 2,
                "delivery_info": [
                    {
                        "postalAddress": {
                            "postalCode": "100001",
                            "cityName": "Imo",
                            "countryCode": "NG",
                            "addressLine1": "yaba, lagos",
                            "countyName": "Owerri"
                        },
                        "contactInformation": {
                            "email": "shipper_create_shipmentapi@dhltestmail.com",
                            "phone": "18211309039",
                            "companyName": "Cider BookStore",
                            "fullName": "Anyanwu Chinedu"
                        },
                        "_id": "6568fd30bf8577003e5abc50",
                        "type": "CUSTOMER",
                        "id": "6568fd30bf8577003e5abc50"
                    },
                    {
                        "postalAddress": {
                            "postalCode": "GA015",
                            "cityName": "Accra",
                            "countryCode": "GH",
                            "addressLine1": "Some random place in Accra"
                        },
                        "contactInformation": {
                            "email": "recipient_create_shipmentapi@dhltestmail.com",
                            "phone": "9402825665",
                            "companyName": "Baylee Marshall",
                            "fullName": "Baylee Marshall"
                        },
                        "_id": "6568fd30bf8577003e5abc51",
                        "type": "RECIEVER",
                        "id": "6568fd30bf8577003e5abc51"
                    }
                ],
                "customerId": "6568f828bf8577003e5abc3d",
                "declaredValue": 5000,
                "channel": "api",
                "environment": "sandbox",
                "createdAt": "2023-11-30T21:22:56.010Z",
                "updatedAt": "2023-11-30T21:22:56.010Z",
                "__v": 0,
                "id": "6568fd2fbf8577003e5abc4d"
            },
            {
                "shipmentMeta": {
                    "trackingId": "1494896465",
                    "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896465/tracking",
                    "packages": [
                        {
                            "_id": "6568fd9dbf8577003e5abc6e",
                            "referenceNumber": 1,
                            "trackingNumber": "JD014600004790042206",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896465/tracking?pieceTrackingNumber=JD014600004790042206",
                            "id": "6568fd9dbf8577003e5abc6e"
                        },
                        {
                            "_id": "6568fd9dbf8577003e5abc6f",
                            "referenceNumber": 2,
                            "trackingNumber": "JD014600004790042207",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896465/tracking?pieceTrackingNumber=JD014600004790042207",
                            "id": "6568fd9dbf8577003e5abc6f"
                        }
                    ]
                },
                "document": "PACKAGE",
                "_id": "6568fd9dbf8577003e5abc69",
                "packages": [
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "6568fd9dbf8577003e5abc6a",
                        "weight": 0.5,
                        "description": "Piece content description",
                        "id": "6568fd9dbf8577003e5abc6a"
                    },
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "6568fd9dbf8577003e5abc6b",
                        "weight": 5,
                        "description": "2 Piece content description",
                        "id": "6568fd9dbf8577003e5abc6b"
                    }
                ],
                "description": "description goes here",
                "number_items": 2,
                "delivery_info": [
                    {
                        "postalAddress": {
                            "postalCode": "100001",
                            "cityName": "Akure",
                            "countryCode": "NG",
                            "addressLine1": "yaba, lagos",
                            "countyName": "Ondo"
                        },
                        "contactInformation": {
                            "email": "shipper_create_shipmentapi@dhltestmail.com",
                            "phone": "18211309039",
                            "companyName": "Cider BookStore",
                            "fullName": "Anyanwu Chinedu"
                        },
                        "_id": "6568fd9dbf8577003e5abc6c",
                        "type": "CUSTOMER",
                        "id": "6568fd9dbf8577003e5abc6c"
                    },
                    {
                        "postalAddress": {
                            "postalCode": "GA015",
                            "cityName": "Accra",
                            "countryCode": "GH",
                            "addressLine1": "Some random place in Accra"
                        },
                        "contactInformation": {
                            "email": "recipient_create_shipmentapi@dhltestmail.com",
                            "phone": "9402825665",
                            "companyName": "Baylee Marshall",
                            "fullName": "Baylee Marshall"
                        },
                        "_id": "6568fd9dbf8577003e5abc6d",
                        "type": "RECIEVER",
                        "id": "6568fd9dbf8577003e5abc6d"
                    }
                ],
                "customerId": "6568f828bf8577003e5abc3d",
                "declaredValue": 5000,
                "channel": "api",
                "environment": "sandbox",
                "createdAt": "2023-11-30T21:24:45.536Z",
                "updatedAt": "2023-11-30T21:24:45.536Z",
                "__v": 0,
                "id": "6568fd9dbf8577003e5abc69"
            },
            {
                "shipmentMeta": {
                    "trackingId": "1494896443",
                    "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896443/tracking",
                    "packages": [
                        {
                            "_id": "6568fd67bf8577003e5abc61",
                            "referenceNumber": 1,
                            "trackingNumber": "JD014600004790042203",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896443/tracking?pieceTrackingNumber=JD014600004790042203",
                            "id": "6568fd67bf8577003e5abc61"
                        },
                        {
                            "_id": "6568fd67bf8577003e5abc62",
                            "referenceNumber": 2,
                            "trackingNumber": "JD014600004790042204",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896443/tracking?pieceTrackingNumber=JD014600004790042204",
                            "id": "6568fd67bf8577003e5abc62"
                        }
                    ]
                },
                "document": "PACKAGE",
                "_id": "6568fd67bf8577003e5abc5c",
                "packages": [
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "6568fd67bf8577003e5abc5d",
                        "weight": 0.5,
                        "description": "Piece content description",
                        "id": "6568fd67bf8577003e5abc5d"
                    },
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "6568fd67bf8577003e5abc5e",
                        "weight": 5,
                        "description": "2 Piece content description",
                        "id": "6568fd67bf8577003e5abc5e"
                    }
                ],
                "description": "description goes here",
                "number_items": 2,
                "delivery_info": [
                    {
                        "postalAddress": {
                            "postalCode": "100001",
                            "cityName": "Yaba",
                            "countryCode": "NG",
                            "addressLine1": "yaba, lagos",
                            "countyName": "Lagos"
                        },
                        "contactInformation": {
                            "email": "shipper_create_shipmentapi@dhltestmail.com",
                            "phone": "18211309039",
                            "companyName": "Cider BookStore",
                            "fullName": "Anyanwu Chinedu"
                        },
                        "_id": "6568fd67bf8577003e5abc5f",
                        "type": "CUSTOMER",
                        "id": "6568fd67bf8577003e5abc5f"
                    },
                    {
                        "postalAddress": {
                            "postalCode": "GA015",
                            "cityName": "Accra",
                            "countryCode": "GH",
                            "addressLine1": "Some random place in Accra"
                        },
                        "contactInformation": {
                            "email": "recipient_create_shipmentapi@dhltestmail.com",
                            "phone": "9402825665",
                            "companyName": "Baylee Marshall",
                            "fullName": "Baylee Marshall"
                        },
                        "_id": "6568fd67bf8577003e5abc60",
                        "type": "RECIEVER",
                        "id": "6568fd67bf8577003e5abc60"
                    }
                ],
                "customerId": "6568f828bf8577003e5abc3d",
                "declaredValue": 5000,
                "channel": "api",
                "environment": "sandbox",
                "createdAt": "2023-11-30T21:23:51.925Z",
                "updatedAt": "2023-11-30T21:23:51.925Z",
                "__v": 0,
                "id": "6568fd67bf8577003e5abc5c"
            },
            {
                "shipmentMeta": {
                    "trackingId": "1494896373",
                    "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896373/tracking",
                    "packages": [
                        {
                            "_id": "6568fd30bf8577003e5abc52",
                            "referenceNumber": 1,
                            "trackingNumber": "JD014600004790042195",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896373/tracking?pieceTrackingNumber=JD014600004790042195",
                            "id": "6568fd30bf8577003e5abc52"
                        },
                        {
                            "_id": "6568fd30bf8577003e5abc53",
                            "referenceNumber": 2,
                            "trackingNumber": "JD014600004790042196",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896373/tracking?pieceTrackingNumber=JD014600004790042196",
                            "id": "6568fd30bf8577003e5abc53"
                        }
                    ]
                },
                "document": "PACKAGE",
                "_id": "6568fd2fbf8577003e5abc4d",
                "packages": [
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "6568fd30bf8577003e5abc4e",
                        "weight": 0.5,
                        "description": "Piece content description",
                        "id": "6568fd30bf8577003e5abc4e"
                    },
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "6568fd30bf8577003e5abc4f",
                        "weight": 5,
                        "description": "2 Piece content description",
                        "id": "6568fd30bf8577003e5abc4f"
                    }
                ],
                "description": "description goes here",
                "number_items": 2,
                "delivery_info": [
                    {
                        "postalAddress": {
                            "postalCode": "100001",
                            "cityName": "Imo",
                            "countryCode": "NG",
                            "addressLine1": "yaba, lagos",
                            "countyName": "Owerri"
                        },
                        "contactInformation": {
                            "email": "shipper_create_shipmentapi@dhltestmail.com",
                            "phone": "18211309039",
                            "companyName": "Cider BookStore",
                            "fullName": "Anyanwu Chinedu"
                        },
                        "_id": "6568fd30bf8577003e5abc50",
                        "type": "CUSTOMER",
                        "id": "6568fd30bf8577003e5abc50"
                    },
                    {
                        "postalAddress": {
                            "postalCode": "GA015",
                            "cityName": "Accra",
                            "countryCode": "GH",
                            "addressLine1": "Some random place in Accra"
                        },
                        "contactInformation": {
                            "email": "recipient_create_shipmentapi@dhltestmail.com",
                            "phone": "9402825665",
                            "companyName": "Baylee Marshall",
                            "fullName": "Baylee Marshall"
                        },
                        "_id": "6568fd30bf8577003e5abc51",
                        "type": "RECIEVER",
                        "id": "6568fd30bf8577003e5abc51"
                    }
                ],
                "customerId": "6568f828bf8577003e5abc3d",
                "declaredValue": 5000,
                "channel": "api",
                "environment": "sandbox",
                "createdAt": "2023-11-30T21:22:56.010Z",
                "updatedAt": "2023-11-30T21:22:56.010Z",
                "__v": 0,
                "id": "6568fd2fbf8577003e5abc4d"
            },
            {
                "shipmentMeta": {
                    "trackingId": "1494896465",
                    "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896465/tracking",
                    "packages": [
                        {
                            "_id": "6568fd9dbf8577003e5abc6e",
                            "referenceNumber": 1,
                            "trackingNumber": "JD014600004790042206",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896465/tracking?pieceTrackingNumber=JD014600004790042206",
                            "id": "6568fd9dbf8577003e5abc6e"
                        },
                        {
                            "_id": "6568fd9dbf8577003e5abc6f",
                            "referenceNumber": 2,
                            "trackingNumber": "JD014600004790042207",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896465/tracking?pieceTrackingNumber=JD014600004790042207",
                            "id": "6568fd9dbf8577003e5abc6f"
                        }
                    ]
                },
                "document": "PACKAGE",
                "_id": "6568fd9dbf8577003e5abc69",
                "packages": [
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "6568fd9dbf8577003e5abc6a",
                        "weight": 0.5,
                        "description": "Piece content description",
                        "id": "6568fd9dbf8577003e5abc6a"
                    },
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "6568fd9dbf8577003e5abc6b",
                        "weight": 5,
                        "description": "2 Piece content description",
                        "id": "6568fd9dbf8577003e5abc6b"
                    }
                ],
                "description": "description goes here",
                "number_items": 2,
                "delivery_info": [
                    {
                        "postalAddress": {
                            "postalCode": "100001",
                            "cityName": "Akure",
                            "countryCode": "NG",
                            "addressLine1": "yaba, lagos",
                            "countyName": "Ondo"
                        },
                        "contactInformation": {
                            "email": "shipper_create_shipmentapi@dhltestmail.com",
                            "phone": "18211309039",
                            "companyName": "Cider BookStore",
                            "fullName": "Anyanwu Chinedu"
                        },
                        "_id": "6568fd9dbf8577003e5abc6c",
                        "type": "CUSTOMER",
                        "id": "6568fd9dbf8577003e5abc6c"
                    },
                    {
                        "postalAddress": {
                            "postalCode": "GA015",
                            "cityName": "Accra",
                            "countryCode": "GH",
                            "addressLine1": "Some random place in Accra"
                        },
                        "contactInformation": {
                            "email": "recipient_create_shipmentapi@dhltestmail.com",
                            "phone": "9402825665",
                            "companyName": "Baylee Marshall",
                            "fullName": "Baylee Marshall"
                        },
                        "_id": "6568fd9dbf8577003e5abc6d",
                        "type": "RECIEVER",
                        "id": "6568fd9dbf8577003e5abc6d"
                    }
                ],
                "customerId": "6568f828bf8577003e5abc3d",
                "declaredValue": 5000,
                "channel": "api",
                "environment": "sandbox",
                "createdAt": "2023-11-30T21:24:45.536Z",
                "updatedAt": "2023-11-30T21:24:45.536Z",
                "__v": 0,
                "id": "6568fd9dbf8577003e5abc69"
            },
            {
                "shipmentMeta": {
                    "trackingId": "1494896443",
                    "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896443/tracking",
                    "packages": [
                        {
                            "_id": "6568fd67bf8577003e5abc61",
                            "referenceNumber": 1,
                            "trackingNumber": "JD014600004790042203",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896443/tracking?pieceTrackingNumber=JD014600004790042203",
                            "id": "6568fd67bf8577003e5abc61"
                        },
                        {
                            "_id": "6568fd67bf8577003e5abc62",
                            "referenceNumber": 2,
                            "trackingNumber": "JD014600004790042204",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896443/tracking?pieceTrackingNumber=JD014600004790042204",
                            "id": "6568fd67bf8577003e5abc62"
                        }
                    ]
                },
                "document": "PACKAGE",
                "_id": "6568fd67bf8577003e5abc5c",
                "packages": [
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "6568fd67bf8577003e5abc5d",
                        "weight": 0.5,
                        "description": "Piece content description",
                        "id": "6568fd67bf8577003e5abc5d"
                    },
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "6568fd67bf8577003e5abc5e",
                        "weight": 5,
                        "description": "2 Piece content description",
                        "id": "6568fd67bf8577003e5abc5e"
                    }
                ],
                "description": "description goes here",
                "number_items": 2,
                "delivery_info": [
                    {
                        "postalAddress": {
                            "postalCode": "100001",
                            "cityName": "Yaba",
                            "countryCode": "NG",
                            "addressLine1": "yaba, lagos",
                            "countyName": "Lagos"
                        },
                        "contactInformation": {
                            "email": "shipper_create_shipmentapi@dhltestmail.com",
                            "phone": "18211309039",
                            "companyName": "Cider BookStore",
                            "fullName": "Anyanwu Chinedu"
                        },
                        "_id": "6568fd67bf8577003e5abc5f",
                        "type": "CUSTOMER",
                        "id": "6568fd67bf8577003e5abc5f"
                    },
                    {
                        "postalAddress": {
                            "postalCode": "GA015",
                            "cityName": "Accra",
                            "countryCode": "GH",
                            "addressLine1": "Some random place in Accra"
                        },
                        "contactInformation": {
                            "email": "recipient_create_shipmentapi@dhltestmail.com",
                            "phone": "9402825665",
                            "companyName": "Baylee Marshall",
                            "fullName": "Baylee Marshall"
                        },
                        "_id": "6568fd67bf8577003e5abc60",
                        "type": "RECIEVER",
                        "id": "6568fd67bf8577003e5abc60"
                    }
                ],
                "customerId": "6568f828bf8577003e5abc3d",
                "declaredValue": 5000,
                "channel": "api",
                "environment": "sandbox",
                "createdAt": "2023-11-30T21:23:51.925Z",
                "updatedAt": "2023-11-30T21:23:51.925Z",
                "__v": 0,
                "id": "6568fd67bf8577003e5abc5c"
            },
            {
                "shipmentMeta": {
                    "trackingId": "1494896373",
                    "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896373/tracking",
                    "packages": [
                        {
                            "_id": "6568fd30bf8577003e5abc52",
                            "referenceNumber": 1,
                            "trackingNumber": "JD014600004790042195",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896373/tracking?pieceTrackingNumber=JD014600004790042195",
                            "id": "6568fd30bf8577003e5abc52"
                        },
                        {
                            "_id": "6568fd30bf8577003e5abc53",
                            "referenceNumber": 2,
                            "trackingNumber": "JD014600004790042196",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896373/tracking?pieceTrackingNumber=JD014600004790042196",
                            "id": "6568fd30bf8577003e5abc53"
                        }
                    ]
                },
                "document": "PACKAGE",
                "_id": "6568fd2fbf8577003e5abc4d",
                "packages": [
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "6568fd30bf8577003e5abc4e",
                        "weight": 0.5,
                        "description": "Piece content description",
                        "id": "6568fd30bf8577003e5abc4e"
                    },
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "6568fd30bf8577003e5abc4f",
                        "weight": 5,
                        "description": "2 Piece content description",
                        "id": "6568fd30bf8577003e5abc4f"
                    }
                ],
                "description": "description goes here",
                "number_items": 2,
                "delivery_info": [
                    {
                        "postalAddress": {
                            "postalCode": "100001",
                            "cityName": "Imo",
                            "countryCode": "NG",
                            "addressLine1": "yaba, lagos",
                            "countyName": "Owerri"
                        },
                        "contactInformation": {
                            "email": "shipper_create_shipmentapi@dhltestmail.com",
                            "phone": "18211309039",
                            "companyName": "Cider BookStore",
                            "fullName": "Anyanwu Chinedu"
                        },
                        "_id": "6568fd30bf8577003e5abc50",
                        "type": "CUSTOMER",
                        "id": "6568fd30bf8577003e5abc50"
                    },
                    {
                        "postalAddress": {
                            "postalCode": "GA015",
                            "cityName": "Accra",
                            "countryCode": "GH",
                            "addressLine1": "Some random place in Accra"
                        },
                        "contactInformation": {
                            "email": "recipient_create_shipmentapi@dhltestmail.com",
                            "phone": "9402825665",
                            "companyName": "Baylee Marshall",
                            "fullName": "Baylee Marshall"
                        },
                        "_id": "6568fd30bf8577003e5abc51",
                        "type": "RECIEVER",
                        "id": "6568fd30bf8577003e5abc51"
                    }
                ],
                "customerId": "6568f828bf8577003e5abc3d",
                "declaredValue": 5000,
                "channel": "api",
                "environment": "sandbox",
                "createdAt": "2023-11-30T21:22:56.010Z",
                "updatedAt": "2023-11-30T21:22:56.010Z",
                "__v": 0,
                "id": "6568fd2fbf8577003e5abc4d"
            },
            {
                "shipmentMeta": {
                    "trackingId": "1494896465",
                    "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896465/tracking",
                    "packages": [
                        {
                            "_id": "6568fd9dbf8577003e5abc6e",
                            "referenceNumber": 1,
                            "trackingNumber": "JD014600004790042206",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896465/tracking?pieceTrackingNumber=JD014600004790042206",
                            "id": "6568fd9dbf8577003e5abc6e"
                        },
                        {
                            "_id": "6568fd9dbf8577003e5abc6f",
                            "referenceNumber": 2,
                            "trackingNumber": "JD014600004790042207",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896465/tracking?pieceTrackingNumber=JD014600004790042207",
                            "id": "6568fd9dbf8577003e5abc6f"
                        }
                    ]
                },
                "document": "PACKAGE",
                "_id": "6568fd9dbf8577003e5abc69",
                "packages": [
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "6568fd9dbf8577003e5abc6a",
                        "weight": 0.5,
                        "description": "Piece content description",
                        "id": "6568fd9dbf8577003e5abc6a"
                    },
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "6568fd9dbf8577003e5abc6b",
                        "weight": 5,
                        "description": "2 Piece content description",
                        "id": "6568fd9dbf8577003e5abc6b"
                    }
                ],
                "description": "description goes here",
                "number_items": 2,
                "delivery_info": [
                    {
                        "postalAddress": {
                            "postalCode": "100001",
                            "cityName": "Akure",
                            "countryCode": "NG",
                            "addressLine1": "yaba, lagos",
                            "countyName": "Ondo"
                        },
                        "contactInformation": {
                            "email": "shipper_create_shipmentapi@dhltestmail.com",
                            "phone": "18211309039",
                            "companyName": "Cider BookStore",
                            "fullName": "Anyanwu Chinedu"
                        },
                        "_id": "6568fd9dbf8577003e5abc6c",
                        "type": "CUSTOMER",
                        "id": "6568fd9dbf8577003e5abc6c"
                    },
                    {
                        "postalAddress": {
                            "postalCode": "GA015",
                            "cityName": "Accra",
                            "countryCode": "GH",
                            "addressLine1": "Some random place in Accra"
                        },
                        "contactInformation": {
                            "email": "recipient_create_shipmentapi@dhltestmail.com",
                            "phone": "9402825665",
                            "companyName": "Baylee Marshall",
                            "fullName": "Baylee Marshall"
                        },
                        "_id": "6568fd9dbf8577003e5abc6d",
                        "type": "RECIEVER",
                        "id": "6568fd9dbf8577003e5abc6d"
                    }
                ],
                "customerId": "6568f828bf8577003e5abc3d",
                "declaredValue": 5000,
                "channel": "api",
                "environment": "sandbox",
                "createdAt": "2023-11-30T21:24:45.536Z",
                "updatedAt": "2023-11-30T21:24:45.536Z",
                "__v": 0,
                "id": "6568fd9dbf8577003e5abc69"
            },
            {
                "shipmentMeta": {
                    "trackingId": "1494896443",
                    "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896443/tracking",
                    "packages": [
                        {
                            "_id": "6568fd67bf8577003e5abc61",
                            "referenceNumber": 1,
                            "trackingNumber": "JD014600004790042203",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896443/tracking?pieceTrackingNumber=JD014600004790042203",
                            "id": "6568fd67bf8577003e5abc61"
                        },
                        {
                            "_id": "6568fd67bf8577003e5abc62",
                            "referenceNumber": 2,
                            "trackingNumber": "JD014600004790042204",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896443/tracking?pieceTrackingNumber=JD014600004790042204",
                            "id": "6568fd67bf8577003e5abc62"
                        }
                    ]
                },
                "document": "PACKAGE",
                "_id": "6568fd67bf8577003e5abc5c",
                "packages": [
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "6568fd67bf8577003e5abc5d",
                        "weight": 0.5,
                        "description": "Piece content description",
                        "id": "6568fd67bf8577003e5abc5d"
                    },
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "6568fd67bf8577003e5abc5e",
                        "weight": 5,
                        "description": "2 Piece content description",
                        "id": "6568fd67bf8577003e5abc5e"
                    }
                ],
                "description": "description goes here",
                "number_items": 2,
                "delivery_info": [
                    {
                        "postalAddress": {
                            "postalCode": "100001",
                            "cityName": "Yaba",
                            "countryCode": "NG",
                            "addressLine1": "yaba, lagos",
                            "countyName": "Lagos"
                        },
                        "contactInformation": {
                            "email": "shipper_create_shipmentapi@dhltestmail.com",
                            "phone": "18211309039",
                            "companyName": "Cider BookStore",
                            "fullName": "Anyanwu Chinedu"
                        },
                        "_id": "6568fd67bf8577003e5abc5f",
                        "type": "CUSTOMER",
                        "id": "6568fd67bf8577003e5abc5f"
                    },
                    {
                        "postalAddress": {
                            "postalCode": "GA015",
                            "cityName": "Accra",
                            "countryCode": "GH",
                            "addressLine1": "Some random place in Accra"
                        },
                        "contactInformation": {
                            "email": "recipient_create_shipmentapi@dhltestmail.com",
                            "phone": "9402825665",
                            "companyName": "Baylee Marshall",
                            "fullName": "Baylee Marshall"
                        },
                        "_id": "6568fd67bf8577003e5abc60",
                        "type": "RECIEVER",
                        "id": "6568fd67bf8577003e5abc60"
                    }
                ],
                "customerId": "6568f828bf8577003e5abc3d",
                "declaredValue": 5000,
                "channel": "api",
                "environment": "sandbox",
                "createdAt": "2023-11-30T21:23:51.925Z",
                "updatedAt": "2023-11-30T21:23:51.925Z",
                "__v": 0,
                "id": "6568fd67bf8577003e5abc5c"
            },
            {
                "shipmentMeta": {
                    "trackingId": "1494896373",
                    "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896373/tracking",
                    "packages": [
                        {
                            "_id": "6568fd30bf8577003e5abc52",
                            "referenceNumber": 1,
                            "trackingNumber": "JD014600004790042195",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896373/tracking?pieceTrackingNumber=JD014600004790042195",
                            "id": "6568fd30bf8577003e5abc52"
                        },
                        {
                            "_id": "6568fd30bf8577003e5abc53",
                            "referenceNumber": 2,
                            "trackingNumber": "JD014600004790042196",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896373/tracking?pieceTrackingNumber=JD014600004790042196",
                            "id": "6568fd30bf8577003e5abc53"
                        }
                    ]
                },
                "document": "PACKAGE",
                "_id": "6568fd2fbf8577003e5abc4d",
                "packages": [
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "6568fd30bf8577003e5abc4e",
                        "weight": 0.5,
                        "description": "Piece content description",
                        "id": "6568fd30bf8577003e5abc4e"
                    },
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "6568fd30bf8577003e5abc4f",
                        "weight": 5,
                        "description": "2 Piece content description",
                        "id": "6568fd30bf8577003e5abc4f"
                    }
                ],
                "description": "description goes here",
                "number_items": 2,
                "delivery_info": [
                    {
                        "postalAddress": {
                            "postalCode": "100001",
                            "cityName": "Imo",
                            "countryCode": "NG",
                            "addressLine1": "yaba, lagos",
                            "countyName": "Owerri"
                        },
                        "contactInformation": {
                            "email": "shipper_create_shipmentapi@dhltestmail.com",
                            "phone": "18211309039",
                            "companyName": "Cider BookStore",
                            "fullName": "Anyanwu Chinedu"
                        },
                        "_id": "6568fd30bf8577003e5abc50",
                        "type": "CUSTOMER",
                        "id": "6568fd30bf8577003e5abc50"
                    },
                    {
                        "postalAddress": {
                            "postalCode": "GA015",
                            "cityName": "Accra",
                            "countryCode": "GH",
                            "addressLine1": "Some random place in Accra"
                        },
                        "contactInformation": {
                            "email": "recipient_create_shipmentapi@dhltestmail.com",
                            "phone": "9402825665",
                            "companyName": "Baylee Marshall",
                            "fullName": "Baylee Marshall"
                        },
                        "_id": "6568fd30bf8577003e5abc51",
                        "type": "RECIEVER",
                        "id": "6568fd30bf8577003e5abc51"
                    }
                ],
                "customerId": "6568f828bf8577003e5abc3d",
                "declaredValue": 5000,
                "channel": "api",
                "environment": "sandbox",
                "createdAt": "2023-11-30T21:22:56.010Z",
                "updatedAt": "2023-11-30T21:22:56.010Z",
                "__v": 0,
                "id": "6568fd2fbf8577003e5abc4d"
            },
            {
                "shipmentMeta": {
                    "trackingId": "1494896465",
                    "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896465/tracking",
                    "packages": [
                        {
                            "_id": "6568fd9dbf8577003e5abc6e",
                            "referenceNumber": 1,
                            "trackingNumber": "JD014600004790042206",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896465/tracking?pieceTrackingNumber=JD014600004790042206",
                            "id": "6568fd9dbf8577003e5abc6e"
                        },
                        {
                            "_id": "6568fd9dbf8577003e5abc6f",
                            "referenceNumber": 2,
                            "trackingNumber": "JD014600004790042207",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896465/tracking?pieceTrackingNumber=JD014600004790042207",
                            "id": "6568fd9dbf8577003e5abc6f"
                        }
                    ]
                },
                "document": "PACKAGE",
                "_id": "6568fd9dbf8577003e5abc69",
                "packages": [
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "6568fd9dbf8577003e5abc6a",
                        "weight": 0.5,
                        "description": "Piece content description",
                        "id": "6568fd9dbf8577003e5abc6a"
                    },
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "6568fd9dbf8577003e5abc6b",
                        "weight": 5,
                        "description": "2 Piece content description",
                        "id": "6568fd9dbf8577003e5abc6b"
                    }
                ],
                "description": "description goes here",
                "number_items": 2,
                "delivery_info": [
                    {
                        "postalAddress": {
                            "postalCode": "100001",
                            "cityName": "Akure",
                            "countryCode": "NG",
                            "addressLine1": "yaba, lagos",
                            "countyName": "Ondo"
                        },
                        "contactInformation": {
                            "email": "shipper_create_shipmentapi@dhltestmail.com",
                            "phone": "18211309039",
                            "companyName": "Cider BookStore",
                            "fullName": "Anyanwu Chinedu"
                        },
                        "_id": "6568fd9dbf8577003e5abc6c",
                        "type": "CUSTOMER",
                        "id": "6568fd9dbf8577003e5abc6c"
                    },
                    {
                        "postalAddress": {
                            "postalCode": "GA015",
                            "cityName": "Accra",
                            "countryCode": "GH",
                            "addressLine1": "Some random place in Accra"
                        },
                        "contactInformation": {
                            "email": "recipient_create_shipmentapi@dhltestmail.com",
                            "phone": "9402825665",
                            "companyName": "Baylee Marshall",
                            "fullName": "Baylee Marshall"
                        },
                        "_id": "6568fd9dbf8577003e5abc6d",
                        "type": "RECIEVER",
                        "id": "6568fd9dbf8577003e5abc6d"
                    }
                ],
                "customerId": "6568f828bf8577003e5abc3d",
                "declaredValue": 5000,
                "channel": "api",
                "environment": "sandbox",
                "createdAt": "2023-11-30T21:24:45.536Z",
                "updatedAt": "2023-11-30T21:24:45.536Z",
                "__v": 0,
                "id": "6568fd9dbf8577003e5abc69"
            },
            {
                "shipmentMeta": {
                    "trackingId": "1494896443",
                    "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896443/tracking",
                    "packages": [
                        {
                            "_id": "6568fd67bf8577003e5abc61",
                            "referenceNumber": 1,
                            "trackingNumber": "JD014600004790042203",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896443/tracking?pieceTrackingNumber=JD014600004790042203",
                            "id": "6568fd67bf8577003e5abc61"
                        },
                        {
                            "_id": "6568fd67bf8577003e5abc62",
                            "referenceNumber": 2,
                            "trackingNumber": "JD014600004790042204",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896443/tracking?pieceTrackingNumber=JD014600004790042204",
                            "id": "6568fd67bf8577003e5abc62"
                        }
                    ]
                },
                "document": "PACKAGE",
                "_id": "6568fd67bf8577003e5abc5c",
                "packages": [
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "6568fd67bf8577003e5abc5d",
                        "weight": 0.5,
                        "description": "Piece content description",
                        "id": "6568fd67bf8577003e5abc5d"
                    },
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "6568fd67bf8577003e5abc5e",
                        "weight": 5,
                        "description": "2 Piece content description",
                        "id": "6568fd67bf8577003e5abc5e"
                    }
                ],
                "description": "description goes here",
                "number_items": 2,
                "delivery_info": [
                    {
                        "postalAddress": {
                            "postalCode": "100001",
                            "cityName": "Yaba",
                            "countryCode": "NG",
                            "addressLine1": "yaba, lagos",
                            "countyName": "Lagos"
                        },
                        "contactInformation": {
                            "email": "shipper_create_shipmentapi@dhltestmail.com",
                            "phone": "18211309039",
                            "companyName": "Cider BookStore",
                            "fullName": "Anyanwu Chinedu"
                        },
                        "_id": "6568fd67bf8577003e5abc5f",
                        "type": "CUSTOMER",
                        "id": "6568fd67bf8577003e5abc5f"
                    },
                    {
                        "postalAddress": {
                            "postalCode": "GA015",
                            "cityName": "Accra",
                            "countryCode": "GH",
                            "addressLine1": "Some random place in Accra"
                        },
                        "contactInformation": {
                            "email": "recipient_create_shipmentapi@dhltestmail.com",
                            "phone": "9402825665",
                            "companyName": "Baylee Marshall",
                            "fullName": "Baylee Marshall"
                        },
                        "_id": "6568fd67bf8577003e5abc60",
                        "type": "RECIEVER",
                        "id": "6568fd67bf8577003e5abc60"
                    }
                ],
                "customerId": "6568f828bf8577003e5abc3d",
                "declaredValue": 5000,
                "channel": "api",
                "environment": "sandbox",
                "createdAt": "2023-11-30T21:23:51.925Z",
                "updatedAt": "2023-11-30T21:23:51.925Z",
                "__v": 0,
                "id": "6568fd67bf8577003e5abc5c"
            },
            {
                "shipmentMeta": {
                    "trackingId": "1494896373",
                    "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896373/tracking",
                    "packages": [
                        {
                            "_id": "6568fd30bf8577003e5abc52",
                            "referenceNumber": 1,
                            "trackingNumber": "JD014600004790042195",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896373/tracking?pieceTrackingNumber=JD014600004790042195",
                            "id": "6568fd30bf8577003e5abc52"
                        },
                        {
                            "_id": "6568fd30bf8577003e5abc53",
                            "referenceNumber": 2,
                            "trackingNumber": "JD014600004790042196",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896373/tracking?pieceTrackingNumber=JD014600004790042196",
                            "id": "6568fd30bf8577003e5abc53"
                        }
                    ]
                },
                "document": "PACKAGE",
                "_id": "6568fd2fbf8577003e5abc4d",
                "packages": [
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "6568fd30bf8577003e5abc4e",
                        "weight": 0.5,
                        "description": "Piece content description",
                        "id": "6568fd30bf8577003e5abc4e"
                    },
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "6568fd30bf8577003e5abc4f",
                        "weight": 5,
                        "description": "2 Piece content description",
                        "id": "6568fd30bf8577003e5abc4f"
                    }
                ],
                "description": "description goes here",
                "number_items": 2,
                "delivery_info": [
                    {
                        "postalAddress": {
                            "postalCode": "100001",
                            "cityName": "Imo",
                            "countryCode": "NG",
                            "addressLine1": "yaba, lagos",
                            "countyName": "Owerri"
                        },
                        "contactInformation": {
                            "email": "shipper_create_shipmentapi@dhltestmail.com",
                            "phone": "18211309039",
                            "companyName": "Cider BookStore",
                            "fullName": "Anyanwu Chinedu"
                        },
                        "_id": "6568fd30bf8577003e5abc50",
                        "type": "CUSTOMER",
                        "id": "6568fd30bf8577003e5abc50"
                    },
                    {
                        "postalAddress": {
                            "postalCode": "GA015",
                            "cityName": "Accra",
                            "countryCode": "GH",
                            "addressLine1": "Some random place in Accra"
                        },
                        "contactInformation": {
                            "email": "recipient_create_shipmentapi@dhltestmail.com",
                            "phone": "9402825665",
                            "companyName": "Baylee Marshall",
                            "fullName": "Baylee Marshall"
                        },
                        "_id": "6568fd30bf8577003e5abc51",
                        "type": "RECIEVER",
                        "id": "6568fd30bf8577003e5abc51"
                    }
                ],
                "customerId": "6568f828bf8577003e5abc3d",
                "declaredValue": 5000,
                "channel": "api",
                "environment": "sandbox",
                "createdAt": "2023-11-30T21:22:56.010Z",
                "updatedAt": "2023-11-30T21:22:56.010Z",
                "__v": 0,
                "id": "6568fd2fbf8577003e5abc4d"
            },
            {
                "shipmentMeta": {
                    "trackingId": "1494896465",
                    "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896465/tracking",
                    "packages": [
                        {
                            "_id": "6568fd9dbf8577003e5abc6e",
                            "referenceNumber": 1,
                            "trackingNumber": "JD014600004790042206",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896465/tracking?pieceTrackingNumber=JD014600004790042206",
                            "id": "6568fd9dbf8577003e5abc6e"
                        },
                        {
                            "_id": "6568fd9dbf8577003e5abc6f",
                            "referenceNumber": 2,
                            "trackingNumber": "JD014600004790042207",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896465/tracking?pieceTrackingNumber=JD014600004790042207",
                            "id": "6568fd9dbf8577003e5abc6f"
                        }
                    ]
                },
                "document": "PACKAGE",
                "_id": "6568fd9dbf8577003e5abc69",
                "packages": [
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "6568fd9dbf8577003e5abc6a",
                        "weight": 0.5,
                        "description": "Piece content description",
                        "id": "6568fd9dbf8577003e5abc6a"
                    },
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "6568fd9dbf8577003e5abc6b",
                        "weight": 5,
                        "description": "2 Piece content description",
                        "id": "6568fd9dbf8577003e5abc6b"
                    }
                ],
                "description": "description goes here",
                "number_items": 2,
                "delivery_info": [
                    {
                        "postalAddress": {
                            "postalCode": "100001",
                            "cityName": "Akure",
                            "countryCode": "NG",
                            "addressLine1": "yaba, lagos",
                            "countyName": "Ondo"
                        },
                        "contactInformation": {
                            "email": "shipper_create_shipmentapi@dhltestmail.com",
                            "phone": "18211309039",
                            "companyName": "Cider BookStore",
                            "fullName": "Anyanwu Chinedu"
                        },
                        "_id": "6568fd9dbf8577003e5abc6c",
                        "type": "CUSTOMER",
                        "id": "6568fd9dbf8577003e5abc6c"
                    },
                    {
                        "postalAddress": {
                            "postalCode": "GA015",
                            "cityName": "Accra",
                            "countryCode": "GH",
                            "addressLine1": "Some random place in Accra"
                        },
                        "contactInformation": {
                            "email": "recipient_create_shipmentapi@dhltestmail.com",
                            "phone": "9402825665",
                            "companyName": "Baylee Marshall",
                            "fullName": "Baylee Marshall"
                        },
                        "_id": "6568fd9dbf8577003e5abc6d",
                        "type": "RECIEVER",
                        "id": "6568fd9dbf8577003e5abc6d"
                    }
                ],
                "customerId": "6568f828bf8577003e5abc3d",
                "declaredValue": 5000,
                "channel": "api",
                "environment": "sandbox",
                "createdAt": "2023-11-30T21:24:45.536Z",
                "updatedAt": "2023-11-30T21:24:45.536Z",
                "__v": 0,
                "id": "6568fd9dbf8577003e5abc69"
            },
            {
                "shipmentMeta": {
                    "trackingId": "1494896443",
                    "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896443/tracking",
                    "packages": [
                        {
                            "_id": "6568fd67bf8577003e5abc61",
                            "referenceNumber": 1,
                            "trackingNumber": "JD014600004790042203",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896443/tracking?pieceTrackingNumber=JD014600004790042203",
                            "id": "6568fd67bf8577003e5abc61"
                        },
                        {
                            "_id": "6568fd67bf8577003e5abc62",
                            "referenceNumber": 2,
                            "trackingNumber": "JD014600004790042204",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896443/tracking?pieceTrackingNumber=JD014600004790042204",
                            "id": "6568fd67bf8577003e5abc62"
                        }
                    ]
                },
                "document": "PACKAGE",
                "_id": "6568fd67bf8577003e5abc5c",
                "packages": [
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "6568fd67bf8577003e5abc5d",
                        "weight": 0.5,
                        "description": "Piece content description",
                        "id": "6568fd67bf8577003e5abc5d"
                    },
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "6568fd67bf8577003e5abc5e",
                        "weight": 5,
                        "description": "2 Piece content description",
                        "id": "6568fd67bf8577003e5abc5e"
                    }
                ],
                "description": "description goes here",
                "number_items": 2,
                "delivery_info": [
                    {
                        "postalAddress": {
                            "postalCode": "100001",
                            "cityName": "Yaba",
                            "countryCode": "NG",
                            "addressLine1": "yaba, lagos",
                            "countyName": "Lagos"
                        },
                        "contactInformation": {
                            "email": "shipper_create_shipmentapi@dhltestmail.com",
                            "phone": "18211309039",
                            "companyName": "Cider BookStore",
                            "fullName": "Anyanwu Chinedu"
                        },
                        "_id": "6568fd67bf8577003e5abc5f",
                        "type": "CUSTOMER",
                        "id": "6568fd67bf8577003e5abc5f"
                    },
                    {
                        "postalAddress": {
                            "postalCode": "GA015",
                            "cityName": "Accra",
                            "countryCode": "GH",
                            "addressLine1": "Some random place in Accra"
                        },
                        "contactInformation": {
                            "email": "recipient_create_shipmentapi@dhltestmail.com",
                            "phone": "9402825665",
                            "companyName": "Baylee Marshall",
                            "fullName": "Baylee Marshall"
                        },
                        "_id": "6568fd67bf8577003e5abc60",
                        "type": "RECIEVER",
                        "id": "6568fd67bf8577003e5abc60"
                    }
                ],
                "customerId": "6568f828bf8577003e5abc3d",
                "declaredValue": 5000,
                "channel": "api",
                "environment": "sandbox",
                "createdAt": "2023-11-30T21:23:51.925Z",
                "updatedAt": "2023-11-30T21:23:51.925Z",
                "__v": 0,
                "id": "6568fd67bf8577003e5abc5c"
            },
            {
                "shipmentMeta": {
                    "trackingId": "1494896373",
                    "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896373/tracking",
                    "packages": [
                        {
                            "_id": "6568fd30bf8577003e5abc52",
                            "referenceNumber": 1,
                            "trackingNumber": "JD014600004790042195",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896373/tracking?pieceTrackingNumber=JD014600004790042195",
                            "id": "6568fd30bf8577003e5abc52"
                        },
                        {
                            "_id": "6568fd30bf8577003e5abc53",
                            "referenceNumber": 2,
                            "trackingNumber": "JD014600004790042196",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896373/tracking?pieceTrackingNumber=JD014600004790042196",
                            "id": "6568fd30bf8577003e5abc53"
                        }
                    ]
                },
                "document": "PACKAGE",
                "_id": "6568fd2fbf8577003e5abc4d",
                "packages": [
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "6568fd30bf8577003e5abc4e",
                        "weight": 0.5,
                        "description": "Piece content description",
                        "id": "6568fd30bf8577003e5abc4e"
                    },
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "6568fd30bf8577003e5abc4f",
                        "weight": 5,
                        "description": "2 Piece content description",
                        "id": "6568fd30bf8577003e5abc4f"
                    }
                ],
                "description": "description goes here",
                "number_items": 2,
                "delivery_info": [
                    {
                        "postalAddress": {
                            "postalCode": "100001",
                            "cityName": "Imo",
                            "countryCode": "NG",
                            "addressLine1": "yaba, lagos",
                            "countyName": "Owerri"
                        },
                        "contactInformation": {
                            "email": "shipper_create_shipmentapi@dhltestmail.com",
                            "phone": "18211309039",
                            "companyName": "Cider BookStore",
                            "fullName": "Anyanwu Chinedu"
                        },
                        "_id": "6568fd30bf8577003e5abc50",
                        "type": "CUSTOMER",
                        "id": "6568fd30bf8577003e5abc50"
                    },
                    {
                        "postalAddress": {
                            "postalCode": "GA015",
                            "cityName": "Accra",
                            "countryCode": "GH",
                            "addressLine1": "Some random place in Accra"
                        },
                        "contactInformation": {
                            "email": "recipient_create_shipmentapi@dhltestmail.com",
                            "phone": "9402825665",
                            "companyName": "Baylee Marshall",
                            "fullName": "Baylee Marshall"
                        },
                        "_id": "6568fd30bf8577003e5abc51",
                        "type": "RECIEVER",
                        "id": "6568fd30bf8577003e5abc51"
                    }
                ],
                "customerId": "6568f828bf8577003e5abc3d",
                "declaredValue": 5000,
                "channel": "api",
                "environment": "sandbox",
                "createdAt": "2023-11-30T21:22:56.010Z",
                "updatedAt": "2023-11-30T21:22:56.010Z",
                "__v": 0,
                "id": "6568fd2fbf8577003e5abc4d"
            },
            {
                "shipmentMeta": {
                    "trackingId": "1494896465",
                    "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896465/tracking",
                    "packages": [
                        {
                            "_id": "6568fd9dbf8577003e5abc6e",
                            "referenceNumber": 1,
                            "trackingNumber": "JD014600004790042206",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896465/tracking?pieceTrackingNumber=JD014600004790042206",
                            "id": "6568fd9dbf8577003e5abc6e"
                        },
                        {
                            "_id": "6568fd9dbf8577003e5abc6f",
                            "referenceNumber": 2,
                            "trackingNumber": "JD014600004790042207",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896465/tracking?pieceTrackingNumber=JD014600004790042207",
                            "id": "6568fd9dbf8577003e5abc6f"
                        }
                    ]
                },
                "document": "PACKAGE",
                "_id": "6568fd9dbf8577003e5abc69",
                "packages": [
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "6568fd9dbf8577003e5abc6a",
                        "weight": 0.5,
                        "description": "Piece content description",
                        "id": "6568fd9dbf8577003e5abc6a"
                    },
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "6568fd9dbf8577003e5abc6b",
                        "weight": 5,
                        "description": "2 Piece content description",
                        "id": "6568fd9dbf8577003e5abc6b"
                    }
                ],
                "description": "description goes here",
                "number_items": 2,
                "delivery_info": [
                    {
                        "postalAddress": {
                            "postalCode": "100001",
                            "cityName": "Akure",
                            "countryCode": "NG",
                            "addressLine1": "yaba, lagos",
                            "countyName": "Ondo"
                        },
                        "contactInformation": {
                            "email": "shipper_create_shipmentapi@dhltestmail.com",
                            "phone": "18211309039",
                            "companyName": "Cider BookStore",
                            "fullName": "Anyanwu Chinedu"
                        },
                        "_id": "6568fd9dbf8577003e5abc6c",
                        "type": "CUSTOMER",
                        "id": "6568fd9dbf8577003e5abc6c"
                    },
                    {
                        "postalAddress": {
                            "postalCode": "GA015",
                            "cityName": "Accra",
                            "countryCode": "GH",
                            "addressLine1": "Some random place in Accra"
                        },
                        "contactInformation": {
                            "email": "recipient_create_shipmentapi@dhltestmail.com",
                            "phone": "9402825665",
                            "companyName": "Baylee Marshall",
                            "fullName": "Baylee Marshall"
                        },
                        "_id": "6568fd9dbf8577003e5abc6d",
                        "type": "RECIEVER",
                        "id": "6568fd9dbf8577003e5abc6d"
                    }
                ],
                "customerId": "6568f828bf8577003e5abc3d",
                "declaredValue": 5000,
                "channel": "api",
                "environment": "sandbox",
                "createdAt": "2023-11-30T21:24:45.536Z",
                "updatedAt": "2023-11-30T21:24:45.536Z",
                "__v": 0,
                "id": "6568fd9dbf8577003e5abc69"
            },
            {
                "shipmentMeta": {
                    "trackingId": "1494896443",
                    "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896443/tracking",
                    "packages": [
                        {
                            "_id": "6568fd67bf8577003e5abc61",
                            "referenceNumber": 1,
                            "trackingNumber": "JD014600004790042203",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896443/tracking?pieceTrackingNumber=JD014600004790042203",
                            "id": "6568fd67bf8577003e5abc61"
                        },
                        {
                            "_id": "6568fd67bf8577003e5abc62",
                            "referenceNumber": 2,
                            "trackingNumber": "JD014600004790042204",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896443/tracking?pieceTrackingNumber=JD014600004790042204",
                            "id": "6568fd67bf8577003e5abc62"
                        }
                    ]
                },
                "document": "PACKAGE",
                "_id": "6568fd67bf8577003e5abc5c",
                "packages": [
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "6568fd67bf8577003e5abc5d",
                        "weight": 0.5,
                        "description": "Piece content description",
                        "id": "6568fd67bf8577003e5abc5d"
                    },
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "6568fd67bf8577003e5abc5e",
                        "weight": 5,
                        "description": "2 Piece content description",
                        "id": "6568fd67bf8577003e5abc5e"
                    }
                ],
                "description": "description goes here",
                "number_items": 2,
                "delivery_info": [
                    {
                        "postalAddress": {
                            "postalCode": "100001",
                            "cityName": "Yaba",
                            "countryCode": "NG",
                            "addressLine1": "yaba, lagos",
                            "countyName": "Lagos"
                        },
                        "contactInformation": {
                            "email": "shipper_create_shipmentapi@dhltestmail.com",
                            "phone": "18211309039",
                            "companyName": "Cider BookStore",
                            "fullName": "Anyanwu Chinedu"
                        },
                        "_id": "6568fd67bf8577003e5abc5f",
                        "type": "CUSTOMER",
                        "id": "6568fd67bf8577003e5abc5f"
                    },
                    {
                        "postalAddress": {
                            "postalCode": "GA015",
                            "cityName": "Accra",
                            "countryCode": "GH",
                            "addressLine1": "Some random place in Accra"
                        },
                        "contactInformation": {
                            "email": "recipient_create_shipmentapi@dhltestmail.com",
                            "phone": "9402825665",
                            "companyName": "Baylee Marshall",
                            "fullName": "Baylee Marshall"
                        },
                        "_id": "6568fd67bf8577003e5abc60",
                        "type": "RECIEVER",
                        "id": "6568fd67bf8577003e5abc60"
                    }
                ],
                "customerId": "6568f828bf8577003e5abc3d",
                "declaredValue": 5000,
                "channel": "api",
                "environment": "sandbox",
                "createdAt": "2023-11-30T21:23:51.925Z",
                "updatedAt": "2023-11-30T21:23:51.925Z",
                "__v": 0,
                "id": "6568fd67bf8577003e5abc5c"
            },
            {
                "shipmentMeta": {
                    "trackingId": "1494896373",
                    "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896373/tracking",
                    "packages": [
                        {
                            "_id": "6568fd30bf8577003e5abc52",
                            "referenceNumber": 1,
                            "trackingNumber": "JD014600004790042195",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896373/tracking?pieceTrackingNumber=JD014600004790042195",
                            "id": "6568fd30bf8577003e5abc52"
                        },
                        {
                            "_id": "6568fd30bf8577003e5abc53",
                            "referenceNumber": 2,
                            "trackingNumber": "JD014600004790042196",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896373/tracking?pieceTrackingNumber=JD014600004790042196",
                            "id": "6568fd30bf8577003e5abc53"
                        }
                    ]
                },
                "document": "PACKAGE",
                "_id": "6568fd2fbf8577003e5abc4d",
                "packages": [
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "6568fd30bf8577003e5abc4e",
                        "weight": 0.5,
                        "description": "Piece content description",
                        "id": "6568fd30bf8577003e5abc4e"
                    },
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "6568fd30bf8577003e5abc4f",
                        "weight": 5,
                        "description": "2 Piece content description",
                        "id": "6568fd30bf8577003e5abc4f"
                    }
                ],
                "description": "description goes here",
                "number_items": 2,
                "delivery_info": [
                    {
                        "postalAddress": {
                            "postalCode": "100001",
                            "cityName": "Imo",
                            "countryCode": "NG",
                            "addressLine1": "yaba, lagos",
                            "countyName": "Owerri"
                        },
                        "contactInformation": {
                            "email": "shipper_create_shipmentapi@dhltestmail.com",
                            "phone": "18211309039",
                            "companyName": "Cider BookStore",
                            "fullName": "Anyanwu Chinedu"
                        },
                        "_id": "6568fd30bf8577003e5abc50",
                        "type": "CUSTOMER",
                        "id": "6568fd30bf8577003e5abc50"
                    },
                    {
                        "postalAddress": {
                            "postalCode": "GA015",
                            "cityName": "Accra",
                            "countryCode": "GH",
                            "addressLine1": "Some random place in Accra"
                        },
                        "contactInformation": {
                            "email": "recipient_create_shipmentapi@dhltestmail.com",
                            "phone": "9402825665",
                            "companyName": "Baylee Marshall",
                            "fullName": "Baylee Marshall"
                        },
                        "_id": "6568fd30bf8577003e5abc51",
                        "type": "RECIEVER",
                        "id": "6568fd30bf8577003e5abc51"
                    }
                ],
                "customerId": "6568f828bf8577003e5abc3d",
                "declaredValue": 5000,
                "channel": "api",
                "environment": "sandbox",
                "createdAt": "2023-11-30T21:22:56.010Z",
                "updatedAt": "2023-11-30T21:22:56.010Z",
                "__v": 0,
                "id": "6568fd2fbf8577003e5abc4d"
            },
            {
                "shipmentMeta": {
                    "trackingId": "1494896465",
                    "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896465/tracking",
                    "packages": [
                        {
                            "_id": "6568fd9dbf8577003e5abc6e",
                            "referenceNumber": 1,
                            "trackingNumber": "JD014600004790042206",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896465/tracking?pieceTrackingNumber=JD014600004790042206",
                            "id": "6568fd9dbf8577003e5abc6e"
                        },
                        {
                            "_id": "6568fd9dbf8577003e5abc6f",
                            "referenceNumber": 2,
                            "trackingNumber": "JD014600004790042207",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896465/tracking?pieceTrackingNumber=JD014600004790042207",
                            "id": "6568fd9dbf8577003e5abc6f"
                        }
                    ]
                },
                "document": "PACKAGE",
                "_id": "6568fd9dbf8577003e5abc69",
                "packages": [
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "6568fd9dbf8577003e5abc6a",
                        "weight": 0.5,
                        "description": "Piece content description",
                        "id": "6568fd9dbf8577003e5abc6a"
                    },
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "6568fd9dbf8577003e5abc6b",
                        "weight": 5,
                        "description": "2 Piece content description",
                        "id": "6568fd9dbf8577003e5abc6b"
                    }
                ],
                "description": "description goes here",
                "number_items": 2,
                "delivery_info": [
                    {
                        "postalAddress": {
                            "postalCode": "100001",
                            "cityName": "Akure",
                            "countryCode": "NG",
                            "addressLine1": "yaba, lagos",
                            "countyName": "Ondo"
                        },
                        "contactInformation": {
                            "email": "shipper_create_shipmentapi@dhltestmail.com",
                            "phone": "18211309039",
                            "companyName": "Cider BookStore",
                            "fullName": "Anyanwu Chinedu"
                        },
                        "_id": "6568fd9dbf8577003e5abc6c",
                        "type": "CUSTOMER",
                        "id": "6568fd9dbf8577003e5abc6c"
                    },
                    {
                        "postalAddress": {
                            "postalCode": "GA015",
                            "cityName": "Accra",
                            "countryCode": "GH",
                            "addressLine1": "Some random place in Accra"
                        },
                        "contactInformation": {
                            "email": "recipient_create_shipmentapi@dhltestmail.com",
                            "phone": "9402825665",
                            "companyName": "Baylee Marshall",
                            "fullName": "Baylee Marshall"
                        },
                        "_id": "6568fd9dbf8577003e5abc6d",
                        "type": "RECIEVER",
                        "id": "6568fd9dbf8577003e5abc6d"
                    }
                ],
                "customerId": "6568f828bf8577003e5abc3d",
                "declaredValue": 5000,
                "channel": "api",
                "environment": "sandbox",
                "createdAt": "2023-11-30T21:24:45.536Z",
                "updatedAt": "2023-11-30T21:24:45.536Z",
                "__v": 0,
                "id": "6568fd9dbf8577003e5abc69"
            },
            {
                "shipmentMeta": {
                    "trackingId": "1494896443",
                    "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896443/tracking",
                    "packages": [
                        {
                            "_id": "6568fd67bf8577003e5abc61",
                            "referenceNumber": 1,
                            "trackingNumber": "JD014600004790042203",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896443/tracking?pieceTrackingNumber=JD014600004790042203",
                            "id": "6568fd67bf8577003e5abc61"
                        },
                        {
                            "_id": "6568fd67bf8577003e5abc62",
                            "referenceNumber": 2,
                            "trackingNumber": "JD014600004790042204",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896443/tracking?pieceTrackingNumber=JD014600004790042204",
                            "id": "6568fd67bf8577003e5abc62"
                        }
                    ]
                },
                "document": "PACKAGE",
                "_id": "6568fd67bf8577003e5abc5c",
                "packages": [
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "6568fd67bf8577003e5abc5d",
                        "weight": 0.5,
                        "description": "Piece content description",
                        "id": "6568fd67bf8577003e5abc5d"
                    },
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "6568fd67bf8577003e5abc5e",
                        "weight": 5,
                        "description": "2 Piece content description",
                        "id": "6568fd67bf8577003e5abc5e"
                    }
                ],
                "description": "description goes here",
                "number_items": 2,
                "delivery_info": [
                    {
                        "postalAddress": {
                            "postalCode": "100001",
                            "cityName": "Yaba",
                            "countryCode": "NG",
                            "addressLine1": "yaba, lagos",
                            "countyName": "Lagos"
                        },
                        "contactInformation": {
                            "email": "shipper_create_shipmentapi@dhltestmail.com",
                            "phone": "18211309039",
                            "companyName": "Cider BookStore",
                            "fullName": "Anyanwu Chinedu"
                        },
                        "_id": "6568fd67bf8577003e5abc5f",
                        "type": "CUSTOMER",
                        "id": "6568fd67bf8577003e5abc5f"
                    },
                    {
                        "postalAddress": {
                            "postalCode": "GA015",
                            "cityName": "Accra",
                            "countryCode": "GH",
                            "addressLine1": "Some random place in Accra"
                        },
                        "contactInformation": {
                            "email": "recipient_create_shipmentapi@dhltestmail.com",
                            "phone": "9402825665",
                            "companyName": "Baylee Marshall",
                            "fullName": "Baylee Marshall"
                        },
                        "_id": "6568fd67bf8577003e5abc60",
                        "type": "RECIEVER",
                        "id": "6568fd67bf8577003e5abc60"
                    }
                ],
                "customerId": "6568f828bf8577003e5abc3d",
                "declaredValue": 5000,
                "channel": "api",
                "environment": "sandbox",
                "createdAt": "2023-11-30T21:23:51.925Z",
                "updatedAt": "2023-11-30T21:23:51.925Z",
                "__v": 0,
                "id": "6568fd67bf8577003e5abc5c"
            },
            {
                "shipmentMeta": {
                    "trackingId": "1494896373",
                    "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896373/tracking",
                    "packages": [
                        {
                            "_id": "6568fd30bf8577003e5abc52",
                            "referenceNumber": 1,
                            "trackingNumber": "JD014600004790042195",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896373/tracking?pieceTrackingNumber=JD014600004790042195",
                            "id": "6568fd30bf8577003e5abc52"
                        },
                        {
                            "_id": "6568fd30bf8577003e5abc53",
                            "referenceNumber": 2,
                            "trackingNumber": "JD014600004790042196",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896373/tracking?pieceTrackingNumber=JD014600004790042196",
                            "id": "6568fd30bf8577003e5abc53"
                        }
                    ]
                },
                "document": "PACKAGE",
                "_id": "6568fd2fbf8577003e5abc4d",
                "packages": [
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "6568fd30bf8577003e5abc4e",
                        "weight": 0.5,
                        "description": "Piece content description",
                        "id": "6568fd30bf8577003e5abc4e"
                    },
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "6568fd30bf8577003e5abc4f",
                        "weight": 5,
                        "description": "2 Piece content description",
                        "id": "6568fd30bf8577003e5abc4f"
                    }
                ],
                "description": "description goes here",
                "number_items": 2,
                "delivery_info": [
                    {
                        "postalAddress": {
                            "postalCode": "100001",
                            "cityName": "Imo",
                            "countryCode": "NG",
                            "addressLine1": "yaba, lagos",
                            "countyName": "Owerri"
                        },
                        "contactInformation": {
                            "email": "shipper_create_shipmentapi@dhltestmail.com",
                            "phone": "18211309039",
                            "companyName": "Cider BookStore",
                            "fullName": "Anyanwu Chinedu"
                        },
                        "_id": "6568fd30bf8577003e5abc50",
                        "type": "CUSTOMER",
                        "id": "6568fd30bf8577003e5abc50"
                    },
                    {
                        "postalAddress": {
                            "postalCode": "GA015",
                            "cityName": "Accra",
                            "countryCode": "GH",
                            "addressLine1": "Some random place in Accra"
                        },
                        "contactInformation": {
                            "email": "recipient_create_shipmentapi@dhltestmail.com",
                            "phone": "9402825665",
                            "companyName": "Baylee Marshall",
                            "fullName": "Baylee Marshall"
                        },
                        "_id": "6568fd30bf8577003e5abc51",
                        "type": "RECIEVER",
                        "id": "6568fd30bf8577003e5abc51"
                    }
                ],
                "customerId": "6568f828bf8577003e5abc3d",
                "declaredValue": 5000,
                "channel": "api",
                "environment": "sandbox",
                "createdAt": "2023-11-30T21:22:56.010Z",
                "updatedAt": "2023-11-30T21:22:56.010Z",
                "__v": 0,
                "id": "6568fd2fbf8577003e5abc4d"
            },
            {
                "shipmentMeta": {
                    "trackingId": "1494896465",
                    "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896465/tracking",
                    "packages": [
                        {
                            "_id": "6568fd9dbf8577003e5abc6e",
                            "referenceNumber": 1,
                            "trackingNumber": "JD014600004790042206",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896465/tracking?pieceTrackingNumber=JD014600004790042206",
                            "id": "6568fd9dbf8577003e5abc6e"
                        },
                        {
                            "_id": "6568fd9dbf8577003e5abc6f",
                            "referenceNumber": 2,
                            "trackingNumber": "JD014600004790042207",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896465/tracking?pieceTrackingNumber=JD014600004790042207",
                            "id": "6568fd9dbf8577003e5abc6f"
                        }
                    ]
                },
                "document": "PACKAGE",
                "_id": "6568fd9dbf8577003e5abc69",
                "packages": [
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "6568fd9dbf8577003e5abc6a",
                        "weight": 0.5,
                        "description": "Piece content description",
                        "id": "6568fd9dbf8577003e5abc6a"
                    },
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "6568fd9dbf8577003e5abc6b",
                        "weight": 5,
                        "description": "2 Piece content description",
                        "id": "6568fd9dbf8577003e5abc6b"
                    }
                ],
                "description": "description goes here",
                "number_items": 2,
                "delivery_info": [
                    {
                        "postalAddress": {
                            "postalCode": "100001",
                            "cityName": "Akure",
                            "countryCode": "NG",
                            "addressLine1": "yaba, lagos",
                            "countyName": "Ondo"
                        },
                        "contactInformation": {
                            "email": "shipper_create_shipmentapi@dhltestmail.com",
                            "phone": "18211309039",
                            "companyName": "Cider BookStore",
                            "fullName": "Anyanwu Chinedu"
                        },
                        "_id": "6568fd9dbf8577003e5abc6c",
                        "type": "CUSTOMER",
                        "id": "6568fd9dbf8577003e5abc6c"
                    },
                    {
                        "postalAddress": {
                            "postalCode": "GA015",
                            "cityName": "Accra",
                            "countryCode": "GH",
                            "addressLine1": "Some random place in Accra"
                        },
                        "contactInformation": {
                            "email": "recipient_create_shipmentapi@dhltestmail.com",
                            "phone": "9402825665",
                            "companyName": "Baylee Marshall",
                            "fullName": "Baylee Marshall"
                        },
                        "_id": "6568fd9dbf8577003e5abc6d",
                        "type": "RECIEVER",
                        "id": "6568fd9dbf8577003e5abc6d"
                    }
                ],
                "customerId": "6568f828bf8577003e5abc3d",
                "declaredValue": 5000,
                "channel": "api",
                "environment": "sandbox",
                "createdAt": "2023-11-30T21:24:45.536Z",
                "updatedAt": "2023-11-30T21:24:45.536Z",
                "__v": 0,
                "id": "6568fd9dbf8577003e5abc69"
            },
            {
                "shipmentMeta": {
                    "trackingId": "1494896443",
                    "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896443/tracking",
                    "packages": [
                        {
                            "_id": "6568fd67bf8577003e5abc61",
                            "referenceNumber": 1,
                            "trackingNumber": "JD014600004790042203",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896443/tracking?pieceTrackingNumber=JD014600004790042203",
                            "id": "6568fd67bf8577003e5abc61"
                        },
                        {
                            "_id": "6568fd67bf8577003e5abc62",
                            "referenceNumber": 2,
                            "trackingNumber": "JD014600004790042204",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896443/tracking?pieceTrackingNumber=JD014600004790042204",
                            "id": "6568fd67bf8577003e5abc62"
                        }
                    ]
                },
                "document": "PACKAGE",
                "_id": "6568fd67bf8577003e5abc5c",
                "packages": [
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "6568fd67bf8577003e5abc5d",
                        "weight": 0.5,
                        "description": "Piece content description",
                        "id": "6568fd67bf8577003e5abc5d"
                    },
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "6568fd67bf8577003e5abc5e",
                        "weight": 5,
                        "description": "2 Piece content description",
                        "id": "6568fd67bf8577003e5abc5e"
                    }
                ],
                "description": "description goes here",
                "number_items": 2,
                "delivery_info": [
                    {
                        "postalAddress": {
                            "postalCode": "100001",
                            "cityName": "Yaba",
                            "countryCode": "NG",
                            "addressLine1": "yaba, lagos",
                            "countyName": "Lagos"
                        },
                        "contactInformation": {
                            "email": "shipper_create_shipmentapi@dhltestmail.com",
                            "phone": "18211309039",
                            "companyName": "Cider BookStore",
                            "fullName": "Anyanwu Chinedu"
                        },
                        "_id": "6568fd67bf8577003e5abc5f",
                        "type": "CUSTOMER",
                        "id": "6568fd67bf8577003e5abc5f"
                    },
                    {
                        "postalAddress": {
                            "postalCode": "GA015",
                            "cityName": "Accra",
                            "countryCode": "GH",
                            "addressLine1": "Some random place in Accra"
                        },
                        "contactInformation": {
                            "email": "recipient_create_shipmentapi@dhltestmail.com",
                            "phone": "9402825665",
                            "companyName": "Baylee Marshall",
                            "fullName": "Baylee Marshall"
                        },
                        "_id": "6568fd67bf8577003e5abc60",
                        "type": "RECIEVER",
                        "id": "6568fd67bf8577003e5abc60"
                    }
                ],
                "customerId": "6568f828bf8577003e5abc3d",
                "declaredValue": 5000,
                "channel": "api",
                "environment": "sandbox",
                "createdAt": "2023-11-30T21:23:51.925Z",
                "updatedAt": "2023-11-30T21:23:51.925Z",
                "__v": 0,
                "id": "6568fd67bf8577003e5abc5c"
            },
            {
                "shipmentMeta": {
                    "trackingId": "1494896373",
                    "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896373/tracking",
                    "packages": [
                        {
                            "_id": "6568fd30bf8577003e5abc52",
                            "referenceNumber": 1,
                            "trackingNumber": "JD014600004790042195",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896373/tracking?pieceTrackingNumber=JD014600004790042195",
                            "id": "6568fd30bf8577003e5abc52"
                        },
                        {
                            "_id": "6568fd30bf8577003e5abc53",
                            "referenceNumber": 2,
                            "trackingNumber": "JD014600004790042196",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896373/tracking?pieceTrackingNumber=JD014600004790042196",
                            "id": "6568fd30bf8577003e5abc53"
                        }
                    ]
                },
                "document": "PACKAGE",
                "_id": "6568fd2fbf8577003e5abc4d",
                "packages": [
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "6568fd30bf8577003e5abc4e",
                        "weight": 0.5,
                        "description": "Piece content description",
                        "id": "6568fd30bf8577003e5abc4e"
                    },
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "6568fd30bf8577003e5abc4f",
                        "weight": 5,
                        "description": "2 Piece content description",
                        "id": "6568fd30bf8577003e5abc4f"
                    }
                ],
                "description": "description goes here",
                "number_items": 2,
                "delivery_info": [
                    {
                        "postalAddress": {
                            "postalCode": "100001",
                            "cityName": "Imo",
                            "countryCode": "NG",
                            "addressLine1": "yaba, lagos",
                            "countyName": "Owerri"
                        },
                        "contactInformation": {
                            "email": "shipper_create_shipmentapi@dhltestmail.com",
                            "phone": "18211309039",
                            "companyName": "Cider BookStore",
                            "fullName": "Anyanwu Chinedu"
                        },
                        "_id": "6568fd30bf8577003e5abc50",
                        "type": "CUSTOMER",
                        "id": "6568fd30bf8577003e5abc50"
                    },
                    {
                        "postalAddress": {
                            "postalCode": "GA015",
                            "cityName": "Accra",
                            "countryCode": "GH",
                            "addressLine1": "Some random place in Accra"
                        },
                        "contactInformation": {
                            "email": "recipient_create_shipmentapi@dhltestmail.com",
                            "phone": "9402825665",
                            "companyName": "Baylee Marshall",
                            "fullName": "Baylee Marshall"
                        },
                        "_id": "6568fd30bf8577003e5abc51",
                        "type": "RECIEVER",
                        "id": "6568fd30bf8577003e5abc51"
                    }
                ],
                "customerId": "6568f828bf8577003e5abc3d",
                "declaredValue": 5000,
                "channel": "api",
                "environment": "sandbox",
                "createdAt": "2023-11-30T21:22:56.010Z",
                "updatedAt": "2023-11-30T21:22:56.010Z",
                "__v": 0,
                "id": "6568fd2fbf8577003e5abc4d"
            },
            {
                "shipmentMeta": {
                    "trackingId": "1494896465",
                    "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896465/tracking",
                    "packages": [
                        {
                            "_id": "6568fd9dbf8577003e5abc6e",
                            "referenceNumber": 1,
                            "trackingNumber": "JD014600004790042206",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896465/tracking?pieceTrackingNumber=JD014600004790042206",
                            "id": "6568fd9dbf8577003e5abc6e"
                        },
                        {
                            "_id": "6568fd9dbf8577003e5abc6f",
                            "referenceNumber": 2,
                            "trackingNumber": "JD014600004790042207",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896465/tracking?pieceTrackingNumber=JD014600004790042207",
                            "id": "6568fd9dbf8577003e5abc6f"
                        }
                    ]
                },
                "document": "PACKAGE",
                "_id": "6568fd9dbf8577003e5abc69",
                "packages": [
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "6568fd9dbf8577003e5abc6a",
                        "weight": 0.5,
                        "description": "Piece content description",
                        "id": "6568fd9dbf8577003e5abc6a"
                    },
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "6568fd9dbf8577003e5abc6b",
                        "weight": 5,
                        "description": "2 Piece content description",
                        "id": "6568fd9dbf8577003e5abc6b"
                    }
                ],
                "description": "description goes here",
                "number_items": 2,
                "delivery_info": [
                    {
                        "postalAddress": {
                            "postalCode": "100001",
                            "cityName": "Akure",
                            "countryCode": "NG",
                            "addressLine1": "yaba, lagos",
                            "countyName": "Ondo"
                        },
                        "contactInformation": {
                            "email": "shipper_create_shipmentapi@dhltestmail.com",
                            "phone": "18211309039",
                            "companyName": "Cider BookStore",
                            "fullName": "Anyanwu Chinedu"
                        },
                        "_id": "6568fd9dbf8577003e5abc6c",
                        "type": "CUSTOMER",
                        "id": "6568fd9dbf8577003e5abc6c"
                    },
                    {
                        "postalAddress": {
                            "postalCode": "GA015",
                            "cityName": "Accra",
                            "countryCode": "GH",
                            "addressLine1": "Some random place in Accra"
                        },
                        "contactInformation": {
                            "email": "recipient_create_shipmentapi@dhltestmail.com",
                            "phone": "9402825665",
                            "companyName": "Baylee Marshall",
                            "fullName": "Baylee Marshall"
                        },
                        "_id": "6568fd9dbf8577003e5abc6d",
                        "type": "RECIEVER",
                        "id": "6568fd9dbf8577003e5abc6d"
                    }
                ],
                "customerId": "6568f828bf8577003e5abc3d",
                "declaredValue": 5000,
                "channel": "api",
                "environment": "sandbox",
                "createdAt": "2023-11-30T21:24:45.536Z",
                "updatedAt": "2023-11-30T21:24:45.536Z",
                "__v": 0,
                "id": "6568fd9dbf8577003e5abc69"
            },
            {
                "shipmentMeta": {
                    "trackingId": "1494896443",
                    "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896443/tracking",
                    "packages": [
                        {
                            "_id": "6568fd67bf8577003e5abc61",
                            "referenceNumber": 1,
                            "trackingNumber": "JD014600004790042203",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896443/tracking?pieceTrackingNumber=JD014600004790042203",
                            "id": "6568fd67bf8577003e5abc61"
                        },
                        {
                            "_id": "6568fd67bf8577003e5abc62",
                            "referenceNumber": 2,
                            "trackingNumber": "JD014600004790042204",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896443/tracking?pieceTrackingNumber=JD014600004790042204",
                            "id": "6568fd67bf8577003e5abc62"
                        }
                    ]
                },
                "document": "PACKAGE",
                "_id": "6568fd67bf8577003e5abc5c",
                "packages": [
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "6568fd67bf8577003e5abc5d",
                        "weight": 0.5,
                        "description": "Piece content description",
                        "id": "6568fd67bf8577003e5abc5d"
                    },
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "6568fd67bf8577003e5abc5e",
                        "weight": 5,
                        "description": "2 Piece content description",
                        "id": "6568fd67bf8577003e5abc5e"
                    }
                ],
                "description": "description goes here",
                "number_items": 2,
                "delivery_info": [
                    {
                        "postalAddress": {
                            "postalCode": "100001",
                            "cityName": "Yaba",
                            "countryCode": "NG",
                            "addressLine1": "yaba, lagos",
                            "countyName": "Lagos"
                        },
                        "contactInformation": {
                            "email": "shipper_create_shipmentapi@dhltestmail.com",
                            "phone": "18211309039",
                            "companyName": "Cider BookStore",
                            "fullName": "Anyanwu Chinedu"
                        },
                        "_id": "6568fd67bf8577003e5abc5f",
                        "type": "CUSTOMER",
                        "id": "6568fd67bf8577003e5abc5f"
                    },
                    {
                        "postalAddress": {
                            "postalCode": "GA015",
                            "cityName": "Accra",
                            "countryCode": "GH",
                            "addressLine1": "Some random place in Accra"
                        },
                        "contactInformation": {
                            "email": "recipient_create_shipmentapi@dhltestmail.com",
                            "phone": "9402825665",
                            "companyName": "Baylee Marshall",
                            "fullName": "Baylee Marshall"
                        },
                        "_id": "6568fd67bf8577003e5abc60",
                        "type": "RECIEVER",
                        "id": "6568fd67bf8577003e5abc60"
                    }
                ],
                "customerId": "6568f828bf8577003e5abc3d",
                "declaredValue": 5000,
                "channel": "api",
                "environment": "sandbox",
                "createdAt": "2023-11-30T21:23:51.925Z",
                "updatedAt": "2023-11-30T21:23:51.925Z",
                "__v": 0,
                "id": "6568fd67bf8577003e5abc5c"
            },
            {
                "shipmentMeta": {
                    "trackingId": "1494896373",
                    "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896373/tracking",
                    "packages": [
                        {
                            "_id": "6568fd30bf8577003e5abc52",
                            "referenceNumber": 1,
                            "trackingNumber": "JD014600004790042195",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896373/tracking?pieceTrackingNumber=JD014600004790042195",
                            "id": "6568fd30bf8577003e5abc52"
                        },
                        {
                            "_id": "6568fd30bf8577003e5abc53",
                            "referenceNumber": 2,
                            "trackingNumber": "JD014600004790042196",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896373/tracking?pieceTrackingNumber=JD014600004790042196",
                            "id": "6568fd30bf8577003e5abc53"
                        }
                    ]
                },
                "document": "PACKAGE",
                "_id": "6568fd2fbf8577003e5abc4d",
                "packages": [
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "6568fd30bf8577003e5abc4e",
                        "weight": 0.5,
                        "description": "Piece content description",
                        "id": "6568fd30bf8577003e5abc4e"
                    },
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "6568fd30bf8577003e5abc4f",
                        "weight": 5,
                        "description": "2 Piece content description",
                        "id": "6568fd30bf8577003e5abc4f"
                    }
                ],
                "description": "description goes here",
                "number_items": 2,
                "delivery_info": [
                    {
                        "postalAddress": {
                            "postalCode": "100001",
                            "cityName": "Imo",
                            "countryCode": "NG",
                            "addressLine1": "yaba, lagos",
                            "countyName": "Owerri"
                        },
                        "contactInformation": {
                            "email": "shipper_create_shipmentapi@dhltestmail.com",
                            "phone": "18211309039",
                            "companyName": "Cider BookStore",
                            "fullName": "Anyanwu Chinedu"
                        },
                        "_id": "6568fd30bf8577003e5abc50",
                        "type": "CUSTOMER",
                        "id": "6568fd30bf8577003e5abc50"
                    },
                    {
                        "postalAddress": {
                            "postalCode": "GA015",
                            "cityName": "Accra",
                            "countryCode": "GH",
                            "addressLine1": "Some random place in Accra"
                        },
                        "contactInformation": {
                            "email": "recipient_create_shipmentapi@dhltestmail.com",
                            "phone": "9402825665",
                            "companyName": "Baylee Marshall",
                            "fullName": "Baylee Marshall"
                        },
                        "_id": "6568fd30bf8577003e5abc51",
                        "type": "RECIEVER",
                        "id": "6568fd30bf8577003e5abc51"
                    }
                ],
                "customerId": "6568f828bf8577003e5abc3d",
                "declaredValue": 5000,
                "channel": "api",
                "environment": "sandbox",
                "createdAt": "2023-11-30T21:22:56.010Z",
                "updatedAt": "2023-11-30T21:22:56.010Z",
                "__v": 0,
                "id": "6568fd2fbf8577003e5abc4d"
            },
            {
                "shipmentMeta": {
                    "trackingId": "1494896465",
                    "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896465/tracking",
                    "packages": [
                        {
                            "_id": "6568fd9dbf8577003e5abc6e",
                            "referenceNumber": 1,
                            "trackingNumber": "JD014600004790042206",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896465/tracking?pieceTrackingNumber=JD014600004790042206",
                            "id": "6568fd9dbf8577003e5abc6e"
                        },
                        {
                            "_id": "6568fd9dbf8577003e5abc6f",
                            "referenceNumber": 2,
                            "trackingNumber": "JD014600004790042207",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896465/tracking?pieceTrackingNumber=JD014600004790042207",
                            "id": "6568fd9dbf8577003e5abc6f"
                        }
                    ]
                },
                "document": "PACKAGE",
                "_id": "6568fd9dbf8577003e5abc69",
                "packages": [
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "6568fd9dbf8577003e5abc6a",
                        "weight": 0.5,
                        "description": "Piece content description",
                        "id": "6568fd9dbf8577003e5abc6a"
                    },
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "6568fd9dbf8577003e5abc6b",
                        "weight": 5,
                        "description": "2 Piece content description",
                        "id": "6568fd9dbf8577003e5abc6b"
                    }
                ],
                "description": "description goes here",
                "number_items": 2,
                "delivery_info": [
                    {
                        "postalAddress": {
                            "postalCode": "100001",
                            "cityName": "Akure",
                            "countryCode": "NG",
                            "addressLine1": "yaba, lagos",
                            "countyName": "Ondo"
                        },
                        "contactInformation": {
                            "email": "shipper_create_shipmentapi@dhltestmail.com",
                            "phone": "18211309039",
                            "companyName": "Cider BookStore",
                            "fullName": "Anyanwu Chinedu"
                        },
                        "_id": "6568fd9dbf8577003e5abc6c",
                        "type": "CUSTOMER",
                        "id": "6568fd9dbf8577003e5abc6c"
                    },
                    {
                        "postalAddress": {
                            "postalCode": "GA015",
                            "cityName": "Accra",
                            "countryCode": "GH",
                            "addressLine1": "Some random place in Accra"
                        },
                        "contactInformation": {
                            "email": "recipient_create_shipmentapi@dhltestmail.com",
                            "phone": "9402825665",
                            "companyName": "Baylee Marshall",
                            "fullName": "Baylee Marshall"
                        },
                        "_id": "6568fd9dbf8577003e5abc6d",
                        "type": "RECIEVER",
                        "id": "6568fd9dbf8577003e5abc6d"
                    }
                ],
                "customerId": "6568f828bf8577003e5abc3d",
                "declaredValue": 5000,
                "channel": "api",
                "environment": "sandbox",
                "createdAt": "2023-11-30T21:24:45.536Z",
                "updatedAt": "2023-11-30T21:24:45.536Z",
                "__v": 0,
                "id": "6568fd9dbf8577003e5abc69"
            },
            {
                "shipmentMeta": {
                    "trackingId": "1494896443",
                    "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896443/tracking",
                    "packages": [
                        {
                            "_id": "6568fd67bf8577003e5abc61",
                            "referenceNumber": 1,
                            "trackingNumber": "JD014600004790042203",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896443/tracking?pieceTrackingNumber=JD014600004790042203",
                            "id": "6568fd67bf8577003e5abc61"
                        },
                        {
                            "_id": "6568fd67bf8577003e5abc62",
                            "referenceNumber": 2,
                            "trackingNumber": "JD014600004790042204",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896443/tracking?pieceTrackingNumber=JD014600004790042204",
                            "id": "6568fd67bf8577003e5abc62"
                        }
                    ]
                },
                "document": "PACKAGE",
                "_id": "6568fd67bf8577003e5abc5c",
                "packages": [
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "6568fd67bf8577003e5abc5d",
                        "weight": 0.5,
                        "description": "Piece content description",
                        "id": "6568fd67bf8577003e5abc5d"
                    },
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "6568fd67bf8577003e5abc5e",
                        "weight": 5,
                        "description": "2 Piece content description",
                        "id": "6568fd67bf8577003e5abc5e"
                    }
                ],
                "description": "description goes here",
                "number_items": 2,
                "delivery_info": [
                    {
                        "postalAddress": {
                            "postalCode": "100001",
                            "cityName": "Yaba",
                            "countryCode": "NG",
                            "addressLine1": "yaba, lagos",
                            "countyName": "Lagos"
                        },
                        "contactInformation": {
                            "email": "shipper_create_shipmentapi@dhltestmail.com",
                            "phone": "18211309039",
                            "companyName": "Cider BookStore",
                            "fullName": "Anyanwu Chinedu"
                        },
                        "_id": "6568fd67bf8577003e5abc5f",
                        "type": "CUSTOMER",
                        "id": "6568fd67bf8577003e5abc5f"
                    },
                    {
                        "postalAddress": {
                            "postalCode": "GA015",
                            "cityName": "Accra",
                            "countryCode": "GH",
                            "addressLine1": "Some random place in Accra"
                        },
                        "contactInformation": {
                            "email": "recipient_create_shipmentapi@dhltestmail.com",
                            "phone": "9402825665",
                            "companyName": "Baylee Marshall",
                            "fullName": "Baylee Marshall"
                        },
                        "_id": "6568fd67bf8577003e5abc60",
                        "type": "RECIEVER",
                        "id": "6568fd67bf8577003e5abc60"
                    }
                ],
                "customerId": "6568f828bf8577003e5abc3d",
                "declaredValue": 5000,
                "channel": "api",
                "environment": "sandbox",
                "createdAt": "2023-11-30T21:23:51.925Z",
                "updatedAt": "2023-11-30T21:23:51.925Z",
                "__v": 0,
                "id": "6568fd67bf8577003e5abc5c"
            },
            {
                "shipmentMeta": {
                    "trackingId": "1494896373",
                    "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896373/tracking",
                    "packages": [
                        {
                            "_id": "6568fd30bf8577003e5abc52",
                            "referenceNumber": 1,
                            "trackingNumber": "JD014600004790042195",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896373/tracking?pieceTrackingNumber=JD014600004790042195",
                            "id": "6568fd30bf8577003e5abc52"
                        },
                        {
                            "_id": "6568fd30bf8577003e5abc53",
                            "referenceNumber": 2,
                            "trackingNumber": "JD014600004790042196",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896373/tracking?pieceTrackingNumber=JD014600004790042196",
                            "id": "6568fd30bf8577003e5abc53"
                        }
                    ]
                },
                "document": "PACKAGE",
                "_id": "6568fd2fbf8577003e5abc4d",
                "packages": [
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "6568fd30bf8577003e5abc4e",
                        "weight": 0.5,
                        "description": "Piece content description",
                        "id": "6568fd30bf8577003e5abc4e"
                    },
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "6568fd30bf8577003e5abc4f",
                        "weight": 5,
                        "description": "2 Piece content description",
                        "id": "6568fd30bf8577003e5abc4f"
                    }
                ],
                "description": "description goes here",
                "number_items": 2,
                "delivery_info": [
                    {
                        "postalAddress": {
                            "postalCode": "100001",
                            "cityName": "Imo",
                            "countryCode": "NG",
                            "addressLine1": "yaba, lagos",
                            "countyName": "Owerri"
                        },
                        "contactInformation": {
                            "email": "shipper_create_shipmentapi@dhltestmail.com",
                            "phone": "18211309039",
                            "companyName": "Cider BookStore",
                            "fullName": "Anyanwu Chinedu"
                        },
                        "_id": "6568fd30bf8577003e5abc50",
                        "type": "CUSTOMER",
                        "id": "6568fd30bf8577003e5abc50"
                    },
                    {
                        "postalAddress": {
                            "postalCode": "GA015",
                            "cityName": "Accra",
                            "countryCode": "GH",
                            "addressLine1": "Some random place in Accra"
                        },
                        "contactInformation": {
                            "email": "recipient_create_shipmentapi@dhltestmail.com",
                            "phone": "9402825665",
                            "companyName": "Baylee Marshall",
                            "fullName": "Baylee Marshall"
                        },
                        "_id": "6568fd30bf8577003e5abc51",
                        "type": "RECIEVER",
                        "id": "6568fd30bf8577003e5abc51"
                    }
                ],
                "customerId": "6568f828bf8577003e5abc3d",
                "declaredValue": 5000,
                "channel": "api",
                "environment": "sandbox",
                "createdAt": "2023-11-30T21:22:56.010Z",
                "updatedAt": "2023-11-30T21:22:56.010Z",
                "__v": 0,
                "id": "6568fd2fbf8577003e5abc4d"
            },
            {
                "shipmentMeta": {
                    "trackingId": "1494896465",
                    "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896465/tracking",
                    "packages": [
                        {
                            "_id": "6568fd9dbf8577003e5abc6e",
                            "referenceNumber": 1,
                            "trackingNumber": "JD014600004790042206",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896465/tracking?pieceTrackingNumber=JD014600004790042206",
                            "id": "6568fd9dbf8577003e5abc6e"
                        },
                        {
                            "_id": "6568fd9dbf8577003e5abc6f",
                            "referenceNumber": 2,
                            "trackingNumber": "JD014600004790042207",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896465/tracking?pieceTrackingNumber=JD014600004790042207",
                            "id": "6568fd9dbf8577003e5abc6f"
                        }
                    ]
                },
                "document": "PACKAGE",
                "_id": "6568fd9dbf8577003e5abc69",
                "packages": [
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "6568fd9dbf8577003e5abc6a",
                        "weight": 0.5,
                        "description": "Piece content description",
                        "id": "6568fd9dbf8577003e5abc6a"
                    },
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "6568fd9dbf8577003e5abc6b",
                        "weight": 5,
                        "description": "2 Piece content description",
                        "id": "6568fd9dbf8577003e5abc6b"
                    }
                ],
                "description": "description goes here",
                "number_items": 2,
                "delivery_info": [
                    {
                        "postalAddress": {
                            "postalCode": "100001",
                            "cityName": "Akure",
                            "countryCode": "NG",
                            "addressLine1": "yaba, lagos",
                            "countyName": "Ondo"
                        },
                        "contactInformation": {
                            "email": "shipper_create_shipmentapi@dhltestmail.com",
                            "phone": "18211309039",
                            "companyName": "Cider BookStore",
                            "fullName": "Anyanwu Chinedu"
                        },
                        "_id": "6568fd9dbf8577003e5abc6c",
                        "type": "CUSTOMER",
                        "id": "6568fd9dbf8577003e5abc6c"
                    },
                    {
                        "postalAddress": {
                            "postalCode": "GA015",
                            "cityName": "Accra",
                            "countryCode": "GH",
                            "addressLine1": "Some random place in Accra"
                        },
                        "contactInformation": {
                            "email": "recipient_create_shipmentapi@dhltestmail.com",
                            "phone": "9402825665",
                            "companyName": "Baylee Marshall",
                            "fullName": "Baylee Marshall"
                        },
                        "_id": "6568fd9dbf8577003e5abc6d",
                        "type": "RECIEVER",
                        "id": "6568fd9dbf8577003e5abc6d"
                    }
                ],
                "customerId": "6568f828bf8577003e5abc3d",
                "declaredValue": 5000,
                "channel": "api",
                "environment": "sandbox",
                "createdAt": "2023-11-30T21:24:45.536Z",
                "updatedAt": "2023-11-30T21:24:45.536Z",
                "__v": 0,
                "id": "6568fd9dbf8577003e5abc69"
            },
            {
                "shipmentMeta": {
                    "trackingId": "1494896443",
                    "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896443/tracking",
                    "packages": [
                        {
                            "_id": "6568fd67bf8577003e5abc61",
                            "referenceNumber": 1,
                            "trackingNumber": "JD014600004790042203",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896443/tracking?pieceTrackingNumber=JD014600004790042203",
                            "id": "6568fd67bf8577003e5abc61"
                        },
                        {
                            "_id": "6568fd67bf8577003e5abc62",
                            "referenceNumber": 2,
                            "trackingNumber": "JD014600004790042204",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896443/tracking?pieceTrackingNumber=JD014600004790042204",
                            "id": "6568fd67bf8577003e5abc62"
                        }
                    ]
                },
                "document": "PACKAGE",
                "_id": "6568fd67bf8577003e5abc5c",
                "packages": [
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "6568fd67bf8577003e5abc5d",
                        "weight": 0.5,
                        "description": "Piece content description",
                        "id": "6568fd67bf8577003e5abc5d"
                    },
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "6568fd67bf8577003e5abc5e",
                        "weight": 5,
                        "description": "2 Piece content description",
                        "id": "6568fd67bf8577003e5abc5e"
                    }
                ],
                "description": "description goes here",
                "number_items": 2,
                "delivery_info": [
                    {
                        "postalAddress": {
                            "postalCode": "100001",
                            "cityName": "Yaba",
                            "countryCode": "NG",
                            "addressLine1": "yaba, lagos",
                            "countyName": "Lagos"
                        },
                        "contactInformation": {
                            "email": "shipper_create_shipmentapi@dhltestmail.com",
                            "phone": "18211309039",
                            "companyName": "Cider BookStore",
                            "fullName": "Anyanwu Chinedu"
                        },
                        "_id": "6568fd67bf8577003e5abc5f",
                        "type": "CUSTOMER",
                        "id": "6568fd67bf8577003e5abc5f"
                    },
                    {
                        "postalAddress": {
                            "postalCode": "GA015",
                            "cityName": "Accra",
                            "countryCode": "GH",
                            "addressLine1": "Some random place in Accra"
                        },
                        "contactInformation": {
                            "email": "recipient_create_shipmentapi@dhltestmail.com",
                            "phone": "9402825665",
                            "companyName": "Baylee Marshall",
                            "fullName": "Baylee Marshall"
                        },
                        "_id": "6568fd67bf8577003e5abc60",
                        "type": "RECIEVER",
                        "id": "6568fd67bf8577003e5abc60"
                    }
                ],
                "customerId": "6568f828bf8577003e5abc3d",
                "declaredValue": 5000,
                "channel": "api",
                "environment": "sandbox",
                "createdAt": "2023-11-30T21:23:51.925Z",
                "updatedAt": "2023-11-30T21:23:51.925Z",
                "__v": 0,
                "id": "6568fd67bf8577003e5abc5c"
            },
            {
                "shipmentMeta": {
                    "trackingId": "1494896373",
                    "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896373/tracking",
                    "packages": [
                        {
                            "_id": "6568fd30bf8577003e5abc52",
                            "referenceNumber": 1,
                            "trackingNumber": "JD014600004790042195",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896373/tracking?pieceTrackingNumber=JD014600004790042195",
                            "id": "6568fd30bf8577003e5abc52"
                        },
                        {
                            "_id": "6568fd30bf8577003e5abc53",
                            "referenceNumber": 2,
                            "trackingNumber": "JD014600004790042196",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896373/tracking?pieceTrackingNumber=JD014600004790042196",
                            "id": "6568fd30bf8577003e5abc53"
                        }
                    ]
                },
                "document": "PACKAGE",
                "_id": "6568fd2fbf8577003e5abc4d",
                "packages": [
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "6568fd30bf8577003e5abc4e",
                        "weight": 0.5,
                        "description": "Piece content description",
                        "id": "6568fd30bf8577003e5abc4e"
                    },
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "6568fd30bf8577003e5abc4f",
                        "weight": 5,
                        "description": "2 Piece content description",
                        "id": "6568fd30bf8577003e5abc4f"
                    }
                ],
                "description": "description goes here",
                "number_items": 2,
                "delivery_info": [
                    {
                        "postalAddress": {
                            "postalCode": "100001",
                            "cityName": "Imo",
                            "countryCode": "NG",
                            "addressLine1": "yaba, lagos",
                            "countyName": "Owerri"
                        },
                        "contactInformation": {
                            "email": "shipper_create_shipmentapi@dhltestmail.com",
                            "phone": "18211309039",
                            "companyName": "Cider BookStore",
                            "fullName": "Anyanwu Chinedu"
                        },
                        "_id": "6568fd30bf8577003e5abc50",
                        "type": "CUSTOMER",
                        "id": "6568fd30bf8577003e5abc50"
                    },
                    {
                        "postalAddress": {
                            "postalCode": "GA015",
                            "cityName": "Accra",
                            "countryCode": "GH",
                            "addressLine1": "Some random place in Accra"
                        },
                        "contactInformation": {
                            "email": "recipient_create_shipmentapi@dhltestmail.com",
                            "phone": "9402825665",
                            "companyName": "Baylee Marshall",
                            "fullName": "Baylee Marshall"
                        },
                        "_id": "6568fd30bf8577003e5abc51",
                        "type": "RECIEVER",
                        "id": "6568fd30bf8577003e5abc51"
                    }
                ],
                "customerId": "6568f828bf8577003e5abc3d",
                "declaredValue": 5000,
                "channel": "api",
                "environment": "sandbox",
                "createdAt": "2023-11-30T21:22:56.010Z",
                "updatedAt": "2023-11-30T21:22:56.010Z",
                "__v": 0,
                "id": "6568fd2fbf8577003e5abc4d"
            },
            {
                "shipmentMeta": {
                    "trackingId": "1494896465",
                    "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896465/tracking",
                    "packages": [
                        {
                            "_id": "6568fd9dbf8577003e5abc6e",
                            "referenceNumber": 1,
                            "trackingNumber": "JD014600004790042206",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896465/tracking?pieceTrackingNumber=JD014600004790042206",
                            "id": "6568fd9dbf8577003e5abc6e"
                        },
                        {
                            "_id": "6568fd9dbf8577003e5abc6f",
                            "referenceNumber": 2,
                            "trackingNumber": "JD014600004790042207",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896465/tracking?pieceTrackingNumber=JD014600004790042207",
                            "id": "6568fd9dbf8577003e5abc6f"
                        }
                    ]
                },
                "document": "PACKAGE",
                "_id": "6568fd9dbf8577003e5abc69",
                "packages": [
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "6568fd9dbf8577003e5abc6a",
                        "weight": 0.5,
                        "description": "Piece content description",
                        "id": "6568fd9dbf8577003e5abc6a"
                    },
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "6568fd9dbf8577003e5abc6b",
                        "weight": 5,
                        "description": "2 Piece content description",
                        "id": "6568fd9dbf8577003e5abc6b"
                    }
                ],
                "description": "description goes here",
                "number_items": 2,
                "delivery_info": [
                    {
                        "postalAddress": {
                            "postalCode": "100001",
                            "cityName": "Akure",
                            "countryCode": "NG",
                            "addressLine1": "yaba, lagos",
                            "countyName": "Ondo"
                        },
                        "contactInformation": {
                            "email": "shipper_create_shipmentapi@dhltestmail.com",
                            "phone": "18211309039",
                            "companyName": "Cider BookStore",
                            "fullName": "Anyanwu Chinedu"
                        },
                        "_id": "6568fd9dbf8577003e5abc6c",
                        "type": "CUSTOMER",
                        "id": "6568fd9dbf8577003e5abc6c"
                    },
                    {
                        "postalAddress": {
                            "postalCode": "GA015",
                            "cityName": "Accra",
                            "countryCode": "GH",
                            "addressLine1": "Some random place in Accra"
                        },
                        "contactInformation": {
                            "email": "recipient_create_shipmentapi@dhltestmail.com",
                            "phone": "9402825665",
                            "companyName": "Baylee Marshall",
                            "fullName": "Baylee Marshall"
                        },
                        "_id": "6568fd9dbf8577003e5abc6d",
                        "type": "RECIEVER",
                        "id": "6568fd9dbf8577003e5abc6d"
                    }
                ],
                "customerId": "6568f828bf8577003e5abc3d",
                "declaredValue": 5000,
                "channel": "api",
                "environment": "sandbox",
                "createdAt": "2023-11-30T21:24:45.536Z",
                "updatedAt": "2023-11-30T21:24:45.536Z",
                "__v": 0,
                "id": "6568fd9dbf8577003e5abc69"
            },
            {
                "shipmentMeta": {
                    "trackingId": "1494896443",
                    "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896443/tracking",
                    "packages": [
                        {
                            "_id": "6568fd67bf8577003e5abc61",
                            "referenceNumber": 1,
                            "trackingNumber": "JD014600004790042203",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896443/tracking?pieceTrackingNumber=JD014600004790042203",
                            "id": "6568fd67bf8577003e5abc61"
                        },
                        {
                            "_id": "6568fd67bf8577003e5abc62",
                            "referenceNumber": 2,
                            "trackingNumber": "JD014600004790042204",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896443/tracking?pieceTrackingNumber=JD014600004790042204",
                            "id": "6568fd67bf8577003e5abc62"
                        }
                    ]
                },
                "document": "PACKAGE",
                "_id": "6568fd67bf8577003e5abc5c",
                "packages": [
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "6568fd67bf8577003e5abc5d",
                        "weight": 0.5,
                        "description": "Piece content description",
                        "id": "6568fd67bf8577003e5abc5d"
                    },
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "6568fd67bf8577003e5abc5e",
                        "weight": 5,
                        "description": "2 Piece content description",
                        "id": "6568fd67bf8577003e5abc5e"
                    }
                ],
                "description": "description goes here",
                "number_items": 2,
                "delivery_info": [
                    {
                        "postalAddress": {
                            "postalCode": "100001",
                            "cityName": "Yaba",
                            "countryCode": "NG",
                            "addressLine1": "yaba, lagos",
                            "countyName": "Lagos"
                        },
                        "contactInformation": {
                            "email": "shipper_create_shipmentapi@dhltestmail.com",
                            "phone": "18211309039",
                            "companyName": "Cider BookStore",
                            "fullName": "Anyanwu Chinedu"
                        },
                        "_id": "6568fd67bf8577003e5abc5f",
                        "type": "CUSTOMER",
                        "id": "6568fd67bf8577003e5abc5f"
                    },
                    {
                        "postalAddress": {
                            "postalCode": "GA015",
                            "cityName": "Accra",
                            "countryCode": "GH",
                            "addressLine1": "Some random place in Accra"
                        },
                        "contactInformation": {
                            "email": "recipient_create_shipmentapi@dhltestmail.com",
                            "phone": "9402825665",
                            "companyName": "Baylee Marshall",
                            "fullName": "Baylee Marshall"
                        },
                        "_id": "6568fd67bf8577003e5abc60",
                        "type": "RECIEVER",
                        "id": "6568fd67bf8577003e5abc60"
                    }
                ],
                "customerId": "6568f828bf8577003e5abc3d",
                "declaredValue": 5000,
                "channel": "api",
                "environment": "sandbox",
                "createdAt": "2023-11-30T21:23:51.925Z",
                "updatedAt": "2023-11-30T21:23:51.925Z",
                "__v": 0,
                "id": "6568fd67bf8577003e5abc5c"
            },
            {
                "shipmentMeta": {
                    "trackingId": "1494896373",
                    "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896373/tracking",
                    "packages": [
                        {
                            "_id": "6568fd30bf8577003e5abc52",
                            "referenceNumber": 1,
                            "trackingNumber": "JD014600004790042195",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896373/tracking?pieceTrackingNumber=JD014600004790042195",
                            "id": "6568fd30bf8577003e5abc52"
                        },
                        {
                            "_id": "6568fd30bf8577003e5abc53",
                            "referenceNumber": 2,
                            "trackingNumber": "JD014600004790042196",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896373/tracking?pieceTrackingNumber=JD014600004790042196",
                            "id": "6568fd30bf8577003e5abc53"
                        }
                    ]
                },
                "document": "PACKAGE",
                "_id": "6568fd2fbf8577003e5abc4d",
                "packages": [
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "6568fd30bf8577003e5abc4e",
                        "weight": 0.5,
                        "description": "Piece content description",
                        "id": "6568fd30bf8577003e5abc4e"
                    },
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "6568fd30bf8577003e5abc4f",
                        "weight": 5,
                        "description": "2 Piece content description",
                        "id": "6568fd30bf8577003e5abc4f"
                    }
                ],
                "description": "description goes here",
                "number_items": 2,
                "delivery_info": [
                    {
                        "postalAddress": {
                            "postalCode": "100001",
                            "cityName": "Imo",
                            "countryCode": "NG",
                            "addressLine1": "yaba, lagos",
                            "countyName": "Owerri"
                        },
                        "contactInformation": {
                            "email": "shipper_create_shipmentapi@dhltestmail.com",
                            "phone": "18211309039",
                            "companyName": "Cider BookStore",
                            "fullName": "Anyanwu Chinedu"
                        },
                        "_id": "6568fd30bf8577003e5abc50",
                        "type": "CUSTOMER",
                        "id": "6568fd30bf8577003e5abc50"
                    },
                    {
                        "postalAddress": {
                            "postalCode": "GA015",
                            "cityName": "Accra",
                            "countryCode": "GH",
                            "addressLine1": "Some random place in Accra"
                        },
                        "contactInformation": {
                            "email": "recipient_create_shipmentapi@dhltestmail.com",
                            "phone": "9402825665",
                            "companyName": "Baylee Marshall",
                            "fullName": "Baylee Marshall"
                        },
                        "_id": "6568fd30bf8577003e5abc51",
                        "type": "RECIEVER",
                        "id": "6568fd30bf8577003e5abc51"
                    }
                ],
                "customerId": "6568f828bf8577003e5abc3d",
                "declaredValue": 5000,
                "channel": "api",
                "environment": "sandbox",
                "createdAt": "2023-11-30T21:22:56.010Z",
                "updatedAt": "2023-11-30T21:22:56.010Z",
                "__v": 0,
                "id": "6568fd2fbf8577003e5abc4d"
            },
            {
                "shipmentMeta": {
                    "trackingId": "1494896465",
                    "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896465/tracking",
                    "packages": [
                        {
                            "_id": "6568fd9dbf8577003e5abc6e",
                            "referenceNumber": 1,
                            "trackingNumber": "JD014600004790042206",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896465/tracking?pieceTrackingNumber=JD014600004790042206",
                            "id": "6568fd9dbf8577003e5abc6e"
                        },
                        {
                            "_id": "6568fd9dbf8577003e5abc6f",
                            "referenceNumber": 2,
                            "trackingNumber": "JD014600004790042207",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896465/tracking?pieceTrackingNumber=JD014600004790042207",
                            "id": "6568fd9dbf8577003e5abc6f"
                        }
                    ]
                },
                "document": "PACKAGE",
                "_id": "6568fd9dbf8577003e5abc69",
                "packages": [
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "6568fd9dbf8577003e5abc6a",
                        "weight": 0.5,
                        "description": "Piece content description",
                        "id": "6568fd9dbf8577003e5abc6a"
                    },
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "6568fd9dbf8577003e5abc6b",
                        "weight": 5,
                        "description": "2 Piece content description",
                        "id": "6568fd9dbf8577003e5abc6b"
                    }
                ],
                "description": "description goes here",
                "number_items": 2,
                "delivery_info": [
                    {
                        "postalAddress": {
                            "postalCode": "100001",
                            "cityName": "Akure",
                            "countryCode": "NG",
                            "addressLine1": "yaba, lagos",
                            "countyName": "Ondo"
                        },
                        "contactInformation": {
                            "email": "shipper_create_shipmentapi@dhltestmail.com",
                            "phone": "18211309039",
                            "companyName": "Cider BookStore",
                            "fullName": "Anyanwu Chinedu"
                        },
                        "_id": "6568fd9dbf8577003e5abc6c",
                        "type": "CUSTOMER",
                        "id": "6568fd9dbf8577003e5abc6c"
                    },
                    {
                        "postalAddress": {
                            "postalCode": "GA015",
                            "cityName": "Accra",
                            "countryCode": "GH",
                            "addressLine1": "Some random place in Accra"
                        },
                        "contactInformation": {
                            "email": "recipient_create_shipmentapi@dhltestmail.com",
                            "phone": "9402825665",
                            "companyName": "Baylee Marshall",
                            "fullName": "Baylee Marshall"
                        },
                        "_id": "6568fd9dbf8577003e5abc6d",
                        "type": "RECIEVER",
                        "id": "6568fd9dbf8577003e5abc6d"
                    }
                ],
                "customerId": "6568f828bf8577003e5abc3d",
                "declaredValue": 5000,
                "channel": "api",
                "environment": "sandbox",
                "createdAt": "2023-11-30T21:24:45.536Z",
                "updatedAt": "2023-11-30T21:24:45.536Z",
                "__v": 0,
                "id": "6568fd9dbf8577003e5abc69"
            },
            {
                "shipmentMeta": {
                    "trackingId": "1494896443",
                    "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896443/tracking",
                    "packages": [
                        {
                            "_id": "6568fd67bf8577003e5abc61",
                            "referenceNumber": 1,
                            "trackingNumber": "JD014600004790042203",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896443/tracking?pieceTrackingNumber=JD014600004790042203",
                            "id": "6568fd67bf8577003e5abc61"
                        },
                        {
                            "_id": "6568fd67bf8577003e5abc62",
                            "referenceNumber": 2,
                            "trackingNumber": "JD014600004790042204",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896443/tracking?pieceTrackingNumber=JD014600004790042204",
                            "id": "6568fd67bf8577003e5abc62"
                        }
                    ]
                },
                "document": "PACKAGE",
                "_id": "6568fd67bf8577003e5abc5c",
                "packages": [
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "6568fd67bf8577003e5abc5d",
                        "weight": 0.5,
                        "description": "Piece content description",
                        "id": "6568fd67bf8577003e5abc5d"
                    },
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "6568fd67bf8577003e5abc5e",
                        "weight": 5,
                        "description": "2 Piece content description",
                        "id": "6568fd67bf8577003e5abc5e"
                    }
                ],
                "description": "description goes here",
                "number_items": 2,
                "delivery_info": [
                    {
                        "postalAddress": {
                            "postalCode": "100001",
                            "cityName": "Yaba",
                            "countryCode": "NG",
                            "addressLine1": "yaba, lagos",
                            "countyName": "Lagos"
                        },
                        "contactInformation": {
                            "email": "shipper_create_shipmentapi@dhltestmail.com",
                            "phone": "18211309039",
                            "companyName": "Cider BookStore",
                            "fullName": "Anyanwu Chinedu"
                        },
                        "_id": "6568fd67bf8577003e5abc5f",
                        "type": "CUSTOMER",
                        "id": "6568fd67bf8577003e5abc5f"
                    },
                    {
                        "postalAddress": {
                            "postalCode": "GA015",
                            "cityName": "Accra",
                            "countryCode": "GH",
                            "addressLine1": "Some random place in Accra"
                        },
                        "contactInformation": {
                            "email": "recipient_create_shipmentapi@dhltestmail.com",
                            "phone": "9402825665",
                            "companyName": "Baylee Marshall",
                            "fullName": "Baylee Marshall"
                        },
                        "_id": "6568fd67bf8577003e5abc60",
                        "type": "RECIEVER",
                        "id": "6568fd67bf8577003e5abc60"
                    }
                ],
                "customerId": "6568f828bf8577003e5abc3d",
                "declaredValue": 5000,
                "channel": "api",
                "environment": "sandbox",
                "createdAt": "2023-11-30T21:23:51.925Z",
                "updatedAt": "2023-11-30T21:23:51.925Z",
                "__v": 0,
                "id": "6568fd67bf8577003e5abc5c"
            },
            {
                "shipmentMeta": {
                    "trackingId": "1494896373",
                    "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896373/tracking",
                    "packages": [
                        {
                            "_id": "6568fd30bf8577003e5abc52",
                            "referenceNumber": 1,
                            "trackingNumber": "JD014600004790042195",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896373/tracking?pieceTrackingNumber=JD014600004790042195",
                            "id": "6568fd30bf8577003e5abc52"
                        },
                        {
                            "_id": "6568fd30bf8577003e5abc53",
                            "referenceNumber": 2,
                            "trackingNumber": "JD014600004790042196",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896373/tracking?pieceTrackingNumber=JD014600004790042196",
                            "id": "6568fd30bf8577003e5abc53"
                        }
                    ]
                },
                "document": "PACKAGE",
                "_id": "6568fd2fbf8577003e5abc4d",
                "packages": [
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "6568fd30bf8577003e5abc4e",
                        "weight": 0.5,
                        "description": "Piece content description",
                        "id": "6568fd30bf8577003e5abc4e"
                    },
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "6568fd30bf8577003e5abc4f",
                        "weight": 5,
                        "description": "2 Piece content description",
                        "id": "6568fd30bf8577003e5abc4f"
                    }
                ],
                "description": "description goes here",
                "number_items": 2,
                "delivery_info": [
                    {
                        "postalAddress": {
                            "postalCode": "100001",
                            "cityName": "Imo",
                            "countryCode": "NG",
                            "addressLine1": "yaba, lagos",
                            "countyName": "Owerri"
                        },
                        "contactInformation": {
                            "email": "shipper_create_shipmentapi@dhltestmail.com",
                            "phone": "18211309039",
                            "companyName": "Cider BookStore",
                            "fullName": "Anyanwu Chinedu"
                        },
                        "_id": "6568fd30bf8577003e5abc50",
                        "type": "CUSTOMER",
                        "id": "6568fd30bf8577003e5abc50"
                    },
                    {
                        "postalAddress": {
                            "postalCode": "GA015",
                            "cityName": "Accra",
                            "countryCode": "GH",
                            "addressLine1": "Some random place in Accra"
                        },
                        "contactInformation": {
                            "email": "recipient_create_shipmentapi@dhltestmail.com",
                            "phone": "9402825665",
                            "companyName": "Baylee Marshall",
                            "fullName": "Baylee Marshall"
                        },
                        "_id": "6568fd30bf8577003e5abc51",
                        "type": "RECIEVER",
                        "id": "6568fd30bf8577003e5abc51"
                    }
                ],
                "customerId": "6568f828bf8577003e5abc3d",
                "declaredValue": 5000,
                "channel": "api",
                "environment": "sandbox",
                "createdAt": "2023-11-30T21:22:56.010Z",
                "updatedAt": "2023-11-30T21:22:56.010Z",
                "__v": 0,
                "id": "6568fd2fbf8577003e5abc4d"
            },
            {
                "shipmentMeta": {
                    "trackingId": "1494896465",
                    "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896465/tracking",
                    "packages": [
                        {
                            "_id": "6568fd9dbf8577003e5abc6e",
                            "referenceNumber": 1,
                            "trackingNumber": "JD014600004790042206",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896465/tracking?pieceTrackingNumber=JD014600004790042206",
                            "id": "6568fd9dbf8577003e5abc6e"
                        },
                        {
                            "_id": "6568fd9dbf8577003e5abc6f",
                            "referenceNumber": 2,
                            "trackingNumber": "JD014600004790042207",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896465/tracking?pieceTrackingNumber=JD014600004790042207",
                            "id": "6568fd9dbf8577003e5abc6f"
                        }
                    ]
                },
                "document": "PACKAGE",
                "_id": "6568fd9dbf8577003e5abc69",
                "packages": [
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "6568fd9dbf8577003e5abc6a",
                        "weight": 0.5,
                        "description": "Piece content description",
                        "id": "6568fd9dbf8577003e5abc6a"
                    },
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "6568fd9dbf8577003e5abc6b",
                        "weight": 5,
                        "description": "2 Piece content description",
                        "id": "6568fd9dbf8577003e5abc6b"
                    }
                ],
                "description": "description goes here",
                "number_items": 2,
                "delivery_info": [
                    {
                        "postalAddress": {
                            "postalCode": "100001",
                            "cityName": "Akure",
                            "countryCode": "NG",
                            "addressLine1": "yaba, lagos",
                            "countyName": "Ondo"
                        },
                        "contactInformation": {
                            "email": "shipper_create_shipmentapi@dhltestmail.com",
                            "phone": "18211309039",
                            "companyName": "Cider BookStore",
                            "fullName": "Anyanwu Chinedu"
                        },
                        "_id": "6568fd9dbf8577003e5abc6c",
                        "type": "CUSTOMER",
                        "id": "6568fd9dbf8577003e5abc6c"
                    },
                    {
                        "postalAddress": {
                            "postalCode": "GA015",
                            "cityName": "Accra",
                            "countryCode": "GH",
                            "addressLine1": "Some random place in Accra"
                        },
                        "contactInformation": {
                            "email": "recipient_create_shipmentapi@dhltestmail.com",
                            "phone": "9402825665",
                            "companyName": "Baylee Marshall",
                            "fullName": "Baylee Marshall"
                        },
                        "_id": "6568fd9dbf8577003e5abc6d",
                        "type": "RECIEVER",
                        "id": "6568fd9dbf8577003e5abc6d"
                    }
                ],
                "customerId": "6568f828bf8577003e5abc3d",
                "declaredValue": 5000,
                "channel": "api",
                "environment": "sandbox",
                "createdAt": "2023-11-30T21:24:45.536Z",
                "updatedAt": "2023-11-30T21:24:45.536Z",
                "__v": 0,
                "id": "6568fd9dbf8577003e5abc69"
            },
            {
                "shipmentMeta": {
                    "trackingId": "1494896443",
                    "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896443/tracking",
                    "packages": [
                        {
                            "_id": "6568fd67bf8577003e5abc61",
                            "referenceNumber": 1,
                            "trackingNumber": "JD014600004790042203",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896443/tracking?pieceTrackingNumber=JD014600004790042203",
                            "id": "6568fd67bf8577003e5abc61"
                        },
                        {
                            "_id": "6568fd67bf8577003e5abc62",
                            "referenceNumber": 2,
                            "trackingNumber": "JD014600004790042204",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896443/tracking?pieceTrackingNumber=JD014600004790042204",
                            "id": "6568fd67bf8577003e5abc62"
                        }
                    ]
                },
                "document": "PACKAGE",
                "_id": "6568fd67bf8577003e5abc5c",
                "packages": [
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "6568fd67bf8577003e5abc5d",
                        "weight": 0.5,
                        "description": "Piece content description",
                        "id": "6568fd67bf8577003e5abc5d"
                    },
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "6568fd67bf8577003e5abc5e",
                        "weight": 5,
                        "description": "2 Piece content description",
                        "id": "6568fd67bf8577003e5abc5e"
                    }
                ],
                "description": "description goes here",
                "number_items": 2,
                "delivery_info": [
                    {
                        "postalAddress": {
                            "postalCode": "100001",
                            "cityName": "Yaba",
                            "countryCode": "NG",
                            "addressLine1": "yaba, lagos",
                            "countyName": "Lagos"
                        },
                        "contactInformation": {
                            "email": "shipper_create_shipmentapi@dhltestmail.com",
                            "phone": "18211309039",
                            "companyName": "Cider BookStore",
                            "fullName": "Anyanwu Chinedu"
                        },
                        "_id": "6568fd67bf8577003e5abc5f",
                        "type": "CUSTOMER",
                        "id": "6568fd67bf8577003e5abc5f"
                    },
                    {
                        "postalAddress": {
                            "postalCode": "GA015",
                            "cityName": "Accra",
                            "countryCode": "GH",
                            "addressLine1": "Some random place in Accra"
                        },
                        "contactInformation": {
                            "email": "recipient_create_shipmentapi@dhltestmail.com",
                            "phone": "9402825665",
                            "companyName": "Baylee Marshall",
                            "fullName": "Baylee Marshall"
                        },
                        "_id": "6568fd67bf8577003e5abc60",
                        "type": "RECIEVER",
                        "id": "6568fd67bf8577003e5abc60"
                    }
                ],
                "customerId": "6568f828bf8577003e5abc3d",
                "declaredValue": 5000,
                "channel": "api",
                "environment": "sandbox",
                "createdAt": "2023-11-30T21:23:51.925Z",
                "updatedAt": "2023-11-30T21:23:51.925Z",
                "__v": 0,
                "id": "6568fd67bf8577003e5abc5c"
            },
            {
                "shipmentMeta": {
                    "trackingId": "1494896373",
                    "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896373/tracking",
                    "packages": [
                        {
                            "_id": "6568fd30bf8577003e5abc52",
                            "referenceNumber": 1,
                            "trackingNumber": "JD014600004790042195",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896373/tracking?pieceTrackingNumber=JD014600004790042195",
                            "id": "6568fd30bf8577003e5abc52"
                        },
                        {
                            "_id": "6568fd30bf8577003e5abc53",
                            "referenceNumber": 2,
                            "trackingNumber": "JD014600004790042196",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896373/tracking?pieceTrackingNumber=JD014600004790042196",
                            "id": "6568fd30bf8577003e5abc53"
                        }
                    ]
                },
                "document": "PACKAGE",
                "_id": "6568fd2fbf8577003e5abc4d",
                "packages": [
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "6568fd30bf8577003e5abc4e",
                        "weight": 0.5,
                        "description": "Piece content description",
                        "id": "6568fd30bf8577003e5abc4e"
                    },
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "6568fd30bf8577003e5abc4f",
                        "weight": 5,
                        "description": "2 Piece content description",
                        "id": "6568fd30bf8577003e5abc4f"
                    }
                ],
                "description": "description goes here",
                "number_items": 2,
                "delivery_info": [
                    {
                        "postalAddress": {
                            "postalCode": "100001",
                            "cityName": "Imo",
                            "countryCode": "NG",
                            "addressLine1": "yaba, lagos",
                            "countyName": "Owerri"
                        },
                        "contactInformation": {
                            "email": "shipper_create_shipmentapi@dhltestmail.com",
                            "phone": "18211309039",
                            "companyName": "Cider BookStore",
                            "fullName": "Anyanwu Chinedu"
                        },
                        "_id": "6568fd30bf8577003e5abc50",
                        "type": "CUSTOMER",
                        "id": "6568fd30bf8577003e5abc50"
                    },
                    {
                        "postalAddress": {
                            "postalCode": "GA015",
                            "cityName": "Accra",
                            "countryCode": "GH",
                            "addressLine1": "Some random place in Accra"
                        },
                        "contactInformation": {
                            "email": "recipient_create_shipmentapi@dhltestmail.com",
                            "phone": "9402825665",
                            "companyName": "Baylee Marshall",
                            "fullName": "Baylee Marshall"
                        },
                        "_id": "6568fd30bf8577003e5abc51",
                        "type": "RECIEVER",
                        "id": "6568fd30bf8577003e5abc51"
                    }
                ],
                "customerId": "6568f828bf8577003e5abc3d",
                "declaredValue": 5000,
                "channel": "api",
                "environment": "sandbox",
                "createdAt": "2023-11-30T21:22:56.010Z",
                "updatedAt": "2023-11-30T21:22:56.010Z",
                "__v": 0,
                "id": "6568fd2fbf8577003e5abc4d"
            },
            {
                "shipmentMeta": {
                    "trackingId": "1494896465",
                    "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896465/tracking",
                    "packages": [
                        {
                            "_id": "6568fd9dbf8577003e5abc6e",
                            "referenceNumber": 1,
                            "trackingNumber": "JD014600004790042206",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896465/tracking?pieceTrackingNumber=JD014600004790042206",
                            "id": "6568fd9dbf8577003e5abc6e"
                        },
                        {
                            "_id": "6568fd9dbf8577003e5abc6f",
                            "referenceNumber": 2,
                            "trackingNumber": "JD014600004790042207",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896465/tracking?pieceTrackingNumber=JD014600004790042207",
                            "id": "6568fd9dbf8577003e5abc6f"
                        }
                    ]
                },
                "document": "PACKAGE",
                "_id": "6568fd9dbf8577003e5abc69",
                "packages": [
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "6568fd9dbf8577003e5abc6a",
                        "weight": 0.5,
                        "description": "Piece content description",
                        "id": "6568fd9dbf8577003e5abc6a"
                    },
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "6568fd9dbf8577003e5abc6b",
                        "weight": 5,
                        "description": "2 Piece content description",
                        "id": "6568fd9dbf8577003e5abc6b"
                    }
                ],
                "description": "description goes here",
                "number_items": 2,
                "delivery_info": [
                    {
                        "postalAddress": {
                            "postalCode": "100001",
                            "cityName": "Akure",
                            "countryCode": "NG",
                            "addressLine1": "yaba, lagos",
                            "countyName": "Ondo"
                        },
                        "contactInformation": {
                            "email": "shipper_create_shipmentapi@dhltestmail.com",
                            "phone": "18211309039",
                            "companyName": "Cider BookStore",
                            "fullName": "Anyanwu Chinedu"
                        },
                        "_id": "6568fd9dbf8577003e5abc6c",
                        "type": "CUSTOMER",
                        "id": "6568fd9dbf8577003e5abc6c"
                    },
                    {
                        "postalAddress": {
                            "postalCode": "GA015",
                            "cityName": "Accra",
                            "countryCode": "GH",
                            "addressLine1": "Some random place in Accra"
                        },
                        "contactInformation": {
                            "email": "recipient_create_shipmentapi@dhltestmail.com",
                            "phone": "9402825665",
                            "companyName": "Baylee Marshall",
                            "fullName": "Baylee Marshall"
                        },
                        "_id": "6568fd9dbf8577003e5abc6d",
                        "type": "RECIEVER",
                        "id": "6568fd9dbf8577003e5abc6d"
                    }
                ],
                "customerId": "6568f828bf8577003e5abc3d",
                "declaredValue": 5000,
                "channel": "api",
                "environment": "sandbox",
                "createdAt": "2023-11-30T21:24:45.536Z",
                "updatedAt": "2023-11-30T21:24:45.536Z",
                "__v": 0,
                "id": "6568fd9dbf8577003e5abc69"
            },
            {
                "shipmentMeta": {
                    "trackingId": "1494896443",
                    "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896443/tracking",
                    "packages": [
                        {
                            "_id": "6568fd67bf8577003e5abc61",
                            "referenceNumber": 1,
                            "trackingNumber": "JD014600004790042203",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896443/tracking?pieceTrackingNumber=JD014600004790042203",
                            "id": "6568fd67bf8577003e5abc61"
                        },
                        {
                            "_id": "6568fd67bf8577003e5abc62",
                            "referenceNumber": 2,
                            "trackingNumber": "JD014600004790042204",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896443/tracking?pieceTrackingNumber=JD014600004790042204",
                            "id": "6568fd67bf8577003e5abc62"
                        }
                    ]
                },
                "document": "PACKAGE",
                "_id": "6568fd67bf8577003e5abc5c",
                "packages": [
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "6568fd67bf8577003e5abc5d",
                        "weight": 0.5,
                        "description": "Piece content description",
                        "id": "6568fd67bf8577003e5abc5d"
                    },
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "6568fd67bf8577003e5abc5e",
                        "weight": 5,
                        "description": "2 Piece content description",
                        "id": "6568fd67bf8577003e5abc5e"
                    }
                ],
                "description": "description goes here",
                "number_items": 2,
                "delivery_info": [
                    {
                        "postalAddress": {
                            "postalCode": "100001",
                            "cityName": "Yaba",
                            "countryCode": "NG",
                            "addressLine1": "yaba, lagos",
                            "countyName": "Lagos"
                        },
                        "contactInformation": {
                            "email": "shipper_create_shipmentapi@dhltestmail.com",
                            "phone": "18211309039",
                            "companyName": "Cider BookStore",
                            "fullName": "Anyanwu Chinedu"
                        },
                        "_id": "6568fd67bf8577003e5abc5f",
                        "type": "CUSTOMER",
                        "id": "6568fd67bf8577003e5abc5f"
                    },
                    {
                        "postalAddress": {
                            "postalCode": "GA015",
                            "cityName": "Accra",
                            "countryCode": "GH",
                            "addressLine1": "Some random place in Accra"
                        },
                        "contactInformation": {
                            "email": "recipient_create_shipmentapi@dhltestmail.com",
                            "phone": "9402825665",
                            "companyName": "Baylee Marshall",
                            "fullName": "Baylee Marshall"
                        },
                        "_id": "6568fd67bf8577003e5abc60",
                        "type": "RECIEVER",
                        "id": "6568fd67bf8577003e5abc60"
                    }
                ],
                "customerId": "6568f828bf8577003e5abc3d",
                "declaredValue": 5000,
                "channel": "api",
                "environment": "sandbox",
                "createdAt": "2023-11-30T21:23:51.925Z",
                "updatedAt": "2023-11-30T21:23:51.925Z",
                "__v": 0,
                "id": "6568fd67bf8577003e5abc5c"
            },
            {
                "shipmentMeta": {
                    "trackingId": "1494896373",
                    "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896373/tracking",
                    "packages": [
                        {
                            "_id": "6568fd30bf8577003e5abc52",
                            "referenceNumber": 1,
                            "trackingNumber": "JD014600004790042195",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896373/tracking?pieceTrackingNumber=JD014600004790042195",
                            "id": "6568fd30bf8577003e5abc52"
                        },
                        {
                            "_id": "6568fd30bf8577003e5abc53",
                            "referenceNumber": 2,
                            "trackingNumber": "JD014600004790042196",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896373/tracking?pieceTrackingNumber=JD014600004790042196",
                            "id": "6568fd30bf8577003e5abc53"
                        }
                    ]
                },
                "document": "PACKAGE",
                "_id": "6568fd2fbf8577003e5abc4d",
                "packages": [
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "6568fd30bf8577003e5abc4e",
                        "weight": 0.5,
                        "description": "Piece content description",
                        "id": "6568fd30bf8577003e5abc4e"
                    },
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "6568fd30bf8577003e5abc4f",
                        "weight": 5,
                        "description": "2 Piece content description",
                        "id": "6568fd30bf8577003e5abc4f"
                    }
                ],
                "description": "description goes here",
                "number_items": 2,
                "delivery_info": [
                    {
                        "postalAddress": {
                            "postalCode": "100001",
                            "cityName": "Imo",
                            "countryCode": "NG",
                            "addressLine1": "yaba, lagos",
                            "countyName": "Owerri"
                        },
                        "contactInformation": {
                            "email": "shipper_create_shipmentapi@dhltestmail.com",
                            "phone": "18211309039",
                            "companyName": "Cider BookStore",
                            "fullName": "Anyanwu Chinedu"
                        },
                        "_id": "6568fd30bf8577003e5abc50",
                        "type": "CUSTOMER",
                        "id": "6568fd30bf8577003e5abc50"
                    },
                    {
                        "postalAddress": {
                            "postalCode": "GA015",
                            "cityName": "Accra",
                            "countryCode": "GH",
                            "addressLine1": "Some random place in Accra"
                        },
                        "contactInformation": {
                            "email": "recipient_create_shipmentapi@dhltestmail.com",
                            "phone": "9402825665",
                            "companyName": "Baylee Marshall",
                            "fullName": "Baylee Marshall"
                        },
                        "_id": "6568fd30bf8577003e5abc51",
                        "type": "RECIEVER",
                        "id": "6568fd30bf8577003e5abc51"
                    }
                ],
                "customerId": "6568f828bf8577003e5abc3d",
                "declaredValue": 5000,
                "channel": "api",
                "environment": "sandbox",
                "createdAt": "2023-11-30T21:22:56.010Z",
                "updatedAt": "2023-11-30T21:22:56.010Z",
                "__v": 0,
                "id": "6568fd2fbf8577003e5abc4d"
            },
            {
                "shipmentMeta": {
                    "trackingId": "1494896373",
                    "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896373/tracking",
                    "packages": [
                        {
                            "_id": "6568fd30bf8577003e5abc52",
                            "referenceNumber": 1,
                            "trackingNumber": "JD014600004790042195",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896373/tracking?pieceTrackingNumber=JD014600004790042195",
                            "id": "6568fd30bf8577003e5abc52"
                        },
                        {
                            "_id": "6568fd30bf8577003e5abc53",
                            "referenceNumber": 2,
                            "trackingNumber": "JD014600004790042196",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896373/tracking?pieceTrackingNumber=JD014600004790042196",
                            "id": "6568fd30bf8577003e5abc53"
                        }
                    ]
                },
                "document": "PACKAGE",
                "_id": "6568fd2fbf8577003e5abc4d",
                "packages": [
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "6568fd30bf8577003e5abc4e",
                        "weight": 0.5,
                        "description": "Piece content description",
                        "id": "6568fd30bf8577003e5abc4e"
                    },
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "6568fd30bf8577003e5abc4f",
                        "weight": 5,
                        "description": "2 Piece content description",
                        "id": "6568fd30bf8577003e5abc4f"
                    }
                ],
                "description": "description goes here",
                "number_items": 2,
                "delivery_info": [
                    {
                        "postalAddress": {
                            "postalCode": "100001",
                            "cityName": "Imo",
                            "countryCode": "NG",
                            "addressLine1": "yaba, lagos",
                            "countyName": "Owerri"
                        },
                        "contactInformation": {
                            "email": "shipper_create_shipmentapi@dhltestmail.com",
                            "phone": "18211309039",
                            "companyName": "Cider BookStore",
                            "fullName": "Anyanwu Chinedu"
                        },
                        "_id": "6568fd30bf8577003e5abc50",
                        "type": "CUSTOMER",
                        "id": "6568fd30bf8577003e5abc50"
                    },
                    {
                        "postalAddress": {
                            "postalCode": "GA015",
                            "cityName": "Accra",
                            "countryCode": "GH",
                            "addressLine1": "Some random place in Accra"
                        },
                        "contactInformation": {
                            "email": "recipient_create_shipmentapi@dhltestmail.com",
                            "phone": "9402825665",
                            "companyName": "Baylee Marshall",
                            "fullName": "Baylee Marshall"
                        },
                        "_id": "6568fd30bf8577003e5abc51",
                        "type": "RECIEVER",
                        "id": "6568fd30bf8577003e5abc51"
                    }
                ],
                "customerId": "6568f828bf8577003e5abc3d",
                "declaredValue": 5000,
                "channel": "api",
                "environment": "sandbox",
                "createdAt": "2023-11-30T21:22:56.010Z",
                "updatedAt": "2023-11-30T21:22:56.010Z",
                "__v": 0,
                "id": "6568fd2fbf8577003e5abc4d"
            },
            {
                "shipmentMeta": {
                    "trackingId": "1494896373",
                    "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896373/tracking",
                    "packages": [
                        {
                            "_id": "6568fd30bf8577003e5abc52",
                            "referenceNumber": 1,
                            "trackingNumber": "JD014600004790042195",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896373/tracking?pieceTrackingNumber=JD014600004790042195",
                            "id": "6568fd30bf8577003e5abc52"
                        },
                        {
                            "_id": "6568fd30bf8577003e5abc53",
                            "referenceNumber": 2,
                            "trackingNumber": "JD014600004790042196",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896373/tracking?pieceTrackingNumber=JD014600004790042196",
                            "id": "6568fd30bf8577003e5abc53"
                        }
                    ]
                },
                "document": "PACKAGE",
                "_id": "6568fd2fbf8577003e5abc4d",
                "packages": [
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "6568fd30bf8577003e5abc4e",
                        "weight": 0.5,
                        "description": "Piece content description",
                        "id": "6568fd30bf8577003e5abc4e"
                    },
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "6568fd30bf8577003e5abc4f",
                        "weight": 5,
                        "description": "2 Piece content description",
                        "id": "6568fd30bf8577003e5abc4f"
                    }
                ],
                "description": "description goes here",
                "number_items": 2,
                "delivery_info": [
                    {
                        "postalAddress": {
                            "postalCode": "100001",
                            "cityName": "Imo",
                            "countryCode": "NG",
                            "addressLine1": "yaba, lagos",
                            "countyName": "Owerri"
                        },
                        "contactInformation": {
                            "email": "shipper_create_shipmentapi@dhltestmail.com",
                            "phone": "18211309039",
                            "companyName": "Cider BookStore",
                            "fullName": "Anyanwu Chinedu"
                        },
                        "_id": "6568fd30bf8577003e5abc50",
                        "type": "CUSTOMER",
                        "id": "6568fd30bf8577003e5abc50"
                    },
                    {
                        "postalAddress": {
                            "postalCode": "GA015",
                            "cityName": "Accra",
                            "countryCode": "GH",
                            "addressLine1": "Some random place in Accra"
                        },
                        "contactInformation": {
                            "email": "recipient_create_shipmentapi@dhltestmail.com",
                            "phone": "9402825665",
                            "companyName": "Baylee Marshall",
                            "fullName": "Baylee Marshall"
                        },
                        "_id": "6568fd30bf8577003e5abc51",
                        "type": "RECIEVER",
                        "id": "6568fd30bf8577003e5abc51"
                    }
                ],
                "customerId": "6568f828bf8577003e5abc3d",
                "declaredValue": 5000,
                "channel": "api",
                "environment": "sandbox",
                "createdAt": "2023-11-30T21:22:56.010Z",
                "updatedAt": "2023-11-30T21:22:56.010Z",
                "__v": 0,
                "id": "6568fd2fbf8577003e5abc4d"
            },
            {
                "shipmentMeta": {
                    "trackingId": "1494896373",
                    "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896373/tracking",
                    "packages": [
                        {
                            "_id": "6568fd30bf8577003e5abc52",
                            "referenceNumber": 1,
                            "trackingNumber": "JD014600004790042195",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896373/tracking?pieceTrackingNumber=JD014600004790042195",
                            "id": "6568fd30bf8577003e5abc52"
                        },
                        {
                            "_id": "6568fd30bf8577003e5abc53",
                            "referenceNumber": 2,
                            "trackingNumber": "JD014600004790042196",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/1494896373/tracking?pieceTrackingNumber=JD014600004790042196",
                            "id": "6568fd30bf8577003e5abc53"
                        }
                    ]
                },
                "document": "PACKAGE",
                "_id": "6568fd2fbf8577003e5abc4d",
                "packages": [
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "6568fd30bf8577003e5abc4e",
                        "weight": 0.5,
                        "description": "Piece content description",
                        "id": "6568fd30bf8577003e5abc4e"
                    },
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "6568fd30bf8577003e5abc4f",
                        "weight": 5,
                        "description": "2 Piece content description",
                        "id": "6568fd30bf8577003e5abc4f"
                    }
                ],
                "description": "description goes here",
                "number_items": 2,
                "delivery_info": [
                    {
                        "postalAddress": {
                            "postalCode": "100001",
                            "cityName": "Imo",
                            "countryCode": "NG",
                            "addressLine1": "yaba, lagos",
                            "countyName": "Owerri"
                        },
                        "contactInformation": {
                            "email": "shipper_create_shipmentapi@dhltestmail.com",
                            "phone": "18211309039",
                            "companyName": "Cider BookStore",
                            "fullName": "Anyanwu Chinedu"
                        },
                        "_id": "6568fd30bf8577003e5abc50",
                        "type": "CUSTOMER",
                        "id": "6568fd30bf8577003e5abc50"
                    },
                    {
                        "postalAddress": {
                            "postalCode": "GA015",
                            "cityName": "Accra",
                            "countryCode": "GH",
                            "addressLine1": "Some random place in Accra"
                        },
                        "contactInformation": {
                            "email": "recipient_create_shipmentapi@dhltestmail.com",
                            "phone": "9402825665",
                            "companyName": "Baylee Marshall",
                            "fullName": "Baylee Marshall"
                        },
                        "_id": "6568fd30bf8577003e5abc51",
                        "type": "RECIEVER",
                        "id": "6568fd30bf8577003e5abc51"
                    }
                ],
                "customerId": "6568f828bf8577003e5abc3d",
                "declaredValue": 5000,
                "channel": "api",
                "environment": "sandbox",
                "createdAt": "2023-11-30T21:22:56.010Z",
                "updatedAt": "2023-11-30T21:22:56.010Z",
                "__v": 0,
                "id": "6568fd2fbf8577003e5abc4d"
            },
        ],
        "trackingResult": [
            {
                "shipments": [
                    {
                        "shipmentTrackingNumber": "1494896465",
                        "status": "Success",
                        "shipmentTimestamp": "2023-12-01T13:00:00",
                        "productCode": "P",
                        "description": "description goes here",
                        "shipperDetails": {
                            "name": "CIDER BOOKSTORE",
                            "postalAddress": {
                                "cityName": "AKURE",
                                "countyName": "Ondo",
                                "postalCode": "100001",
                                "countryCode": "NG"
                            },
                            "serviceArea": [
                                {
                                    "code": "IBA",
                                    "description": "Ibadan-NG"
                                }
                            ]
                        },
                        "receiverDetails": {
                            "name": "BAYLEE MARSHALL",
                            "postalAddress": {
                                "cityName": "ACCRA",
                                "postalCode": "GA015",
                                "countryCode": "GH"
                            },
                            "serviceArea": [
                                {
                                    "code": "ACC",
                                    "description": "Accra-GH",
                                    "facilityCode": "ACC"
                                }
                            ]
                        },
                        "totalWeight": 5.5,
                        "unitOfMeasurements": "metric",
                        "shipperReferences": [],
                        "events": [],
                        "numberOfPieces": 2
                    }
                ]
            },
            {
                "shipments": [
                    {
                        "shipmentTrackingNumber": "1494896443",
                        "status": "Success",
                        "shipmentTimestamp": "2023-12-01T13:00:00",
                        "productCode": "P",
                        "description": "description goes here",
                        "shipperDetails": {
                            "name": "CIDER BOOKSTORE",
                            "postalAddress": {
                                "cityName": "YABA",
                                "countyName": "Lagos",
                                "postalCode": "100001",
                                "countryCode": "NG"
                            },
                            "serviceArea": [
                                {
                                    "code": "LOS",
                                    "description": "Lagos-NG"
                                }
                            ]
                        },
                        "receiverDetails": {
                            "name": "BAYLEE MARSHALL",
                            "postalAddress": {
                                "cityName": "ACCRA",
                                "postalCode": "GA015",
                                "countryCode": "GH"
                            },
                            "serviceArea": [
                                {
                                    "code": "ACC",
                                    "description": "Accra-GH",
                                    "facilityCode": "ACC"
                                }
                            ]
                        },
                        "totalWeight": 5.5,
                        "unitOfMeasurements": "metric",
                        "shipperReferences": [],
                        "events": [],
                        "numberOfPieces": 2
                    }
                ]
            },
            {
                "shipments": [
                    {
                        "shipmentTrackingNumber": "1494896373",
                        "status": "Success",
                        "shipmentTimestamp": "2023-12-01T13:00:00",
                        "productCode": "P",
                        "description": "description goes here",
                        "shipperDetails": {
                            "name": "CIDER BOOKSTORE",
                            "postalAddress": {
                                "cityName": "Imo",
                                "countyName": "Owerri",
                                "postalCode": "100001",
                                "countryCode": "NG"
                            },
                            "serviceArea": [
                                {
                                    "code": "LOS",
                                    "description": "Lagos-NG"
                                }
                            ]
                        },
                        "receiverDetails": {
                            "name": "BAYLEE MARSHALL",
                            "postalAddress": {
                                "cityName": "ACCRA",
                                "postalCode": "GA015",
                                "countryCode": "GH"
                            },
                            "serviceArea": [
                                {
                                    "code": "ACC",
                                    "description": "Accra-GH",
                                    "facilityCode": "ACC"
                                }
                            ]
                        },
                        "totalWeight": 5.5,
                        "unitOfMeasurements": "metric",
                        "shipperReferences": [],
                        "events": [],
                        "numberOfPieces": 2
                    }
                ]
            }
        ],
        "stateCount": [
            {
                "_id": "Akure",
                "count": 1
            },
            {
                "_id": "Lagos",
                "count": 4
            },
            {
                "_id": "Ibadan",
                "count": 2
            },
            {
                "_id": "Yaba",
                "count": 3
            }
        ],
        "totalValue": [
            {
                "_id": null,
                "declaredValue": 5000
            }
        ]
    },
    "success": true
}

export const moreData = {
    "message": "filter successful",
    "data": {
        "docs": [
            {
                "shipmentMeta": {
                    "trackingId": "2223938990",
                    "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/2223938990/tracking",
                    "packages": [
                        {
                            "_id": "656fa4e82540ac003ebc3e2d",
                            "referenceNumber": 1,
                            "trackingNumber": "JD014600004790353855",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/2223938990/tracking?pieceTrackingNumber=JD014600004790353855",
                            "id": "656fa4e82540ac003ebc3e2d"
                        },
                        {
                            "_id": "656fa4e82540ac003ebc3e2e",
                            "referenceNumber": 2,
                            "trackingNumber": "JD014600004790353856",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/2223938990/tracking?pieceTrackingNumber=JD014600004790353856",
                            "id": "656fa4e82540ac003ebc3e2e"
                        }
                    ]
                },
                "_id": "656fa4e82540ac003ebc3e28",
                "document": "PACKAGE",
                "packages": [
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "656fa4e82540ac003ebc3e29",
                        "weight": 0.5,
                        "description": "Piece content description",
                        "id": "656fa4e82540ac003ebc3e29"
                    },
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "656fa4e82540ac003ebc3e2a",
                        "weight": 5,
                        "description": "2 Piece content description",
                        "id": "656fa4e82540ac003ebc3e2a"
                    }
                ],
                "description": "description goes here",
                "number_items": 2,
                "delivery_info": [
                    {
                        "postalAddress": {
                            "postalCode": "100001",
                            "cityName": "Akure",
                            "countryCode": "NG",
                            "addressLine1": "yaba, lagos",
                            "countyName": "Ondo"
                        },
                        "contactInformation": {
                            "email": "shipper_create_shipmentapi@dhltestmail.com",
                            "phone": "18211309039",
                            "companyName": "Cider BookStore",
                            "fullName": "Anyanwu Chinedu"
                        },
                        "_id": "656fa4e82540ac003ebc3e2b",
                        "type": "CUSTOMER",
                        "id": "656fa4e82540ac003ebc3e2b"
                    },
                    {
                        "postalAddress": {
                            "postalCode": "100001",
                            "cityName": "Yaba",
                            "countryCode": "NG",
                            "addressLine1": "Some random place in Accra",
                            "countyName": "OndLagiso"
                        },
                        "contactInformation": {
                            "email": "recipient_create_shipmentapi@dhltestmail.com",
                            "phone": "9402825665",
                            "companyName": "Baylee Marshall",
                            "fullName": "Baylee Marshall"
                        },
                        "_id": "656fa4e82540ac003ebc3e2c",
                        "type": "RECIEVER",
                        "id": "656fa4e82540ac003ebc3e2c"
                    }
                ],
                "customerId": "656fa3342540ac003ebc3e12",
                "declaredValue": 5000,
                "channel": "api",
                "environment": "sandbox",
                "createdAt": "2023-12-05T22:32:08.402Z",
                "updatedAt": "2023-12-05T22:32:08.402Z",
                "__v": 0,
                "id": "656fa4e82540ac003ebc3e28"
            },
            {
                "shipmentMeta": {
                    "trackingId": "7913804706",
                    "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/7913804706/tracking",
                    "packages": [
                        {
                            "_id": "657114675b5fdd9aaa87cba8",
                            "referenceNumber": 1,
                            "trackingNumber": "JD014600004790371939",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/7913804706/tracking?pieceTrackingNumber=JD014600004790371939",
                            "id": "657114675b5fdd9aaa87cba8"
                        },
                        {
                            "_id": "657114675b5fdd9aaa87cba9",
                            "referenceNumber": 2,
                            "trackingNumber": "JD014600004790371940",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/7913804706/tracking?pieceTrackingNumber=JD014600004790371940",
                            "id": "657114675b5fdd9aaa87cba9"
                        }
                    ]
                },
                "_id": "657114675b5fdd9aaa87cba3",
                "document": "PACKAGE",
                "packages": [
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "657114675b5fdd9aaa87cba4",
                        "weight": 0.5,
                        "description": "Piece content description",
                        "id": "657114675b5fdd9aaa87cba4"
                    },
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "657114675b5fdd9aaa87cba5",
                        "weight": 5,
                        "description": "2 Piece content description",
                        "id": "657114675b5fdd9aaa87cba5"
                    }
                ],
                "description": "description goes here",
                "number_items": 2,
                "delivery_info": [
                    {
                        "postalAddress": {
                            "postalCode": "100001",
                            "cityName": "Akure",
                            "countryCode": "NG",
                            "addressLine1": "yaba, lagos",
                            "countyName": "Ondo"
                        },
                        "contactInformation": {
                            "email": "example@example.com",
                            "phone": "18211309039",
                            "companyName": "Cider BookStore",
                            "fullName": "Anyanwu Chinedu"
                        },
                        "_id": "657114675b5fdd9aaa87cba6",
                        "type": "CUSTOMER",
                        "id": "657114675b5fdd9aaa87cba6"
                    },
                    {
                        "postalAddress": {
                            "postalCode": "GA015",
                            "cityName": "Yaba",
                            "countryCode": "NG",
                            "addressLine1": "Some random place in Accra"
                        },
                        "contactInformation": {
                            "email": "example@example.com",
                            "phone": "9402825665",
                            "companyName": "Baylee Marshall",
                            "fullName": "Baylee Marshall"
                        },
                        "_id": "657114675b5fdd9aaa87cba7",
                        "type": "RECIEVER",
                        "id": "657114675b5fdd9aaa87cba7"
                    }
                ],
                "customerId": "656fa3342540ac003ebc3e12",
                "channel": "api",
                "environment": "sandbox",
                "createdAt": "2023-12-07T00:40:07.664Z",
                "updatedAt": "2023-12-07T00:40:07.664Z",
                "__v": 0,
                "id": "657114675b5fdd9aaa87cba3"
            },
            {
                "shipmentMeta": {
                    "trackingId": "7913804780",
                    "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/7913804780/tracking",
                    "packages": [
                        {
                            "_id": "657114bd5b5fdd9aaa87cbb3",
                            "referenceNumber": 1,
                            "trackingNumber": "JD014600004790371948",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/7913804780/tracking?pieceTrackingNumber=JD014600004790371948",
                            "id": "657114bd5b5fdd9aaa87cbb3"
                        },
                        {
                            "_id": "657114bd5b5fdd9aaa87cbb4",
                            "referenceNumber": 2,
                            "trackingNumber": "JD014600004790371949",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/7913804780/tracking?pieceTrackingNumber=JD014600004790371949",
                            "id": "657114bd5b5fdd9aaa87cbb4"
                        }
                    ]
                },
                "_id": "657114bd5b5fdd9aaa87cbae",
                "document": "PACKAGE",
                "packages": [
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "657114bd5b5fdd9aaa87cbaf",
                        "weight": 0.5,
                        "description": "Piece content description",
                        "id": "657114bd5b5fdd9aaa87cbaf"
                    },
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "657114bd5b5fdd9aaa87cbb0",
                        "weight": 5,
                        "description": "2 Piece content description",
                        "id": "657114bd5b5fdd9aaa87cbb0"
                    }
                ],
                "description": "description goes here",
                "number_items": 2,
                "delivery_info": [
                    {
                        "postalAddress": {
                            "postalCode": "100001",
                            "cityName": "Akure",
                            "countryCode": "NG",
                            "addressLine1": "Akure, lagos",
                            "countyName": "Ondo"
                        },
                        "contactInformation": {
                            "email": "example@example.com",
                            "phone": "18211309039",
                            "companyName": "Cider BookStore",
                            "fullName": "Anyanwu Chinedu"
                        },
                        "_id": "657114bd5b5fdd9aaa87cbb1",
                        "type": "CUSTOMER",
                        "id": "657114bd5b5fdd9aaa87cbb1"
                    },
                    {
                        "postalAddress": {
                            "postalCode": "GA015",
                            "cityName": "Yaba",
                            "countryCode": "NG",
                            "addressLine1": "Some random place in Accra"
                        },
                        "contactInformation": {
                            "email": "example@example.com",
                            "phone": "9402825665",
                            "companyName": "Baylee Marshall",
                            "fullName": "Baylee Marshall"
                        },
                        "_id": "657114bd5b5fdd9aaa87cbb2",
                        "type": "RECIEVER",
                        "id": "657114bd5b5fdd9aaa87cbb2"
                    }
                ],
                "customerId": "656fa3342540ac003ebc3e12",
                "channel": "api",
                "environment": "sandbox",
                "createdAt": "2023-12-07T00:41:33.724Z",
                "updatedAt": "2023-12-07T00:41:33.724Z",
                "__v": 0,
                "id": "657114bd5b5fdd9aaa87cbae"
            },
            {
                "shipmentMeta": {
                    "trackingId": "7913819981",
                    "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/7913819981/tracking",
                    "packages": [
                        {
                            "_id": "65716b25eddd73da024e76d5",
                            "referenceNumber": 1,
                            "trackingNumber": "JD014600004790373796",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/7913819981/tracking?pieceTrackingNumber=JD014600004790373796",
                            "id": "65716b25eddd73da024e76d5"
                        },
                        {
                            "_id": "65716b25eddd73da024e76d6",
                            "referenceNumber": 2,
                            "trackingNumber": "JD014600004790373797",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/7913819981/tracking?pieceTrackingNumber=JD014600004790373797",
                            "id": "65716b25eddd73da024e76d6"
                        }
                    ]
                },
                "_id": "65716b25eddd73da024e76d0",
                "document": "PACKAGE",
                "packages": [
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "65716b25eddd73da024e76d1",
                        "weight": 0.5,
                        "description": "Piece content description",
                        "id": "65716b25eddd73da024e76d1"
                    },
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "65716b25eddd73da024e76d2",
                        "weight": 5,
                        "description": "2 Piece content description",
                        "id": "65716b25eddd73da024e76d2"
                    }
                ],
                "description": "#Item1 Short Desc, #Item2 Short Desc, #Item3 Short Desc",
                "number_items": 2,
                "delivery_info": [
                    {
                        "postalAddress": {
                            "postalCode": "100001",
                            "cityName": "Akure",
                            "countryCode": "NG",
                            "addressLine1": "yaba, lagos",
                            "countyName": "Ondo"
                        },
                        "contactInformation": {
                            "email": "example@example.com",
                            "phone": "18211309039",
                            "companyName": "Cider BookStore",
                            "fullName": "Anyanwu Chinedu"
                        },
                        "_id": "65716b25eddd73da024e76d3",
                        "type": "CUSTOMER",
                        "id": "65716b25eddd73da024e76d3"
                    },
                    {
                        "postalAddress": {
                            "postalCode": "GA015",
                            "cityName": "Accra",
                            "countryCode": "GH",
                            "addressLine1": "Some random place in Accra"
                        },
                        "contactInformation": {
                            "email": "example@example.com",
                            "phone": "9402825665",
                            "companyName": "Baylee Marshall",
                            "fullName": "Baylee Marshall"
                        },
                        "_id": "65716b25eddd73da024e76d4",
                        "type": "RECIEVER",
                        "id": "65716b25eddd73da024e76d4"
                    }
                ],
                "customerId": "656fa3342540ac003ebc3e12",
                "channel": "api",
                "environment": "sandbox",
                "createdAt": "2023-12-07T06:50:13.920Z",
                "updatedAt": "2023-12-07T06:50:13.920Z",
                "__v": 0,
                "id": "65716b25eddd73da024e76d0"
            },
            {
                "shipmentMeta": {
                    "trackingId": "7913820434",
                    "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/7913820434/tracking",
                    "packages": [
                        {
                            "_id": "65716dc3c025eae42822151e",
                            "referenceNumber": 1,
                            "trackingNumber": "JD014600004790373856",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/7913820434/tracking?pieceTrackingNumber=JD014600004790373856",
                            "id": "65716dc3c025eae42822151e"
                        },
                        {
                            "_id": "65716dc3c025eae42822151f",
                            "referenceNumber": 2,
                            "trackingNumber": "JD014600004790373857",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/7913820434/tracking?pieceTrackingNumber=JD014600004790373857",
                            "id": "65716dc3c025eae42822151f"
                        }
                    ]
                },
                "_id": "65716dc3c025eae428221519",
                "packages": [
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "65716dc3c025eae42822151a",
                        "weight": 0.5,
                        "description": "Piece content description",
                        "id": "65716dc3c025eae42822151a"
                    },
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "65716dc3c025eae42822151b",
                        "weight": 5,
                        "description": "2 Piece content description",
                        "id": "65716dc3c025eae42822151b"
                    }
                ],
                "description": "#Item1 Short Desc, #Item2 Short Desc, #Item3 Short Desc",
                "number_items": 2,
                "delivery_info": [
                    {
                        "postalAddress": {
                            "postalCode": "100001",
                            "cityName": "Akure",
                            "countryCode": "NG",
                            "addressLine1": "yaba, lagos",
                            "countyName": "Ondo"
                        },
                        "contactInformation": {
                            "email": "example@example.com",
                            "phone": "18211309039",
                            "companyName": "Cider BookStore",
                            "fullName": "Anyanwu Chinedu"
                        },
                        "_id": "65716dc3c025eae42822151c",
                        "type": "CUSTOMER",
                        "id": "65716dc3c025eae42822151c"
                    },
                    {
                        "postalAddress": {
                            "postalCode": "GA015",
                            "cityName": "Accra",
                            "countryCode": "GH",
                            "addressLine1": "Some random place in Accra"
                        },
                        "contactInformation": {
                            "email": "example@example.com",
                            "phone": "9402825665",
                            "companyName": "Baylee Marshall",
                            "fullName": "Baylee Marshall"
                        },
                        "_id": "65716dc3c025eae42822151d",
                        "type": "RECIEVER",
                        "id": "65716dc3c025eae42822151d"
                    }
                ],
                "customerId": "656fa3342540ac003ebc3e12",
                "channel": "api",
                "environment": "sandbox",
                "createdAt": "2023-12-07T07:01:23.474Z",
                "updatedAt": "2023-12-07T07:01:23.474Z",
                "__v": 0,
                "id": "65716dc3c025eae428221519"
            },
            {
                "shipmentMeta": {
                    "trackingId": "7913820456",
                    "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/7913820456/tracking",
                    "packages": [
                        {
                            "_id": "65716dff86a21be4ce5a5dde",
                            "referenceNumber": 1,
                            "trackingNumber": "JD014600004790373859",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/7913820456/tracking?pieceTrackingNumber=JD014600004790373859",
                            "id": "65716dff86a21be4ce5a5dde"
                        },
                        {
                            "_id": "65716dff86a21be4ce5a5ddf",
                            "referenceNumber": 2,
                            "trackingNumber": "JD014600004790373860",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/7913820456/tracking?pieceTrackingNumber=JD014600004790373860",
                            "id": "65716dff86a21be4ce5a5ddf"
                        }
                    ]
                },
                "_id": "65716dff86a21be4ce5a5dd9",
                "packages": [
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "65716dff86a21be4ce5a5dda",
                        "weight": 0.5,
                        "description": "Piece content description",
                        "id": "65716dff86a21be4ce5a5dda"
                    },
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "65716dff86a21be4ce5a5ddb",
                        "weight": 5,
                        "description": "2 Piece content description",
                        "id": "65716dff86a21be4ce5a5ddb"
                    }
                ],
                "description": "description goes here",
                "number_items": 2,
                "delivery_info": [
                    {
                        "postalAddress": {
                            "postalCode": "100001",
                            "cityName": "Akure",
                            "countryCode": "NG",
                            "addressLine1": "Akure, lagos",
                            "countyName": "Ondo"
                        },
                        "contactInformation": {
                            "email": "example@example.com",
                            "phone": "18211309039",
                            "companyName": "Cider BookStore",
                            "fullName": "Anyanwu Chinedu"
                        },
                        "_id": "65716dff86a21be4ce5a5ddc",
                        "type": "CUSTOMER",
                        "id": "65716dff86a21be4ce5a5ddc"
                    },
                    {
                        "postalAddress": {
                            "postalCode": "100001",
                            "cityName": "Yaba",
                            "countryCode": "NG",
                            "addressLine1": "Some random place in Yaba"
                        },
                        "contactInformation": {
                            "email": "example@example.com",
                            "phone": "9402825665",
                            "companyName": "Baylee Marshall",
                            "fullName": "Baylee Marshall"
                        },
                        "_id": "65716dff86a21be4ce5a5ddd",
                        "type": "RECIEVER",
                        "id": "65716dff86a21be4ce5a5ddd"
                    }
                ],
                "customerId": "656fa3342540ac003ebc3e12",
                "channel": "api",
                "environment": "sandbox",
                "createdAt": "2023-12-07T07:02:23.273Z",
                "updatedAt": "2023-12-07T07:02:23.273Z",
                "__v": 0,
                "id": "65716dff86a21be4ce5a5dd9"
            },
            {
                "shipmentMeta": {
                    "trackingId": "7913820482",
                    "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/7913820482/tracking",
                    "packages": [
                        {
                            "_id": "65716e1786a21be4ce5a5de8",
                            "referenceNumber": 1,
                            "trackingNumber": "JD014600004790373863",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/7913820482/tracking?pieceTrackingNumber=JD014600004790373863",
                            "id": "65716e1786a21be4ce5a5de8"
                        },
                        {
                            "_id": "65716e1786a21be4ce5a5de9",
                            "referenceNumber": 2,
                            "trackingNumber": "JD014600004790373864",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/7913820482/tracking?pieceTrackingNumber=JD014600004790373864",
                            "id": "65716e1786a21be4ce5a5de9"
                        }
                    ]
                },
                "_id": "65716e1786a21be4ce5a5de3",
                "packages": [
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "65716e1786a21be4ce5a5de4",
                        "weight": 0.5,
                        "description": "Piece content description",
                        "id": "65716e1786a21be4ce5a5de4"
                    },
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "65716e1786a21be4ce5a5de5",
                        "weight": 5,
                        "description": "2 Piece content description",
                        "id": "65716e1786a21be4ce5a5de5"
                    }
                ],
                "description": "#Item1 Short Desc, #Item2 Short Desc, #Item3 Short Desc",
                "number_items": 2,
                "delivery_info": [
                    {
                        "postalAddress": {
                            "postalCode": "100001",
                            "cityName": "Akure",
                            "countryCode": "NG",
                            "addressLine1": "yaba, lagos",
                            "countyName": "Ondo"
                        },
                        "contactInformation": {
                            "email": "example@example.com",
                            "phone": "18211309039",
                            "companyName": "Cider BookStore",
                            "fullName": "Anyanwu Chinedu"
                        },
                        "_id": "65716e1786a21be4ce5a5de6",
                        "type": "CUSTOMER",
                        "id": "65716e1786a21be4ce5a5de6"
                    },
                    {
                        "postalAddress": {
                            "postalCode": "GA015",
                            "cityName": "Accra",
                            "countryCode": "GH",
                            "addressLine1": "Some random place in Accra"
                        },
                        "contactInformation": {
                            "email": "example@example.com",
                            "phone": "9402825665",
                            "companyName": "Baylee Marshall",
                            "fullName": "Baylee Marshall"
                        },
                        "_id": "65716e1786a21be4ce5a5de7",
                        "type": "RECIEVER",
                        "id": "65716e1786a21be4ce5a5de7"
                    }
                ],
                "customerId": "656fa3342540ac003ebc3e12",
                "channel": "api",
                "environment": "sandbox",
                "createdAt": "2023-12-07T07:02:47.307Z",
                "updatedAt": "2023-12-07T07:02:47.307Z",
                "__v": 0,
                "id": "65716e1786a21be4ce5a5de3"
            },
            {
                "shipmentMeta": {
                    "trackingId": "7913823724",
                    "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/7913823724/tracking",
                    "packages": [
                        {
                            "_id": "6571782a27e92cf56fddb563",
                            "referenceNumber": 1,
                            "trackingNumber": "JD014600004790374276",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/7913823724/tracking?pieceTrackingNumber=JD014600004790374276",
                            "id": "6571782a27e92cf56fddb563"
                        }
                    ]
                },
                "_id": "6571782a27e92cf56fddb55f",
                "packages": [
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "6571782a27e92cf56fddb560",
                        "weight": 0.5,
                        "description": "Piece content description",
                        "id": "6571782a27e92cf56fddb560"
                    }
                ],
                "description": "#Item1 Short Desc, #Item2 Short Desc, #Item3 Short Desc",
                "number_items": 1,
                "delivery_info": [
                    {
                        "postalAddress": {
                            "postalCode": "100001",
                            "cityName": "Akure",
                            "countryCode": "NG",
                            "addressLine1": "yaba, lagos",
                            "countyName": "Ondo"
                        },
                        "contactInformation": {
                            "email": "example@example.com",
                            "phone": "18211309039",
                            "companyName": "Cider BookStore",
                            "fullName": "Anyanwu Chinedu"
                        },
                        "_id": "6571782a27e92cf56fddb561",
                        "type": "CUSTOMER",
                        "id": "6571782a27e92cf56fddb561"
                    },
                    {
                        "postalAddress": {
                            "postalCode": "GA015",
                            "cityName": "Accra",
                            "countryCode": "GH",
                            "addressLine1": "Some random place in Accra"
                        },
                        "contactInformation": {
                            "email": "example@example.com",
                            "phone": "9402825665",
                            "companyName": "Baylee Marshall",
                            "fullName": "Baylee Marshall"
                        },
                        "_id": "6571782a27e92cf56fddb562",
                        "type": "RECIEVER",
                        "id": "6571782a27e92cf56fddb562"
                    }
                ],
                "customerId": "656fa3342540ac003ebc3e12",
                "channel": "api",
                "environment": "sandbox",
                "createdAt": "2023-12-07T07:45:46.396Z",
                "updatedAt": "2023-12-07T07:45:46.396Z",
                "__v": 0,
                "id": "6571782a27e92cf56fddb55f"
            },
            {
                "shipmentMeta": {
                    "trackingId": "7913824166",
                    "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/7913824166/tracking",
                    "packages": [
                        {
                            "_id": "65717908f963fff8a44cc0f7",
                            "referenceNumber": 1,
                            "trackingNumber": "JD014600004790374331",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/7913824166/tracking?pieceTrackingNumber=JD014600004790374331",
                            "id": "65717908f963fff8a44cc0f7"
                        }
                    ]
                },
                "_id": "65717907f963fff8a44cc0f3",
                "packages": [
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "65717907f963fff8a44cc0f4",
                        "weight": 0.5,
                        "description": "Piece content description",
                        "id": "65717907f963fff8a44cc0f4"
                    }
                ],
                "description": "#Item1 Short Desc, #Item2 Short Desc, #Item3 Short Desc",
                "number_items": 1,
                "delivery_info": [
                    {
                        "postalAddress": {
                            "postalCode": "100001",
                            "cityName": "Akure",
                            "countryCode": "NG",
                            "addressLine1": "yaba, lagos",
                            "countyName": "Ondo"
                        },
                        "contactInformation": {
                            "email": "example@example.com",
                            "phone": "18211309039",
                            "companyName": "Cider BookStore",
                            "fullName": "Anyanwu Chinedu"
                        },
                        "_id": "65717908f963fff8a44cc0f5",
                        "type": "CUSTOMER",
                        "id": "65717908f963fff8a44cc0f5"
                    },
                    {
                        "postalAddress": {
                            "postalCode": "GA015",
                            "cityName": "Accra",
                            "countryCode": "GH",
                            "addressLine1": "Some random place in Accra"
                        },
                        "contactInformation": {
                            "email": "example@example.com",
                            "phone": "9402825665",
                            "companyName": "Baylee Marshall",
                            "fullName": "Baylee Marshall"
                        },
                        "_id": "65717908f963fff8a44cc0f6",
                        "type": "RECIEVER",
                        "id": "65717908f963fff8a44cc0f6"
                    }
                ],
                "customerId": "656fa3342540ac003ebc3e12",
                "channel": "api",
                "environment": "sandbox",
                "createdAt": "2023-12-07T07:49:28.016Z",
                "updatedAt": "2023-12-07T07:49:28.016Z",
                "__v": 0,
                "id": "65717907f963fff8a44cc0f3"
            },
            {
                "shipmentMeta": {
                    "trackingId": "7913824590",
                    "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/7913824590/tracking",
                    "packages": [
                        {
                            "_id": "65717aa5f4ce6cf9a4b4a3a6",
                            "referenceNumber": 1,
                            "trackingNumber": "JD014600004790374386",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/7913824590/tracking?pieceTrackingNumber=JD014600004790374386",
                            "id": "65717aa5f4ce6cf9a4b4a3a6"
                        }
                    ]
                },
                "_id": "65717aa5f4ce6cf9a4b4a3a2",
                "packages": [
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "65717aa5f4ce6cf9a4b4a3a3",
                        "weight": 0.5,
                        "description": "Piece content description",
                        "id": "65717aa5f4ce6cf9a4b4a3a3"
                    }
                ],
                "description": "#Item1 Short Desc, #Item2 Short Desc, #Item3 Short Desc",
                "number_items": 1,
                "delivery_info": [
                    {
                        "postalAddress": {
                            "postalCode": "100001",
                            "cityName": "Akure",
                            "countryCode": "NG",
                            "addressLine1": "yaba, lagos",
                            "countyName": "Ondo"
                        },
                        "contactInformation": {
                            "email": "example@example.com",
                            "phone": "18211309039",
                            "companyName": "Cider BookStore",
                            "fullName": "Anyanwu Chinedu"
                        },
                        "_id": "65717aa5f4ce6cf9a4b4a3a4",
                        "type": "CUSTOMER",
                        "id": "65717aa5f4ce6cf9a4b4a3a4"
                    },
                    {
                        "postalAddress": {
                            "postalCode": "GA015",
                            "cityName": "Accra",
                            "countryCode": "GH",
                            "addressLine1": "Some random place in Accra"
                        },
                        "contactInformation": {
                            "email": "example@example.com",
                            "phone": "9402825665",
                            "companyName": "Baylee Marshall",
                            "fullName": "Baylee Marshall"
                        },
                        "_id": "65717aa5f4ce6cf9a4b4a3a5",
                        "type": "RECIEVER",
                        "id": "65717aa5f4ce6cf9a4b4a3a5"
                    }
                ],
                "customerId": "656fa3342540ac003ebc3e12",
                "channel": "api",
                "environment": "sandbox",
                "createdAt": "2023-12-07T07:56:21.990Z",
                "updatedAt": "2023-12-07T07:56:21.990Z",
                "__v": 0,
                "id": "65717aa5f4ce6cf9a4b4a3a2"
            },
            {
                "shipmentMeta": {
                    "trackingId": "7913824726",
                    "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/7913824726/tracking",
                    "packages": [
                        {
                            "_id": "65717ad7f4ce6cf9a4b4a3af",
                            "referenceNumber": 1,
                            "trackingNumber": "JD014600004790374405",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/7913824726/tracking?pieceTrackingNumber=JD014600004790374405",
                            "id": "65717ad7f4ce6cf9a4b4a3af"
                        }
                    ]
                },
                "_id": "65717ad7f4ce6cf9a4b4a3ab",
                "packages": [
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "65717ad7f4ce6cf9a4b4a3ac",
                        "weight": 0.5,
                        "description": "Piece content description",
                        "id": "65717ad7f4ce6cf9a4b4a3ac"
                    }
                ],
                "description": "#Item1 Short Desc, #Item2 Short Desc, #Item3 Short Desc",
                "number_items": 1,
                "delivery_info": [
                    {
                        "postalAddress": {
                            "postalCode": "100001",
                            "cityName": "Akure",
                            "countryCode": "NG",
                            "addressLine1": "yaba, lagos",
                            "countyName": "Ondo"
                        },
                        "contactInformation": {
                            "email": "example@example.com",
                            "phone": "18211309039",
                            "companyName": "Cider BookStore",
                            "fullName": "Anyanwu Chinedu"
                        },
                        "_id": "65717ad7f4ce6cf9a4b4a3ad",
                        "type": "CUSTOMER",
                        "id": "65717ad7f4ce6cf9a4b4a3ad"
                    },
                    {
                        "postalAddress": {
                            "postalCode": "GA015",
                            "cityName": "Accra",
                            "countryCode": "GH",
                            "addressLine1": "Some random place in Accra"
                        },
                        "contactInformation": {
                            "email": "example@example.com",
                            "phone": "9402825665",
                            "companyName": "Baylee Marshall",
                            "fullName": "Baylee Marshall"
                        },
                        "_id": "65717ad7f4ce6cf9a4b4a3ae",
                        "type": "RECIEVER",
                        "id": "65717ad7f4ce6cf9a4b4a3ae"
                    }
                ],
                "customerId": "656fa3342540ac003ebc3e12",
                "channel": "api",
                "environment": "sandbox",
                "createdAt": "2023-12-07T07:57:11.094Z",
                "updatedAt": "2023-12-07T07:57:11.094Z",
                "__v": 0,
                "id": "65717ad7f4ce6cf9a4b4a3ab"
            },
            {
                "shipmentMeta": {
                    "trackingId": "7913824800",
                    "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/7913824800/tracking",
                    "packages": [
                        {
                            "_id": "65717aebf4ce6cf9a4b4a3b7",
                            "referenceNumber": 1,
                            "trackingNumber": "JD014600004790374414",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/7913824800/tracking?pieceTrackingNumber=JD014600004790374414",
                            "id": "65717aebf4ce6cf9a4b4a3b7"
                        }
                    ]
                },
                "_id": "65717aebf4ce6cf9a4b4a3b3",
                "packages": [
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "65717aebf4ce6cf9a4b4a3b4",
                        "weight": 0.5,
                        "description": "Piece content description",
                        "id": "65717aebf4ce6cf9a4b4a3b4"
                    }
                ],
                "description": "#Item1 Short Desc, #Item2 Short Desc, #Item3 Short Desc",
                "number_items": 1,
                "delivery_info": [
                    {
                        "postalAddress": {
                            "postalCode": "100001",
                            "cityName": "Akure",
                            "countryCode": "NG",
                            "addressLine1": "yaba, lagos",
                            "countyName": "Ondo"
                        },
                        "contactInformation": {
                            "email": "example@example.com",
                            "phone": "18211309039",
                            "companyName": "Cider BookStore",
                            "fullName": "Anyanwu Chinedu"
                        },
                        "_id": "65717aebf4ce6cf9a4b4a3b5",
                        "type": "CUSTOMER",
                        "id": "65717aebf4ce6cf9a4b4a3b5"
                    },
                    {
                        "postalAddress": {
                            "postalCode": "GA015",
                            "cityName": "Accra",
                            "countryCode": "GH",
                            "addressLine1": "Some random place in Accra"
                        },
                        "contactInformation": {
                            "email": "example@example.com",
                            "phone": "9402825665",
                            "companyName": "Baylee Marshall",
                            "fullName": "Baylee Marshall"
                        },
                        "_id": "65717aebf4ce6cf9a4b4a3b6",
                        "type": "RECIEVER",
                        "id": "65717aebf4ce6cf9a4b4a3b6"
                    }
                ],
                "customerId": "656fa3342540ac003ebc3e12",
                "channel": "api",
                "environment": "sandbox",
                "createdAt": "2023-12-07T07:57:31.292Z",
                "updatedAt": "2023-12-07T07:57:31.292Z",
                "__v": 0,
                "id": "65717aebf4ce6cf9a4b4a3b3"
            },
            {
                "shipmentMeta": {
                    "trackingId": "7913825172",
                    "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/7913825172/tracking",
                    "packages": [
                        {
                            "_id": "65717bba1241b401cf298ba2",
                            "referenceNumber": 1,
                            "trackingNumber": "JD014600004790374457",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/7913825172/tracking?pieceTrackingNumber=JD014600004790374457",
                            "id": "65717bba1241b401cf298ba2"
                        }
                    ]
                },
                "_id": "65717bba1241b401cf298b9e",
                "packages": [
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "65717bba1241b401cf298b9f",
                        "weight": 0.5,
                        "description": "Piece content description",
                        "id": "65717bba1241b401cf298b9f"
                    }
                ],
                "description": "#Item1 Short Desc, #Item2 Short Desc, #Item3 Short Desc",
                "number_items": 1,
                "delivery_info": [
                    {
                        "postalAddress": {
                            "postalCode": "100001",
                            "cityName": "Akure",
                            "countryCode": "NG",
                            "addressLine1": "yaba, lagos",
                            "countyName": "Ondo"
                        },
                        "contactInformation": {
                            "email": "example@example.com",
                            "phone": "18211309039",
                            "companyName": "Cider BookStore",
                            "fullName": "Anyanwu Chinedu"
                        },
                        "_id": "65717bba1241b401cf298ba0",
                        "type": "CUSTOMER",
                        "id": "65717bba1241b401cf298ba0"
                    },
                    {
                        "postalAddress": {
                            "postalCode": "GA015",
                            "cityName": "Accra",
                            "countryCode": "GH",
                            "addressLine1": "Some random place in Accra"
                        },
                        "contactInformation": {
                            "email": "example@example.com",
                            "phone": "9402825665",
                            "companyName": "Baylee Marshall",
                            "fullName": "Baylee Marshall"
                        },
                        "_id": "65717bba1241b401cf298ba1",
                        "type": "RECIEVER",
                        "id": "65717bba1241b401cf298ba1"
                    }
                ],
                "customerId": "656fa3342540ac003ebc3e12",
                "channel": "api",
                "environment": "sandbox",
                "document": "non_document",
                "createdAt": "2023-12-07T08:00:58.811Z",
                "updatedAt": "2023-12-07T08:00:58.811Z",
                "__v": 0,
                "id": "65717bba1241b401cf298b9e"
            },
            {
                "shipmentMeta": {
                    "trackingId": "7913825286",
                    "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/7913825286/tracking",
                    "packages": [
                        {
                            "_id": "65717c1ad8246f035568c35e",
                            "referenceNumber": 1,
                            "trackingNumber": "JD014600004790374470",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/7913825286/tracking?pieceTrackingNumber=JD014600004790374470",
                            "id": "65717c1ad8246f035568c35e"
                        }
                    ]
                },
                "_id": "65717c1ad8246f035568c35a",
                "packages": [
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "65717c1ad8246f035568c35b",
                        "weight": 0.5,
                        "description": "Piece content description",
                        "id": "65717c1ad8246f035568c35b"
                    }
                ],
                "description": "#Item1 Short Desc, #Item2 Short Desc, #Item3 Short Desc",
                "number_items": 1,
                "delivery_info": [
                    {
                        "postalAddress": {
                            "postalCode": "100001",
                            "cityName": "Akure",
                            "countryCode": "NG",
                            "addressLine1": "yaba, lagos",
                            "countyName": "Ondo"
                        },
                        "contactInformation": {
                            "email": "example@example.com",
                            "phone": "18211309039",
                            "companyName": "Cider BookStore",
                            "fullName": "Anyanwu Chinedu"
                        },
                        "_id": "65717c1ad8246f035568c35c",
                        "type": "CUSTOMER",
                        "id": "65717c1ad8246f035568c35c"
                    },
                    {
                        "postalAddress": {
                            "postalCode": "GA015",
                            "cityName": "Accra",
                            "countryCode": "GH",
                            "addressLine1": "Some random place in Accra"
                        },
                        "contactInformation": {
                            "email": "example@example.com",
                            "phone": "9402825665",
                            "companyName": "Baylee Marshall",
                            "fullName": "Baylee Marshall"
                        },
                        "_id": "65717c1ad8246f035568c35d",
                        "type": "RECIEVER",
                        "id": "65717c1ad8246f035568c35d"
                    }
                ],
                "customerId": "656fa3342540ac003ebc3e12",
                "channel": "api",
                "environment": "sandbox",
                "document": "document",
                "createdAt": "2023-12-07T08:02:34.527Z",
                "updatedAt": "2023-12-07T08:02:34.527Z",
                "__v": 0,
                "id": "65717c1ad8246f035568c35a"
            },
            {
                "shipmentMeta": {
                    "trackingId": "7913825301",
                    "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/7913825301/tracking",
                    "packages": [
                        {
                            "_id": "65717c21d8246f035568c366",
                            "referenceNumber": 1,
                            "trackingNumber": "JD014600004790374472",
                            "trackingUrl": "https://express.api.dhl.com/mydhlapi/test/shipments/7913825301/tracking?pieceTrackingNumber=JD014600004790374472",
                            "id": "65717c21d8246f035568c366"
                        }
                    ]
                },
                "_id": "65717c21d8246f035568c362",
                "packages": [
                    {
                        "dimensions": {
                            "length": 1,
                            "width": 1,
                            "height": 1
                        },
                        "_id": "65717c21d8246f035568c363",
                        "weight": 0.5,
                        "description": "Piece content description",
                        "id": "65717c21d8246f035568c363"
                    }
                ],
                "description": "#Item1 Short Desc, #Item2 Short Desc, #Item3 Short Desc",
                "number_items": 1,
                "delivery_info": [
                    {
                        "postalAddress": {
                            "postalCode": "100001",
                            "cityName": "Akure",
                            "countryCode": "NG",
                            "addressLine1": "yaba, lagos",
                            "countyName": "Ondo"
                        },
                        "contactInformation": {
                            "email": "example@example.com",
                            "phone": "18211309039",
                            "companyName": "Cider BookStore",
                            "fullName": "Anyanwu Chinedu"
                        },
                        "_id": "65717c21d8246f035568c364",
                        "type": "CUSTOMER",
                        "id": "65717c21d8246f035568c364"
                    },
                    {
                        "postalAddress": {
                            "postalCode": "GA015",
                            "cityName": "Accra",
                            "countryCode": "GH",
                            "addressLine1": "Some random place in Accra"
                        },
                        "contactInformation": {
                            "email": "example@example.com",
                            "phone": "9402825665",
                            "companyName": "Baylee Marshall",
                            "fullName": "Baylee Marshall"
                        },
                        "_id": "65717c21d8246f035568c365",
                        "type": "RECIEVER",
                        "id": "65717c21d8246f035568c365"
                    }
                ],
                "customerId": "656fa3342540ac003ebc3e12",
                "channel": "api",
                "environment": "sandbox",
                "document": "document",
                "createdAt": "2023-12-07T08:02:41.834Z",
                "updatedAt": "2023-12-07T08:02:41.834Z",
                "__v": 0,
                "id": "65717c21d8246f035568c362"
            }
        ],
        "totalDocs": 36,
        "limit": 15,
        "totalPages": 3,
        "page": 1,
        "pagingCounter": 1,
        "hasPrevPage": false,
        "hasNextPage": true,
        "prevPage": null,
        "nextPage": 2
    },
    "success": true
}