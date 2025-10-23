// Core Types for the Service Website

export interface Service {
  id: string
  slug: string
  title: string
  description: string
  category: string
  subCategory?: string
  image: string
  basePrice: number
  rating: number
  reviews: number
  duration: string
  includes: string[]
  tags: string[]
  featured?: boolean
  popular?: boolean
}

export interface Category {
  id: string
  title: string
  slug: string
  emoji?: string
  description?: string
  subCategories?: SubCategory[]
}

export interface SubCategory {
  id: string
  title: string
  slug: string
  parentCategory: string
  description?: string
}

export interface Provider {
  id: string
  name: string
  email: string
  phone: string
  avatar?: string
  rating: number
  reviewCount: number
  completedJobs: number
  services: string[]
  verified: boolean
  joinedDate: string
  bio?: string
  address?: string
  city: string
  availability: boolean
}

export interface Booking {
  id: string
  serviceId: string
  serviceTitle: string
  customerId: string
  customerName: string
  customerEmail: string
  customerPhone?: string
  providerId?: string
  providerName?: string
  date: string
  time: string
  address: string
  notes?: string
  status: 'pending' | 'confirmed' | 'in-progress' | 'completed' | 'cancelled'
  price: number
  createdAt: string
  updatedAt: string
}

export interface Review {
  id: string
  serviceId: string
  customerId: string
  customerName: string
  providerId?: string
  rating: number
  comment: string
  date: string
  helpful: number
  images?: string[]
}

export interface User {
  id: string
  name: string
  email: string
  phone?: string
  avatar?: string
  role: 'customer' | 'provider' | 'admin'
  address?: string
  city?: string
  createdAt: string
}


