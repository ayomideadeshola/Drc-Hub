export const mockProducts = [
  // SMARTPHONES
  {
    id: '1',
    name: 'Samsung Galaxy S24 Ultra',
    price: 1299,
    originalPrice: 1599,
    category: 'smartphones',
    brand: 'Samsung',
    images: [
      'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/28/8207904/1.jpg?9729',
      'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/28/8207904/1.jpg?9729'
    ],
    description: 'Premium flagship smartphone with advanced AI camera system and S Pen',
    stock: 50,
    rating: 4.8,
    reviews: 124,
    features: ['256GB Storage', 'Snapdragon 8 Gen 3', '200MP Camera', 'S Pen Included'],
    specifications: {
      'Display': '6.8-inch Dynamic AMOLED 2X',
      'Processor': 'Snapdragon 8 Gen 3',
      'RAM': '12GB',
      'Storage': '256GB',
      'Battery': '5000mAh',
      'Camera': '200MP + 50MP + 12MP + 10MP'
    },
    isNew: true,
    isSale: true,
    discount: 19
  },
  {
    id: '2',
    name: 'iPhone 15 Pro Max',
    price: 1199,
    originalPrice: 1399,
    category: 'smartphones',
    brand: 'iPhone',
    images: [
      'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/27/9196704/1.jpg?4258',
      'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/27/9196704/1.jpg?4258'
    ],
    description: 'Titanium design with A17 Pro chip and advanced camera system',
    stock: 45,
    rating: 4.9,
    reviews: 256,
    features: ['256GB Storage', 'A17 Pro Chip', 'ProRAW Camera', 'Titanium Frame'],
    specifications: {
      'Display': '6.7-inch Super Retina XDR',
      'Processor': 'A17 Pro',
      'RAM': '8GB',
      'Storage': '256GB',
      'Battery': '4441mAh',
      'Camera': '48MP Main + 12MP Ultra Wide + 12MP Telephoto'
    },
    isNew: true,
    isSale: true,
    discount: 14
  },
  {
    id: '3',
    name: 'TECNO Spark 40-KM5',
    price: 89000,
    originalPrice: 109000,
    category: 'smartphones',
    brand: 'Tecno',
    images: [
      'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/64/0282814/1.jpg?5824'
    ],
    description: 'Android Mobile Smart Phone with excellent battery life',
    stock: 120,
    rating: 4.5,
    reviews: 89,
    features: ['128GB Storage', 'MediaTek Helio', '5000mAh Battery', 'Dual SIM'],
    specifications: {
      'Display': '6.6-inch HD+',
      'Processor': 'MediaTek Helio G85',
      'RAM': '4GB',
      'Storage': '128GB',
      'Battery': '5000mAh',
      'Camera': '50MP + 2MP'
    },
    isSale: true,
    discount: 18
  },
  {
    id: '4',
    name: 'Infinix Smart 10 Plus Smart Phone With 128GB ROM & 4GB RAM',
    price: 150000,
    originalPrice: 200000,
    category: 'smartphones',
    brand: 'Xiaomi',
    images: [
      'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/93/6772814/1.jpg?3344'
    ],
    description: 'Powerful mid-range smartphone with 120Hz AMOLED display',
    stock: 85,
    rating: 4.7,
    reviews: 142,
    features: ['256GB Storage', 'Snapdragon 7s Gen 2', '200MP Camera', '120Hz Display'],
    specifications: {
      'Display': '6.67-inch AMOLED 120Hz',
      'Processor': 'Snapdragon 7s Gen 2',
      'RAM': '8GB',
      'Storage': '4GB',
      'Battery': '5000mAh',
      'Camera': '200MP + 8MP + 2MP'
    },
    isSale: true,
    discount: 20
  },
  {
    id: '5',
    name: 'INFINIX Note 50 Pro',
    price: 125000,
    originalPrice: 145000,
    category: 'smartphones',
    brand: 'Infinix',
    images: [
      'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/75/1847814/1.jpg?6492'
    ],
    description: 'Feature-packed smartphone with stunning design',
    stock: 95,
    rating: 4.6,
    reviews: 78,
    features: ['256GB Storage', 'MediaTek Dimensity', '108MP Camera', 'Fast Charging'],
    specifications: {
      'Display': '6.78-inch AMOLED',
      'Processor': 'MediaTek Dimensity 7020',
      'RAM': '8GB',
      'Storage': '256GB',
      'Battery': '5000mAh',
      'Camera': '108MP + 13MP + 2MP'
    },
    isSale: true,
    discount: 14
  },

  // PHONE CASES
  {
    id: '6',
    name: 'Premium Leather Case - iPhone 15 Pro',
    price: 4500,
    originalPrice: 6500,
    category: 'cases',
    brand: 'Premium',
    images: [
      'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/13/5466814/1.jpg?7385'
    ],
    description: 'Genuine leather case with MagSafe compatibility',
    stock: 200,
    rating: 4.7,
    reviews: 345,
    features: ['Genuine Leather', 'MagSafe Compatible', 'Precise Cutouts', 'Drop Protection'],
    specifications: {
      'Material': 'Genuine Leather',
      'Compatibility': 'iPhone 15 Pro / Pro Max',
      'Features': 'MagSafe, Wireless Charging',
      'Colors': 'Black, Brown, Navy'
    },
    isSale: true,
    discount: 31
  },
  {
    id: '7',
    name: 'Rugged Armor Case - Samsung Galaxy',
    price: 3200,
    originalPrice: 4500,
    category: 'cases',
    brand: 'Samsung',
    images: [
      'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/78/5907704/1.jpg?9824'
    ],
    description: 'Military-grade protection with shock absorption',
    stock: 180,
    rating: 4.8,
    reviews: 289,
    features: ['Military Grade', 'Shock Absorption', 'Anti-Slip Grip', 'Raised Bezels'],
    specifications: {
      'Material': 'TPU + PC',
      'Compatibility': 'Galaxy S24 Series',
      'Protection': 'Military Grade Drop Test',
      'Colors': 'Black, Navy, Gray'
    },
    isSale: true,
    discount: 29
  },
  {
    id: '8',
    name: 'Clear Transparent Case - Universal',
    price: 1500,
    originalPrice: 2500,
    category: 'cases',
    brand: 'Universal',
    images: [
      'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/37/1537814/1.jpg?5610'
    ],
    description: 'Crystal clear case that shows off your phone design',
    stock: 350,
    rating: 4.5,
    reviews: 567,
    features: ['Crystal Clear', 'Anti-Yellowing', 'Slim Fit', 'Shock Absorption'],
    specifications: {
      'Material': 'Premium TPU',
      'Compatibility': 'Multiple Models',
      'Thickness': '1.5mm Ultra Thin',
      'Features': 'Anti-Yellowing Technology'
    },
    isNew: true,
    isSale: true,
    discount: 40
  },

  // SCREEN PROTECTORS
  {
    id: '9',
    name: 'Tempered Glass Screen Protector',
    price: 2000,
    originalPrice: 3500,
    category: 'screen-protectors',
    brand: 'Premium',
    images: [
      'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/35/7631552/1.jpg?6515'
    ],
    description: '9H hardness tempered glass with oleophobic coating',
    stock: 500,
    rating: 4.9,
    reviews: 892,
    features: ['9H Hardness', 'Anti-Fingerprint', 'HD Clear', 'Easy Installation'],
    specifications: {
      'Material': '9H Tempered Glass',
      'Thickness': '0.33mm',
      'Features': 'Oleophobic Coating, Anti-Shatter',
      'Package': '2 Pack with Installation Kit'
    },
    isSale: true,
    discount: 43
  },
  {
    id: '10',
    name: 'Privacy Screen Protector',
    price: 3500,
    originalPrice: 5000,
    category: 'screen-protectors',
    brand: 'Privacy Plus',
    images: [
      'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/42/8273972/1.jpg?2062'
    ],
    description: 'Privacy filter protects from side viewing',
    stock: 280,
    rating: 4.6,
    reviews: 234,
    features: ['Privacy Filter', 'Anti-Spy', 'Scratch Resistant', 'Bubble-Free'],
    specifications: {
      'Material': 'Privacy Tempered Glass',
      'Viewing Angle': '30 Degrees',
      'Features': 'Anti-Spy, Anti-Glare',
      'Compatibility': 'Universal Sizes Available'
    },
    isSale: true,
    discount: 30
  },

  // CHARGERS & CABLES
  {
    id: '11',
    name: 'Fast Charger 65W GaN',
    price: 8500,
    originalPrice: 12000,
    category: 'chargers',
    brand: 'PowerTech',
    images: [
      'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/46/0941914/1.jpg?0320'
    ],
    description: 'Ultra-fast GaN technology charger with multiple ports',
    stock: 150,
    rating: 4.9,
    reviews: 456,
    features: ['65W Output', 'GaN Technology', '3 USB Ports', 'Compact Design'],
    specifications: {
      'Output': '65W Max',
      'Ports': '2x USB-C, 1x USB-A',
      'Technology': 'GaN III',
      'Safety': 'Over-current, Over-voltage Protection'
    },
    isNew: true,
    isSale: true,
    discount: 29
  },
  {
    id: '12',
    name: 'USB-C to Lightning Cable - 2M',
    price: 3500,
    originalPrice: 5000,
    category: 'chargers',
    brand: 'Apple Compatible',
    images: [
      'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/31/0894814/1.jpg?1764'
    ],
    description: 'MFi certified fast charging cable',
    stock: 400,
    rating: 4.7,
    reviews: 678,
    features: ['MFi Certified', 'Fast Charging', 'Durable Braided', '2 Meter Length'],
    specifications: {
      'Length': '2 Meters',
      'Certification': 'MFi Certified',
      'Material': 'Nylon Braided',
      'Speed': 'USB 2.0, Fast Charge Support'
    },
    isSale: true,
    discount: 30
  },
  {
    id: '13',
    name: 'Wireless Charging Pad 15W',
    price: 6500,
    originalPrice: 9500,
    category: 'chargers',
    brand: 'Qi Wireless',
    images: [
      'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/65/8022814/1.jpg?7174'
    ],
    description: 'Fast wireless charging for Qi-enabled devices',
    stock: 220,
    rating: 4.6,
    reviews: 342,
    features: ['15W Fast Charge', 'Qi Certified', 'LED Indicator', 'Non-Slip Surface'],
    specifications: {
      'Output': '15W/10W/7.5W/5W',
      'Compatibility': 'Qi-Enabled Devices',
      'Features': 'Foreign Object Detection, Over-heat Protection',
      'Includes': 'USB-C Cable'
    },
    isSale: true,
    discount: 32
  },

  // POWER BANKS
  {
    id: '14',
    name: 'Power Bank 20000mAh Fast Charge',
    price: 12500,
    originalPrice: 18000,
    category: 'power-banks',
    brand: 'PowerMax',
    images: [
      'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/73/5397904/1.jpg?3220'
    ],
    description: 'High-capacity power bank with PD fast charging',
    stock: 180,
    rating: 4.8,
    reviews: 523,
    features: ['20000mAh', 'PD 22.5W', 'LED Display', '3 Output Ports'],
    specifications: {
      'Capacity': '20000mAh',
      'Input': 'USB-C 18W',
      'Output': '22.5W PD Fast Charge',
      'Ports': '2x USB-A, 1x USB-C',
      'Features': 'Digital Display, Pass-Through Charging'
    },
    isNew: true,
    isSale: true,
    discount: 31
  },
  {
    id: '15',
    name: 'Slim Power Bank 10000mAh',
    price: 7500,
    originalPrice: 11000,
    category: 'power-banks',
    brand: 'SlimCharge',
    images: [
      'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/10/1848704/1.jpg?3635'
    ],
    description: 'Ultra-slim portable charger for everyday use',
    stock: 250,
    rating: 4.7,
    reviews: 445,
    features: ['10000mAh', 'Ultra Slim', 'Dual Output', 'Premium Aluminum'],
    specifications: {
      'Capacity': '10000mAh',
      'Thickness': '12mm Ultra Slim',
      'Output': '2.1A Dual USB',
      'Material': 'Aluminum Alloy',
      'Weight': '185g'
    },
    isSale: true,
    discount: 32
  },

  // HEADPHONES & EARBUDS
  {
    id: '16',
    name: 'Wireless Earbuds Pro - ANC',
    price: 18500,
    originalPrice: 25000,
    category: 'audio',
    brand: 'SoundPro',
    images: [
      'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/11/3401914/1.jpg?2631'
    ],
    description: 'Premium earbuds with active noise cancellation',
    stock: 120,
    rating: 4.9,
    reviews: 678,
    features: ['Active ANC', '8 Hours Battery', 'IPX5 Waterproof', 'Touch Control'],
    specifications: {
      'Driver': '10mm Dynamic Driver',
      'Battery': '8hrs + 24hrs (Case)',
      'ANC': 'Active Noise Cancellation -35dB',
      'Waterproof': 'IPX5',
      'Bluetooth': '5.3'
    },
    isNew: true,
    isSale: true,
    discount: 26
  },
  {
    id: '17',
    name: 'Gaming Earbuds - Low Latency',
    price: 9500,
    originalPrice: 14000,
    category: 'audio',
    brand: 'GameSound',
    images: [
      'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/60/3710914/1.jpg?1097'
    ],
    description: 'Ultra-low latency earbuds for mobile gaming',
    stock: 160,
    rating: 4.6,
    reviews: 389,
    features: ['45ms Low Latency', 'Gaming Mode', 'RGB Lights', '6 Hours Playtime'],
    specifications: {
      'Latency': '45ms Gaming Mode',
      'Battery': '6hrs + 18hrs (Case)',
      'Features': 'RGB Lights, Gaming Mode',
      'Bluetooth': '5.2',
      'Microphone': 'Dual Mic ENC'
    },
    isSale: true,
    discount: 32
  },
  {
    id: '18',
    name: 'Over-Ear Headphones - Studio Quality',
    price: 22500,
    originalPrice: 32000,
    category: 'audio',
    brand: 'AudioMax',
    images: [
      'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/65/0218814/1.jpg?2865'
    ],
    description: 'Professional studio-grade over-ear headphones',
    stock: 85,
    rating: 4.9,
    reviews: 234,
    features: ['50mm Drivers', '40 Hours Battery', 'ANC', 'Foldable Design'],
    specifications: {
      'Driver': '50mm Dynamic Driver',
      'Battery': '40 Hours with ANC',
      'ANC': 'Hybrid Active ANC',
      'Comfort': 'Memory Foam Cushions',
      'Features': 'Multi-device Pairing'
    },
    isNew: true,
    isSale: true,
    discount: 30
  },

  // SMART WATCHES
  {
    id: '19',
    name: 'Smart Watch Pro - AMOLED',
    price: 28500,
    originalPrice: 38000,
    category: 'watches',
    brand: 'SmartTech',
    images: [
      'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/70/6191862/1.jpg?0531'
    ],
    description: 'Premium smartwatch with health tracking and GPS',
    stock: 95,
    rating: 4.8,
    reviews: 445,
    features: ['1.43" AMOLED', 'GPS Built-in', 'Heart Rate Monitor', '7 Days Battery'],
    specifications: {
      'Display': '1.43" AMOLED Always-On',
      'Battery': '7 Days Typical Use',
      'Health': 'Heart Rate, SpO2, Sleep Tracking',
      'Sports': '100+ Workout Modes',
      'Water Resistance': '5ATM'
    },
    isNew: true,
    isSale: true,
    discount: 25
  },
  {
    id: '20',
    name: 'Fitness Band - Budget Tracker',
    price: 5500,
    originalPrice: 8500,
    category: 'watches',
    brand: 'FitTrack',
    images: [
      'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/09/8490822/1.jpg?9042'
    ],
    description: 'Affordable fitness tracker with essential features',
    stock: 300,
    rating: 4.5,
    reviews: 789,
    features: ['Heart Rate', 'Sleep Monitor', '14 Days Battery', 'Water Resistant'],
    specifications: {
      'Display': '1.1" Color Display',
      'Battery': '14 Days',
      'Features': 'Step Counter, Heart Rate, Sleep',
      'Water Resistance': 'IP68',
      'Notifications': 'Call, SMS, App Alerts'
    },
    isSale: true,
    discount: 35
  },

  // PHONE HOLDERS
  {
    id: '21',
    name: 'Car Phone Mount - Magnetic',
    price: 3500,
    originalPrice: 5500,
    category: 'holders',
    brand: 'DriveEasy',
    images: [
      'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/80/9254571/1.jpg?5924'
    ],
    description: 'Strong magnetic car mount with 360° rotation',
    stock: 220,
    rating: 4.7,
    reviews: 567,
    features: ['Strong Magnet', '360° Rotation', 'Dashboard/Vent Mount', 'Universal Fit'],
    specifications: {
      'Mount Type': 'Magnetic',
      'Rotation': '360 Degrees',
      'Installation': 'Dashboard or Air Vent',
      'Compatibility': 'All Smartphones',
      'Includes': '2 Metal Plates'
    },
    isSale: true,
    discount: 36
  },
  {
    id: '22',
    name: 'Desktop Phone Stand - Adjustable',
    price: 2500,
    originalPrice: 4000,
    category: 'holders',
    brand: 'DeskPro',
    images: [
      'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/32/3341814/1.jpg?0730'
    ],
    description: 'Ergonomic adjustable stand for desk use',
    stock: 280,
    rating: 4.6,
    reviews: 423,
    features: ['Adjustable Height', 'Anti-Slip Base', 'Aluminum Build', 'Foldable'],
    specifications: {
      'Material': 'Aluminum Alloy',
      'Adjustability': 'Height and Angle',
      'Compatibility': '4-12 inch Devices',
      'Features': 'Cable Management, Foldable',
      'Weight': '200g'
    },
    isSale: true,
    discount: 38
  },

  
  {
    id: '23',
    name: 'Apple IPhone 17 Pro - 12GB- 256GB - Cosmic Orange',
    price: 2499000,
    originalPrice: 2600000,
    category: 'smartphones',
    brand: 'Apple',
    images: [
      'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/08/6187814/1.jpg?3232p'
    ],
    description: 'iPhone 17 Pro . The most powerful iPhone ever. Brilliant 6.3-inch display, aluminum unibody design, A19 Pro chip, all 48MP rear cameras, and best-ever battery life.',
    stock: 50,
    rating: 4.9,
    reviews: 292,
    features: ['256GB Capacity', '100MB/s Read', 'Class 10 U3', 'A2 Performance'],
    specifications: {
      'Battery Capacity': '3998 mAh ',
      'Processor': 'Apple A19 Pro',
      'Charging - Wired': 'PD2.0, 50% in 20 min + 25W',
      'Screen Size': '6.3',
      'Operating System': 'IOS 26'
    },
    isSale: true,
    discount: 32
  },
  {
    id: '24',
    name: 'Apple IPhone 16 Plus 5G - 6.7" - 128GB ROM - 8GB RAM - Single SIM - Pink',
    price: 1300000,
    originalPrice: 1500000,
    category: 'smartphones',
    brand: 'Apple',
    images: [
      'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/13/3618114/1.jpg?3730'
    ],
    description: 'iPhone 16 Plus Apple \'s renewed smartphone with a custom-designed A18 chip for high performance and excellent battery life',
    stock: 40,
    rating: 4.7,
    reviews: 154,
    features: ['128GB', '6.7" Super Retina XDR OLED'],
    specifications: {
      '2G (GSM) networks:': '850-900-1800-1900 MHz',
      '3G Networks (WCDMA)': '850-900-1700-1900-2100 MHz',
      'Wi-Fi': 'a, b, g, n, n 5GHz, ac, Wi-Fi 7 (be), Wi-Fi Hotspot',
      'Bluetooth': ' 5.3',
      'GPS': ' GPS, A-GPS, GLONASS, BeiDou, Galileo, QZSS'
    },
    isSale: true,
    discount: 36
  },

  // ACCESSORIES
  {
    id: '25',
    name: 'Apple IPhone 12 Pro Max - 6.7-Inch - 128GB ROM, 6GB RAM - IOS 14',
    price: 690000,
    originalPrice: 700000,
    category: 'smartphones',
    brand: 'Apple',
    images: [
      'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/56/5157252/1.jpg?1082'
    ],
    description: 'iPhone 12 Pro Max. It features the powerful A14 Bionic chip, 5G to download and stream high-quality video, a bright 6.7" Super Retina XDR display, and Ceramic Shield for better drop performance.',
    stock: 450,
    rating: 4.8,
    reviews: 723,
    features: ['Advanced dual-camera system with 12MP Wide and Ultra Wide cameras; Photographic Styles, Smart HDR 4, Night mode, 4K Dolby Vision HDR'],
    specifications: {
      'SKU': ' AP044MP48Q0STNAFAMZ',
      'Product Line': 'phoneszone',
      'Model': 'iPhone 12 Pro Max',
      'Weight(kg)': '0.4'
    },
    isSale: true,
    discount: 43
  },
  {
    id: '26',
    name: 'Apple IPhone 13 - 6.1" - 128GB ROM - 4GB RAM - IOS 15 - 3240mAh - Blue',
    price: 630000,
    originalPrice: 700000,
    category: 'smartphones',
    brand: 'Apple',
    images: [
      'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/18/1265104/1.jpg?0745'
    ],
    description: 'Professional ring light for content creation',
    stock: 150,
    rating: 4.7,
    reviews: 445,
    features: ['6.1-inch Super Retina XDR display', 'Main Camare - (12MP + 12MP ) ', 'Selfie Camera - 12MP', '4GB RAM + 128GB ROM'],
    specifications: {
      'SKU': 'AP044MP6WXWHANAFAMZ',
      'Weight (kg): ': '0.2',
    },
    isNew: true,
    isSale: true,
    discount: 35
  },
  {
    id: '27',
    name: 'Apple IPhone 12, 6.1-Inch 128GB ROM 5G - Pacific Blue Power Bank',
    price:  570000,
    originalPrice: 600000,
    category: 'smartphone',
    brand: 'Apple',
    images: [
      'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/18/1142901/1.jpg?6697'
    ],
    description: 'iPhone 12 smartphone was launched on 13th October 2020. The phone comes with a 6.1-inch touchscreen display with a resolution of 1170x2532 pixels at a pixel density of 460 pixels per inch (ppi). The iPhone 12 supports wireless charging, as well as proprietary fast charging.',
    stock: 600,
    rating: 4.6,
    reviews: 1234,
    features: ['6.1-Inch Display', 'Dual SIM', 'iOS 14.1', '4GB RAM, 128gb ROM'],
    specifications: {
      'Screen Size': ' 6.1',
      'SKU': 'AP044MT1YBLKINAFAMZ',
      'Features': 'Collapsible, Swappable Top',
      'Operating System': 'iOS',
      'RAM': '4'
    },
    isSale: true,
    discount: 40
  },
  {
    id: '28',
    name: 'Wireless Music Wireless Bluetooth Earphone 5.0 Stereo Earbuds Headphones For Android And Iphone Hear Bass Earpiece Headset Pod',
    price: 4990,
    originalPrice: 9000,
    category: 'accessories',
    brand: 'SelfiePro',
    images: [
      'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/97/2484204/1.jpg?2704'
    ],
    description: 'Bluetooth audio streaming with AAC and APT-X support',
    stock: 210,
    rating: 4.7,
    reviews: 556,
    features: ['Connectivity:Bluetooth Wireless', 'Brand:Unbranded/Generic', 'Connector(s):3.5mm (1/8in.)', 'Transmission range: 10 meters'],
    specifications: {
      'SKU': 'GE779EA881RC4NAFAMZ',
      'Product Line': 'Lordif',
      'Model': 'Earpod pro',
      'Weight': '0.2',
      'certifications': 'Eco Friendly'
    },
    isSale: true,
    discount: 40
  }
]

// Helper functions
export const getProductsByCategory = (category: string) => {
  return mockProducts.filter(product => product.category === category)
}

export const getProductsByBrand = (brand: string) => {
  return mockProducts.filter(product => product.brand === brand)
}

export const getFeaturedProducts = () => {
  return mockProducts.filter(product => product.isNew || product.rating >= 4.8)
}

export const getSaleProducts = () => {
  return mockProducts.filter(product => product.isSale)
}

export const searchProducts = (query: string) => {
  const lowercaseQuery = query.toLowerCase()
  return mockProducts.filter(product =>
    product.name.toLowerCase().includes(lowercaseQuery) || 
    product.description.toLowerCase().includes(lowercaseQuery)
  )
}