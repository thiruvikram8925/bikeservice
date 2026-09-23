import { ServiceItem, BikeCategory, ServicePackage, ReviewItem, GalleryItem, SpecialOffer } from '../types';

export const BUSINESS_INFO = {
  name: "IRONWHEEL MOTOR WORKS",
  shortName: "IRONWHEEL",
  tagline: "Precision Service. Reliable Performance.",
  serviceType: "Multi-Brand Motorcycle & Scooter Service Workshop",
  introduction: "Chennai's trusted multi-brand two-wheeler workshop in Guindy. We deliver dealership-grade mechanical service, computerized diagnostics, genuine OEM parts, and doorstep pickup & drop with complete transparency and zero guesswork.",
  address: {
    line1: "24, Industrial Estate Road",
    area: "Guindy Industrial Estate",
    city: "Chennai",
    state: "Tamil Nadu",
    pincode: "600032",
    country: "India",
    landmark: "Behind Guindy Industrial Estate Police Station, 400m from Guindy Metro Station"
  },
  phone: "+91 98765 43210",
  phoneRaw: "+919876543210",
  whatsapp: "+91 98765 43210",
  whatsappRaw: "919876543210",
  whatsappLink: "https://wa.me/919876543210?text=Hi%20Ironwheel%20Motor%20Works,%20I%20would%20like%20to%20book%20a%20service%20for%20my%20bike/scooter",
  email: "service@ironwheelmotors.in",
  supportEmail: "support@ironwheelmotors.in",
  emergencyPhone: "+91 98765 43219",
  hours: {
    weekday: "Monday - Saturday: 8:30 AM - 8:00 PM",
    sunday: "Sunday: 9:00 AM - 2:00 PM",
    emergency: "24/7 Roadside Assistance & Breakdown Support"
  },
  socialMedia: {
    instagram: {
      handle: "@ironwheelmotorworks",
      url: "https://instagram.com/ironwheelmotorworks"
    },
    facebook: {
      handle: "Ironwheel Motor Works Chennai",
      url: "https://facebook.com/ironwheelmotorworks"
    },
    youtube: {
      handle: "@ironwheelmotorworks",
      url: "https://youtube.com/@ironwheelmotorworks"
    },
    twitter: {
      handle: "@ironwheelmotors",
      url: "https://twitter.com/ironwheelmotors"
    }
  },
  pickupDrop: {
    available: true,
    radius: "15 km Radius Across Chennai",
    fee: "Free with Complete & Master Service (or ₹149 nominal for Basic)",
    coverageAreas: [
      "Guindy",
      "Saidapet",
      "Velachery",
      "Ekkatuthangal",
      "Adyar",
      "Ashok Nagar",
      "T. Nagar",
      "Porur",
      "OMR / Thoraipakkam",
      "Nungambakkam",
      "St. Thomas Mount",
      "Kotturpuram"
    ]
  },
  googleMaps: {
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.359265963503!2d80.20367337583696!3d13.012803513978396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526715f5e55555%3A0x6b4ef84a86477bb0!2sGuindy%20Industrial%20Estate%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    shareUrl: "https://www.google.com/maps/search/?api=1&query=24+Industrial+Estate+Road+Guindy+Chennai+600032",
    coordinates: "13.0128° N, 80.2037° E"
  },
  stats: [
    { label: "Workshop Experience", value: "10+", unit: "Years" },
    { label: "Bikes & Scooters Serviced", value: "2,500+", unit: "Two-Wheelers" },
    { label: "Service Categories", value: "14+", unit: "Specialties" },
    { label: "Customer Rating", value: "4.8/5", unit: "Google Reviews" }
  ]
};

export const WORKSHOP_OFFERS: SpecialOffer[] = [
  {
    id: "first-rider",
    title: "First-Time Customer Discount",
    code: "FIRST15",
    discount: "15% OFF",
    description: "Flat 15% discount on labor charges for your first service visit or doorstep booking.",
    validUntil: "Valid till end of month",
    tag: "POPULAR",
    imageUrl: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "free-wash",
    title: "Complimentary Foam Wash & Polish",
    code: "SHINEPRO",
    discount: "FREE (₹299 Value)",
    description: "High-pressure snow foam wash, degreasing, tyre dressing, and UV protective polish included with Complete or Master service.",
    validUntil: "Active Offer",
    tag: "VALUE ADD",
    imageUrl: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "monsoon-check",
    title: "Monsoon & Rainy Season Health Camp",
    code: "RAINREADY",
    discount: "FREE 21-PT INSPECTION",
    description: "Complimentary brake water-bleed check, electrical weatherproofing, and tyre tread depth analysis.",
    validUntil: "Limited Time",
    tag: "SEASONAL",
    imageUrl: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "scooter-cvt",
    title: "Scooter Mileage & CVT Special",
    code: "SMOOTHCVT",
    discount: "₹200 OFF",
    description: "Variator roller de-glazing, drive belt tensioning, and clutch shoe tuning for Activa, Jupiter, Access & Ntorq.",
    validUntil: "This Week Only",
    tag: "SCOOTER SPECIAL",
    imageUrl: "https://images.unsplash.com/photo-1525160354320-d8e92641c563?auto=format&fit=crop&w=600&q=80"
  }
];

