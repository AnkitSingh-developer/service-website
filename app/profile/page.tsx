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
  Settings,
  Edit,
  Save,
  X,
  Plus,
  Trash2,
  ArrowLeft,
  Award,
  Clock,
  CheckCircle,
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
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-primary/5 to-background">
        <div className="mx-auto max-w-6xl px-3 sm:px-4 py-8 sm:py-12 md:py-16">
          <div className="mb-6 sm:mb-8">
            <Button variant="ghost" asChild className="mb-4">
              <Link href="/" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 md:gap-8">
            <div className="flex flex-col justify-center gap-4">
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
                </div>
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold">{user.name}</h1>
                  <p className="text-sm sm:text-base text-muted-foreground">Member since {user.memberSince}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="flex items-center gap-1">
                  <CheckCircle className="h-3 w-3" />
                  Verified Customer
                </Badge>
                <Badge variant="outline" className="flex items-center gap-1">
                  <Award className="h-3 w-3" />
                  {user.totalBookings} Bookings
                </Badge>
              </div>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg border bg-background p-4 text-center">
                <div className="text-2xl font-bold text-primary">{user.totalBookings}</div>
                <div className="text-xs text-muted-foreground">Total Bookings</div>
              </div>
              <div className="rounded-lg border bg-background p-4 text-center">
                <div className="text-2xl font-bold text-green-600">{user.activeBookings}</div>
                <div className="text-xs text-muted-foreground">Active Bookings</div>
              </div>
              <div className="rounded-lg border bg-background p-4 text-center">
                <div className="text-2xl font-bold text-purple-600">₹12,450</div>
                <div className="text-xs text-muted-foreground">Total Spent</div>
              </div>
              <div className="rounded-lg border bg-background p-4 text-center">
                <div className="text-2xl font-bold text-blue-600">2</div>
                <div className="text-xs text-muted-foreground">Saved Addresses</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <div className="mx-auto max-w-6xl px-3 sm:px-4 py-6 sm:py-8">

        {/* Main Content Tabs */}
        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="profile" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span className="hidden sm:inline">Profile</span>
            </TabsTrigger>
            <TabsTrigger value="bookings" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span className="hidden sm:inline">Bookings</span>
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              <span className="hidden sm:inline">Settings</span>
            </TabsTrigger>
          </TabsList>

          {/* Profile Tab */}
          <TabsContent value="profile">
            <div className="grid gap-6 grid-cols-1 lg:grid-cols-3">
              {/* Personal Information Card */}
              <Card className="lg:col-span-2">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">Personal Information</CardTitle>
                    {!isEditing ? (
                      <Button variant="outline" size="sm" type="button" onClick={() => setIsEditing(true)}>
                        <Edit className="mr-2 h-4 w-4" />
                        Edit Profile
                      </Button>
                    ) : (
                      <div className="flex gap-2">
                        <Button size="sm" type="button" onClick={handleSave}>
                          <Save className="mr-2 h-4 w-4" />
                          Save Changes
                        </Button>
                        <Button variant="outline" size="sm" type="button" onClick={() => setIsEditing(false)}>
                          <X className="mr-2 h-4 w-4" />
                          Cancel
                        </Button>
                      </div>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium">Full Name</Label>
                      {isEditing ? (
                        <Input id="name" value={user.name} onChange={(e) => setUser({...user, name: e.target.value})} />
                      ) : (
                        <div className="flex items-center gap-2 p-3 rounded-lg border bg-muted/50">
                          <User className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">{user.name}</span>
                        </div>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium">Email Address</Label>
                      {isEditing ? (
                        <Input id="email" type="email" value={user.email} onChange={(e) => setUser({...user, email: e.target.value})} />
                      ) : (
                        <div className="flex items-center gap-2 p-3 rounded-lg border bg-muted/50">
                          <Mail className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">{user.email}</span>
                        </div>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm font-medium">Phone Number</Label>
                      {isEditing ? (
                        <Input id="phone" value={user.phone} onChange={(e) => setUser({...user, phone: e.target.value})} />
                      ) : (
                        <div className="flex items-center gap-2 p-3 rounded-lg border bg-muted/50">
                          <Phone className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">{user.phone}</span>
                        </div>
                      )}
                    </div>
                    <div className="space-y-2 sm:col-span-2">
                      <Label htmlFor="address" className="text-sm font-medium">Address</Label>
                      {isEditing ? (
                        <Textarea id="address" value={user.address} onChange={(e) => setUser({...user, address: e.target.value})} />
                      ) : (
                        <div className="flex items-start gap-2 p-3 rounded-lg border bg-muted/50">
                          <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                          <span className="text-sm">{user.address}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Account Overview Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Account Overview</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">Total Bookings</span>
                    </div>
                    <span className="text-lg font-bold text-primary">{user.totalBookings}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-green-600" />
                      <span className="text-sm font-medium">Active Bookings</span>
                    </div>
                    <span className="text-lg font-bold text-green-600">{user.activeBookings}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-blue-600" />
                      <span className="text-sm font-medium">Member Since</span>
                    </div>
                    <span className="text-sm font-bold text-blue-600">{user.memberSince}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm font-medium">Status</span>
                    </div>
                    <Badge className="bg-green-500">Active</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Bookings Tab */}
          <TabsContent value="bookings">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold">My Bookings</h2>
                  <p className="text-muted-foreground">Track your service bookings and history</p>
                </div>
                <Button asChild>
                  <Link href="/services">Book New Service</Link>
                </Button>
              </div>
              
              <div className="grid gap-4">
                {bookings.map((booking) => (
                  <Card key={booking.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-start gap-4">
                            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                              <Calendar className="h-6 w-6 text-primary" />
                            </div>
                            <div className="flex-1">
                              <h3 className="font-semibold text-lg">{booking.service}</h3>
                              <p className="text-sm text-muted-foreground">Provider: {booking.provider}</p>
                              <div className="flex items-center gap-4 mt-2">
                                <div className="flex items-center gap-1">
                                  <Calendar className="h-4 w-4 text-muted-foreground" />
                                  <span className="text-sm">{booking.date}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Clock className="h-4 w-4 text-muted-foreground" />
                                  <span className="text-sm">{booking.time}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col sm:flex-row items-end sm:items-center gap-3">
                          <div className="text-right">
                            <div className="text-2xl font-bold">₹{booking.price}</div>
                            <div className="text-sm text-muted-foreground">Total Amount</div>
                          </div>
                          <div className="flex flex-col sm:flex-row gap-2">
                            {getStatusBadge(booking.status)}
                            <Button size="sm" variant="outline">View Details</Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>


          {/* Settings Tab */}
          <TabsContent value="settings">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold">Account Settings</h2>
                <p className="text-muted-foreground">Manage your saved addresses</p>
              </div>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    Saved Addresses
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {addresses.map((address) => (
                    <div key={address.id} className="rounded-lg border p-4 hover:shadow-sm transition-shadow">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <p className="font-medium">{address.type}</p>
                            {address.isDefault && <Badge variant="secondary">Default</Badge>}
                          </div>
                          <p className="text-sm text-muted-foreground">{address.address}</p>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="ghost">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="ghost" className="text-red-600 hover:text-red-700">
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
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
