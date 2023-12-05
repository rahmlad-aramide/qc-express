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
            }
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
        "stateCount": [],
        "totalValue": []
    },
    "success": true
}