export const QUICK_SERVICES = [
  { id: "engine", label: "Engine Service", icon: "Wrench", desc: "Valve clearance, compression check & tuning" },
  { id: "oil", label: "Oil Change", icon: "Droplets", desc: "Grade-specific synthetic oils & filter swap" },
  { id: "brake", label: "Brake Service", icon: "Disc", desc: "Brake pad replacement, disc skimming & bleeding" },
  { id: "tyre", label: "Tyre Service", icon: "CircleDot", desc: "Puncture repair, tread depth & wheel balancing" },
  { id: "electrical", label: "Electrical Repair", icon: "Zap", desc: "Wiring harness inspection, starter motor & stator" },
  { id: "inspection", label: "Full Inspection", icon: "ClipboardCheck", desc: "Comprehensive 42-point safety and road test" }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "periodic-service",
    name: "Periodic Service",
    category: "General Maintenance",
    iconName: "Settings",
    estDuration: "3 - 4 Hours",
    startingPrice: "₹699",
    recommendedInterval: "Every 3,000 - 5,000 km or 4 Months",
    shortDesc: "Complete preventive maintenance keeping your engine smooth, chain clean, brakes sharp, and safety intact.",
    fullDesc: "Our signature routine maintenance protocol designed for everyday commuters and long-distance riders. We cover all vital fluid checks, filter cleaning, mechanical cable tensioning, and electronic fault sweeps to ensure zero mid-ride breakdowns.",
    keyChecklist: [
      "Engine oil draining and synthetic refill",
      "Air filter element inspection and cleaning / replacement",
      "Spark plug gap inspection and carbon cleaning",
      "Brake pads wear check and caliper dust de-glazing",
      "Drive chain ultrasonic degreasing, slack adjustment & Motul lube",
      "Throttle and clutch cable free-play calibration and lubrication",
      "All critical chassis fasteners torque verification to OEM spec",
      "Battery terminal dielectric grease application and voltage test"
    ],
    symptoms: [
      "Sluggish acceleration or rough idle",
      "Engine heating up faster in city traffic",
      "Loose or noisy drive chain slap",
      "Soft or spongy front brake lever response"
    ]
  },
  {
    id: "engine-repair",
    name: "Engine Repair & Overhaul",
    category: "Mechanical Engineering",
    iconName: "Cpu",
    estDuration: "1 - 3 Days",
    startingPrice: "₹1,800",
    recommendedInterval: "As Needed / Valve Adjustment Every 12,000 km",
    shortDesc: "Precision engine diagnostics, valve tappet adjustment, timing chain replacement, and complete top/bottom rebuilds.",
    fullDesc: "From minor valve tapping clearances to full cylinder head decarbonization and crankshaft bearing replacements. We use micrometer calipers, feeler gauges, and OEM torque wrenches to restore factory compression ratios and silent mechanical operation.",
    keyChecklist: [
      "Digital cylinder compression and leak-down test",
      "Valve tappet clearance adjustment with calibrated feeler gauges",
      "Camshaft, timing chain, and hydraulic tensioner inspection",
      "Cylinder bore inspection, piston ring gap check and honing",
      "Clutch basket de-notching and friction plates micrometer check",
      "Gasket renewal using chemical sealant and OEM-grade cut gaskets",
      "Oil pump flow and oil galley pressure verification",
      "Post-assembly controlled break-in heat cycle test"
    ],
    symptoms: [
      "Metallic clicking or clattering from cylinder head",
      "White or blue exhaust smoke during cold start or acceleration",
      "Noticeable power drop on inclines or high RPMs",
      "Excessive engine oil consumption between service intervals"
    ]
  },
  {
    id: "brake-clutch",
    name: "Brake & Clutch Service",
    category: "Safety Systems",
    iconName: "Disc",
    estDuration: "1 - 2 Hours",
    startingPrice: "₹450",
    recommendedInterval: "Every 6,000 km / Fluid Flush Every 12 Months",
    shortDesc: "Master cylinder rebuilding, DOT 4 hydraulic flushing, disc rotor inspection, and clutch cable/plate replacement.",
    fullDesc: "Braking confidence is non-negotiable on Indian roads. We service single, dual, and ABS-equipped braking assemblies, caliper slider pin relubrication, rotor runout checks, and smooth clutch bite point setups.",
    keyChecklist: [
      "Hydraulic brake line vacuum bleed with fresh DOT 4 fluid",
      "Caliper piston cleaning, seal renewal, and silicone pin grease",
      "Disc rotor thickness and runout measurement with dial indicator",
      "Brake pad chamfering and anti-squeal compound application",
      "Clutch pushrod and clutch spring tension measurement",
      "Clutch cable inner teflon lube and barrel end inspection",
      "ABS wheel speed sensor cleaning and air-gap inspection"
    ],
    symptoms: [
      "Squeaking, screeching, or grinding noise when braking",
      "Spongy brake lever traveling all the way to handlebar grip",
      "Clutch slip when accelerating in 3rd or 4th gear",
      "Hard or stiff clutch lever causing wrist fatigue in traffic"
    ]
  },
  {
    id: "chain-sprocket",
    name: "Chain & Sprocket Maintenance",
    category: "Drive Train",
    iconName: "ShieldAlert",
    estDuration: "45 Mins - 1.5 Hours",
    startingPrice: "₹350",
    recommendedInterval: "Lube Every 500 km / Replacement Every 18,000 - 25,000 km",
    shortDesc: "Deep chain degreasing, laser alignment, O-ring/X-ring condition checks, and sprocket set replacement.",
    fullDesc: "A dry or misaligned chain robs up to 15% of engine power and poses serious safety risks. We ensure laser-guided swingarm alignment, precise 25-30mm slack tolerance, and use premium heavy-duty chain lubricants suited for tropical monsoon climates.",
    keyChecklist: [
      "Heavy-duty biodegradable solvent degreasing and ultrasonic scrub",
      "Front countershaft sprocket splines and teeth wear pattern check",
      "Rear drive sprocket tooth hooking and side wear inspection",
      "Laser rear-wheel straight-line tracking alignment",
      "O-ring / X-ring elastomeric seal integrity check",
      "Torque check on rear sprocket carrier bolts and swingarm pivot nut",
      "High-viscosity synthetic chain paste application"
    ],
    symptoms: [
      "Frequent chain loose slack requiring tightening every week",
      "Jerking sensation when rolling off or on the throttle",
      "Chain jumping or snapping sound over road undulations",
      "Visible hooked teeth or sharp points on rear sprocket"
    ]
  },
  {
    id: "electrical-diagnostics",
    name: "Electrical Diagnostics & Wiring",
    category: "Electronics",
    iconName: "Zap",
    estDuration: "1 - 3 Hours",
    startingPrice: "₹499",
    recommendedInterval: "At First Sign of Erratic Starting / Annual Sweep",
    shortDesc: "Multimeter wiring harness testing, alternator stator check, starter relay rebuild, and ECU error code reading.",
    fullDesc: "Modern motorcycles rely heavily on sensitive sensor networks, electronic fuel injection (EFI), and starter circuits. We pinpoint battery parasitic drain, short circuits, horn/headlight relay malfunctions, and ignition coil cutouts without butchering factory looms.",
    keyChecklist: [
      "OBD-II scanner diagnosis for EFI & ABS error codes",
      "Alternator stator charging coil AC output and continuity test",
      "Rectifier/Regulator (RR unit) DC charging voltage test at 4,000 RPM",
      "Starter motor carbon brush wear and solenoid contact cleaning",
      "Parasitic dark current drain measurement in off-key state",
      "Handlebar switchgear contact oxidation de-cleaning",
      "Heat-shrink weatherproofing on all repaired wiring segments"
    ],
    symptoms: [
      "Motorcycle clicking repeatedly without cranking over",
      "Check engine light or battery warning indicator glowing on dash",
      "Headlights dimming excessively when horn or indicators operate",
      "Random engine stalling when turning handlebars left or right"
    ]
  },
  {
    id: "tyre-wheel",
    name: "Tyre & Wheel Service",
    category: "Wheel & Suspension",
    iconName: "CircleDot",
    estDuration: "45 Mins - 1 Hour",
    startingPrice: "₹300",
    recommendedInterval: "Every 2,000 km / Prior to Long Highway Rides",
    shortDesc: "Puncture repairs, tyre replacement, dynamic wheel balancing, alloy bend check, and spoke wheel truing.",
    fullDesc: "Proper tyre traction and balanced wheels prevent high-speed handlebar wobble. We handle tubeless tyre fittings using rim-safe hydraulic tyre changers, spoke re-tightening for vintage and adventure motorcycles, and high-purity nitrogen inflation.",
    keyChecklist: [
      "Rim runout check using dial indicator (radial & lateral)",
      "High-speed wheel balancing with lead-free clip-on weights",
      "Alloy rim bead seat cleaning and corrosion wire brush",
      "Tubeless valve stem and core seal renewal",
      "Spoke wheel tensioning and pitch truing (for Royal Enfield/Adventure bikes)",
      "Tread depth measurement across center and shoulder ribs",
      "Wheel bearing play and dust seal inspection"
    ],
    symptoms: [
      "Handlebar vibration or wobble at 60 - 80 km/h",
      "Tyre losing 4-5 PSI pressure every 2 days without obvious puncture",
      "Uneven tyre scalloping or cupping wear on front tyre",
      "Heavy steering or bike pulling persistently to one side"
    ]
  },
  {
    id: "suspension-service",
    name: "Suspension Service & Fork Overhaul",
    category: "Chassis & Handling",
    iconName: "Sliders",
    estDuration: "2 - 4 Hours",
    startingPrice: "₹850",
    recommendedInterval: "Every 15,000 - 20,000 km / Fork Oil Every 2 Years",
    shortDesc: "Telescopic & USD fork seal replacement, viscous fork oil damping tuning, and rear monoshock linkage bushing greasing.",
    fullDesc: "Tackle potholes and highway curves with controlled damping. We rebuild leaking telescopic forks and inverted (USD) forks with genuine oil seals, calibrate oil volume (cc) per leg to rider weight, and service swingarm needle bearings.",
    keyChecklist: [
      "Fork leg disassembly, inner stanchion scratch and straightness check",
      "New OEM oil seals and dust scraper wiper installation",
      "Graduated cylinder measurement of factory-grade fork oil (10W/15W/20W)",
      "Steering cone set (headstock bearings) repacking with waterproof grease",
      "Rear monoshock preload adjustment suited to rider payload",
      "Swingarm pivot bushing play check and grease nipple lubrication"
    ],
    symptoms: [
      "Oil rings forming on front fork chrome tubes after bumps",
      "Front end bottoming out with a harsh metallic thud over potholes",
      "Vague, floating feeling when cornering at higher speeds",
      "Front handlebar feels notchy or notched in straight-ahead position"
    ]
  },
  {
    id: "battery-replacement",
    name: "Battery & Charging System",
    category: "Power Systems",
    iconName: "BatteryCharging",
    estDuration: "30 Mins",
    startingPrice: "₹250 + Battery",
    recommendedInterval: "Battery Test Every Service / Replacement 2.5 - 3 Years",
    shortDesc: "Digital load bank testing, terminal anti-corrosion treatment, and authorized warranty replacement batteries.",
    fullDesc: "Never get stranded with a dead battery. We test battery cold cranking amps (CCA), internal resistance, and terminal voltage under dynamic starter load. We stock fresh VRLA and AGM maintenance-free batteries with valid manufacturer warranty cards.",
    keyChecklist: [
      "Conductance and Cold Cranking Amperes (CCA) load test",
      "Open circuit voltage resting reading (target > 12.6V)",
      "Under-crank voltage drop recording (must stay above 9.8V)",
      "Battery box cleaning and acid neutralization wash",
      "Terminal wire brush polishing and brass bolt replacement",
      "Dielectric anti-sulfation terminal protector application"
    ],
    symptoms: [
      "Sluggish crank on cool morning starts",
      "Instrument cluster resetting to 00:00 time when pressing start button",
      "Horn sounds weak when headlights are switched on",
      "Battery older than 30 months without prior replacement"
    ]
  },
  {
    id: "scooter-cvt",
    name: "Scooter CVT & Transmission Overhaul",
    category: "Scooter Transmission",
    iconName: "Settings",
    estDuration: "1.5 - 2.5 Hours",
    startingPrice: "₹499",
    recommendedInterval: "Every 4,000 - 6,000 km / Belt Swap at 18,000 km",
    shortDesc: "Automatic scooter variator cleaning, roller weight replacement, drive belt inspection, and clutch shoe de-glazing.",
    fullDesc: "Ensure vibration-free acceleration and optimal fuel mileage for your gearless scooter. We clean carbon dust accumulation from the variator pulley, check roller ramp flat spots, grease secondary sliding torque ramps, and calibrate centrifugal clutch engagement.",
    keyChecklist: [
      "CVT cover removal and compressed air blow-out of clutch friction dust",
      "Variator movable drive face and roller weights micrometer wear check",
      "Bando / Gates reinforced V-belt crack and width measurement",
      "Centrifugal clutch bell de-glazing with aluminum-oxide emery cloth",
      "Secondary driven pulley torque cam disassembly and high-temp greasing",
      "Final reduction gear oil flush and 80W-90 synthetic gear oil refill",
      "Airbox crankcase breather filter sponge cleaning and oil soak"
    ],
    symptoms: [
      "Scooter shuddering or juddering heavily during initial 0-20 km/h acceleration",
      "Engine revving high without proportionate gain in forward speed",
      "Squealing or chirping noise from transmission case on cold starts",
      "Drastic reduction in city fuel mileage (under 35 km/l)"
    ]
  },
  {
    id: "pickup-drop-roadside",
    name: "Doorstep Pickup & Roadside Breakdown",
    category: "Convenience & Assist",
    iconName: "Truck",
    estDuration: "Within 45 - 60 Mins",
    startingPrice: "Free on Complete Service / ₹149 Basic",
    recommendedInterval: "On Demand / Home or Office Convenience",
    shortDesc: "Safe, hydraulic-equipped motorcycle pickup from your doorstep across Chennai, with live GPS update and digital job sheet.",
    fullDesc: "Don't waste half your Saturday waiting at a garage. Our specialized pickup team collects your motorcycle or scooter from your residence or office, straps it with scratch-free ratchet ties, transports it safely to our Guindy facility, and delivers it back fully serviced and washed.",
    keyChecklist: [
      "Sanitized flatbed / hydraulic ramp loading without fairing strain",
      "High-tensile soft loop tie-downs preventing handlebar or paint abrasion",
      "Digital intake inspection video sent to customer WhatsApp before transit",
      "Odometer, fuel level, and existing scratch marking verification",
      "Direct phone line with assigned master technician throughout the day",
      "Safe return delivery with contactless UPI payment option"
    ],
    symptoms: [
      "No time to visit workshop during busy weekday work schedules",
      "Punctured tubeless tyre or broken chain in parking lot",
      "Motorcycle refusing to self-start or kick-start at home",
      "Accidental breakdown stranded on road"
    ]
  }
];

