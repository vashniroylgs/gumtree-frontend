import "./index.css";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { useParams } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  BsFillTelephoneFill,
  BsFillHeartFill,
  BsFillCaretDownFill,
} from "react-icons/bs";
import { MdDescription, MdReportProblem } from "react-icons/md";

//icons
import { RiArrowDropLeftLine } from "react-icons/ri";

const carsDetails = [
  {
    id: 1,
    images: [
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/c1428b96-3f73-4e0a-e148-4859b839f800/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/c7af44fc-f21f-459a-edae-af4b2a6fed00/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/00be360f-a57c-4bc0-ef4b-4b12829e8400/86",
    ],
    title:
      "2021 Land Rover Defender 90 2.0 P300 Auto 4WD Euro 6 (s/s) 3dr ESTATE Petrol Aut",
    Company: "landrover",
    FuelType: "Petrol",
    Transmission: "Automatic",
    BodyType: "Estate",
    Description:
      "1 Owner Car, Canvas Folding Sunroof, Defender Fixed Sidesteps, Electric Deployable Towbar, 360 Surround View Camera, 3D Virtual Surround View Camera, Reversing Camera, Defender 90 Bonnet Decal, 4 Corner Air Suspension, Heated Partially Electric Front Seats, Leather Heated Multi-Function Steering Wheel, Front & Rear Parking Sensors, Cruise Control, Speed Limiter, Lane Keep Assist, Dual Zone Climate Control, Defender Spare Wheel Cover, Apple CarPlay, Android Auto, Satellite Navigation, Bluetooth, DAB Radio, Voice Control, Privacy Glass, Defender Branded Door Sills, Black Exterior Trims, Auto LED Headlights, LED Taillights, Rear ISOFIX, Velour Floor Mats, 40/20/40 Folding Rear Seats, Electric Folding Wing Mirrors, Leather Gear Knob, Manufacturer Warranty Until: 03/2024.",
    image:
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/4452e5eb-7764-4dc9-022c-55692af50800/86",
    carPrice: "£53,990.00",
    carLocation: "Harrogate, North Yorkshire",
    Year: "2021",
  },

  {
    id: 2,
    images: [
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/0484854e-36cb-4fd5-886d-b84e41a8e100/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/b48cb22a-5921-4d49-1b05-dbffd569ba00/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/b48cb22a-5921-4d49-1b05-dbffd569ba00/86",
    ],
    title: "Land Rover Defender 90 Window Van, 2011, Manual, 2198 (cc)",
    Company: "landrover",
    FuelType: "Petrol",
    Transmission: "Manual",
    BodyType: "Window Van",
    Description:
      "Land Rover Defender 90 in White39,000 MilesChassis has been wax oiledInside very cleanJust had a full serviceComes with a rear tow bar (fitted) and front tow bar (not fitted)Lovely condition and well looked after",
    image:
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/0484854e-36cb-4fd5-886d-b84e41a8e100/86",
    carPrice: "£24,995.00",
    carLocation: "Bodmin, Cornwall",
    Year: "2011",
  },

  {
    id: 3,
    images: [
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/61ac3460-2fa0-4e2d-a50d-a6142887e500/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/4498e894-9695-41c4-de15-0ed456f53200/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/b4e8005d-ac64-4c9c-5cbb-8fa2497f5e00/86",
    ],
    title:
      "2021 Land Rover Defender 110 3.0 D200 MHEV S Auto 4WD Euro 6 (s/s) 5dr EU6 ULEZ",
    Company: "landrover",
    FuelType: "Petrol",
    Transmission: "Automatic",
    BodyType: "Other",
    Description:
      "This vehicle has passed a 128 Point AA inspection & HPI Checked Free 12 Months AA breakdown cover,7 Days Money Back Guarantee (T& C's apply) Reserve or buy Online now Express Home Delivery Available 7 Days a week, Drive away today with our complementary 5 Days driveaway comprehensive insurance (T& C's apply), For finance applications or eligibility check please visit [Website URL removed] save money & time with our state of the art online system and benefit from our low finance rates from 3.4% Flat rate and 6.9% APR Rep, instant decision and you could drive away the same day. Worried about poor credit score? Not a problem, we can help (Acceptance is subject to status (T& C's apply)",
    image:
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/4452e5eb-7764-4dc9-022c-55692af50800/86",
    carPrice: "£67,499.00",
    carLocation: "Ashford, Surrey",
    Year: "2021",
  },

  {
    id: 4,
    images: [
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/06951ccf-b1d4-46e5-25f7-0fbbc7d9aa00/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/88d4f6de-45a8-446f-f965-58affaeb3700/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/d522a06f-8e25-4bec-40f0-360d8468b300/86",
    ],
    title:
      "2014/64 LAND ROVER DEFENDER 90 2-2TDCI RARE FACTORY PICK UP ONLY 16,000 MILES !",
    FuelType: "Petrol",
    Company: "landrover",
    Transmission: "Manual",
    BodyType: "Pick Up",
    Description:
      "2014/64 LAND ROVER DEFENDER 90 2.2 TDCI RARE FACTORY PICK UP !!!!,DIESEL,6 SPEED MANUAL,RARE GLEAMING KESWICK GREEN BODYWORK,ONLY 16,000 GENUINE MILES!!!!! FROM NEW,YES JUST 16,000 COSSETED MILES WITH JUST 1 PREVIOUS OWNER AND A FULL EXTENSIVE SERVICE HISTORY FROM LAND ROVER MAIN DEALER,THIS IS YOUR OPPORTUNITY TO OWN A TOTALLY STUNNING AND REALLY HARD TOO FIND DEFENDER 90 PICK UP THAT IS AS NEW THROUGHOUT AND NOT TO BE MISSED!!!!,GREAT SPECIFICATION,FULL TECHNO VINYL INTERIOR,3 SEATS,ELECTRIC WINDOWS,CENTRAL LOCKING,ALPINE CD STEREO SYSTEM,BLUETOOTH,BLACK LAND ROVER RUBBER MATTING THROUGHOUT,FULL LAND ROVER OVER-RUBBER MAT SET INCL LOADSPACE AREA,REAR SLIDING WINDOW,12V POWER SOCKET,2 KEYS/REMOTES,INTERIOR LIGHT,ABS/TRACTION CONTROL/HIGH,LOW RANGE AND CENTRE DIFF LOCK,GENUINE LAND ROVER 16 WOLF STEEL WHEELS WITH AS NEW GOODYEAR WRANGLER MTR ALL TERRAIN TYRES",
    image:
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/06951ccf-b1d4-46e5-25f7-0fbbc7d9aa00/86",
    carPrice: "£36,995.00",
    carLocation: "Congleton, Cheshire",
    Year: "2014",
  },

  {
    id: 5,
    images: [
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/46939485-f327-4cdb-7d77-989ed1a29500/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/da60380d-8dc0-4cf1-5ae2-6124c1ec0200/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/aedb7832-d8d1-455d-0873-85b7cf90ef00/86",
    ],
    title: "2022 Land Rover Defender HARD TOP PANEL VAN Diesel Automatic",
    FuelType: "Diesel",
    Company: "landrover",
    Transmission: "Automatic",
    BodyType: "Pick Up",
    Description:
      "Two seats configured 2+0,Eleven speakers,Audio player with touch screen ; radio receives AM/FM, digital, internet and RDS,Steering wheel mounted remote audio controls,12v power outlet located in boot/cargo section, front section and rear section,Remote controlled remote boot/hatch/rear door release,Memorised adjustment controlling door mirror position,TFT Screen reconfigurable dashboard,Computer includes average fuel consumption,Load restraint hooks,Central door locking: Operated by card key Includes windows,Seat upholstery: leather and leather,Centre armrest between front seats,Driver and passenger seat: individual type, ventilated, heated, electrically adjustable, seven electrical adjustments,Heated leather covered multi-function steering wheel electrically adjustable with tilt adjustment and telescopic adjustment,Cup holders for front seats and rear seats,Ventilation system with digital display and air filter,Secondary ventilation controls for front passenger,Automatic air conditioning with two climate control zones",
    image:
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/46939485-f327-4cdb-7d77-989ed1a29500/86",
    carPrice: "£60,995.00",
    carLocation: "Cardigan, Ceredigion",
    Year: "2022",
  },

  {
    id: 6,
    images: [
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/62ff270c-758f-45fd-8c08-c8085ddd5600/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/c7b2b79f-a53d-4ed0-7b5e-05599fb33200/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/149b7911-ffd0-44b1-a0c7-0cda8dfebc00/86",
    ],
    title: "2022 Land Rover Defender 110 P400e X SUV HYBRID Automatic",
    FuelType: "Diesel",
    Company: "landrover",
    Transmission: "Automatic",
    BodyType: "Other",
    Description:
      "A FAMILY BUSINESS SETTING THE STANDARD... Walters Motor Group is a large family run business in Loddon stocking over 150 vehicles onsite. Affiliated with the AA, we are one of Norfolk's premier independent dealerships and our facilities are everything you would expect of a main dealer but our personal service is what really sets us apart from the rest! When you choose to buy from us you can be sure of a warm and friendly welcome, a personal service with honesty and integrity, and a relaxed stress-free sales process. You can have confidence that our experienced technicians will thoroughly inspect and carefully prepare our vehicles to both ours and the AA's exacting standards. We MOT and prepare all of our vehicles on site in our modern 6 bay workshop using all of the latest equipment and diagnostic technology and our brilliantly talented and often magical valeting team professionally clean and detail our vehicles to get them looking their tip top best for their age and mileage! At WMG we take great pride in getting things right. Our reputation means everything to us and we hope our online reviews will give you the confidence to join us from distance or in person on the journey of buying your next vehicle.",
    image:
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/62ff270c-758f-45fd-8c08-c8085ddd5600/86",
    carPrice: "£97,500.00",
    carLocation: "Norwich, Norfolk",
    Year: "2022",
  },

  {
    id: 7,
    images: [
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/0951da9d-af6d-42e4-d3a1-20dff41f7f00/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/adc898f1-dafb-4aff-e621-de69ee9ee800/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/2689dc1f-2833-4924-b0f2-f91589dfed00/86",
    ],
    title:
      "2020 Land Rover Defender 110 3.0 D300 MHEV X-Dynamic HSE Auto 4WD Euro 6 (s/s) 5",
    FuelType: "Petrol",
    Company: "landrover",
    Transmission: "Automatic",
    BodyType: "Estate",
    Description:
      "CALL 01245 351234 20s, SLIDING PANORAMIC ROOF, PRIVACY GLASS, SATNAV, DAB RADIO Hakuba Silver with Ebony Leather Interior This car benefits from the following features; 20-inch Alloys, Heated Front Windscreen, Sliding Panoramic Roof. The interior features of this car are; Electric Adjustable Front Seats with Memory, Navigation System. The technology and systems that this car has are as follows; Automatic Headlamp Levelling, Blind Spot Assistant, DAB Radio, Electronic Air Suspension, SOS/Assistance Call, Terrain Response. The Land Rover Defender is a rugged vehicle ready to battle any hill, gravel path, mud, lake or even the common road. Bring back the old days with this fantastic vehicle. 10in Touchscreen, 14-Way Heated and Cooled Electric Memory Front Seats with 4-Way Manual Headrests, 20in Alloy Wheels - Style 5098 - 5 Spoke - Satin Dark Grey, 360 Degree Parking Aid, 3D Surround Camera, 40-20-40 Folding Rear Seats with Centre Armrest,",
    image:
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/0951da9d-af6d-42e4-d3a1-20dff41f7f00/86",
    carPrice: "£55,000.00",
    carLocation: "Chelmsford, Essex",
    Year: "2020",
  },

  {
    id: 8,
    images: [
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/a344fced-1a04-4934-ea7f-521b7b7aef00/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/133948ce-c7d0-4046-a6cb-b563832f2e00/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/07597488-5dcf-4d86-b289-1f171f100700/86",
    ],
    title:
      "2022 Land Rover Defender 3.0 D250 X-Dynamic S 110 With Adaptive Cruise cont",
    FuelType: "Petrol",
    Company: "landrover",
    Transmission: "Automatic",
    BodyType: "Estate",
    Description:
      "The Land Rover Defender is a highly capable off-roader, but equally as refined on the road. This one has very low mileage and a great spec. Our Land Rover Defender 110 is finished in the bright Fuji White over Ebony Robustec interior, and features some great optional extras, including: 12-way heated front seats, Adaptive Cruise Control, Two-zone climate control, Premium LED headlights, Privacy glass, Meridian Sound System, Keyless Entry, Lane Keep Assist, 3D Surround Camera System and 360-degree Parking Aid, Apple CarPlay and Android Auto, DAB radio, and more. Call today for more information. CLICK-COLLECT-DRIVE: Reserve online today and collect it safely at our dealership or we'll deliver to your door.Cruise Control; AM/FM Stereo; Climate Control; Previously Registered Overseas; Safety Belt Pretensioners",
    image:
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/a344fced-1a04-4934-ea7f-521b7b7aef00/86",
    carPrice: "£62,000.00",
    carLocation: "Swindon, Wiltshire",
    Year: "2022",
  },

  {
    id: 9,
    images: [
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/b5483d2d-24cd-4946-1c22-f54531a48800/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/d4a7e268-3366-4950-1a89-ca8f3db37300/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/3b255eab-d50a-48fd-582b-9549584e6f00/86",
    ],
    title:
      "2009 Land Rover Defender 90 SVX 2dr Diesel Manual 4WD Euro 4 (122 bhp) Unlisted",
    FuelType: "Diesel ",
    Company: "landrover",
    Transmission: "Manual",
    BodyType: "Estate",
    Description:
      "First registered September 2009 (59 Reg) this very smart soft-top Land Rover 90 Defender 90 Pick Up is No.266 of just 300 SVX 60th Anniversary models produced, only 90 convertible and hardtop examples of which were allocated to the UK market. Finished in Santorini Black bodywork teamed with Silver-Roll cage and Black interior trim, Black Bikini Hood and chunky five-spoke 16-inch alloy wheels shod with General Grabber tyres. Power comes from a 121bhp Ford turbo diesel engine that drives to all four wheels via a six-speed manual gearbox. Additional specification includes: sidesteps; Half leather Recaro Bucket Seats; Navigation; Leather-rimmed Steering Wheel; Kenwood audio system; and distinctive Silver Grille and Head Light-surround. Early Service History with Stratstone JLR Main Dealer; thereafter looked after by Independent garages. B Service, plus major suspension overhaul in February 2022, £4,900 spent at 119,000 miles. A very rare and collectible Defender, to be supplied with a fresh MoT, Service and Three Months Warranty. This vehicle is available to view soon and test drive at Arun Ltd in Pulborough, West Sussex.",
    image:
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/b5483d2d-24cd-4946-1c22-f54531a48800/86",
    carPrice: "£29,995.00",
    carLocation: "Pulborough, West Sussex",
    Year: "2009",
  },

  {
    id: 10,
    images: [
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/b5483d2d-24cd-4946-1c22-f54531a48800/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/d4a7e268-3366-4950-1a89-ca8f3db37300/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/3b255eab-d50a-48fd-582b-9549584e6f00/86",
    ],
    title:
      "2012 Land Rover Defender 110 XS XS Station Wagon TDCi [2.2] Pick Up Diesel Manua",
    FuelType: "Diesel ",
    Company: "landrover",
    Transmission: "Manual",
    BodyType: "Estate",
    Description:
      "First registered September 2012 (59 Reg) this very smart soft-top Land Rover 90 Defender 90 Pick Up is No.266 of just 300 SVX 60th Anniversary models produced, only 90 convertible and hardtop examples of which were allocated to the UK market. Finished in Santorini Black bodywork teamed with Silver-Roll cage and Black interior trim, Black Bikini Hood and chunky five-spoke 16-inch alloy wheels shod with General Grabber tyres. Power comes from a 121bhp Ford turbo diesel engine that drives to all four wheels via a six-speed manual gearbox. Additional specification includes: sidesteps; Half leather Recaro Bucket Seats; Navigation; Leather-rimmed Steering Wheel; Kenwood audio system; and distinctive Silver Grille and Head Light-surround. Early Service History with Stratstone JLR Main Dealer; thereafter looked after by Independent garages. B Service, plus major suspension overhaul in February 2022, £4,900 spent at 119,000 miles. A very rare and collectible Defender, to be supplied with a fresh MoT, Service and Three Months Warranty. This vehicle is available to view soon and test drive at Arun Ltd in Pulborough, West Sussex.",
    image:
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/b5483d2d-24cd-4946-1c22-f54531a48800/86",
    carPrice: "£29,990.00",
    carLocation: "Woodbridge, Suffolk",
    Year: "2012",
  },

  {
    id: 11,
    images: [
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/f65aea17-3627-4f46-2da9-4bb34da55000/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/f367fb27-31c9-47b4-6a10-acd373ab2700/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/e0cf235a-d65d-4843-d64c-71d5d75ea900/86",
    ],
    title: "TOYOTA HILUX ACTIVE 4WD D-4D SC 2020",
    Company: "toyota",
    FuelType: "Diesel",
    Transmission: "Manual",
    BodyType: "Other",
    Description:
      "2020 70 Toyota Hilux Active 2.4 Turbo Diesel Single Cab 4x4 Pickup in White with A/c Bluetooth Lec pack Radio stereo big screen key fob central locking spare keys. 47,000 Warranted Miles with full service history , with just the 1 owner from New. Tidy smart Truck bed liner and Tow bar looking like having little use, exterior / interior in very good condition apart from small tear on the drivers outer seat swab. Finance and Insurance available with various packages to suit, Including low deposits. Call us for further details. Toyota Warranty applies until Oct 2025",
    image:
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/64ed036b-94aa-4f5d-337b-2b8a4d209500/86",
    carPrice: "£19,750.00",
    carLocation: "Lydney, Gloucestershire",
    Year: "2020",
  },
  {
    id: 12,
    images: [
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/208a4041-44d2-43c3-72f5-0f1cea25d400/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/4fa4052a-eab3-4e32-493b-d6826b89e600/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/9751dfb4-d2fa-4601-da18-60889627ba00/86",
    ],
    title: "2013 Toyota Hilux 3.0 diesel - no vat",
    Company: "toyota",
    FuelType: "Diesel",
    Transmission: "Manual",
    BodyType: "Pick Up",
    Description:
      "2013 Toyota Hilux 3.0 diesel - no vat Turbo Diesel Single Cab 4x4 Pickup in White with A/c Bluetooth Lec pack Radio stereo big screen key fob central locking spare keys. 47,000 Warranted Miles with full service history , with just the 1 owner from New. Tidy smart Truck bed liner and Tow bar looking like having little use, exterior / interior in very good condition apart from small tear on the drivers outer seat swab. Finance and Insurance available with various packages to suit, Including low deposits. Call us for further details. Toyota Warranty applies until Oct 2025",
    image:
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/09e98ac4-391b-4721-1590-8a4f8a7a6f00/86",
    carPrice: "£8,700.00",
    carLocation: "Hillsborough, County Down",
    Year: "2013",
  },
  {
    id: 13,
    images: [
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/4f7e24ad-ace2-4d0f-5a1e-1e32daf1de00/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/fbeb4f16-ffb9-456d-27f3-15da60e33a00/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/2d52066b-d60b-4965-c39e-67d38dc53b00/86",
    ],
    title: "TOYOTA HILUX INVINCIBLE 4WD D-4D DCB PICKUP NEW SHAPE 2021",
    Company: "toyota",
    FuelType: "Diesel",
    Transmission: "Automatic",
    BodyType: "Other",
    Description:
      "THIS ONE IS IN OUR JUNE SALE ( PCP FINANCE ), 2021 21 ( New Shape )Toyota Hilux Invincible Auto Double Cab 4x4 Pickup In Dark met Grey 44,000 Warranted miles from new full service History 1 owner fully loaded plastic bed liner like new double roof beacon towbar with single electrics all terrain tyres alloys side steps , price is plus vat finance and Insurances available various packages to suit competitive rates with low deposits. for more details please call us to discuss your needs. 29750.00 plus vat TOYOTA WARRANTY APPLIES UNTIL 27th MAY 2026, PCP FINANCE Available on this vehicle please call us for more Details. ( LOOK !!! DEPOSIT OR NO DEPOSIT U CHOOSE ), !!! please note this finance quote is based on a no deposit !!!",
    image:
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/c9197904-a96e-473f-790c-85642abf5e00/86",
    carPrice: "£29,750.00",
    carLocation: "Lydney, Gloucestershire",
    Year: "2021",
  },
  {
    id: 14,
    images: [
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/dcdc6a1f-8810-4419-d7a3-aca590c87400/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/ab46f65e-e7cf-4bf2-8d8a-834886e60e00/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/849b8293-d977-45de-36f3-db4cbc31f000/86",
    ],
    title:
      "2022 Toyota HI-LUX 2.8L INVINCIBLE X 4WD D-4D DCB 0d AUTO 202 BHP + JBL SOUND +",
    Company: "toyota",
    FuelType: "Diesel",
    Transmission: "Automatic",
    BodyType: "Pick Up",
    Description:
      "THIS ONE IS IN OUR JUNE SALE ( PCP FINANCE ), 2021 21 ( New Shape )Toyota Hilux Invincible Auto Double Cab 4x4 Pickup In Dark met Grey 44,000 Warranted miles from new full service History 1 owner fully loaded plastic bed liner like new double roof beacon towbar with single electrics all terrain tyres alloys side steps , price is plus vat finance and Insurances available various packages to suit competitive rates with low deposits. for more details please call us to discuss your needs. 29750.00 plus vat TOYOTA WARRANTY APPLIES UNTIL 27th MAY 2026, PCP FINANCE Available on this vehicle please call us for more Details. ( LOOK !!! DEPOSIT OR NO DEPOSIT U CHOOSE ), !!! please note this finance quote is based on a no deposit !!!",
    image:
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/bf7b78c1-309f-4d9f-6be6-4f9055895c00/86",
    carPrice: "£29,750.00",
    carLocation: "Waltham Cross, Hertfordshire",
    Year: "2022",
  },
  {
    id: 15,
    images: [
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/1a201596-ccdf-4844-1b42-b13c98a15700/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/280d4e87-f2b6-4fea-34fb-cd4e69a72b00/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/805851ea-a370-4e1d-624c-e1b2af468a00/86",
    ],
    title:
      "2021 Toyota Hilux INVINCIBLE X 4WD D-4D DCB PICK UP Diesel Automatic",
    Company: "toyota",
    FuelType: "Diesel",
    Transmission: "Automatic",
    BodyType: "Pick Up",
    Description:
      "Five seats configured 2+3,Nine speakers,Audio system with touch screen ; radio receives AM/FM, digital and RDS colour screen, 0 and audio player reads MP3,Steering wheel mounted remote audio controls,12v power outlet located in front section,Front reading lights,Analogue & TFT dashboard,Tachometer,External temperature,Computer includes average speed, average fuel consumption, instantaneous fuel consumption and range for remaining fuel,Load restraint hooks,Central door locking: Operated by card key,Seat upholstery: leather and leather,Centre armrest between front seats,Centre armrest between rear seats,Driver seat: individual type, heated, electrically adjustable, four electrical adjustments, passenger seat: individual type, heated,Asymmetrically folding rear seats: bench type with space for three people;,Alloy & leather multi-function steering wheel with tilt adjustment and telescopic adjustment,Refrigerated storage compartment in glove compartment",
    image:
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/2861b491-b28a-436d-531a-89ef29fbcc00/86",
    carPrice: "£32,995.00",
    carLocation: "Cardigan, Ceredigion",
    Year: "2021",
  },
  {
    id: 16,
    images: [
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/39688060-0238-4642-0ca2-a9f4be84b800/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/493cad70-8483-42ee-9e17-1fcafe6c0d00/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/61dd7521-1e11-44bb-cd1e-44111e884a00/86",
    ],
    title: "Toyota, HILUX, Pick Up, 2009, Automatic, 2982 (cc)",
    Company: "toyota",
    FuelType: "Diesel",
    Transmission: "Automatic",
    BodyType: "Pick Up",
    Description:
      "Reluctant sale due to 'inherited' Volvo, General Grabbers, Automatic, Roll top loading space, new front disks, pads, callipers, shock absorbers and springs, last service was a full one by Toyota including all lubricants (transmissions etc) and timing belt. in good all round condition and drives very well, no creaks or rattles, very reliable some scuffs on paint but all rust free and sound chassis. Invincible spec. Toyota genuine roof rack bars. Tow bar. Any reasonable offer close to asking price accepted.",
    image:
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/f3e955b3-7f63-43df-f507-b87c0131ac00/86",
    carPrice: "£7,495.00",
    carLocation: "Ipswich, Suffolk",
    Year: "2009",
  },
  {
    id: 17,
    images: [
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/cc8ec9f7-b5ee-4fc8-20c8-6a7d1ef57000/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/493cad70-8483-42ee-9e17-1fcafe6c0d00/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/ab087237-ad0f-48cb-9d0c-8eabf9647300/86",
    ],
    title: "TOYOTA HILUX 2.4 D-4D DCB INVINCIBLE X 4WD 2018",
    Company: "toyota",
    FuelType: "Diesel",
    Transmission: "Automatic",
    BodyType: "Pick Up",
    Description:
      "Toyota Hilux 2.4 D-4D Invincible X 4WD , Automatic , One owner from new , New MOT upon purchase , Full service history (9 services), Last serviced March 2023, Two keys , Leather interior , Clean condition throughout , We try our very best to ensure the above description is accurate and correct. However, errors may occur. Please check with our sales representative. Please contact us prior to viewing a vehicle to check its availability. Appointments outside of regular business hours are also possible providing its convenient for our team. | Features : ABS : Adaptive Headlights : Adjustable Steering Wheel : Air Conditioning : Alarm : Alloy Wheels : Auto Lights : AUX Port : Bluetooth Phone Conn : CD Player : Central Locking : Climate Control : Collision Warning System with Active Brake",
    image:
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/0ad2f314-23ab-4ed9-9b21-9c941e327700/86",
    carPrice: "£18,995.00",
    carLocation: "Ferndale, Rhondda Cynon Taf",
    Year: "2018",
  },
  {
    id: 18,
    images: [
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/5d6a5abd-b832-468d-8ed1-445cfe3a1c00/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/e3786c20-e5da-4de6-e400-caacde52cd00/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/fafdaa99-e215-4adc-f986-87eaf6718000/86",
    ],
    title: "2021 Toyota Hilux D-4D Invincible X Pickup Diesel Automatic",
    Company: "toyota",
    FuelType: "Diesel",
    Transmission: "Automatic",
    BodyType: "Pick Up",
    Description:
      "NO VAT. 2021. LOW RATE FINANCE AVAILABLE. FULL MOT. SAT NAV. FULL LEATHER..Floor Mats - Rubber,Manual Roll Cover - Black with Sports Bar Black,Spray-On Bedliner Overrail,Towing Pack - 13 Pin with Ball and Pin,Toyota Genuine Leisure Hardtop,Decuma Grey,Leather - Black - Professional, Bluetooth Connectivity, Digital Audio Broadcast - DAB, Front 12V Power Outlet x2, Smartphone Integration including Apple Car Play and Android Auto, Toyota Touch 2 Multimedia, Toyota Touch 2 with Go Navigation, USB Connector, Dynamic Guide Lines On Rear - View Camera Display, Front and Rear Parking Sensors, Intelligent Adaptive Cruise Control, Lane Departure Alert",
    image:
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/68f8f856-7c71-4efb-bc71-483c9a998000/86",
    carPrice: "£38,000.00",
    carLocation: "Sheffield, South Yorkshire",
    Year: "2021",
  },
  {
    id: 19,
    images: [
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/34f80d6d-6ecc-42ad-9e48-71f683a29c00/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/9ad534a7-132a-4fc4-452e-ebf987997900/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/43bd1e14-ea92-42e2-ebac-803fe9689c00/86",
    ],
    title:
      "2016 Toyota Hilux 2.4 D-4D Invincible X Double Cab Pickup 4WD Euro 6 4dr (TSS) M",
    Company: "toyota",
    FuelType: "Diesel",
    Transmission: "Manual",
    BodyType: "Pick Up",
    Description:
      "12V Socket x2, 220V Plug Socket, 4.2in Coloured TFT Multi-Information Display, Toyota Touch 2, Toyota Touch 2 with Go Navigation, USB and Aux InCruise Control, Lane Departure Warning, Road Sign Assist, Tachometer18in Alloy Wheels, Chrome Door Handles and Mirrors, Chrome Side Bars with Integrated Steps, Colour-Keyed Front Bumper, Colour-Keyed Overfenders, Electric Windows - Front with Drivers Auto Up and Down, Electrically Adjustable Heated Door Mirrors with Integrated Turn Indicators, Front Grille - Chrome Effect, Heated Rear Window, Mud Flaps - Front and Rear, Power Retractable Door Mirrors, Rear Privacy Glass, Scuff PlatesAutomatic Headlight Levelling, Dusk Sensor, Follow Me Home Headlights, Front Fog Lights, Headlight Cleaners",
    image:
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/fe842f3d-9319-4078-8eea-6dfd41818500/86",
    carPrice: "£22,000.00",
    carLocation: "Bordon, Hampshire",
    Year: "2016",
  },
  {
    id: 20,
    images: [
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/725aacb3-193a-45ab-8f2d-34bf2e63cf00/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/f850559e-ae66-4bf3-55dc-0810d7b73700/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/3d3707b3-b264-4662-dc10-14bda4462c00/86",
    ],
    title:
      "2021 Toyota HI-LUX Invincible X Manual 2.8 D-4D 4WD Double Cab Pick Up, EXCELLEN",
    Company: "toyota",
    FuelType: "Diesel",
    Transmission: " Manual",
    BodyType: "Other",
    Description:
      "Rear view camera, Automatic air conditioning, Heated front seats, Bluetooth connectivity, Digital radio (DAB), Load sensing proportioning system, Hill start assist, 18 alloy wheels, Tilt adjustable steering wheel, Heated rear window, Smart phone integration with Android auto & Apple CarPlay, Automatic front passenger airbag on/off switch, MP3 compatibility, Heated door mirrors, Remote central locking, Headlight washers, Immobiliser, PAS, Tachometer, Mud flaps front and rear, Anti-lock brake system with electronic brakeforce distribution, Body coloured front bumper, Leather upholstery, Lights on warning buzzer, Locking glovebox, Carpet covered floor",
    image:
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/b052ef94-e6c7-4593-8f76-aa665bcbf800/86",
    carPrice: "£32,995.000",
    carLocation: "Lisburn, County Antrim",
    Year: "2021",
  },
  {
    id: 21,
    images: [
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/5e254c48-ce9b-457e-b361-b7cc3d26bf00/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/6ab64877-898b-4c3b-c13c-5d5be3d83c00/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/82804a3a-2e46-4337-d76e-9f2000d4e100/86",
    ],
    title:
      "2022 Toyota Hilux Invincible X AUTO 2.8 D-4D Double Cab, BONNET DEFLECTOR, TOW B",
    Company: "toyota",
    FuelType: "Diesel",
    Transmission: "Automatic",
    BodyType: "Other",
    Description:
      "RIDGE BACK ROLLER TOP, WIND DEFLECTORS, CLIMATE CONTROL, LANE ASSIST, FULL HEATED LEATHER FRONT & BACK, 360 CAMERA, POWER HEAT, RSA, DAB, Remote central locking, Heated front seats, Rear view camera, Touch 2 multimedia system with 8 display + GO navigation system, Downhill Assist Control (DAC), Headlight washers, Immobiliser, PAS, Tachometer, Mud flaps front and rear, Heated rear window, 18 alloy wheels, Anti-lock brake system with electronic brakeforce distribution, Body coloured front bumper, Lights on warning buzzer, Locking glovebox",
    image:
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/fdb0f4df-66af-403e-8cb8-01185fe06d00/86",
    carPrice: "£36,990.00",
    carLocation: "Barnsley, South Yorkshire",
    Year: "2022",
  },
  {
    id: 22,
    images: [
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/8c571d05-bc5c-4cd3-256d-addeaf5fc500/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/bc549840-ef23-4963-baf0-a4e2562d4900/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/a37fc1e0-47d0-476e-fbe3-70d3cd438200/86",
    ],
    title: "Toyota Hilux 3.0 INVINCIBLE 4X4 D-4D DCB",
    Company: "toyota",
    FuelType: "Diesel",
    Transmission: "Manual",
    BodyType: "Pick Up",
    Description:
      "Toyota Hilux 3.0 D-4D Invincible 4WD 4dr . IN REALLY GOOD CONDITION IN AND OUT . WE ARE PROUD TO BE PART OF AA DEALER PROMISE . ANY INSPECTION WELCOME . HPI CLEAR . FULL SERVICE HISTORY . 1 FORMER KEEPER . MOT TILL . FRESH SERVICE . WARRANTY INCLUDED . FREE 12 MONTH AA BREAKDOWN COVER . PART EXCHANGE WELCOME . NORTH STAR MOTORS NE61AR",
    image:
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/ac2f9197-5a3e-4f29-ade0-8a3adeb7d000/86",
    carPrice: "£12,999.00",
    carLocation: "Newcastle, Tyne and Wear",
    Year: "2011",
  },
  {
    id: 23,
    images: [
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/7881dffc-b305-4de6-9331-c91dd3fedc00/866",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/d440f0ee-f735-4bc1-9697-79e9af7e1800/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/6969fb7a-03e3-4304-dc37-1ebd16a03d00/86",
    ],
    title: "2023 72 TOYOTA HI-LUX 2.8 GR SPORT 4WD D-4D DCB 202 BHP DIESEL",
    Company: "toyota",
    FuelType: "Diesel",
    Transmission: "Automatic",
    BodyType: "Pick Up",
    Description:
      "*NEW MODEL HILUX GR SPORT* PRICE INCLUDES VAT - 1 OWNER FROM NEW - ONLY 9K FROM NEW WITH SERVICE HISTORY - SAT NAV - REVERSE CAMERA - PARKING SENSORS - TOW BAR - DRIVES & PERFORMS SUPERB - FIRST TO SEE WILL BUY!! TRUSTED & APPROVED DEALER - VIEWING STRICTLY BY APPOINTMENT ONLY AS ALL CARS NOT ON SITE - UK DELIVERY AVAILABLE - INDOOR VIEWING AVAILABLE - FOR FINANCE OPTIONS PLEASE CALL US TODAY - MORE PICTURES AVAILABLE ON OUR WEBSITE. Private dealer appointments Practise social distancing and get a specific time to visit this dealer to enjoy a solo test drive",
    image:
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/23bb4b9c-c409-42ca-114d-65fb096ab700/86",
    carPrice: "£46,500.00",
    carLocation: "Bedford, Bedfordshire",
    Year: "2023",
  },
  {
    id: 24,
    images: [
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/43d997c7-8a31-4d7a-09aa-138e7ea9ac00/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/b6148377-0ef4-43fb-3a68-cddc00e10700/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/a2d1f4a7-23fe-4e75-75d0-7cb72a52a300/86",
    ],
    title:
      "2015 Toyota HI-LUX 2.5 ACTIVE 4X4 D-4D DCB 142 BHP All Terrain Diesel Manual",
    Company: "toyota",
    FuelType: "Diesel",
    Transmission: "Manual",
    BodyType: "Other",
    Description:
      "Welcome to WHS World in Sheffield. Here we present you with this Council owned from new, A/C, E/W, E/M, CD player, Traction control, R/C/L,2 x keys, PAS,5 x seats, Alloys, Tow pack, Ready for work. Low mileage. Comes serviced and MOTd Finance available Our family-run business prides itself on providing our customers with clean, reliable and well-maintained vehicles at affordable prices. Our friendly team are here to look after your every step of the way and will never give you the hard sell, they are happy to assist with any questions and understand that buying a vehicle can be a big commitment",
    image:
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/9e6394a9-ba38-4611-1f63-c7e2697d5400/86",
    carPrice: "£12,250.00",
    carLocation: "Sheffield, South Yorkshire",
    Year: "2015",
  },
  {
    id: 25,
    images: [
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/7f2bbec3-7d41-498f-1227-d5b088b83f00/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/2e903f1f-94ef-4ae7-a305-9552a7375a00/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/e2697797-0a8c-4129-f2e6-5f569ac6c600/86",
    ],
    title:
      "2019 Audi A4 Diesel Saloon 2.0 TDI 4dr (Start Stop) Saloon Diesel Manual",
    Company: "toyota",
    FuelType: "Diesel",
    Transmission: "Manual",
    BodyType: "Saloon",
    Description:
      "Audi A4 Diesel Saloon Finished in Black Specification Includes Exterior Features,Electric front windows with one touch drivers window,Green tinted glass,Heated rear window,Laminated rear window privacy glass,Variable front wipers,Black high over bar,Black side bar with steps,Body coloured front bumper,Chrome door handles,Chrome effect scuff plates,Chrome fog light surrounds,Chrome headlight surround,Chrome plated rear bumper,Chrome trim on radiator grille,Metallic paint,Mud flaps front and rear,Trailer sway control,Dusk sensitive lights,Electronic headlamp levelling,Follow me home headlights,Front fog lights,Headlight washers,LED Daytime running lights,LED headlights",
    image:
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/42b92022-31c6-4ee3-eae1-a3ea6609e200/86",
    carPrice: "£30,499.00 ",
    carLocation: "Longford, West Midlands",
    Year: "2019",
  },

  {
    id: 26,
    images: [
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/0868fdb0-e00a-41cd-1085-d46d33c6b700/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/f01e625b-cc4e-47a6-d742-d8677b61fc00/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/87635e4e-42c2-4670-f407-88e726384e00/86",
    ],
    title: "2016 Audi A3 1.4 TFSI S LINE 5d 148 BHP Hatchback Petrol Manual",
    Company: "audi",
    FuelType: "Petrol",
    Transmission: "Manual",
    BodyType: "Hatchback",
    Description:
      "AUDI S3 2.0 TFSI QUATTRO SALOON AUTOMATIC PETROL 2016 BLUE, IMMACULATE CONDITION, WELL MAINTAINED AND DRIVES VERY GOOD, DONE 139,000 MILES WITH FULL AUDI MAIN DEALER SERVICE HISTORY, LAST SERVICE DONE @ 138K, MOT EXPIRY MARCH 2024, SPARE KEYS, SAT NAVIGATION SYSTEM, BLACK LEATHER INTERIOR INTERIOR, ELECTRIC SEATS, HEATED SEATS, PARKING SENSORS, CRUISE CONTROL, ALL OUR CARS ARE INSPECTED AND COME WITH WARRANTY FOR YOUR PEACE OF MIND.NATIONWIDE DELIVERY SERVICE AVAILABLE.HMZ MOTORS, 35-51 Buxton Rd, Stockport, SK2 6LS",
    image:
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/0868fdb0-e00a-41cd-1085-d46d33c6b700/86",
    carPrice: "£15,949.00",
    carLocation: "Watford, Hertfordshire",
    Year: "2016",
  },
  {
    id: 27,
    images: [
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/5beaf3bf-d2f2-4747-d61e-f11238205300/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/4e787b01-4f44-482c-7fa0-13f363e46700/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/3252479b-2c5d-46a3-b318-4077057a6100/86",
    ],
    title: "2009, AUDI A3 TFSI SPORT Blue Manual Petrol",
    Company: "audi",
    FuelType: "Petrol",
    Transmission: "Manual",
    BodyType: "Convertible",
    Description:
      "AUDI A3 TFSI SPORT finished in Blue (Manual), 87,474 miles. Features include Six Speed Gearbox, Service History, Radio, Front Fog Lights, Electric Windows, Electric Roof, Electric Rear Windows, Electric Mirrors, CD Player, AUX Port, Alloy Wheels, Air Conditioning, Adjustable Steering Wheel.",
    image:
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/5beaf3bf-d2f2-4747-d61e-f11238205300/86",
    carPrice: "£5,195.00",
    carLocation: "Saltburn-by-the-Sea, North Yorkshire",
    Year: "2009",
  },
  {
    id: 28,
    images: [
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/b5b0a529-013e-4b90-031f-39f60d25f300/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/82b3e631-81f4-4b36-8130-01a30a38ee00/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/8f30d21e-e30d-4920-0471-4e57cbea2600/86",
    ],
    title:
      "STUNNING DIESEL CONVERTIBLE*£35 ROAD TAX 2012 Audi A3 Sport Tdi Cabriolet a4 a5 tt slk mx5 classic",
    Company: "audi",
    FuelType: "Petrol",
    Transmission: "Manual",
    BodyType: "Convertible",
    Description:
      "DIESEL*ONLY £35 ROAD TAX *CONVERTIBLE Look At This Absoulute Gem 2012 Audi A3 Sport Tdi Cabriolet 1598cc Finished In The Ultimate Colour Combination Pure White With A Totally Unmarked Black Mo Hair Roof With A Dark Sports Interior Sitting On A Real Nice Set Of Original Audi Multi Spoke Alloy Wheels One Touch Of A Button And The Electric Roof Folds Away Leaving You The Ultimate Four Seater Sports Car With Looks To Die For.",
    image:
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/b5b0a529-013e-4b90-031f-39f60d25f300/86",
    carPrice: "£4,995.00",
    carLocation: "Cregagh, Belfast",
    Year: "2012",
  },
  {
    id: 29,
    images: [
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/d3612fd9-b8f3-4c87-fe80-343013ad4800/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/cc129bb9-d87c-43f3-deb8-a847d00b3500/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/a3d360ae-dcb3-48da-ad60-a0e05e606d00/86",
    ],

    title: "2018 Audi A3 1.6 TDI SPORT 4d 114 BHP Saloon Diesel Manual",
    Company: "audi",
    FuelType: "Petrol",
    Transmission: "Manual",
    BodyType: "Saloon",
    Description:
      "Here at Orwell Motors we are delighted to offer for sale this lovely example 2 Owner from new Audi A3 1.6 TDI Sport finished in White with contrasting Black Leather Interior. This car comes with a Full Audi Service History and 2 Keys supplied. Spec for this car includes Automatic Climate Control, DAB Radio with Media Connection, Cruise Control, Multi-Function Steering Wheel, Satellite Navigation, Rear Parking Sensors and Bluetooth.",

    image:
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/d3612fd9-b8f3-4c87-fe80-343013ad4800/86",
    carPrice: "£16,699.00",
    carLocation: "Dunfermline, Fife",
    Year: "2018",
  },
  {
    id: 30,
    images: [
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/2022e850-c44c-4a5a-0e7f-f5a03a3f2200/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/19feefc2-943c-4830-8c62-f6151f9a7300/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/05186c58-1069-4fbc-810b-61125b162600/86",
    ],

    title:
      "2016 Audi A3 1.6 TDI 110 S Line 3dr [Nav] *CAMBELT DONE +SATNAV +BTOOTH +£20 TAX",
    Company: "audi",
    FuelType: "Petrol",
    Transmission: "Manual",
    BodyType: "Hatchback",
    Description:
      "YES GENUINE LOW MILEAGE EXAMPLE!! 4 EXCELLENT TYRES, UPGRADED 18 INCH S-LINE ALLOYS JUST PROFESSIONALLY REFURBISHED, SATNAV, TELEPHONE BLUETOOTH, CLIMATE CONTROL, HEATED ELECTRIC MIRRORS, S LINE FLAT BOTTOM STEERING WHEEL, SAME OWNER LAST 5 YEARS, JUST SERVICED AND HAD A CAMBELT KIT BY OURSELVES, MOT 09/JULY/2024 (NO ADVISORIES) £20 ROAD TAX, ECONOMICAL, SPORTY, IDEAL ALL ROUND CAR, READY TO DRIVE AWAY TODAY!!*PROFESSIONALLY DISINFECTED* COMPREHENSIVE WARRANTY*FINANCE AVAILABLE 2 Keys, HPi Clear, Drives Perfectly, Looks Stunning, Test Drive Welcome, Ready To Drive Away Today!Over 25 Years Experience In The Industry - Please Read Our Customer ReviewsPX AVAILABLEFINANCE AVAILABLEDRIVE AWAY INSURANCE AVAILABLECREDIT+DEBIT CARDS ACCEPTED*(terms and conditions apply)Every effort has been made to ensure the accuracy of the above information but errors may occur. Please check with a salesperson.",

    image:
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/2022e850-c44c-4a5a-0e7f-f5a03a3f2200/86",
    carPrice: "£13,990.00",
    carLocation: "Bredbury, Manchester",
    Year: "2016",
  },
  {
    id: 31,
    images: [
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/83696754-f137-4923-4f3c-aa4abc4d8100/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/aa69e5f9-5aee-4668-c858-8fcc03350000/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/d881a3b5-4396-41b5-0e92-75c5a6a55e00/86",
    ],

    title:
      "2015 Audi RX 2.0 TFSI Sportback S Tronic quattro Euro 6 (s/s) 5dr (Nav) HATCHBAC",
    Company: "audi",
    FuelType: "Petrol",
    Transmission: "Automatic",
    BodyType: "Hatchback",
    Description:
      "FREE DELIVERY WITHIN 200MILES - Here we have a Stunning Audi S3 S Tronic Finished in Daytona Grey Pearl Effect Paint with Black Fine Nappa Leather interior. Standard equipment is understandably good for a top of the range model with climate control, xenon headlights, sports suspension as well as a seven-inch infotainment with a DAB digital radio.",

    image:
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/83696754-f137-4923-4f3c-aa4abc4d8100/86",
    carPrice: "£20,000.00",
    carLocation: "Coalville, Leicestershire",
    Year: "2015",
  },
  {
    id: 32,
    images: [
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/b7568a3f-90b1-46c5-d0ed-aaa902454300/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/842343b5-88df-41de-ccd0-04d55d8f3500/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/75f87ec1-d2d8-48fa-8c77-07efabc08700/86",
    ],

    title: "2011 Audi A3 1.6 MPI TECHNIK 3d 101 BHP Hatchback Petrol Manual",
    Company: "audi",
    FuelType: "Petrol",
    Transmission: "Manual",
    BodyType: "Hatchback",
    Description:
      "Hitchfields presents a 2011 Audi A3 MPI Technik 1.6L Petrol in Glacier White. This vehicle has plenty of Service-History. As well as this, this vehicle has a valid MOT until 21st July 2024. Our cars are offered with a 24 Month Industry Leading Parts and Labour Warranty (subject to terms and conditions) that can be used at any VAT Registered Garage Nationwide. This Audi A3 comes with 17 Alloy Wheels, Anti Slip Regulation, Electronic Brakeforce Distribution, Electronic Stability Programme, Multifunctional Steering Wheel, AUX Import and a CD Player. Not only this but this vehicle has had two previous owners and has GBP240 Road Tax.",

    image:
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/5ea9ceb4-e898-4f8e-c1b9-ecf4568aaf00/86",
    carPrice: "£4,880.00",
    carLocation: "Huddersfield, West Yorkshire",
    Year: "2011",
  },
  {
    id: 33,
    images: [
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/60593538-0a98-4a66-ebcb-99174dfbed00/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/79b8a7e7-89fc-446e-6613-ea3ed0abbe00/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/c816adef-343e-4f8a-fe6e-e3c67e316d00/86",
    ],

    title: "2014 Audi A3 1.6 TDI S LINE 3d 104 BHP Hatchback Diesel Manual",
    Company: "audi",
    FuelType: "Petrol",
    Transmission: "Manual",
    BodyType: "Hatchback",
    Description:
      "At Autovenue were dedicated to offering an excellent customer experience. All of our vehicles come with a 3 month guarantee, our market leading price promise, are HPI clear and undergo safety checks by our fully qualified in-house technicians for added peace of mind. 01633 855855 2 Minutes off M4 Junction 25a [Website URL removed] /* terms apply ask for details-- .3 MONTH GUARANTEE, EXTENDED WARRANTY AVAILABLE, LED XENON LIGHTS, CAMBELT REPLACED, Acoustic parking system - rear, Cruise control, Audi drive select, Colour drivers information system display, Electro-mechanical PAS, Low washer fluid indicator, Service interval indicator, Voice control system, Anti-theft wheel bolts, Remote control central locking.",

    image:
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/60593538-0a98-4a66-ebcb-99174dfbed00/86",
    carPrice: "£9,990.00",
    carLocation: "Newport",
    Year: "2014",
  },
  {
    id: 34,
    images: [
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/85d4ef81-eba0-49ee-efbb-ca2c246df000/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/6abc1b09-e8de-4299-41c6-d642d7355c00/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/cb826778-3c20-4bbd-100c-ba5ff4552300/86",
    ],

    title: "2016 Audi A3 TDI Sport Hatchback Diesel Manual",
    Company: "audi",
    FuelType: "Petrol",
    Transmission: "Manual",
    BodyType: "Hatchback",
    Description:
      "Metallic blue, £20 Road tax, satellite navigation, climate control, 17 inch, alloy wheels, diesel, only two registered keepers with Service History, Retail cars come with a minimum of 6 months MOT. We can provide a full MOT as we have our own workshop and MOT station on site. We use 3rd party sources to obtain detailed Standard and Optional specifications. We cannot be held liable for the accuracy of this information.",

    image:
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/85d4ef81-eba0-49ee-efbb-ca2c246df000/86",
    carPrice: "£9,279.00",
    carLocation: "Derby, Derbyshire",
    Year: "2016",
  },
  {
    id: 35,
    images: [
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/d70a5ced-8c6d-467a-e7dc-26672979e200/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/a7d6f37b-013f-4385-f2e2-31e988a8e600/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/411eba4a-7650-4fc3-08fb-90742e528800/86",
    ],

    title:
      "2008 Audi A3 2.0 TFSI S line S Tronic quattro Euro 4 3dr HATCHBACK Petrol Automa",
    Company: "audi",
    FuelType: "Petrol",
    Transmission: "Automatic",
    BodyType: "Hatchback",
    Description:
      "DELIVERY, FINANCE AND PART EXCHANGE AVAILABLE. Finished in metallic black, comes with a 12 months MOT that is valid until AUGUST 2024 and has lovely 17 inch alloys to match the cars bodywork. This car also comes with a full service history and 2 keys. Overall a well mantained car that drives absolutely superb! Features: Split - Folding Rear Seats (1/3,2/3 or All), Heated Rear Windscreen, Upholstery - Frequency Fabric Cloth, Electric Front Windows, 3 - Spoke Leather Steering Wheel, Digital Air Conditioning, Concert Single Front - Loading CD Player with MP3 File Compatibility, AUX - IN Socket, Steering Wheel Adjustable for Height and Reach, Remote Central Locking, Anti - Slip Regulation (ASR), Anti-Lock Brake System (ABS), Centre Rear Seat Belt, Electronic Brake - Force Distribution (EBD), Electronic Differential Lock (EDL), Space Saving Spare Wheel, Driver Information System DIS and Granit, Umbra or Opal Inlays and Door Trim. Any inspection welcome.",

    image:
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/d70a5ced-8c6d-467a-e7dc-26672979e200/86",
    carPrice: "£6,395.00",
    carLocation: "South East London, London",
    Year: "2008",
  },
  {
    id: 35,
    images: [
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/cf497340-82e6-4bf8-ddd8-8940ab5a0200/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/8a97dae3-f161-45b9-65c2-68db045b5a00/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/72e296bc-d534-4602-fc63-83cab5953600/86",
    ],

    title: "Audi A3 S Line",
    Company: "audi",
    FuelType: "Petrol",
    Transmission: "Manual",
    BodyType: "Hatchback",
    Description:
      "I've had this car for 3 and a half years and never had any major issues. This is a really good, reliable car and would be perfect for someone who wants a decent car without spending a fortune.",

    image:
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/81d00557-c52a-4313-9c8d-d8bb8f0f0f00/86",
    carPrice: "£1,600.00",
    carLocation: "Billingham, County Durham",
    Year: "2009",
  },
  {
    id: 36,
    images: [
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/1656d086-1e73-464d-a674-aca553340800/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/239fa1d4-a263-4849-ffdd-4275f0e6d000/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/199d3d0c-77d2-40b6-cd5c-22b1384fe800/86",
    ],

    title:
      "2021 Audi A3 Audi A3 Sportback 30 1.0 TFSI 110 S line 5dr Comfort & Sound Pack H",
    Company: "audi",
    FuelType: "Petrol",
    Transmission: "Manual",
    BodyType: "Hatchback",
    Description:
      "12v Socket and Storage Compartment in Front Centre Console,18in Alloy Wheels - 5-Arm Dynamic Design,2 USB-C Ports with Charge and Data Functions,6 Passive Loudspeakers,Airbags - Driver and Front Passenger with Passenger Airbag Deactivtion,Aluminium Interior Elements,Aluminium Window Trims,Anti Theft Locking Wheel Bolts,Anti-Theft Alarm,Audi Connect Emergency Call and Service,Audi Connect Navigation and Infotainment Services Plus - 3 Year Subscription,Audi Drive Select,Audi Pre-Sense Front with Pedestrian and Cyclist Recognition,Audi Smartphone Interface,Audi Virtual Cockpit,Auto Dimming and Frameless Rear View Mirror,Automatic Start-Stop System with Recuperation,Bluetooth Interface.",

    image:
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/1656d086-1e73-464d-a674-aca553340800/86",
    carPrice: "£22,999.00",
    carLocation: "Cannock, Staffordshire",
    Year: "2021",
  },
  {
    id: 37,
    images: [
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/d0226147-0487-476b-9f6c-b255da224000/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/19cf29b6-585d-4c9e-e6de-91cdf7d8f000/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/9784d19c-2c1d-44df-747f-34346acb1100/86",
    ],

    title:
      "2017 Audi A3 1.5 TFSI CoD S line S Tronic Euro 6 (s/s) 4dr SALOON Petrol Automat",
    Company: "audi",
    FuelType: "Petrol",
    Transmission: "Automatic",
    BodyType: "Saloon",
    Description:
      "?? AA Approved Dealer. ?? Trading Standards Approved ??30 Days Warranty. ??12 Months Free AA Breakdown Cover?? Drive Away Insurance GBP29.95. ?? Finance AvailableWOW ! What A Stunning Machine - Real Head Turner In This Bright Metallic Red With Red Callipers To Match - 18'' Black 5 Twin Spoke Alloys With New Disks & Pads All Round - Full Black Leather Seats With S Embossed & Grey Stitching - Fully Automatic With Drive Select - Sat Nav - Parking Sensors - Cruise Control & So Much More So Check Out The Spec List Below - Low Running Costs On This Euro 6 ULEZ Compliant Audi With Only GBP30 For Full Years Road Tax -Low Mileage Too With Only 37k On The Clock - Comes With Minimum 6 Months MOT - 30 Days Parts & Labour Warranty Included - 12 Months Free AA Breakdown Cover Included Too - Call & Secure This Car Today 18in Alloy Wheels - 5-Parallel Spoke Design with Diamond Cut Finish, 2 x USB Charging Ports and 1 x AUX-IN.",

    image:
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/e14f3b43-2305-4466-4c66-6921bd752900/86",
    carPrice: "£18,495.00",
    carLocation: "Armadale, West Lothian",
    Year: "2017",
  },
  {
    id: 38,
    images: [
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/af1e1cee-0999-457b-7f0e-84be746a4d00/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/c567095d-30d8-4d23-8fa6-d92b273d5800/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/40c0d61f-9a2d-4b35-26c3-52ae5bb57b00/86",
    ],

    title:
      "2020 Audi A3 2.0 SPORTBACK TDI S LINE 5d 148 BHP Cruise Control, DAB Digital Rad",
    Company: "audi",
    FuelType: "Petrol",
    Transmission: "Automatic",
    BodyType: "Hatchback",
    Description:
      "This stunning A3 comes in the S Line trim and is paired with a Daytona Grey Pearl Effect exterior. The car is equipped with Rear Parking Sensors, 18-Inch 5 Parallel Spoke Design Alloy Wheels, Cruise Control, DAB Digital Radio, Electric Windows, Voice Control System, LED Interior Light Pack, Audi Sound System and Audi Smartphone Interface. The UK Car Supermarket of the Year for two years running, we offer 0% finance, part exchange and up to six years' warranty on all cars. - see our website for more details.",

    image:
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/af1e1cee-0999-457b-7f0e-84be746a4d00/86",
    carPrice: "£19,299.00",
    carLocation: "Rochdale, Manchester",
    Year: "2020",
  },
  {
    id: 39,
    images: [
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/5f672c7f-7ff9-416a-1e40-4c4595c50b00/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/e55fcd44-55ac-4cc8-630a-aa4631e11100/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/725ed81e-10f5-47d1-58c2-14a3efbb5a00/86",
    ],

    title:
      "2017 Audi RX 2.0 TFSI S Tronic quattro Euro 6 (s/s) 4dr SALOON Petrol Automatic",
    Company: "audi",
    FuelType: "Petrol",
    Transmission: "Automatic",
    BodyType: "Saloon",
    Description:
      "Wynford Specialist Motors Are Pleased To Offer This Audi S3 2.0 TFSI S Tronic quattro Euro 6 (s/s) 4dr Finished In Metallic Blue, Complete With 2 Keys Full Service History, Long Mot, Very Clean Inside & Out Great Spec, Super Sport Bucket Seats, Mag Ride , Tilt & Slide Panoramic Sunroof, Tech Pack , Reverse Camera, Front & Rear Parking Sensors, 19 “ Genuine V Spoke Alloy Wheels, Rear Privacy Glass, Auto Xenon Headlights, Dynamic Rear Tail Lights, F1 Multifunction Flat Bottom Steering Wheel, Nationwide Delivery Service Available, Indoor Viewing, Finance Available. 19in Alloy Wheels - 5 Twin Spoke Star Design in Contrast Grey with Diamond Cut Finish, 2 x USB Charging Ports and 1 x AUX-IN, Aluminium Interior Elements, Anti-Theft Alarm, Audi Connect Infotainment Services - 3 Month Trial, Audi Drive Select, Audi Magnetic Ride, Audi Smartphone Interface, Audi Sound System, Bluetooth Interface, Cruise Control, DAB Digital Radio, Door Mirrors - Electrically Adjustable and Heated with Integrated LED Side Indicators, Dual-Zone Electronic Climate Control, ESC - Electronic Stabilisation Control inc ABS - ASR and EDL, Electromechanical Parking Brake, First Aid Kit.",

    image:
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/19ed62f5-f0a5-4407-7284-6d8af13e2700/86",
    carPrice: "£24,950.00",
    carLocation: "Tile Cross, West Midlands",
    Year: "2017",
  },

  {
    id: 40,
    images: [
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/d1da327e-7200-4c74-dfe0-96854150c500/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/8136d2f7-b0ee-450f-b1cc-77d686c4f000/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/4a186d03-bf6e-4f60-a27f-b82edde99a00/86",
    ],

    title: "2018 18 HONDA CIVIC 1.5 VTEC SPORT 5D 180 BHP",

    Company: "honda",

    FuelType: "Petrol",

    Transmission: "Automatic",

    BodyType: "Hatchback",

    Description:
      "Service history - Serviced @ 8k, 24k, 38k, 47k and 52k (01/23). DELIVERY AVAILABLE. Since 1985, We at Corner Park Garages have always put our customers first. With two sites in Llantrisant and Swansea, and an extensive range of over 500 top quality used cars, all price checked and AA Inspected. With over 600 verified reviews on Feefo, we are proud of our reputation as a dealer you can trust. See our website for details.",

    image:
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/02293ae1-0fb5-4df5-63fb-be9ef3680500/86",

    carPrice: "£14,699.00",

    carLocation: "Dunfermline, Fife",

    Year: "2018",
  },
  {
    id: 41,
    images: [
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/9771662f-f17a-45df-e40f-f4aadadb9200/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/c329d997-19d9-4992-c608-cbd6a5966700/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/49cdfd79-db3e-4890-2d93-a55e40223100/86",
    ],

    title: "Honda, CIVIC, Hatchback, 2009, Manual, 1799 (cc), 5 doors",

    Company: "honda",

    FuelType: "Petrol",

    Transmission: "Manual",

    BodyType: "Hatchback",

    Description:
      "Panoramic roof Cruise control Parking sensors Alloy wheels  Good condition, inside and outThis well-maintained Honda Civic is in great condition and has beenregularly serviced. It has all the features you need for a comfortable and enjoyable drive, including a panoramic roof,cruise control, and parking sensors. The alloy wheels add a touch of style, and the mileage. New Battery and New brake discs this year",

    image:
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/9771662f-f17a-45df-e40f-f4aadadb9200/86",

    carPrice: "£2,000.00",

    carLocation: "Enfield, London",

    Year: "2009",
  },
  {
    id: 42,
    images: [
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/ddbcb17c-5d5c-4681-4d55-860dfa52ea00/86",

      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/cec20d4d-eb33-442e-5064-8dfd0a273900/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/3a0cb2a7-da47-47ae-e798-223f4be23600/86",
    ],

    title: "2009 Honda Civic 1.4 i-VTEC Type S 3dr HATCHBACK Petrol Manual",

    Company: "honda",

    FuelType: "Petrol",

    Transmission: "Manual",

    BodyType: "Hatchback",

    Description:
      "Please Please Read Complete Add before Calling or Visiting us--- ULEZ Compliant---Registered Sep2009--- Excellent Drive---Beautiful Interior---Carefully Maintained---HPI cleared---Warranted mileage---Any Inspection / Part Ex Welcome---PLEASE BRING PHOTO ID---VIEWING BY APPOINTMENT ONLY---Our sale policy is STRICTLY FIRST Come FIRST Serve---Please Do NOT send us text SMS / EMAIL as it is not regularly monitored---NO Admin Charges if you pay by Currency Money or BANK TRANSFER / BACS NO charges---NO Price / PartX Negotiations on phone / email please---For Health and Safety of young and beautiful children, kindly try not to bring them with you",

    image:
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/ddbcb17c-5d5c-4681-4d55-860dfa52ea00/86",

    carPrice: "£3,189.00",

    carLocation: "Wembley, London",

    Year: "2009",
  },
  {
    id: 43,
    images: [
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/b1e72bab-9162-40c4-94ab-7bc76b650e00/86",

      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/85fea48e-8e11-4913-d92b-c8b3b736fb00/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/891f2e6d-a5d5-4e8a-181c-b8ee889ff800/86",
    ],

    title:
      "Sport Model Civic Diesel Type S Swede Leather Cd Changer Cruise 17 Alloys low profile Sport Tyers",

    Company: "honda",

    FuelType: "Diesel",

    Transmission: "Manual",

    BodyType: "Hatchback",

    Description:
      "3Door Manual stuning Diesel Sport car,The Honda Civic has bulletproof build quality,Sport Model Type S,You can feel sport car when you drive,All modern laxury cars facility(leather Interior, Crouise Control,CD Changer,Sun roof, Audio Control Steering, 17 Inch Alloy wheel,Low profileTyres Panaromic roof Etc Etc) available in this car",

    image:
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/b1e72bab-9162-40c4-94ab-7bc76b650e00/86",

    carPrice: "£2,595.00",

    carLocation: "Southside, Glasgow",

    Year: "2008",
  },
  {
    id: 44,
    images: [
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/618e3f98-517a-43d7-562f-90f86565b900/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/56b0d0a4-5cfb-45cb-06dc-c1238ed3ba00/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/e0e93a3d-8d5a-40b1-de98-791bf3558b00/86",
    ],

    title: "2016 65 HONDA CIVIC 1.8 I-VTEC SR 5D 140 BHP PETROL MANUAL",

    Company: "honda",

    FuelType: "Petrol",

    Transmission: "Manual",

    BodyType: "Hatchback",

    Description:
      "We are pleased to offer for sale this lovely Honda Civic with only 52000 miles on the clock. It comes to HPI clear with 1 Owner From New and Service History. It has been serviced at 20k, 30k, 37k, 39k, and 52k. Next MOT due 02/09/2024, Last serviced at 51,969 miles. We welcome any inspection in person and are open 7 days a week to accommodate everyone. If you have any questions before coming to see us then do not hesitate to call us at 01256816715 or email us at [Email address removed",

    image:
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/618e3f98-517a-43d7-562f-90f86565b900/86",

    carPrice: "£11,700.00",

    carLocation: "Basingstoke, Hampshire",

    Year: "2016",
  },
  {
    id: 45,
    images: [
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/0ffdcb78-aa89-4c3e-28b9-8668fb125300/86",

      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/85dc102d-72e3-4de5-c250-734843b28900/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/b0fcfa96-021d-4c5e-0d85-91d90f766800/86",
    ],

    title:
      "2005 05 REG HONDA CIVIC TYPE R 197 BHP 2.0 EP3 MODEL, MANUAL, HPi, ULEZ FREE",

    Company: "honda",

    FuelType: "Petrol",

    Transmission: "Manual",

    BodyType: "Hatchback",

    Description:
      "We are pleased to offer for sale this lovely Honda Civic with only 52000 miles on the clock. It comes to HPI clear with 1 Owner From New and Service History. It has been serviced at 20k, 30k, 37k, 39k, and 52k. Next MOT due 02/09/2024, Last serviced at 51,969 miles. We welcome any inspection in person and are open 7 days a week to accommodate everyone. If you have any questions before coming to see us then do not hesitate to call us at 01256816715 or email us at [Email address removed",

    image:
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/0ffdcb78-aa89-4c3e-28b9-8668fb125300/86",

    carPrice: "£4,999.00",

    carLocation: "Redbridge, London",

    Year: "2005",
  },
  {
    id: 46,
    images: [
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/fd2f2d95-63c7-48c3-22d1-7f4bf7a94100/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/a54223f7-b052-4e95-49bf-8e7028f4e600/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/167eacb1-7a65-405e-5262-92936ccf6a00/86",
    ],

    title: "2020 Honda Civic 1.0 VTEC TURBO SE 5-Door Hatchback Petrol Manual",

    Company: "honda",

    FuelType: "Petrol",

    Transmission: "Manual",

    BodyType: "Hatchback",

    Description:
      "Monitor audio (AM/FM), Adaptive cruise control, Adaptive motion for electric power steering, Blue dashboard illumination, Bluetooth hands free telephone connection, Easy fuel capless refuelling system, Economy mode, Electric power steering wheel with variable gear ratio steering, Emergency stop signalling system, Forward collision warning, Idle stop, Intelligent speed limiter, Lane departure warning system, Lane keep assist, Multi-information display, Road departure mitigation, Traffic sign recognition, Vehicle stability assist, 'Shark fin' mobile antenna, 180w Power audio system, 8 speakers, Auxiliary socket for external MP3 player, Digital Audio Broadcast (DAB) Tuner, Steering wheel mounted audio controls, USB port, Automatic coming/leaving home lighting function.",

    image:
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/fd2f2d95-63c7-48c3-22d1-7f4bf7a94100/86",

    carPrice: "£4,600.00",

    carLocation: "Cardiff",

    Year: "2005",
  },
  {
    id: 47,
    images: [
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/66056c8f-9def-48c2-6069-f55c8ca68400/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/85dc102d-72e3-4de5-c250-734843b28900/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/b0fcfa96-021d-4c5e-0d85-91d90f766800/86",
    ],

    title: "2018 Honda Civic 1.5 VTEC PRESTIGE 5d 180 BHP Hatchback Petrol",

    Company: "honda",

    FuelType: "Petrol",

    Transmission: "Manual",

    BodyType: "Hatchback",

    Description:
      "Introducing the Civic 1.5 VTEC Turbo Prestige 5dr 2018 model, a sleek and sophisticated compact car that combines impressive performance, advanced features, and luxurious comfort. With its powerful engine, modern design, and innovative technology, this car offers a premium driving experience. Under the hood, the Civic Prestige is powered by a turbocharged 1.5-liter VTEC engine, delivering a thrilling balance of power and efficiency. This engine offers responsive acceleration and dynamic performance, making it an exciting car to drive. The Civics refined suspension and precise handling further enhance the driving experience. Step inside the cabin of the Civic Prestige and experience a luxurious and well-appointed interior. The high-quality materials, ergonomic design, and attention to detail create a comfortable and sophisticated atmosphere.",

    image:
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/66056c8f-9def-48c2-6069-f55c8ca68400/86",

    carPrice: "£4,600.00",

    carLocation: "Hilton, Derbyshire",

    Year: "20018",
  },
  {
    id: 48,
    images: [
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/66056c8f-9def-48c2-6069-f55c8ca68400/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/85dc102d-72e3-4de5-c250-734843b28900/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/b0fcfa96-021d-4c5e-0d85-91d90f766800/86",
    ],

    title:
      "2005 05 REG HONDA CIVIC TYPE R 197 BHP 2.0 EP3 MODEL, MANUAL, HPi, ULEZ FREE",

    Company: "honda",

    FuelType: "Petrol",

    Transmission: "Manual",

    BodyType: "Hatchback",

    Description:
      "Introducing the Civic 1.5 VTEC Turbo Prestige 5dr 2018 model, a sleek and sophisticated compact car that combines impressive performance, advanced features, and luxurious comfort. With its powerful engine, modern design, and innovative technology, this car offers a premium driving experience. Under the hood, the Civic Prestige is powered by a turbocharged 1.5-liter VTEC engine, delivering a thrilling balance of power and efficiency. This engine offers responsive acceleration and dynamic performance, making it an exciting car to drive. The Civics refined suspension and precise handling further enhance the driving experience. Step inside the cabin of the Civic Prestige and experience a luxurious and well-appointed interior",

    image:
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/66056c8f-9def-48c2-6069-f55c8ca68400/86",

    carPrice: "£4,600.00",

    carLocation: "Cardiff",

    Year: "2005",
  },
  {
    id: 49,
    images: [
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/f3173623-0038-47d6-15cb-6c8314f1c300/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/1a6ef552-dd92-416e-743b-52165462c300/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/03a4c55b-338b-4bf8-55aa-0253db0ad700/86",
    ],

    title: "HONDA CIVIC VTEC AUTOMATIC",

    Company: "honda",

    FuelType: "Petrol",

    Transmission: "Manual",

    BodyType: "Hatchback",

    Description:
      "HONDA CIVIC VTEC EXECUTIVE AUTO -START AND DRIVER PERFECT-143K MILES-AUTOMATIC-ULEZ COMPPLIANT-FULL SERVICE HISTORY-2 KEYS-ENGINE & GERBOX MINT-NO ISSUE AT ALL WIT THE CAR!-PANORAMIC SUNROOF-THE CAR IS IN GOOD CONDITION INSIDE OUTSIDE FOR ITS AGE START AND DRIVE NICE PULLS NICE IN ALL GEARS FOR ANY MORE INFORMATION INBOX ME THANKS!!",

    image:
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/f3173623-0038-47d6-15cb-6c8314f1c300/86",

    carPrice: "£1,395.00",

    carLocation: "Nottingham City Centre, Nottinghamshire",

    Year: "2004",
  },
  {
    id: 50,
    images: [
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/f1902dcd-7757-4fae-a72d-f6cbf45cc700",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/03a4c55b-338b-4bf8-55aa-0253db0ad700/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/c11da27a-f0ad-4acd-a3b2-1deeb3a47300/86",
    ],

    title: "2019 BLUE HONDA CIVIC 1.6 i-DTEC NAV EX 5DR HATCH CAR FINANCE FR",

    Company: "honda",

    FuelType: "Petrol",

    Transmission: "Manual",

    BodyType: "Hatchback",

    Description:
      "HONDA CIVIC VTEC EXECUTIVE AUTO -START AND DRIVER PERFECT-143K MILES-AUTOMATIC-ULEZ COMPPLIANT-FULL SERVICE HISTORY-2 KEYS-ENGINE & GERBOX MINT-NO ISSUE AT ALL WIT THE CAR!-PANORAMIC SUNROOF-THE CAR IS IN GOOD CONDITION INSIDE OUTSIDE FOR ITS AGE START AND DRIVE NICE PULLS NICE IN ALL GEARS FOR ANY MORE INFORMATION INBOX ME THANKS!!",

    image:
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/f1902dcd-7757-4fae-a72d-f6cbf45cc700/86",

    carPrice: "£13,995.00",

    carLocation: "Warrington, Cheshire",

    Year: "2019",
  },
  {
    id: 51,
    images: [
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/3d4fecb6-02c7-4d2d-151e-06ec66a5bf00/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/3ccf51a8-452e-49e6-d800-8b9b6147e700/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/5ca9dcf5-b4c0-4d38-5d5e-98964fef6600/86",
    ],

    title: "2019 BLUE HONDA CIVIC 1.6 i-DTEC NAV EX 5DR HATCH CAR FINANCE FR",

    Company: "honda",

    FuelType: "Petrol",

    Transmission: "Manual",

    BodyType: "Hatchback",

    Description:
      "We At Radley Motor Company, Are Proud To Offer You This Stunning 2015 (65) Honda Civic 2.0 i-VTEC Type R Euro 6 (s/s) 5dr Having Covered 55000 miles.",

    image:
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/3d4fecb6-02c7-4d2d-151e-06ec66a5bf00/86",

    carPrice: "£19,450.00",

    carLocation: "Sheldon, West Midlands",

    Year: "2019",
  },
  {
    id: 52,

    images: [
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/3c7bd38a-7111-42e2-befb-edca515c1800/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/7e2c59f2-22a5-44e1-40f8-afaba1c50c00/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/dd1cd44e-7131-4155-8744-c61c4c905900/86",
    ],

    title: "2018 Honda Civic 1.6 i-DTEC EX 5dr HATCHBACK Diesel Manual",

    Company: "honda",

    FuelType: "Diesel",

    Transmission: "Manual",

    BodyType: "Hatchback",

    Description:
      "Service History (Last Stamp At 41k) - The Civic Is Now Even More Advanced & Sporty - With Smart New Looks, Innovative Technology & Fun - Finished In Lunar Silver Metallic Paint Which Enhances The Lines And Contours Of This Civic's Body - As You Step Inside You'll Discover An Impressive Array Of Technology, Including GPS Satellite Navigation System, Apple CarPlay, Android Auto, Collision Warning System, Keyless Entry, Keyless Start, Radar-Type Reverse Parking Sensors, Rear Assist Camera With Colour Display, Cruise Control, Rain Sensing Windscreen Wipers, Lane Departure Warning System, Radar Guided Adaptive Cruise Control, Automatic Headlights With Dusk Sensor, Collision Warning System Including Driver Monitor. Keep Everyone Onboard Entertained Thanks To Features Such As 7.0 inch Touchscreen Multi-Function Display Screen, Voice Control For Media Functions, Bluetooth Wireless SmartPhone Connectivity. Relax In The Ultimate Comfort Thanks",

    image:
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/f1902dcd-7757-4fae-a72d-f6cbf45cc700/86",

    carPrice: "£13,995.00",

    carLocation: "Weston-super-Mare, Somerset",

    Year: "2018",
  },
  {
    id: 64,
    images: [
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/a4f00f6b-7173-4b5b-0771-aca7f5362200/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/36c4910b-e708-4d0d-790d-964873428700/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/6dd5e8bb-bec1-4d7d-ef95-576b866c7700/86",
    ],

    title: "Volkswagen Polo 2011 Silver 1.2 Match Euro 5 3dr",
    Company: "volkswagen",
    FuelType: "Petrol",
    Transmission: "Manual",
    BodyType: "Hatchback",
    Description:
      "Clifton Car Sales are proud to continue their 30 years of providing a terrific choice of carefully sourced vehicles, in addition to a level of service and care seldom experienced anywhere - we want to help and make your car buying experience one to remember. Please call us on 01670 514488 or use the email link for any questions you may have and were also pleased to inform you that we don't add an unnecessary buying/administration fee - our good old fashioned, quality service is free of charge.",
    image:
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/a4f00f6b-7173-4b5b-0771-aca7f5362200/86",

    carPrice: "£8,000.00",
    carLocation: "Crowland, Cambridgeshire",
    Year: "2019",
  },
  {
    id: 65,
    images: [
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/6ea76ac6-76a5-4ec6-efb9-c510d0256f00/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/7356757a-38ed-408f-3942-f9a592f25900/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/c565b097-7b91-4582-17d3-64bbafbc7500/86",
    ],
    title: "2004 Volkswagen Polo 1.4 Twist 5dr Auto HATCHBACK Petrol Automatic",
    Company: "volkswagen",
    FuelType: "Petrol",
    Transmission: "Manual",
    BodyType: "Hatchback",
    Description:
      "Clifton Car Sales are proud to continue their 30 years of providing a terrific choice of carefully sourced vehicles, in addition to a level of service and care seldom experienced anywhere - we want to help and make your car buying experience one to remember. Please call us on 01670 514488 or use the email link for any questions you may have and were also pleased to inform you that we don't add an unnecessary buying/administration fee - our good old fashioned, quality service is free of charge.",
    image:
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/6ea76ac6-76a5-4ec6-efb9-c510d0256f00/86",
    carPrice: "£6,345.00",
    carLocation: "Dunfermline, Fife",
    Year: "2014",
  },
  {
    id: 66,
    images: [
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/9d32ed0b-30a1-43ff-3c1e-6e322fb3ff00/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/ca67109b-7778-4732-b5df-af18362d6600/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/998e8938-41fc-432a-bc20-a6f23079d100/86",
    ],
    title:
      "VW POLO 1.2 60 MODA 5dr Petrol ULEZ Exempt S/H Long MOT Small Petrol Hot Hatch ",
    Company: "volkswagen",
    FuelType: "Petrol",
    Transmission: "Manual",
    BodyType: "Hatchback",
    Description:
      "FANTASTIC LOOKING AND DRIVING CAR WHICH COMES WITH A MASSIVE SPEC INCLUDING; SAT NAV, REVERSE CAMERA, FRONT AND REAR PARKING SENSORS, BLUETOOTH, MEDIA AND A FULL 8 STAMP SERVICE RECORD..16in Alloy Wheels, Door Mirrors - Electric-Retractable, Electric Windows - Front and Rear, Electric Windows - Remote Key Fob, Keyless Tailgate Unlock Function, Tailgate Windows Tinted, Tyre Repair Kit, 2x USB Jack and HDMI Jack, Accessory Socket - Front, Accessory Socket - Instrument Panel, Accessory Socket - Luggage Compartment, Aha - App Integration, Bluetooth Hands Free Telephone - HFT, CD-Radio, CONNECT, Cruise Control and care seldom experienced anywhere - we want to help and make your car buying experience one to remember. Please call us on 01670 514488 or use the email link for any questions you may have and were also pleased to inform you that we don't add an unnecessary buying/administration fee - our good old fashioned, quality service is free of charge.",
    image:
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/9d32ed0b-30a1-43ff-3c1e-6e322fb3ff00/86",

    carPrice: "£8,995.00",
    carLocation: "Dunfermline, Fife",
    Year: "2017",
  },

  {
    id: 67,
    images: [
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/16ed01d7-3c0e-4b66-17a2-82e193f56b00/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/52a4a1ec-a2c3-47ae-2cd9-773976beb600/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/1bd1ec3b-989d-4454-5c7a-2d210c602600/86",
    ],

    title:
      "2011 Volkswagen Polo MATCH 5-Door NATIONWIDE DELIVERY AVAILABLE Petrol ",
    Company: "volkswagen",
    FuelType: "Petrol",
    Transmission: "Manual",
    BodyType: "Hatchback",
    Description:
      "FANTASTIC LOOKING AND DRIVING CAR WHICH COMES WITH A MASSIVE SPEC INCLUDING; SAT NAV, REVERSE CAMERA, FRONT AND REAR PARKING SENSORS, BLUETOOTH, MEDIA AND A FULL 8 STAMP SERVICE RECORD..16in Alloy Wheels, Door Mirrors - Electric-Retractable, Electric Windows - Front and Rear, Electric Windows - Remote Key Fob, Keyless Tailgate Unlock Function, Tailgate Windows Tinted, Tyre Repair Kit, 2x USB Jack and HDMI Jack, Accessory Socket - Front, Accessory Socket - Instrument Panel, Accessory Socket - Luggage Compartment, Aha - App Integration, Bluetooth Hands Free Telephone - HFT, CD-Radio, CONNECT, Cruise Control and care seldom experienced anywhere - we want to help and make your car buying experience one to remember. Please call us on 01670 514488 or use the email link for any questions you may have and were also pleased to inform you that we don't add an unnecessary buying/administration fee - our good old fashioned, quality service is free of charge.",
    image:
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/16ed01d7-3c0e-4b66-17a2-82e193f56b00/86",
    carPrice: "£10,995.00",
    carLocation: "Dunfermline, Fife",
    Year: "2011",
  },
  {
    id: 68,
    images: [
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/34e7ccee-c056-45e4-7741-0dc6151ea800/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/7696a142-3c38-40d5-a814-4ab0c941fe00/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/8832ad2b-71b1-45c1-7bf0-8b25813d8500/86",
    ],

    title: "2020 Volkswagen Polo 1.0 TSI 95 Beats 5dr Hatchback Petrol Manual ",
    Company: "volkswagen",
    FuelType: "Petrol",
    Transmission: "Manual",
    BodyType: "Hatchback",
    Description:
      "Welcome to City Motors Cambs Ltd, your premier destination for the perfect vehicle buying experience. We are thrilled to present this brilliant vehicle that is available now for test drive and same day collection or even home delivery.At City Motors Cambs Ltd, we offer the best market price for your current vehicle, which you can use towards your deposit. In fact, even if you don't buy our vehicles, we will still buy yours.",
    image:
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/34e7ccee-c056-45e4-7741-0dc6151ea800/86",
    carPrice: "£9,990.00",
    carLocation: "Dunfermline, Fife",
    Year: "2020",
  },
  {
    id: 53,
    images: [
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/e5e41045-cbb5-4357-522a-d46aadf9f100/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/9b9a0f31-5c3b-42dc-b39b-64ebaaab3500/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/d98e3e78-84e7-41fa-ecfa-ba2f6aacb800/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/299ed1df-1194-4f18-f6c4-5dcc0a4e8800/86",
    ],
    title: "2014 64 FORD FIESTA 1.0 TITANIUM 5D 99 BHP",
    Company: "ford",
    FuelType: "Petrol",
    Transmission: "Manual",
    BodyType: "Hatchback",
    Description:
      "Service History: 4 Services - Last Serviced @ 43K - 2 Keys. Extras including: , Metallic paint, Spare Wheel - 14 x 5.5 Steel Wheel, Lithos/Domo in Charcoal Black, Moondust Silver Metallic. DELIVERY AVAILABLE. Since 1985, We at Corner Park Garages have always put our customers first. With two sites in Llantrisant and Swansea, and an extensive range of over 500 top quality used cars, all price checked and AA Inspected. With over 600 verified reviews on Feefo, we are proud of our reputation as a dealer you can trust. See our website for details. .12V Power Socket - Front, 16in Alloy Wheels - 15 Spoke, 4.2in TFT Display, ABS - Anti-lock Braking System, Aesthetic Lighting Package, Airbags - Curtain, Airbags - Driver Side Knee, Airbags - Front Passenger, Airbags - Head and Thorax, Airbags - Passenger Deactivation, Armrest - Centre Console, Automatic Dimming Rear View Mirror, Automatic Headlights - Rain Sensing Wipers - Auto Dimming Rear View Mirror, Automatic Rain Sensing Wipers, Body Colour Exterior Mirrors, Brake Warning Lights - Automatic Flashing of Brake Lights Under Heavy Braking, Bumpers - Front and Rear - Body Colour, Centre Console - with Trinket Tray - Two Cup Holders, Chrome Belt Line Finisher, Courtesy Light - Overhead with Theatre-Style Dimming, Courtesy Lights with Map Reading Lights, Cruise Control, DDS - Deflation Detection System, Door Handles - Body Colour, Door Mirrors - Power-Foldable with Puddle Lights, Drivers Airbag, EATC - Electronic Automatic Temperature Control - Climate Control, EBA - Emergency Brake Assist, EBD - Electronic Brakeforce Distribution, ECOmode, Electric Windows - Front with One Touch Lowering Drivers, Emergency Assistance, Emergency Brake Warning - Automatic Hazard Warning Lights, Engine Immobiliser, EPAS - Electric Power Assisted Steering, ESP - Electronic Stability Programme, Floor Mats - Front and Rear - Velour, Ford Easy Fuel Capless Refuelling System with Misfuel Inhibitor, Ford SYNC, Front Fog Lights - Chrome Bezel Rings, Front Lower Grille - Chrome Surround, Front Lower Grille Insert and Surround - Black, Front Seatback Map Pockets - Driver and Passenger, Front Upper Grille - Chrome Finish Surround, Front Upper Grille Insert - Chrome bars, Gear Knob - Leather, Gearshift Indicator Light, Gearshift Knob - Leather-Trimmed with Chrome Finish Bezel, Glovebox - Illuminated, Head Restraints - 2-way Adjustment, Head Restraints - Rear 2-Way Adjustment, Headlights - Automatic, Headlights - Courtesy Delay, Headlights - Follow Me Home, Headlights - Halogen Projector with Silver Bezel, Headliner - Woven, Heated Front Windscreen, High-Mounted Rear Brake Light, Hill Start Assist, Interior Door Lever - Chrome Finish, IPS - Intelligent Protection System, Leather-Trimmed Handbrake, LED Ambient Courtesy Lighting, LED Daytime Running Lights, Lithos Cloth - Charcoal Black, Loadspace Compartment Light, Loadspace Floor Carpet, Locking Wheel Nuts, Moondust Silver, MyKey, Perimeter Anti Theft Alarm, Pollen Filter, Rake and Reach Steering Adjustable, Rear Courtesy Lights",
    carPrice: "£8,370.00",
    carLocation: "Dunfermline, Fife",
    Year: "2014",
  },
  {
    id: 54,
    images: [
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/adebc380-dd83-4f1c-59ba-5dbf6f114300/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/98b47098-92f8-4a52-10c0-96af798e6200/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/26fb8000-a0f7-4929-f9fd-f7cb18ca1c00/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/241bed88-ecf2-4d9d-5bb4-4a27dbc67b00/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/4a1bd63b-3761-447c-e794-152eeeeef800/86",
    ],
    title:
      "2009 59 FORD FIESTA ZETEC S 1.6 PETROL 3 DOOR HATCHBACK £180 TAX 48+ MPG 120 BHP",
    Company: "ford",
    FuelType: "Petrol",
    Transmission: "Manual",
    Type: "Hatchback",
    Description:
      "Welcome to Noah's Automotive, we believe that every car showcases a unique blend of features and characteristics that set it apart, mirroring the individuality and diverse personalities of it's drivers. Here we care about helping our customers find the perfect car which suits their purpose while offering exceptional value.You are looking at a superb example 2009 59 reg Ford Fiesta Zetec S 1.6 petrol 3 door hatchback finished in metallic black.At the heart of this Ford Fiesta Zetec S lies a responsive 1.6-litre petrol engine that masterfully balances performance with fuel efficiency. Drivers will appreciate ts brisk acceleration while also appreciating the fuel economy benefits, making both city commutes and longer drives a pleasure.The Ford Fiesta, especially in the coveted Zetec S trim, has always been lauded for its affordability without compromising on features or performance. Moreover, its enduring popularity ensures a robust resale value, making it a wise investment for both first-time buyers and seasoned drivers",
    Location: "We are based in Nuneaton, Warwickshire, CV10 9AE",
    price: "£2,995.00",
    Year: "2009",
  },

  {
    id: 55,
    images: [
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/ca5eefc4-c2f2-4d84-24a6-12c6e15d7300/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/9ab9ff61-ec17-4851-cca7-6d4236f61900/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/6285d992-da91-448b-0c12-c748544d1a00/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/58193098-3b4a-4237-1d3f-8783cbe77600/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/53f345d1-3352-4e3d-9c97-511d14408700/86",
    ],

    title: "Ford Fiesta Ghia",
    Company: "ford",
    FuelType: "Petrol",
    Transmission: "Manual",
    BodyType: "Hatchback",
    Description:
      "Here we have my 1.4 Ford Fiesta Ghia which comes with a good spec as you can see in the photos. The reason for the sale is I’m looking for something a little bigger so I am open for swaps. Needs a window runner for driver side apart from that it’s great!",
    AdID: "1465602224",
    Location: "Penicuik, Midlothian",
    carprice: "£1,250.00",
    year: "2019",
  },

  {
    id: 56,
    images: [
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/fd46ede3-5ea6-483a-1086-32447b400700/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/08b81514-c7b0-4865-288b-9780e39f0200/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/66c81e7d-c6bc-4e4e-4cf5-0736bafd1f00/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/1464bff0-82c3-4765-0211-67832f8bcd00/86",
    ],
    title: "2018 Ford Fiesta 1.0 ST-LINE 3d 99 BHP Hatchback Petrol Manual",
    Company: "ford",
    FuelType: "Petrol",
    Transmission: "Manual",
    BodyType: "Hatchback",
    Year: "2018",
    Location: " Camelon, Falkirk",
    carPrice: " £11,990.00",
    Description:
      "ONLY 2 OWNERS FROM NEW+LOW MILEAGE+FULL SERVICE HISTORY+ULEZ COMPLIANT+FANTASTIC EXAMPLE+GREAT SPECIFICATION+SATELLITE NAVIGATION+BLUETOOTH+ALLOY WHEELS+AIR CONDITIONING+THIS VEHICLE IS READY TO DRIVE AWAY TODAY+FINANCE AND EXTENDED WARRANTY AVAILABLE ON THIS USED VEHICLE!!! ONLY 2 OWNERS FROM NEW+LOW MILEAGE+FULL SERVICE HISTORY+ULEZ COMPLIANT+FANTASTIC EXAMPLE+GREAT SPECIFICATION+SATELLITE NAVIGATION+BLUETOOTH+ALLOY WHEELS+AIR CONDITIONING+THIS VEHICLE IS READY TO DRIVE AWAY TODAY+FINANCE AND EXTENDED WARRANTY AVAILABLE ON THIS USED VEHICLE!!!.Bluetooth system, Electric power steering, Lane keep assist, Speed limiter, SYNC Emergency Assistance, Trip computer, Immobiliser, Keyless start with Ford Power starter button, MyKey system, Remote central locking, Thatcham Cat.1 alarm, Sports suspension, 3 point seatbelts on all rear seats, ABS+EBA, Curtain airbags, Driver and passenger airbags, Drivers knee airbag, ESP + traction control, Front passenger airbag deactivation, Front side airbags, Hill start assist, Seatbelt warning, Tyre pressure monitoring system, 2 USB ports, Auxiliary input socket, Ford SYNC 3 DAB radio, apple car play and android auto with voice control, Steering wheel mounted controls, USB connection, 12V Accessory socket in centre console, 3 spoke flat bottomed leather steering wheel, 60/40 split folding rear seat, Adjustable head restraints, Black headlining, Boot carpet, Centre console with armrest, Chrome inner door handles, Cloth upholstery, Footwell illumination, Front and rear velour floor mats, Front map reading lights, Front seat and rear pockets, Height adjustable drivers seat, Illuminated cup holders, Illuminated glovebox, Leather gear knob, Leather trimmed handbrake handle, Load area light, Manual air conditioning, Overhead console with sunglasses holder, Pollen filter, Rake/reach adjustable steering wheel, Rear centre head restraint, Sports front seats, Sports pedals, Automatic headlights, Body coloured bumpers, Body coloured door handles, Body coloured electric adjustable heated door mirrors, Body coloured large rear spoiler, Body styling kit, Chrome door handles, Cornering front fog lights, Electric front windows/one touch facility, LED daytime running lights, Quickclear heated windscreen, Rear wiper, Tinted glass, Upper front grille chrome surroundCentralLocking Side Airbags; Electronic Stability Program (ESP); Immobiliser; Full Service History; Passenger Airbag; Alarm; Air Conditioning; V5 Registration Document; Safety Belt Pretensioners; Anti-Lock Brakes (ABS); Rear Spoiler; AM/FM Stereo; Tuning; Power-assisted Steering (PAS); Alloy WheelsAd ID: 463606731VAT number: 889087456",
  },
  {
    id: 57,
    images: [
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/8db92170-0072-4f8c-9938-a275f84a6100/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/bba430bc-67a8-4632-9648-d3c21fe85d00/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/8f9ece95-fb8e-4735-3dfc-4e8311c21900/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/00ccc011-153b-4e33-68a6-440636b94800/86",
    ],
    title: "2016 Ford Fiesta 1.6 ST-2 3d 180 BHP Hatchback Petrol Manual",

    Company: "ford",
    FuelType: "Petrol",
    Transmission: "Manual",
    BodyType: "Hatchback",
    Year: "2016",
    Location: " Camelon, Falkirk",
    carPrice: " £11,990.00",
    Description:
      "ONLY 2 OWNERS FROM NEW+EXCELLENT SERVICE RECORD+BIG SPECIFICATION+SATELLITE NAVIGATION+BLUETOOTH+PRIVACY GLASS+STUNNING EXAMPLE+READY TO DRIVE AWAY TODAY+FINANCE AND EXTENDED WARRANTY AVAILABLE ON THIS USED VEHICLE!!!!!! ONLY 2 OWNERS FROM NEW+EXCELLENT SERVICE RECORD+BIG SPECIFICATION+SATELLITE NAVIGATION+BLUETOOTH+PRIVACY GLASS+STUNNING EXAMPLE+READY TO DRIVE AWAY TODAY+FINANCE AND EXTENDED WARRANTY AVAILABLE ON THIS USED VEHICLE!!!!!!.Electric power steering, Push button starter, Sony Navigation with DAB Radio/CD and Ford SYNC Bluetooth connection, voice control and USB port, SYNC Emergency Assistance, Trip computer, Immobiliser, MyKey system, Remote central locking, Thatcham Cat.1 alarm, Lowered suspension, 3 point seatbelts on all rear seats, ABS+EBA, Curtain airbags, Driver and passenger airbags, Drivers knee airbag, ESP + traction control, Front passenger airbag deactivation, Front side airbags, Hill start assist, Tyre pressure monitoring system, 8 speakers, Auxiliary input socket, Steering wheel mounted controls, Adjustable head restraints, Ambient lighting, Footwell illumination, Front map reading lights, Front Recaro sports seats, Front/rear floor mats, Heated front seats, Leather steering wheel and gearknob + red stitching, Load area light, Manual seat adjustment, Part leather upholstery, Pollen filter, Rake/reach adjustable steering wheel, Body coloured bumpers, Body coloured door handles, Body coloured electric adjustable heated door mirrors, Body coloured large rear spoiler, Courtesy headlamp delay, Electric front windows/one touch facility, Front fog lights, LED daytime running lights, Privacy glass, Quickclear heated windscreen, Rear wiper, Tinted glass Central Locking; Side Airbags; Electronic Stability Program (ESP); Immobiliser; Passenger Airbag; CD Player; Alarm; V5 Registration Document; Safety Belt Pretensioners; Anti-Lock Brakes (ABS); Rear Spoiler; AM/FM Stereo; Power-assisted Steering (PAS)Ad ID: 1455362698VAT number: 889087456",
  },
  {
    id: 58,
    images: [
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/e5c1b59f-8cf9-44d5-4974-6998dedb5e00/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/1c71d1ba-7c93-4547-7348-8969e7010f00/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/6b4ef229-c1e3-40f8-44fc-2424e746ca00/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/9a1d2743-6970-44f7-c2de-4d30925f3800/86",
    ],
    title:
      "2021 Ford Fiesta 1.0 EcoBoost 95 ST-Line Edition 5dr Hatchback Petrol Manual",

    Company: "ford",
    FuelType: "Petrol",
    Transmission: "Manual",
    BodyType: "Hatchback",
    Year: "2021",
    Location: "Carlisle, Cumbria",
    carPrice: " £15,399.00",
    Description:
      "Price includes GBP99 seller admin fee. Free home delivery or Click & Collect options. Free home delivery to mainland UK, the Scottish Islands and the Isle of Wight postcodes. We dont deliver to Northern Ireland, the Isles of Scilly, the Isle of Man, Jersey, Guernsey and the other Channel Islands. Click & Collect available at over 100 collection centres on the UK mainland..12V Accessory socket in centre console, 17 5 spoke alloy wheels with rock metallic finish, 17 5 spoke alloy wheels with rock metallic finish, 2 USB ports, 3 point seatbelts on all rear seats, 3 spoke flat bottomed leather steering wheel, 60/40 split folding rear seat, ABS+EBA, Adjustable head restraints, Adjustable head restraints, Auxiliary input socket, Black headlining, Bluetooth system, Body colour bumpers, Body colour door handles, Body colour large rear spoiler, Body coloured electrically operated and heated door mirrors with side indicators, Body coloured electrically operated and heated door mirrors with side indicators, Body coloured electrically operated and heated door mirrors with side indicators, Boot carpet, Centre console with armrest and illuminated cupholders, Chrome inner door handles, Cloth upholstery, Cornering front fog lights, Curtain airbags, DAB Digital radio, Driver and passenger airbags, Driver and passenger airbags, Drivers knee airbag, Electric front windows/one touch facility, Electric power steering, Electric power steering, Electric rear windows, Electronic stability control with hill start assist, Electronic stability control with hill start assist, Footwell illumination, Ford SYNC 3 Navigation system incl 8touchscreen, 7 speakers, FordPass connect, Apple carplay, android auto, voice control and emergency assistance, Ford SYNC 3 Navigation system incl 8touchscreen, 7 speakers, FordPass connect, Apple carplay, android auto, voice control and emergency assistance, Ford SYNC 3 Navigation system incl 8touchscreen, 7 speakers, FordPass connect, Apple carplay, android auto, voice control and emergency assistance, Ford SYNC 3 Navigation system incl 8touchscreen, 7 speakers, FordPass connect, Apple carplay, android auto, voice control and emergency assistance, Ford SYNC 3 Navigation system incl 8touchscreen, 7 speakers, FordPass connect, Apple carplay, android auto, voice control and emergency assistance, Ford easy fuel, Front floor mats, Front map reading lights, Front passenger airbag deactivation, Front seat and rear pockets, Front side airbags,",
  },

  {
    id: 59,
    images: [
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/a4f00f6b-7173-4b5b-0771-aca7f5362200/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/36c4910b-e708-4d0d-790d-964873428700/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/6dd5e8bb-bec1-4d7d-ef95-576b866c7700/86",
    ],

    title: "Volkswagen Polo 2011 Silver 1.2 Match Euro 5 3dr",
    Company: "volkswagen",
    FuelType: "Petrol",
    Transmission: "Manual",
    BodyType: "Hatchback",
    Description:
      "Clifton Car Sales are proud to continue their 30 years of providing a terrific choice of carefully sourced vehicles, in addition to a level of service and care seldom experienced anywhere - we want to help and make your car buying experience one to remember. Please call us on 01670 514488 or use the email link for any questions you may have and were also pleased to inform you that we don't add an unnecessary buying/administration fee - our good old fashioned, quality service is free of charge.",
    image:
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/a4f00f6b-7173-4b5b-0771-aca7f5362200/86",

    carPrice: "£8,000.00",
    carLocation: "Crowland, Cambridgeshire",
    Year: "2019",
  },
  {
    id: 60,
    images: [
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/6ea76ac6-76a5-4ec6-efb9-c510d0256f00/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/7356757a-38ed-408f-3942-f9a592f25900/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/c565b097-7b91-4582-17d3-64bbafbc7500/86",
    ],
    title: "2004 Volkswagen Polo 1.4 Twist 5dr Auto HATCHBACK Petrol Automatic",
    Company: "volkswagen",
    FuelType: "Petrol",
    Transmission: "Manual",
    BodyType: "Hatchback",
    Description:
      "Clifton Car Sales are proud to continue their 30 years of providing a terrific choice of carefully sourced vehicles, in addition to a level of service and care seldom experienced anywhere - we want to help and make your car buying experience one to remember. Please call us on 01670 514488 or use the email link for any questions you may have and were also pleased to inform you that we don't add an unnecessary buying/administration fee - our good old fashioned, quality service is free of charge.",
    image:
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/6ea76ac6-76a5-4ec6-efb9-c510d0256f00/86",
    carPrice: "£6,345.00",
    carLocation: "Dunfermline, Fife",
    Year: "2014",
  },
  {
    id: 61,
    images: [
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/9d32ed0b-30a1-43ff-3c1e-6e322fb3ff00/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/ca67109b-7778-4732-b5df-af18362d6600/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/998e8938-41fc-432a-bc20-a6f23079d100/86",
    ],
    title:
      "VW POLO 1.2 60 MODA 5dr Petrol ULEZ Exempt S/H Long MOT Small Petrol Hot Hatch ",
    Company: "volkswagen",
    FuelType: "Petrol",
    Transmission: "Manual",
    BodyType: "Hatchback",
    Description:
      "FANTASTIC LOOKING AND DRIVING CAR WHICH COMES WITH A MASSIVE SPEC INCLUDING; SAT NAV, REVERSE CAMERA, FRONT AND REAR PARKING SENSORS, BLUETOOTH, MEDIA AND A FULL 8 STAMP SERVICE RECORD..16in Alloy Wheels, Door Mirrors - Electric-Retractable, Electric Windows - Front and Rear, Electric Windows - Remote Key Fob, Keyless Tailgate Unlock Function, Tailgate Windows Tinted, Tyre Repair Kit, 2x USB Jack and HDMI Jack, Accessory Socket - Front, Accessory Socket - Instrument Panel, Accessory Socket - Luggage Compartment, Aha - App Integration, Bluetooth Hands Free Telephone - HFT, CD-Radio, CONNECT, Cruise Control and care seldom experienced anywhere - we want to help and make your car buying experience one to remember. Please call us on 01670 514488 or use the email link for any questions you may have and were also pleased to inform you that we don't add an unnecessary buying/administration fee - our good old fashioned, quality service is free of charge.",
    image:
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/9d32ed0b-30a1-43ff-3c1e-6e322fb3ff00/86",

    carPrice: "£8,995.00",
    carLocation: "Dunfermline, Fife",
    Year: "2017",
  },

  {
    id: 62,
    images: [
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/16ed01d7-3c0e-4b66-17a2-82e193f56b00/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/52a4a1ec-a2c3-47ae-2cd9-773976beb600/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/1bd1ec3b-989d-4454-5c7a-2d210c602600/86",
    ],

    title:
      "2011 Volkswagen Polo MATCH 5-Door NATIONWIDE DELIVERY AVAILABLE Petrol ",
    Company: "volkswagen",
    FuelType: "Petrol",
    Transmission: "Manual",
    BodyType: "Hatchback",
    Description:
      "FANTASTIC LOOKING AND DRIVING CAR WHICH COMES WITH A MASSIVE SPEC INCLUDING; SAT NAV, REVERSE CAMERA, FRONT AND REAR PARKING SENSORS, BLUETOOTH, MEDIA AND A FULL 8 STAMP SERVICE RECORD..16in Alloy Wheels, Door Mirrors - Electric-Retractable, Electric Windows - Front and Rear, Electric Windows - Remote Key Fob, Keyless Tailgate Unlock Function, Tailgate Windows Tinted, Tyre Repair Kit, 2x USB Jack and HDMI Jack, Accessory Socket - Front, Accessory Socket - Instrument Panel, Accessory Socket - Luggage Compartment, Aha - App Integration, Bluetooth Hands Free Telephone - HFT, CD-Radio, CONNECT, Cruise Control and care seldom experienced anywhere - we want to help and make your car buying experience one to remember. Please call us on 01670 514488 or use the email link for any questions you may have and were also pleased to inform you that we don't add an unnecessary buying/administration fee - our good old fashioned, quality service is free of charge.",
    image:
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/16ed01d7-3c0e-4b66-17a2-82e193f56b00/86",
    carPrice: "£10,995.00",
    carLocation: "Dunfermline, Fife",
    Year: "2011",
  },
  {
    id: 63,
    images: [
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/34e7ccee-c056-45e4-7741-0dc6151ea800/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/7696a142-3c38-40d5-a814-4ab0c941fe00/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/8832ad2b-71b1-45c1-7bf0-8b25813d8500/86",
    ],

    title: "2020 Volkswagen Polo 1.0 TSI 95 Beats 5dr Hatchback Petrol Manual ",
    Company: "volkswagen",
    FuelType: "Petrol",
    Transmission: "Manual",
    BodyType: "Hatchback",
    Description:
      "Welcome to City Motors Cambs Ltd, your premier destination for the perfect vehicle buying experience. We are thrilled to present this brilliant vehicle that is available now for test drive and same day collection or even home delivery.At City Motors Cambs Ltd, we offer the best market price for your current vehicle, which you can use towards your deposit. In fact, even if you don't buy our vehicles, we will still buy yours.",
    image:
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/34e7ccee-c056-45e4-7741-0dc6151ea800/86",
    carPrice: "£9,990.00",
    carLocation: "Dunfermline, Fife",
    Year: "2020",
  },
];

