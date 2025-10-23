import type { Service } from '../types'

export const services: Service[] = [
  // Home Cleaning Services
  {
    id: 'deep-home-cleaning',
    slug: 'deep-home-cleaning',
    title: 'Deep Home Cleaning',
    description: 'Comprehensive cleaning service covering bathroom deep cleaning, kitchen deep cleaning, living area, and all rooms. Our professional team uses eco-friendly products.',
    category: 'Home Cleaning',
    subCategory: 'Deep Cleaning',
    image: '/images/services/deep-home-cleaning.jpg',
    basePrice: 2499,
    rating: 4.8,
    reviews: 1523,
    duration: '3-4 hours',
    includes: [
      'Bathroom deep cleaning with scrubbing',
      'Kitchen cleaning including cabinets',
      'Living room and bedroom cleaning',
      'Window and door cleaning',
      'Floor mopping and vacuuming',
      'Balcony cleaning'
    ],
    tags: ['cleaning', 'home', 'deep cleaning', 'bathroom', 'kitchen'],
    featured: true,
    popular: true
  },
  {
    id: 'sofa-deep-cleaning',
    slug: 'sofa-deep-cleaning',
    title: 'Sofa Deep Cleaning',
    description: 'Professional sofa cleaning using advanced steam cleaning technology. Removes stains, dust, and allergens.',
    category: 'Home Cleaning',
    subCategory: 'Sofa Cleaning',
    image: '/images/services/sofa-deep-cleaning.jpg',
    basePrice: 899,
    rating: 4.7,
    reviews: 892,
    duration: '1-2 hours',
    includes: [
      'Vacuum cleaning',
      'Steam cleaning',
      'Stain removal',
      'Fabric protection spray',
      'Cushion cleaning'
    ],
    tags: ['sofa', 'cleaning', 'steam cleaning', 'furniture'],
    popular: true
  },
  
  // Plumbing Services
  {
    id: 'plumber-on-call',
    slug: 'plumber-on-call',
    title: 'Plumber on Call',
    description: 'Get a verified plumber for all your plumbing needs. From tap repairs to basin installation and leakage fixes.',
    category: 'Plumbing',
    subCategory: 'General Plumbing',
    image: '/images/services/plumber-on-call.jpg',
    basePrice: 199,
    rating: 4.6,
    reviews: 2156,
    duration: '30 mins - 2 hours',
    includes: [
      'Tap repair and installation',
      'Basin and sink repair',
      'Leakage detection and fix',
      'Pipe repair',
      'Drain cleaning',
      'Minor installations'
    ],
    tags: ['plumbing', 'repair', 'tap', 'leak', 'basin'],
    featured: true,
    popular: true
  },
  
  // Electrical Services
  {
    id: 'ceiling-fan-installation',
    slug: 'ceiling-fan-installation',
    title: 'Ceiling Fan Installation & Repair',
    description: 'Professional ceiling fan installation, repair, and replacement services by certified electricians.',
    category: 'Electrical',
    subCategory: 'Fan Installation',
    image: '/images/services/ceiling-fan-installation.jpg',
    basePrice: 199,
    rating: 4.7,
    reviews: 1345,
    duration: '30-60 mins',
    includes: [
      'Fan installation',
      'Old fan removal',
      'Regulator installation',
      'Wiring check',
      'Cleaning after work',
      'Testing and warranty'
    ],
    tags: ['electrical', 'fan', 'installation', 'ceiling fan'],
    popular: true
  },
  {
    id: 'led-tube-light-installation',
    slug: 'led-tube-light-installation',
    title: 'LED & Tube Light Installation',
    description: 'Expert installation of LED lights, tube lights, and other lighting fixtures with proper wiring.',
    category: 'Electrical',
    subCategory: 'Light Installation',
    image: '/images/services/led-tube-light-installation.jpg',
    basePrice: 99,
    rating: 4.5,
    reviews: 876,
    duration: '20-40 mins',
    includes: [
      'LED/tube light installation',
      'Holder installation',
      'Wiring connection',
      'Testing',
      'Old light removal'
    ],
    tags: ['electrical', 'led', 'light', 'installation', 'tube light']
  },
  
  // Painting Services
  {
    id: 'interior-wall-painting',
    slug: 'interior-wall-painting',
    title: 'Interior Wall Painting',
    description: 'Professional interior wall painting service with premium quality paints and skilled painters.',
    category: 'Painting',
    subCategory: 'Interior Painting',
    image: '/images/services/interior-wall-painting.jpg',
    basePrice: 8999,
    rating: 4.8,
    reviews: 756,
    duration: '2-5 days',
    includes: [
      'Wall cleaning and preparation',
      'Putty application',
      'Primer coating',
      '2 coats of paint',
      'Furniture covering',
      'Post-painting cleanup'
    ],
    tags: ['painting', 'interior', 'wall painting', 'home improvement'],
    featured: true
  },
  
  // Salon Services
  {
    id: 'salon-at-home-women',
    slug: 'salon-at-home-women',
    title: 'Salon at Home for Women',
    description: 'Premium beauty services at your doorstep. Hair care, facials, waxing, manicure, pedicure, and more.',
    category: 'Salon at Home',
    subCategory: 'Women\'s Salon',
    image: '/images/services/salon-at-home-women.jpg',
    basePrice: 499,
    rating: 4.9,
    reviews: 3421,
    duration: '1-3 hours',
    includes: [
      'Hair spa',
      'Facial',
      'Waxing services',
      'Manicure & Pedicure',
      'Hair styling',
      'Threading'
    ],
    tags: ['salon', 'beauty', 'women', 'facial', 'waxing'],
    featured: true,
    popular: true
  },
  {
    id: 'haircut-men',
    slug: 'haircut-men',
    title: 'Haircut & Grooming for Men',
    description: 'Professional grooming services for men including haircut, shave, beard trim, and facial.',
    category: 'Salon at Home',
    subCategory: 'Men\'s Salon',
    image: '/images/services/haircut-men.jpg',
    basePrice: 299,
    rating: 4.7,
    reviews: 2134,
    duration: '45-90 mins',
    includes: [
      'Haircut with styling',
      'Shave/Beard trim',
      'Face massage',
      'Hair wash',
      'Facial (optional)'
    ],
    tags: ['salon', 'men', 'haircut', 'shave', 'grooming'],
    popular: true
  },
  
  // Pest Control Services
  {
    id: 'pest-control-cockroach',
    slug: 'pest-control-cockroach',
    title: 'Cockroach Control Treatment',
    description: 'Effective cockroach control with safe, odorless treatment. 30-day service guarantee.',
    category: 'Pest Control',
    subCategory: 'Cockroach Control',
    image: '/images/services/pest-control-cockroach.jpg',
    basePrice: 699,
    rating: 4.6,
    reviews: 1287,
    duration: '30-45 mins',
    includes: [
      'Gel-based treatment',
      'Kitchen and bathroom treatment',
      'All hiding spots covered',
      '30-day warranty',
      'Odorless and safe',
      'Child and pet friendly'
    ],
    tags: ['pest control', 'cockroach', 'insects', 'home safety']
  },
  
  // Appliance Repair Services
  {
    id: 'ac-service-repair',
    slug: 'ac-service-repair',
    title: 'AC Service & Repair',
    description: 'Complete AC service including deep cleaning, gas refilling, and repairs by trained technicians.',
    category: 'Appliance Repair',
    subCategory: 'AC Repair',
    image: '/images/services/ac-service-repair.jpg',
    basePrice: 399,
    rating: 4.7,
    reviews: 2456,
    duration: '1-2 hours',
    includes: [
      'AC deep cleaning',
      'Filter cleaning',
      'Gas leak detection',
      'Cooling check',
      'Jet pump & drain cleaning',
      '30-day warranty'
    ],
    tags: ['ac', 'repair', 'service', 'air conditioner', 'cooling'],
    featured: true,
    popular: true
  },
  {
    id: 'water-purifier-service',
    slug: 'water-purifier-service',
    title: 'Water Purifier Service',
    description: 'RO, UV, UF water purifier service and repair. Filter replacement and maintenance.',
    category: 'Appliance Repair',
    subCategory: 'Water Purifier',
    image: '/images/services/water-purifier-service.jpg',
    basePrice: 299,
    rating: 4.5,
    reviews: 1543,
    duration: '45-90 mins',
    includes: [
      'Complete servicing',
      'Filter replacement',
      'RO membrane check',
      'Water quality testing',
      'Leak detection',
      'Installation support'
    ],
    tags: ['water purifier', 'ro', 'service', 'repair', 'filter']
  },
  
  // Carpentry Services
  {
    id: 'door-lock-repair',
    slug: 'door-lock-repair',
    title: 'Door & Lock Repair',
    description: 'Expert carpenter for door repair, lock installation, and handle replacement.',
    category: 'Carpentry',
    subCategory: 'Door Repair',
    image: '/images/services/door-lock-repair.jpg',
    basePrice: 149,
    rating: 4.6,
    reviews: 987,
    duration: '30-60 mins',
    includes: [
      'Door alignment',
      'Lock repair/replacement',
      'Handle installation',
      'Hinge repair',
      'Door stopper installation'
    ],
    tags: ['carpentry', 'door', 'lock', 'repair', 'installation']
  },
  
  // Additional Services
  {
    id: 'bathroom-deep-cleaning',
    slug: 'bathroom-deep-cleaning',
    title: 'Bathroom Deep Cleaning',
    description: 'Thorough bathroom cleaning including tiles, taps, toilet, and drainage with anti-bacterial treatment.',
    category: 'Home Cleaning',
    subCategory: 'Bathroom Cleaning',
    image: '/images/services/deep-home-cleaning.jpg',
    basePrice: 599,
    rating: 4.8,
    reviews: 1234,
    duration: '1-2 hours',
    includes: [
      'Toilet cleaning and disinfection',
      'Tile and grout scrubbing',
      'Tap and fixture cleaning',
      'Mirror cleaning',
      'Drainage cleaning',
      'Anti-bacterial spray'
    ],
    tags: ['cleaning', 'bathroom', 'deep cleaning', 'disinfection']
  },
  {
    id: 'kitchen-deep-cleaning',
    slug: 'kitchen-deep-cleaning',
    title: 'Kitchen Deep Cleaning',
    description: 'Complete kitchen cleaning including chimney, stove, cabinets, and floor with degreasing.',
    category: 'Home Cleaning',
    subCategory: 'Kitchen Cleaning',
    image: '/images/services/deep-home-cleaning.jpg',
    basePrice: 899,
    rating: 4.7,
    reviews: 876,
    duration: '2-3 hours',
    includes: [
      'Chimney cleaning',
      'Stove and countertop cleaning',
      'Cabinet cleaning inside out',
      'Wall tile cleaning',
      'Floor scrubbing',
      'Degreasing treatment'
    ],
    tags: ['cleaning', 'kitchen', 'deep cleaning', 'chimney', 'degreasing']
  },
]

export function getServiceById(id: string): Service | undefined {
  return services.find(s => s.id === id)
}

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(s => s.slug === slug)
}

export function getServicesByCategory(category: string): Service[] {
  return services.filter(s => s.category === category)
}

export function getServicesBySubCategory(subCategory: string): Service[] {
  return services.filter(s => s.subCategory === subCategory)
}

export function getFeaturedServices(): Service[] {
  return services.filter(s => s.featured)
}

export function getPopularServices(): Service[] {
  return services.filter(s => s.popular)
}

export function searchServices(query: string): Service[] {
  const lowerQuery = query.toLowerCase()
  return services.filter(s => 
    s.title.toLowerCase().includes(lowerQuery) ||
    s.description.toLowerCase().includes(lowerQuery) ||
    s.tags.some(tag => tag.toLowerCase().includes(lowerQuery)) ||
    s.category.toLowerCase().includes(lowerQuery)
  )
}