export const BRANDS_SERVICED = [
  { name: "Royal Enfield", models: "Classic, Hunter, Meteor, Himalayan, Interceptor 650", tag: "Cruiser & Adventure" },
  { name: "Honda", models: "Activa 6G/125, Shine 100/125, SP 125, CB350 H'ness, Hornet", tag: "Scooters & Commuters" },
  { name: "Yamaha", models: "R15 V4, MT-15, FZ-S, RayZR 125, Aerox 155", tag: "Sports & Maxi-Scooters" },
  { name: "TVS", models: "Apache RTR 160/200/RR310, Jupiter 110/125, Ntorq 125, Raider", tag: "Performance & Scooters" },
  { name: "KTM", models: "Duke 200/250/390, RC 200/390, Adventure 250/390", tag: "Track & Street Naked" },
  { name: "Bajaj", models: "Pulsar 125/150/NS200/RS200, Dominar 400, Platina", tag: "Roadster & Tourer" },
  { name: "Suzuki", models: "Access 125, Burgman Street, Gixxer 150/250, V-Strom SX", tag: "Premium Scooters & Dual-Sport" },
  { name: "Hero MotoCorp", models: "Splendor+, HF Deluxe, Glamour, Xpulse 200 4V, Karizma", tag: "Commuters & Enduro" },
  { name: "Kawasaki", models: "Ninja 300, Ninja 400, Ninja 650, Z650, Z900", tag: "Superbikes & Multi-Cylinders" },
  { name: "Triumph", models: "Speed 400, Scrambler 400X, Trident 660, Street Twin", tag: "Modern Classics" },
  { name: "Ather Energy", models: "Ather 450X, 450S, 450 Apex", tag: "Electric Performance" },
  { name: "Ola Electric", models: "Ola S1 Pro Gen 2, S1 Air, S1 X+", tag: "Electric Scooters" },
  { name: "Vespa / Aprilia", models: "Vespa VXL 125/150, SXL, Aprilia SR 160, Storm 125", tag: "Italian Premium Scooters" }
];

