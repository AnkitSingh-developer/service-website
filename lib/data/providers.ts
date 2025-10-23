import type { Provider } from '../types'

export const providers: Provider[] = [
  {
    id: 'provider-1',
    name: 'Rajesh Kumar',
    email: 'rajesh.kumar@example.com',
    phone: '+91 98765 43210',
    avatar: '/placeholder-user.jpg',
    rating: 4.8,
    reviewCount: 234,
    completedJobs: 567,
    services: ['Plumbing', 'Carpentry'],
    verified: true,
    joinedDate: '2022-01-15',
    bio: 'Experienced plumber with 10+ years in residential and commercial plumbing',
    address: 'Andheri West',
    city: 'Mumbai',
    availability: true
  },
  {
    id: 'provider-2',
    name: 'Priya Sharma',
    email: 'priya.sharma@example.com',
    phone: '+91 98765 43211',
    avatar: '/placeholder-user.jpg',
    rating: 4.9,
    reviewCount: 456,
    completedJobs: 892,
    services: ['Salon at Home', 'Beauty Services'],
    verified: true,
    joinedDate: '2021-06-20',
    bio: 'Professional beautician certified from VLCC, specializing in bridal makeup',
    address: 'Bandra East',
    city: 'Mumbai',
    availability: true
  },
  {
    id: 'provider-3',
    name: 'Amit Patel',
    email: 'amit.patel@example.com',
    phone: '+91 98765 43212',
    avatar: '/placeholder-user.jpg',
    rating: 4.7,
    reviewCount: 189,
    completedJobs: 423,
    services: ['Electrical', 'Appliance Repair'],
    verified: true,
    joinedDate: '2022-03-10',
    bio: 'Licensed electrician with expertise in home automation',
    address: 'Powai',
    city: 'Mumbai',
    availability: true
  },
  {
    id: 'provider-4',
    name: 'Sunita Reddy',
    email: 'sunita.reddy@example.com',
    phone: '+91 98765 43213',
    avatar: '/placeholder-user.jpg',
    rating: 4.9,
    reviewCount: 678,
    completedJobs: 1234,
    services: ['Home Cleaning', 'Deep Cleaning'],
    verified: true,
    joinedDate: '2020-11-05',
    bio: 'Leading a team of professional cleaners with eco-friendly products',
    address: 'Malad West',
    city: 'Mumbai',
    availability: true
  },
  {
    id: 'provider-5',
    name: 'Vikram Singh',
    email: 'vikram.singh@example.com',
    phone: '+91 98765 43214',
    avatar: '/placeholder-user.jpg',
    rating: 4.6,
    reviewCount: 123,
    completedJobs: 289,
    services: ['Painting', 'Waterproofing'],
    verified: true,
    joinedDate: '2023-01-08',
    bio: 'Professional painter with expertise in interior and exterior painting',
    address: 'Goregaon East',
    city: 'Mumbai',
    availability: false
  }
]

export function getProviderById(id: string): Provider | undefined {
  return providers.find(p => p.id === id)
}

export function getProvidersByService(service: string): Provider[] {
  return providers.filter(p => p.services.includes(service))
}

export function getAvailableProviders(): Provider[] {
  return providers.filter(p => p.availability)
}

export function getVerifiedProviders(): Provider[] {
  return providers.filter(p => p.verified)
}


