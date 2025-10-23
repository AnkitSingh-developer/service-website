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
  DollarSign,
  Star,
  TrendingUp,
  CheckCircle,
  Clock,
  XCircle,
  User,
  Phone,
  MapPin,
  Settings,
  Bell,
  LogOut,
} from "lucide-react"

export default function ProviderDashboardPage() {
  // Mock data - would come from API
  const [provider] = useState({
    id: 'provider-1',
    name: 'Rajesh Kumar',
    email: 'rajesh.kumar@example.com',
    phone: '+91 98765 43210',
    rating: 4.8,
    reviewCount: 234,
    completedJobs: 567,
    pendingJobs: 12,
    totalEarnings: 125400,
    thisMonthEarnings: 23500,
    availability: true,
  })

  const [bookings] = useState([
    {
      id: '1',
      service: 'Plumber on Call',
      customer: 'Priya Sharma',
      date: '2024-10-20',
      time: '10:00 AM',
      address: 'Andheri West, Mumbai',
      status: 'confirmed',
      price: 450,
    },
    {
      id: '2',
      service: 'Tap Repair',
      customer: 'Amit Verma',
      date: '2024-10-20',
      time: '2:00 PM',
      address: 'Bandra East, Mumbai',
      status: 'confirmed',
      price: 350,
    },
    {
      id: '3',
      service: 'Basin Installation',
      customer: 'Sunita Reddy',
      date: '2024-10-21',
      time: '11:00 AM',
      address: 'Powai, Mumbai',
      status: 'pending',
      price: 890,
    },
    {
      id: '4',
      service: 'Plumber on Call',
      customer: 'Vikram Singh',
      date: '2024-10-21',
      time: '4:00 PM',
      address: 'Malad West, Mumbai',
      status: 'pending',
      price: 450,
    },
  ])

  const [completedBookings] = useState([
    {
      id: '5',
      service: 'Plumber on Call',
      customer: 'Anjali Patel',
      date: '2024-10-18',
      price: 450,
      rating: 5,
    },
    {
      id: '6',
      service: 'Drain Cleaning',
      customer: 'Rahul Mehta',
      date: '2024-10-17',
      price: 650,
      rating: 4,
    },
    {
      id: '7',
      service: 'Tap Repair',
      customer: 'Neha Shah',
      date: '2024-10-16',
      price: 350,
      rating: 5,
    },
  ])

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'confirmed':
        return <Badge className="bg-green-500">Confirmed</Badge>
      case 'pending':
        return <Badge variant="secondary">Pending</Badge>
      case 'completed':
        return <Badge className="bg-blue-500">Completed</Badge>
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
              <span className="text-xl font-bold">Provider Portal</span>
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
          <h1 className="text-3xl font-bold">Welcome back, {provider.name}!</h1>
          <p className="text-muted-foreground">Manage your bookings and track your earnings</p>
        </div>

        {/* Stats Cards */}
        <div className="mb-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Earnings</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹{provider.totalEarnings.toLocaleString('en-US')}</div>
              <p className="text-xs text-muted-foreground">
                ₹{provider.thisMonthEarnings.toLocaleString('en-US')} this month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Completed Jobs</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{provider.completedJobs}</div>
              <p className="text-xs text-muted-foreground">
                +{provider.pendingJobs} pending
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Rating</CardTitle>
              <Star className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold flex items-center gap-1">
                {provider.rating}
                <Star className="h-5 w-5 fill-yellow-500 text-yellow-500" />
              </div>
              <p className="text-xs text-muted-foreground">
                From {provider.reviewCount} reviews
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">This Month</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+12.5%</div>
              <p className="text-xs text-muted-foreground">
                vs last month
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="bookings" className="space-y-6">
          <TabsList>
            <TabsTrigger value="bookings">
              <Calendar className="mr-2 h-4 w-4" />
              Bookings
            </TabsTrigger>
            <TabsTrigger value="completed">
              <CheckCircle className="mr-2 h-4 w-4" />
              Completed
            </TabsTrigger>
            <TabsTrigger value="earnings">
              <DollarSign className="mr-2 h-4 w-4" />
              Earnings
            </TabsTrigger>
            <TabsTrigger value="profile">
              <User className="mr-2 h-4 w-4" />
              Profile
            </TabsTrigger>
          </TabsList>

          {/* Bookings Tab */}
          <TabsContent value="bookings">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Bookings</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Service</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead>Date & Time</TableHead>
                      <TableHead>Address</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {bookings.map((booking) => (
                      <TableRow key={booking.id}>
                        <TableCell className="font-medium">{booking.service}</TableCell>
                        <TableCell>{booking.customer}</TableCell>
                        <TableCell>
                          <div className="text-sm">
                            <div>{booking.date}</div>
                            <div className="text-muted-foreground">{booking.time}</div>
                          </div>
                        </TableCell>
                        <TableCell>{booking.address}</TableCell>
                        <TableCell>₹{booking.price}</TableCell>
                        <TableCell>{getStatusBadge(booking.status)}</TableCell>
                        <TableCell>
                          {booking.status === 'pending' ? (
                            <div className="flex gap-2">
                              <Button size="sm" variant="default">Accept</Button>
                              <Button size="sm" variant="outline">Reject</Button>
                            </div>
                          ) : (
                            <Button size="sm" variant="outline">View Details</Button>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Completed Tab */}
          <TabsContent value="completed">
            <Card>
              <CardHeader>
                <CardTitle>Completed Jobs</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Service</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Rating</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {completedBookings.map((booking) => (
                      <TableRow key={booking.id}>
                        <TableCell className="font-medium">{booking.service}</TableCell>
                        <TableCell>{booking.customer}</TableCell>
                        <TableCell>{booking.date}</TableCell>
                        <TableCell>₹{booking.price}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            {booking.rating}
                            <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Earnings Tab */}
          <TabsContent value="earnings">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Earnings Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total Earnings</span>
                    <span className="font-bold">₹{provider.totalEarnings.toLocaleString('en-US')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">This Month</span>
                    <span className="font-bold">₹{provider.thisMonthEarnings.toLocaleString('en-US')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Pending Payout</span>
                    <span className="font-bold text-yellow-600">₹3,200</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Available to Withdraw</span>
                    <span className="font-bold text-green-600">₹8,500</span>
                  </div>
                  <Button className="w-full mt-4">Request Withdrawal</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Transactions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-2 border-b">
                      <div>
                        <p className="font-medium">Service Payment</p>
                        <p className="text-sm text-muted-foreground">Oct 18, 2024</p>
                      </div>
                      <span className="font-bold text-green-600">+₹450</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b">
                      <div>
                        <p className="font-medium">Service Payment</p>
                        <p className="text-sm text-muted-foreground">Oct 17, 2024</p>
                      </div>
                      <span className="font-bold text-green-600">+₹650</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b">
                      <div>
                        <p className="font-medium">Withdrawal</p>
                        <p className="text-sm text-muted-foreground">Oct 15, 2024</p>
                      </div>
                      <span className="font-bold text-red-600">-₹5,000</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b">
                      <div>
                        <p className="font-medium">Service Payment</p>
                        <p className="text-sm text-muted-foreground">Oct 16, 2024</p>
                      </div>
                      <span className="font-bold text-green-600">+₹350</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
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
                      <h3 className="font-semibold">{provider.name}</h3>
                      <p className="text-sm text-muted-foreground">Professional Plumber</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span>{provider.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-muted-foreground">Email:</span>
                      <span>{provider.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>Andheri West, Mumbai</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">Edit Profile</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Availability & Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Availability Status</p>
                      <p className="text-sm text-muted-foreground">Accept new bookings</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" checked={provider.availability} className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </div>
                  <div className="pt-4 border-t space-y-2">
                    <Button variant="outline" className="w-full justify-start">
                      <Settings className="mr-2 h-4 w-4" />
                      Account Settings
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Bell className="mr-2 h-4 w-4" />
                      Notification Preferences
                    </Button>
                    <Button variant="outline" className="w-full justify-start text-red-600">
                      <XCircle className="mr-2 h-4 w-4" />
                      Deactivate Account
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