export const BIKE_CATEGORIES: BikeCategory[] = [
  {
    id: "scooter",
    name: "SCOOTER & GEARLESS",
    tagline: "CVT Transmission & Urban Commute Scooters",
    popularModels: ["Honda Activa 6G / 125", "TVS Jupiter 110 / 125", "Suzuki Access 125 / Burgman", "TVS Ntorq 125", "Yamaha Aerox 155 / RayZR", "Vespa / Aprilia 125/160"],
    recommendedEngineOil: "10W-30 Scooter Spec (MB Grade Friction-Reduced) + 80W-90 Gear Oil",
    serviceFocus: "CVT variator roller cleaning, automatic clutch shoe deglazing, drive belt deflection inspection, secondary gear oil swap, and front brake drum/disc calibration.",
    inspectionPoints: 34
  },
  {
    id: "commuter",
    name: "COMMUTER",
    tagline: "High-Mileage Daily Workhorses",
    popularModels: ["Honda Shine", "TVS Raider", "Bajaj Pulsar 125/150", "Hero Splendor / Glamour", "Yamaha FZ-Fi"],
    recommendedEngineOil: "10W-30 / 20W-40 Premium Mineral or Semi-Synthetic",
    serviceFocus: "Maximum fuel economy, smooth throttle response, durable brake shoes, and reliable morning cold-starts in Chennai traffic.",
    inspectionPoints: 32
  },
  {
    id: "sports",
    name: "SPORTS",
    tagline: "High-RPM Precision & Cornering Dynamics",
    popularModels: ["Yamaha R15 V4 / MT-15", "KTM RC 200 / 390", "TVS Apache RR310", "Bajaj Pulsar RS200", "Suzuki Gixxer SF 250"],
    recommendedEngineOil: "10W-40 / 10W-50 100% Fully Synthetic (Motul 7100 / Castrol Power1)",
    serviceFocus: "High-RPM valve timing, liquid-cooling radiator flush, inverted fork damping, sintered brake pads, and high-speed wheel balancing.",
    inspectionPoints: 46
  },
  {
    id: "cruiser",
    name: "CRUISER",
    tagline: "Torquey Engines & Effortless Highway Cruising",
    popularModels: ["Royal Enfield Classic 350", "Meteor 350", "Hunter 350", "Honda CB350 / H'ness", "Jawa 42 / Yezdi Roadster"],
    recommendedEngineOil: "15W-50 / 10W-30 Semi or Fully Synthetic Grade",
    serviceFocus: "Tappet valve clearances, heavy clutch cable smooth lubrication, spoke wheel truing, vibration damping, and exhaust manifold seal.",
    inspectionPoints: 42
  },
  {
    id: "adventure",
    name: "ADVENTURE",
    tagline: "Long-Travel Suspension & Rugged Reliability",
    popularModels: ["Royal Enfield Himalayan 450 / Scram", "KTM 390 Adventure", "BMW G310 GS", "Suzuki V-Strom SX", "Hero Xpulse 200 4V"],
    recommendedEngineOil: "10W-40 / 15W-50 Heavy-Duty Fully Synthetic",
    serviceFocus: "Air filter sealing against dust, spoke wheel tensioning, fork seal protection, chain guide slider wear, and brake rotor cleaning after trail rides.",
    inspectionPoints: 48
  },
  {
    id: "premium",
    name: "PREMIUM",
    tagline: "Multi-Cylinder Performance & Superbikes",
    popularModels: ["Kawasaki Ninja 300 / 650 / Z900", "Triumph Speed 400 / Scrambler", "Royal Enfield Interceptor 650 / Continental GT", "Ducati Scrambler"],
    recommendedEngineOil: "10W-50 / 15W-50 Ester-based Synthetic Racing Oil",
    serviceFocus: "Multi-throttle body vacuum synchronisation, spark plug heat ranges, high-pressure fuel rail inspection, and torque spec compliance.",
    inspectionPoints: 52
  },
  {
    id: "electric",
    name: "ELECTRIC",
    tagline: "High-Voltage Drives & Urban EV Maintenance",
    popularModels: ["Ather 450X / Apex", "Ola S1 Pro / Air", "TVS iQube", "Chetak Electric", "Ultraviolette F77"],
    recommendedEngineOil: "Specialized Reduction Gearbox Synthetic Oil (75W-90)",
    serviceFocus: "Belt tension and pulley alignment, regenerative disc brake servicing, cooling fan dust extraction, low-voltage 12V auxiliary battery testing.",
    inspectionPoints: 36
  }
];