const carsImages = [
  "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/e14f3b43-2305-4466-4c66-6921bd752900/86",
  "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/d0226147-0487-476b-9f6c-b255da224000/86",
  "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/19cf29b6-585d-4c9e-e6de-91cdf7d8f000/86",
  "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/9784d19c-2c1d-44df-747f-34346acb1100/86",
  "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/c0170493-cc5f-4aa1-6de1-96221daaa000/86",
];

const settings = {
  dots: false,
  infinite: true,
  speed: 2000,
  autoplay: true,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  pauseOnHover: false,
};

function CarDetailedView() {
  const { id } = useParams();

  const [automobiles, setAutomobile] = useState([]);
  const [carouselimages, setCarouselImgaes] = useState([]);
  const singleCar = carsDetails.filter((car) => car.id == id);
  const { title, Company } = singleCar[0];
  console.log(automobiles);
  useEffect(() => {
    fetch(`http://localhost:3009/automobiles/carDetails/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setAutomobile(data.automobile[0]);
        setCarouselImgaes(data.automobile[0].image_names);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="car-detailed-view-main-container">
      <div className="car-detailed-view-sub-container">
        <div className="car-detailed-view-left-main-container">
          <div className="car-detailed-view-navigation-container">
            <RiArrowDropLeftLine className="car-detailed-view-navigation-icon" />
            <p className="car-detailed-view-navigation-text">
              Back{" "}
              <span className="car-detailed-view-navigation-span-element">
                |
              </span>{" "}
              Home{" "}
              <span className="car-detailed-view-navigation-span-element">
                /
              </span>{" "}
              Motors{" "}
              <span className="car-detailed-view-navigation-span-element">
                /
              </span>{" "}
              Cars{" "}
              <span className="car-detailed-view-navigation-span-element">
                /
              </span>{" "}
              {Company}{" "}
            </p>
          </div>
          <h1 className="car-detailed-view-car-title">{automobiles.title}</h1>
          <div className="car-detailed-view-location-and-price-container">
            <p className="car-detailed-view-location-name">{}</p>
            <p className="car-detailed-view-car-price">£{automobiles.price}</p>
          </div>
          {/*<div className="car-detailed-view-carousel-main-container">
                    <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true} interval={3000} style={{color:"#196AE5"}}>
                    {carsImages.map((slide,index) => (
                        <div key={index} className="car-detailed-view-carousel-slide">
                            <img src={slide} alt={`Slide ${index}`}  className="car-detailed-view-carousel-image"/>
                        </div>
                    ))}
                    </Carousel>
                    </div>*/}
          <div className="car-detailed-view-carousel-main-container">
            <Slider {...settings} className="car-detailed-view-carousel-slide">
              {carouselimages.map((imageName, index) => (
                <div
                  key={index}
                  className="car-detailed-view-carousel-slide-img-container"
                >
                  <img
                    src={`http://localhost:3009/${imageName}`}
                    alt={`Slide ${index}`}
                    className="car-detailed-view-carousel-image"
                  />
                </div>
              ))}
            </Slider>
          </div>
          <div>
            <h1 className="car-detailed-view-description-heading">
              Description
            </h1>
            <p className="car-detailed-view-description">
              {automobiles.description}
            </p>
          </div>
          <div className="upload-form-contact-details-container">
            <p className="upload-form-contact-details-sub-heading">
              Name:{" "}
              <span className="upload-form-contact-details-sub-heading-span">
                Raju
              </span>
            </p>
            <p className="upload-form-contact-details-sub-heading">
              Location:{" "}
              <span className="upload-form-contact-details-sub-heading-span">
                Hyderbad
              </span>
            </p>
            <p className="upload-form-contact-details-sub-heading">
              Email:{" "}
              <span className="upload-form-contact-details-sub-heading-span">
                lgs@gmail.com
              </span>
            </p>
            <p className="upload-form-contact-details-sub-heading">
              Phone:{" "}
              <span className="upload-form-contact-details-sub-heading-span">
                1234567890
              </span>
            </p>
          </div>
        </div>

        <div className="car-detailed-view-right-main-container">
          <div className="car-detailed-view-right-detailed-card">
            <div className="car-detailed-view-right-detailed-card-first">
              <h3>Cambria Group</h3>
              <div className="car-detailed-view-right-first-text-container">
                <p>Posting for 9+ years</p>
                <p className="car-detailed-view-right-link">See all ads</p>
              </div>
            </div>
            <hr />
            <h4 className="car-detailed-view-right-second-heading">
              Cantact Cambria Group
            </h4>
            <div className="car-detailed-view-right-cantact-container">
              <BsFillTelephoneFill />
              <p className="car-detailed-view-right-cantact">
                Login to reveal phone number
              </p>
            </div>
            <textarea
              className="car-detailed-view-right-text-area"
              placeholder="Hi Cambria Group, I'm interested in your item. Is this still
            available? Thanks"
            ></textarea>
            <input
              type="number"
              placeholder="Your phone number"
              className="car-detailed-view-right-input"
            />
            <p className="car-detailed-view-right-cantact-paragraph">
              Your contact details will be included in your reply. Gumtree
              reserves the right to monitor conversations sent through our
              servers to protect you from fraud, spam or suspicious behaviour.
            </p>
            <button className="car-detailed-view-right-send-button">
              Send Message
            </button>
            <hr />
            <h4 className="car-detailed-view-right-cantact-link">
              www.grange.co.uk/dealerships/mclaren-hatfield/?utm_source=ebaymotorsgroup&utm_medium=classifieds&utm_campaign=emg
            </h4>
            <hr />
            <div className="car-detailed-view-right-button-container">
              <button className="car-detailed-view-right-favourite-button">
                <BsFillHeartFill />
                Favourite
              </button>
              <button className="car-detailed-view-right-favourite-button">
                <MdReportProblem />
                Report
                <BsFillCaretDownFill />
              </button>
            </div>
          </div>
          <div className="car-detailed-view-right-vehicle-history">
            <h3 className="car-detailed-view-right-vehicle-history-heading">
              Vehicle history
            </h3>
            <div className="car-detailed-view-right-vehicle-history-para-container">
              <p className="car-detailed-view-right-vehicle-history-paragraph">
                We are unable to perform a basic history check on this vehicle.
                Please contact the seller for more information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CarDetailedView;
