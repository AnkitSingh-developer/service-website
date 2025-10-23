import type { Category } from '../types'

export const categories: Category[] = [
  {
    id: 'home-cleaning',
    title: 'Home Cleaning',
    slug: 'home-cleaning',
    emoji: '🧹',
    description: 'Professional cleaning services for your home',
    subCategories: [
      { id: 'deep-cleaning', title: 'Deep Cleaning', slug: 'deep-cleaning', parentCategory: 'home-cleaning' },
      { id: 'bathroom-cleaning', title: 'Bathroom Cleaning', slug: 'bathroom-cleaning', parentCategory: 'home-cleaning' },
      { id: 'kitchen-cleaning', title: 'Kitchen Cleaning', slug: 'kitchen-cleaning', parentCategory: 'home-cleaning' },
      { id: 'sofa-cleaning', title: 'Sofa Cleaning', slug: 'sofa-cleaning', parentCategory: 'home-cleaning' },
    ]
  },
  {
    id: 'plumbing',
    title: 'Plumbing',
    slug: 'plumbing',
    emoji: '🔧',
    description: 'Expert plumbing solutions',
    subCategories: [
      { id: 'tap-repair', title: 'Tap Repair', slug: 'tap-repair', parentCategory: 'plumbing' },
      { id: 'basin-sink', title: 'Basin & Sink', slug: 'basin-sink', parentCategory: 'plumbing' },
      { id: 'toilet-repair', title: 'Toilet Repair', slug: 'toilet-repair', parentCategory: 'plumbing' },
      { id: 'drain-cleaning', title: 'Drain Cleaning', slug: 'drain-cleaning', parentCategory: 'plumbing' },
    ]
  },
  {
    id: 'electrical',
    title: 'Electrical',
    slug: 'electrical',
    emoji: '⚡',
    description: 'Licensed electricians for all electrical work',
    subCategories: [
      { id: 'fan-installation', title: 'Fan Installation', slug: 'fan-installation', parentCategory: 'electrical' },
      { id: 'light-installation', title: 'Light Installation', slug: 'light-installation', parentCategory: 'electrical' },
      { id: 'switch-repair', title: 'Switch Repair', slug: 'switch-repair', parentCategory: 'electrical' },
      { id: 'wiring', title: 'Wiring', slug: 'wiring', parentCategory: 'electrical' },
    ]
  },
  {
    id: 'painting',
    title: 'Painting',
    slug: 'painting',
    emoji: '🎨',
    description: 'Professional painting services',
    subCategories: [
      { id: 'interior-painting', title: 'Interior Painting', slug: 'interior-painting', parentCategory: 'painting' },
      { id: 'exterior-painting', title: 'Exterior Painting', slug: 'exterior-painting', parentCategory: 'painting' },
      { id: 'waterproofing', title: 'Waterproofing', slug: 'waterproofing', parentCategory: 'painting' },
      { id: 'texture', title: 'Texture & Design', slug: 'texture', parentCategory: 'painting' },
    ]
  },
  {
    id: 'salon',
    title: 'Salon at Home',
    slug: 'salon',
    emoji: '💇',
    description: 'Beauty and grooming services at your doorstep',
    subCategories: [
      { id: 'women-salon', title: 'Women\'s Salon', slug: 'women-salon', parentCategory: 'salon' },
      { id: 'men-salon', title: 'Men\'s Salon', slug: 'men-salon', parentCategory: 'salon' },
      { id: 'spa', title: 'Spa Services', slug: 'spa', parentCategory: 'salon' },
      { id: 'bridal-makeup', title: 'Bridal Makeup', slug: 'bridal-makeup', parentCategory: 'salon' },
    ]
  },
  {
    id: 'pest-control',
    title: 'Pest Control',
    slug: 'pest-control',
    emoji: '🐛',
    description: 'Get rid of pests with safe treatments',
    subCategories: [
      { id: 'cockroach', title: 'Cockroach Control', slug: 'cockroach', parentCategory: 'pest-control' },
      { id: 'termite', title: 'Termite Control', slug: 'termite', parentCategory: 'pest-control' },
      { id: 'bed-bugs', title: 'Bed Bug Control', slug: 'bed-bugs', parentCategory: 'pest-control' },
      { id: 'mosquito', title: 'Mosquito Control', slug: 'mosquito', parentCategory: 'pest-control' },
    ]
  },
  {
    id: 'appliance-repair',
    title: 'Appliance Repair',
    slug: 'appliance-repair',
    emoji: '🔨',
    description: 'Repair services for home appliances',
    subCategories: [
      { id: 'ac-repair', title: 'AC Repair', slug: 'ac-repair', parentCategory: 'appliance-repair' },
      { id: 'washing-machine', title: 'Washing Machine', slug: 'washing-machine', parentCategory: 'appliance-repair' },
      { id: 'refrigerator', title: 'Refrigerator', slug: 'refrigerator', parentCategory: 'appliance-repair' },
      { id: 'water-purifier', title: 'Water Purifier', slug: 'water-purifier', parentCategory: 'appliance-repair' },
    ]
  },
  {
    id: 'carpentry',
    title: 'Carpentry',
    slug: 'carpentry',
    emoji: '🪚',
    description: 'Skilled carpenters for furniture and repairs',
    subCategories: [
      { id: 'furniture-assembly', title: 'Furniture Assembly', slug: 'furniture-assembly', parentCategory: 'carpentry' },
      { id: 'door-repair', title: 'Door Repair', slug: 'door-repair', parentCategory: 'carpentry' },
      { id: 'cabinet-repair', title: 'Cabinet Repair', slug: 'cabinet-repair', parentCategory: 'carpentry' },
      { id: 'custom-furniture', title: 'Custom Furniture', slug: 'custom-furniture', parentCategory: 'carpentry' },
    ]
  },
]

export function getCategoryById(id: string): Category | undefined {
  return categories.find(c => c.id === id)
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find(c => c.slug === slug)
}

export function getSubCategories(categoryId: string) {
  const category = getCategoryById(categoryId)
  return category?.subCategories || []
}