export const SERVICE_PACKAGES: ServicePackage[] = [
  {
    id: "basic",
    name: "BASIC CARE",
    price: "₹699",
    idealFor: "Commuter & quick 3-month checkup",
    turnaroundTime: "2 - 3 Hours",
    inclusions: [
      "Engine oil replacement (labor included, oil charged at actuals)",
      "General 28-point motorcycle safety inspection",
      "Chain slack adjustment & high-tack chain lubrication",
      "Front and rear brake cleaning and dust blow-out",
      "Tyre pressure check & tread depth assessment",
      "Battery terminal cleaning & voltage check",
      "Free basic foam exterior wash & dry"
    ]
  },
  {
    id: "complete",
    name: "COMPLETE SERVICE",
    price: "₹1,499",
    badge: "MOST POPULAR",
    popular: true,
    idealFor: "Everyday riders & quarterly service intervals",
    turnaroundTime: "4 - 5 Hours",
    inclusions: [
      "Engine oil replacement & oil filter renewal",
      "Air filter element deep cleaning or replacement inspection",
      "Spark plug gap check and carbon cleaning",
      "Brake caliper inspection, slide pin greasing & pad check",
      "Drive chain full solvent ultrasonic wash, adjustment & Motul lube",
      "Clutch & throttle cable lubrication and free-play setting",
      "Battery health diagnostic test with digital printout",
      "Front & rear wheel bearing play check",
      "Detailed 42-point mechanical & electrical safety inspection",
      "High-pressure foam wash, degreasing & anti-rust spray"
    ]
  },
  {
    id: "premium",
    name: "PREMIUM CARE",
    price: "₹2,499",
    badge: "MASTER TUNE",
    idealFor: "Touring enthusiasts, performance & big-engine bikes",
    turnaroundTime: "Same Day / 6 - 8 Hours",
    inclusions: [
      "Complete 54-point comprehensive mechanical & electronic inspection",
      "Engine diagnostics & cylinder compression leak-down check",
      "Valve tappet clearance inspection and precision adjustment",
      "Hydraulic brake line vacuum bleed & fresh DOT 4 fluid top-up",
      "Chain & sprocket laser alignment & torque verification",
      "Electrical wiring harness OBD error scan & stator test",
      "Steering cone set headstock bearing greasing & adjustment",
      "Fork seal leak inspection & suspension damping assessment",
      "Premium engine bay detailing, exhaust polish & Teflon paint sealant",
      "30-day / 1,000 km workshop service guarantee"
    ]
  }
];

