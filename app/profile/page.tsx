"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Star,
  Heart,
  Settings,
  Edit,
  Save,
  X,
  Plus,
  Trash2,
  CreditCard,
} from "lucide-react"

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [user, setUser] = useState({
    id: 'customer-1',
    name: 'Priya Sharma',
    email: 'priya.sharma@example.com',
    phone: '+91 98765 43210',
    address: '123, Building Name, Andheri West, Mumbai - 400058',
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
    },
    {
      id: '2',
      service: 'Plumber on Call',
      provider: 'Rajesh Kumar',
      date: '2024-10-22',
      time: '2:00 PM',
      status: 'confirmed',
      price: 450,
    },
    {
      id: '3',
      service: 'AC Service & Repair',
      provider: 'Amit Patel',
      date: '2024-10-19',
      time: '11:00 AM',
      status: 'completed',
      price: 850,
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

  const [addresses, setAddresses] = useState([
    {
      id: '1',
      type: 'Home',
      address: '123, Building Name, Andheri West, Mumbai - 400058',
      isDefault: true,
    },
    {
      id: '2',
      type: 'Office',
      address: '456, Office Tower, BKC, Mumbai - 400051',
      isDefault: false,
    },
  ])

  const [paymentMethods] = useState([
    {
      id: '1',
      type: 'Credit Card',
      last4: '4242',
      expiry: '12/25',
      isDefault: true,
    },
  ])

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'confirmed':
        return <Badge className="bg-green-500">Confirmed</Badge>
      case 'completed':
        return <Badge className="bg-gray-500">Completed</Badge>
      case 'cancelled':
        return <Badge variant="destructive">Cancelled</Badge>
      default:
        return <Badge>{status}</Badge>
    }
  }

  const handleSave = () => {
    setIsEditing(false)
    // Here you would save the changes to the backend
  }

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="container mx-auto px-3 sm:px-4 py-6 sm:py-8">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold">My Profile</h1>
              <p className="text-sm sm:text-base text-muted-foreground">Manage your account settings and preferences</p>
            </div>
            <Button variant="outline" asChild className="self-start sm:self-auto">
              <Link href="/">← Back to Home</Link>
            </Button>
          </div>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList>
            <TabsTrigger value="profile">
              <User className="mr-2 h-4 w-4" />
              Profile
            </TabsTrigger>
            <TabsTrigger value="bookings">
              <Calendar className="mr-2 h-4 w-4" />
              My Bookings
            </TabsTrigger>
            <TabsTrigger value="favorites">
              <Heart className="mr-2 h-4 w-4" />
              Favorites
            </TabsTrigger>
            <TabsTrigger value="settings">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </TabsTrigger>
          </TabsList>

          {/* Profile Tab */}
          <TabsContent value="profile">
            <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2">
              <Card>
                <CardHeader className="pb-3 sm:pb-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
                    <CardTitle className="text-lg sm:text-xl">Personal Information</CardTitle>
                    {!isEditing ? (
                      <Button variant="outline" size="sm" onClick={() => setIsEditing(true)} className="self-start sm:self-auto">
                        <Edit className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                        <span className="text-xs sm:text-sm">Edit</span>
                      </Button>
                    ) : (
                      <div className="flex gap-2">
                        <Button size="sm" onClick={handleSave} className="text-xs sm:text-sm">
                          <Save className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                          Save
                        </Button>
                        <Button variant="outline" size="sm" onClick={() => setIsEditing(false)} className="text-xs sm:text-sm">
                          <X className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                          Cancel
                        </Button>
                      </div>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-3 sm:space-y-4">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-muted flex items-center justify-center">
                      <User className="h-6 w-6 sm:h-8 sm:w-8" />
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-semibold">{user.name}</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">Member since {user.memberSince}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2 sm:space-y-3">
                    <div>
                      <Label htmlFor="name" className="text-xs sm:text-sm">Full Name</Label>
                      {isEditing ? (
                        <Input id="name" value={user.name} onChange={(e) => setUser({...user, name: e.target.value})} className="text-xs sm:text-sm" />
                      ) : (
                        <p className="mt-1 text-xs sm:text-sm">{user.name}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-xs sm:text-sm">Email</Label>
                      {isEditing ? (
                        <Input id="email" type="email" value={user.email} onChange={(e) => setUser({...user, email: e.target.value})} className="text-xs sm:text-sm" />
                      ) : (
                        <p className="mt-1 flex items-center gap-1 sm:gap-2 text-xs sm:text-sm">
                          <Mail className="h-3 w-3 sm:h-4 sm:w-4" />
                          {user.email}
                        </p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-xs sm:text-sm">Phone</Label>
                      {isEditing ? (
                        <Input id="phone" value={user.phone} onChange={(e) => setUser({...user, phone: e.target.value})} className="text-xs sm:text-sm" />
                      ) : (
                        <p className="mt-1 flex items-center gap-1 sm:gap-2 text-xs sm:text-sm">
                          <Phone className="h-3 w-3 sm:h-4 sm:w-4" />
                          {user.phone}
                        </p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="address" className="text-xs sm:text-sm">Address</Label>
                      {isEditing ? (
                        <Textarea id="address" value={user.address} onChange={(e) => setUser({...user, address: e.target.value})} className="text-xs sm:text-sm" />
                      ) : (
                        <p className="mt-1 flex items-start gap-1 sm:gap-2 text-xs sm:text-sm">
                          <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mt-0.5" />
                          {user.address}
                        </p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Account Stats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total Bookings</span>
                    <span className="font-bold">{user.totalBookings}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Active Bookings</span>
                    <span className="font-bold">{user.activeBookings}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Member Since</span>
                    <span className="font-bold">{user.memberSince}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Account Status</span>
                    <Badge className="bg-green-500">Active</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Bookings Tab */}
          <TabsContent value="bookings">
            <Card>
              <CardHeader>
                <CardTitle>My Bookings</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Service</TableHead>
                      <TableHead>Provider</TableHead>
                      <TableHead>Date & Time</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {bookings.map((booking) => (
                      <TableRow key={booking.id}>
                        <TableCell className="font-medium">{booking.service}</TableCell>
                        <TableCell>{booking.provider}</TableCell>
                        <TableCell>
                          <div className="text-sm">
                            <div>{booking.date}</div>
                            <div className="text-muted-foreground">{booking.time}</div>
                          </div>
                        </TableCell>
                        <TableCell>₹{booking.price}</TableCell>
                        <TableCell>{getStatusBadge(booking.status)}</TableCell>
                        <TableCell>
                          <Button size="sm" variant="outline">View Details</Button>
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
                <CardTitle>Favorite Services</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-2">
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

          {/* Settings Tab */}
          <TabsContent value="settings">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Saved Addresses</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {addresses.map((address) => (
                    <div key={address.id} className="rounded-lg border p-3">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="font-medium">{address.type}</p>
                          <p className="text-sm text-muted-foreground">{address.address}</p>
                        </div>
                        <div className="flex gap-2">
                          {address.isDefault && <Badge variant="secondary">Default</Badge>}
                          <Button size="sm" variant="ghost">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="ghost">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                  <Button variant="outline" className="w-full">
                    <Plus className="mr-2 h-4 w-4" />
                    Add New Address
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Payment Methods</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {paymentMethods.map((method) => (
                    <div key={method.id} className="rounded-lg border p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <CreditCard className="h-8 w-8 text-muted-foreground" />
                          <div>
                            <p className="font-medium">{method.type} •••• {method.last4}</p>
                            <p className="text-sm text-muted-foreground">Expires {method.expiry}</p>
                          </div>
                        </div>
                        {method.isDefault && <Badge variant="secondary">Default</Badge>}
                      </div>
                    </div>
                  ))}
                  <Button variant="outline" className="w-full">
                    <Plus className="mr-2 h-4 w-4" />
                    Add Payment Method
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
