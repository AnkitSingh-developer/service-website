"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Calendar,
  Clock,
  Star,
  Package,
  User,
  Mail,
  Phone,
  MapPin,
  Settings,
  Bell,
  LogOut,
  Heart,
  CreditCard,
} from "lucide-react"

export default function CustomerDashboardPage() {
  const [customer] = useState({
    id: 'customer-1',
    name: 'Priya Sharma',
    email: 'priya.sharma@example.com',
    phone: '+91 98765 43210',
    address: 'Andheri West, Mumbai',
    memberSince: '2023-01-15',
    totalBookings: 24,
    activeBookings: 2,
  })

  const [bookings] = useState([
    {
      id: '1',
      service: 'Deep Home Cleaning',
      provider: 'Sunita Reddy',
      date: '2024-10-20',
      time: '10:00 AM',
      status: 'confirmed',
      price: 2499,
      image: '/images/services/deep-home-cleaning.jpg',
    },
    {
      id: '2',
      service: 'Plumber on Call',
      provider: 'Rajesh Kumar',
      date: '2024-10-22',
      time: '2:00 PM',
      status: 'confirmed',
      price: 450,
      image: '/images/services/plumber-on-call.jpg',
    },
    {
      id: '3',
      service: 'AC Service & Repair',
      provider: 'Amit Patel',
      date: '2024-10-19',
      time: '11:00 AM',
      status: 'in-progress',
      price: 850,
      image: '/images/services/ac-service-repair.jpg',
    },
  ])

  const [completedBookings] = useState([
    {
      id: '4',
      service: 'Salon at Home for Women',
      provider: 'Priya Sharma',
      date: '2024-10-15',
      price: 1299,
      rating: 5,
      reviewed: true,
    },
    {
      id: '5',
      service: 'Ceiling Fan Installation',
      provider: 'Vikram Singh',
      date: '2024-10-10',
      price: 350,
      rating: 4,
      reviewed: true,
    },
    {
      id: '6',
      service: 'Interior Wall Painting',
      provider: 'Rahul Mehta',
      date: '2024-09-28',
      price: 12500,
      rating: 0,
      reviewed: false,
    },
  ])

  const [favorites] = useState([
    {
      id: '1',
      title: 'Deep Home Cleaning',
      category: 'Home Cleaning',
      price: 2499,
      rating: 4.8,
      image: '/images/services/deep-home-cleaning.jpg',
    },
    {
      id: '2',
      title: 'Salon at Home for Women',
      category: 'Salon at Home',
      price: 1299,
      rating: 4.9,
      image: '/images/services/salon-at-home-women.jpg',
    },
  ])

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'confirmed':
        return <Badge className="bg-green-500">Confirmed</Badge>
      case 'in-progress':
        return <Badge className="bg-blue-500">In Progress</Badge>
      case 'completed':
        return <Badge className="bg-gray-500">Completed</Badge>
      case 'cancelled':
        return <Badge variant="destructive">Cancelled</Badge>
      default:
        return <Badge>{status}</Badge>
    }
  }

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 border-b bg-background">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <span className="text-xl font-bold">U</span>
              </div>
              <span className="text-xl font-bold">My Account</span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm">
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Welcome back, {customer.name}!</h1>
          <p className="text-muted-foreground">Manage your bookings and explore new services</p>
        </div>

        {/* Quick Stats */}
        <div className="mb-8 grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Bookings</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{customer.totalBookings}</div>
              <p className="text-xs text-muted-foreground">
                {customer.activeBookings} active bookings
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Favorites</CardTitle>
              <Heart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{favorites.length}</div>
              <p className="text-xs text-muted-foreground">
                Saved services
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Member Since</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Jan 2023</div>
              <p className="text-xs text-muted-foreground">
                Loyal customer
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="bookings" className="space-y-6">
          <TabsList>
            <TabsTrigger value="bookings">
              <Calendar className="mr-2 h-4 w-4" />
              My Bookings
            </TabsTrigger>
            <TabsTrigger value="history">
              <Clock className="mr-2 h-4 w-4" />
              History
            </TabsTrigger>
            <TabsTrigger value="favorites">
              <Heart className="mr-2 h-4 w-4" />
              Favorites
            </TabsTrigger>
            <TabsTrigger value="profile">
              <User className="mr-2 h-4 w-4" />
              Profile
            </TabsTrigger>
          </TabsList>

          {/* Active Bookings Tab */}
          <TabsContent value="bookings">
            <Card>
              <CardHeader>
                <CardTitle>Active Bookings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {bookings.map((booking) => (
                    <div key={booking.id} className="flex gap-4 rounded-lg border p-4">
                      <div className="h-20 w-20 shrink-0 overflow-hidden rounded-md">
                        <img
                          src={booking.image}
                          alt={booking.service}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-semibold">{booking.service}</h3>
                            <p className="text-sm text-muted-foreground">
                              Provider: {booking.provider}
                            </p>
                            <div className="mt-2 flex items-center gap-4 text-sm">
                              <div className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                {booking.date}
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                {booking.time}
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold">₹{booking.price}</div>
                            <div className="mt-1">{getStatusBadge(booking.status)}</div>
                          </div>
                        </div>
                        <div className="mt-4 flex gap-2">
                          <Button size="sm" variant="outline">View Details</Button>
                          <Button size="sm" variant="outline">Track</Button>
                          <Button size="sm" variant="outline" className="text-red-600">
                            Cancel
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {bookings.length === 0 && (
                  <div className="text-center py-8">
                    <p className="text-muted-foreground">No active bookings</p>
                    <Button className="mt-4" asChild>
                      <Link href="/services">Browse Services</Link>
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* History Tab */}
          <TabsContent value="history">
            <Card>
              <CardHeader>
                <CardTitle>Booking History</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Service</TableHead>
                      <TableHead>Provider</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Rating</TableHead>
                      <TableHead>Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {completedBookings.map((booking) => (
                      <TableRow key={booking.id}>
                        <TableCell className="font-medium">{booking.service}</TableCell>
                        <TableCell>{booking.provider}</TableCell>
                        <TableCell>{booking.date}</TableCell>
                        <TableCell>₹{booking.price}</TableCell>
                        <TableCell>
                          {booking.rating > 0 ? (
                            <div className="flex items-center gap-1">
                              {booking.rating}
                              <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                            </div>
                          ) : (
                            <span className="text-muted-foreground">Not rated</span>
                          )}
                        </TableCell>
                        <TableCell>
                          {!booking.reviewed ? (
                            <Button size="sm" variant="outline">Write Review</Button>
                          ) : (
                            <Button size="sm" variant="ghost">View</Button>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Favorites Tab */}
          <TabsContent value="favorites">
            <Card>
              <CardHeader>
                <CardTitle>Your Favorite Services</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {favorites.map((service) => (
                    <div key={service.id} className="group rounded-lg border overflow-hidden">
                      <div className="relative aspect-video overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="h-full w-full object-cover transition-transform group-hover:scale-105"
                        />
                        <button className="absolute top-2 right-2 rounded-full bg-white p-2 shadow-md">
                          <Heart className="h-4 w-4 fill-red-500 text-red-500" />
                        </button>
                      </div>
                      <div className="p-4">
                        <Badge variant="secondary" className="mb-2">{service.category}</Badge>
                        <h3 className="font-semibold">{service.title}</h3>
                        <div className="mt-2 flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                            <span className="text-sm font-medium">{service.rating}</span>
                          </div>
                          <span className="font-bold">₹{service.price}</span>
                        </div>
                        <Button className="mt-4 w-full" size="sm" asChild>
                          <Link href={`/services/${service.id}`}>Book Now</Link>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                {favorites.length === 0 && (
                  <div className="text-center py-8">
                    <Heart className="mx-auto h-12 w-12 text-muted-foreground" />
                    <p className="mt-4 text-muted-foreground">No favorite services yet</p>
                    <Button className="mt-4" asChild>
                      <Link href="/services">Browse Services</Link>
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Profile Tab */}
          <TabsContent value="profile">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center">
                      <User className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{customer.name}</h3>
                      <p className="text-sm text-muted-foreground">Member since {customer.memberSince}</p>
                    </div>
                  </div>
                  <div className="space-y-3 pt-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span>{customer.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span>{customer.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>{customer.address}</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4">Edit Profile</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Saved Addresses</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="rounded-lg border p-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-medium">Home</p>
                        <p className="text-sm text-muted-foreground">
                          123, Building Name, Andheri West, Mumbai - 400058
                        </p>
                      </div>
                      <Badge variant="secondary">Default</Badge>
                    </div>
                  </div>
                  <div className="rounded-lg border p-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-medium">Office</p>
                        <p className="text-sm text-muted-foreground">
                          456, Office Tower, BKC, Mumbai - 400051
                        </p>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">+ Add New Address</Button>
                </CardContent>
              </Card>

              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Payment Methods</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-lg border p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <CreditCard className="h-8 w-8 text-muted-foreground" />
                          <div>
                            <p className="font-medium">•••• •••• •••• 4242</p>
                            <p className="text-sm text-muted-foreground">Expires 12/25</p>
                          </div>
                        </div>
                        <Badge variant="secondary">Default</Badge>
                      </div>
                    </div>
                    <Button variant="outline" className="h-full">
                      + Add Payment Method
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}