export const WORKSHOP_CHECKLIST = [
  { title: "Transparent Inspection", desc: "Every bike gets a digital job sheet on WhatsApp with photos before any wrench touches your motorcycle." },
  { title: "Genuine-Quality Replacement", desc: "We use only OEM factory spares (Honda, Royal Enfield, Yamaha, TVS, Bosch) or certified premium aftermarket parts." },
  { title: "Experienced Technicians", desc: "Our mechanics possess over 10+ years of hands-on garage experience across two-stroke, single-cylinder, and multi-cylinder engines." },
  { title: "Clear Service Estimates", desc: "Zero surprise bills. We call you for approval on any extra parts or labor required after the preliminary strip-down." },
  { title: "Final Quality & Road Test", desc: "Every serviced motorcycle is road-tested across 5 parameters before final wash, polish, and customer handover." }
];

export const SERVICE_STEPS = [
  { step: "01", title: "BOOK", desc: "Choose your required service package and your preferred date & time slot." },
  { step: "02", title: "INSPECT", desc: "Our senior technician conducts a thorough check and creates your digital job sheet." },
  { step: "03", title: "SERVICE", desc: "Repairs and maintenance are executed with OEM torque specs and calibrated tools." },
  { step: "04", title: "TEST", desc: "The bike undergoes a multi-point road test, brake check, and final quality signoff." },
  { step: "05", title: "RIDE", desc: "Collect your polished, smooth-running motorcycle and enjoy confident miles ahead." }
];

export const TESTIMONIALS: ReviewItem[] = [
  {
    id: "rev-1",
    name: "Arun K.",
    bikeModel: "Yamaha MT-15 V2",
    serviceDone: "Complete Service + Chain Sprocket Replacement",
    rating: 5,
    date: "August 2026",
    comment: "Professional service and clear communication. They explained exactly what my bike needed before starting the work. No unnecessary part push. My gear shifts are like butter now.",
    verifiedRider: true
  },
  {
    id: "rev-2",
    name: "Karthik R.",
    bikeModel: "Royal Enfield Classic 350 Reborn",
    serviceDone: "Tappet Setting & 10,000 km Periodic Maintenance",
    rating: 5,
    date: "July 2026",
    comment: "My Royal Enfield came in for a complete service and came back feeling noticeably smoother. The annoying tappet tick is gone and vibrations at 80 km/h have drastically reduced.",
    verifiedRider: true
  },
  {
    id: "rev-3",
    name: "Suresh M.",
    bikeModel: "KTM Duke 250",
    serviceDone: "Brake Overhaul & Coolant Flush",
    rating: 5,
    date: "September 2026",
    comment: "Quick brake repair and transparent pricing. Good workshop experience. They showed me the old degraded brake fluid and cleaned the caliper pistons thoroughly. Highly recommended.",
    verifiedRider: true
  },
  {
    id: "rev-4",
    name: "Deepa S.",
    bikeModel: "TVS Ronin 225",
    serviceDone: "Periodic Service & Electrical Diagnostics",
    rating: 5,
    date: "August 2026",
    comment: "Honest mechanics in Chennai. My bike had an intermittent self-start issue that the company service center couldn't trace. The Ironwheel team traced a loose starter relay pin in 30 minutes.",
    verifiedRider: true
  },
  {
    id: "rev-5",
    name: "Vikram N.",
    bikeModel: "Honda CB350 H'ness",
    serviceDone: "Premium Care + Fork Oil Seal Renewal",
    rating: 5,
    date: "July 2026",
    comment: "Very clean workshop setup in Guindy. You can actually see the mechanics working with torque wrenches instead of just hammering things. Reasonable pricing for the care they provide.",
    verifiedRider: true
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "bay-1",
    title: "Hydraulic Service Bay & Lift Station",
    category: "Workshop Infrastructure",
    description: "Equipped with pneumatic motorcycle lifts, compressed air lines, and overhead LED illumination for ergonomic under-chassis access.",
    specs: "300 kg Pneumatic Scissor Lifts · 10 Bar Central Air Line"
  },
  {
    id: "engine-bench",
    title: "Precision Engine Rebuilding Station",
    category: "Mechanical Bay",
    description: "Dedicated clean workbench for cylinder head disassembly, valve lapping, micrometer measurements, and crankshaft bearing fitting.",
    specs: "Mitutoyo Calipers · 5-100 Nm Digital Torque Wrenches"
  },
  {
    id: "tool-wall",
    title: "Heavy-Duty Shadow Board & Tool Wall",
    category: "Tools & Equipment",
    description: "Chrome-vanadium spanners, socket sets, chain breakers, bearing pullers, and specialized flywheel pullers for Indian and imported motorcycles.",
    specs: "Stanley, King Tony & Gedore Professional Tooling"
  },
  {
    id: "brake-lathe",
    title: "Brake Caliper Servicing & Fluid Station",
    category: "Safety Systems",
    description: "Pneumatic brake bleeding canisters, ultrasonic ultrasonic parts cleaner, and micrometer disc thickness gauge for rotor assessment.",
    specs: "DOT 4 & DOT 5.1 Hydraulic Brake Fluid Dispensers"
  },
  {
    id: "tyre-station",
    title: "Tyre Fitting & Dynamic Wheel Balancing",
    category: "Wheels & Tyres",
    description: "Rim-clamp tyre mounting machine preventing scratched alloys, paired with static and dynamic high-speed wheel balancers.",
    specs: "Rim Safe Polymer Jaws · Laser Guided Alignment"
  },
  {
    id: "delivery-bay",
    title: "Final Inspection & Customer Handover Bay",
    category: "Quality Assurance",
    description: "Every bike undergoes a final 12-point delivery inspection, high-pressure foam wash, tyre dressing, and chain paste check.",
    specs: "3M Detailing Chemicals · Multi-Point Road Tested"
  }
];

export const FAQS = [
  {
    q: "Do you use genuine OEM spare parts?",
    a: "Yes, 100%. We source replacement parts directly from authorized OEM distributors (Royal Enfield, Honda, Yamaha, TVS, KTM, Bajaj) and genuine consumable brands like Motul, Shell, NGK, Bosch, and Brembo/Bybre. Old removed parts are always placed in a box for you to inspect."
  },
  {
    q: "Can I wait at the workshop while my motorcycle is being serviced?",
    a: "Absolutely. We have a clean, air-conditioned customer waiting area with viewing glass overlooking the service bays, high-speed Wi-Fi, drinking water, and complimentary coffee. You are welcome to observe the service."
  },
  {
    q: "How long does a Complete Service take?",
    a: "A standard Complete Service typically takes 3 to 4.5 hours. If you drop your motorcycle off between 8:30 AM and 10:30 AM, it is usually ready for pickup by 2:00 PM - 4:00 PM on the same day."
  },
  {
    q: "Do you provide breakdown assistance or bike pickup in Chennai?",
    a: "Yes. For non-starting motorcycles or accidental breakdowns within a 10 km radius of our Guindy workshop (covering Guindy, Saidapet, Ekkatuthangal, Ashok Nagar, Velachery, Adyar, and Porur), we provide roadside assistance and safe four-wheeler flatbed pickup."
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all UPI payments (GPay, PhonePe, Paytm), credit/debit cards, net banking, and cash. You receive an itemized GST invoice and digital job card receipt on your phone."
  }
];
