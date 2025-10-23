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
  Users,
  Briefcase,
  DollarSign,
  TrendingUp,
  Settings,
  LogOut,
  Package,
  Calendar,
  Star,
  AlertCircle,
} from "lucide-react"

export default function AdminDashboardPage() {
  const [stats] = useState({
    totalUsers: 12456,
    totalProviders: 856,
    totalBookings: 45678,
    totalRevenue: 3456789,
    activeBookings: 234,
    pendingApprovals: 12,
  })

  const [recentBookings] = useState([
    {
      id: '1',
      service: 'Deep Home Cleaning',
      customer: 'Priya Sharma',
      provider: 'Sunita Reddy',
      date: '2024-10-20',
      amount: 2499,
      status: 'confirmed',
    },
    {
      id: '2',
      service: 'Plumber on Call',
      customer: 'Rajesh Kumar',
      provider: 'Amit Patel',
      date: '2024-10-20',
      amount: 450,
      status: 'in-progress',
    },
    {
      id: '3',
      service: 'AC Service',
      customer: 'Vikram Singh',
      provider: 'Rahul Mehta',
      date: '2024-10-19',
      amount: 850,
      status: 'completed',
    },
  ])

  const [pendingProviders] = useState([
    {
      id: '1',
      name: 'Ankit Sharma',
      service: 'Plumbing',
      appliedDate: '2024-10-18',
      experience: '5 years',
    },
    {
      id: '2',
      name: 'Meera Patel',
      service: 'Salon at Home',
      appliedDate: '2024-10-17',
      experience: '3 years',
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
              <span className="text-xl font-bold">Admin Portal</span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
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
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-muted-foreground">Manage your platform operations</p>
        </div>

        {/* Stats Cards */}
        <div className="mb-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalUsers.toLocaleString('en-US')}</div>
              <p className="text-xs text-muted-foreground">
                +12% from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Service Providers</CardTitle>
              <Briefcase className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalProviders}</div>
              <p className="text-xs text-muted-foreground">
                {stats.pendingApprovals} pending approval
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Bookings</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalBookings.toLocaleString('en-US')}</div>
              <p className="text-xs text-muted-foreground">
                {stats.activeBookings} active
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹{stats.totalRevenue.toLocaleString('en-US')}</div>
              <p className="text-xs text-muted-foreground">
                +18% from last month
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
            <TabsTrigger value="providers">
              <Users className="mr-2 h-4 w-4" />
              Providers
            </TabsTrigger>
            <TabsTrigger value="services">
              <Package className="mr-2 h-4 w-4" />
              Services
            </TabsTrigger>
            <TabsTrigger value="analytics">
              <TrendingUp className="mr-2 h-4 w-4" />
              Analytics
            </TabsTrigger>
          </TabsList>

          {/* Bookings Tab */}
          <TabsContent value="bookings">
            <Card>
              <CardHeader>
                <CardTitle>Recent Bookings</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Service</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead>Provider</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentBookings.map((booking) => (
                      <TableRow key={booking.id}>
                        <TableCell className="font-medium">#{booking.id}</TableCell>
                        <TableCell>{booking.service}</TableCell>
                        <TableCell>{booking.customer}</TableCell>
                        <TableCell>{booking.provider}</TableCell>
                        <TableCell>{booking.date}</TableCell>
                        <TableCell>₹{booking.amount}</TableCell>
                        <TableCell>{getStatusBadge(booking.status)}</TableCell>
                        <TableCell>
                          <Button size="sm" variant="outline">View</Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Providers Tab */}
          <TabsContent value="providers">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Pending Approvals</CardTitle>
                    <Badge variant="secondary">{pendingProviders.length}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {pendingProviders.map((provider) => (
                      <div key={provider.id} className="flex items-center justify-between rounded-lg border p-4">
                        <div>
                          <p className="font-medium">{provider.name}</p>
                          <p className="text-sm text-muted-foreground">{provider.service}</p>
                          <p className="text-xs text-muted-foreground mt-1">
                            Applied: {provider.appliedDate} • Experience: {provider.experience}
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="default">Approve</Button>
                          <Button size="sm" variant="outline">Reject</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Top Providers</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between pb-2 border-b">
                      <div>
                        <p className="font-medium">Sunita Reddy</p>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Star className="h-3 w-3 fill-yellow-500 text-yellow-500" />
                          <span>4.9 • 1234 jobs</span>
                        </div>
                      </div>
                      <Badge className="bg-green-500">Active</Badge>
                    </div>
                    <div className="flex items-center justify-between pb-2 border-b">
                      <div>
                        <p className="font-medium">Rajesh Kumar</p>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Star className="h-3 w-3 fill-yellow-500 text-yellow-500" />
                          <span>4.8 • 892 jobs</span>
                        </div>
                      </div>
                      <Badge className="bg-green-500">Active</Badge>
                    </div>
                    <div className="flex items-center justify-between pb-2 border-b">
                      <div>
                        <p className="font-medium">Priya Sharma</p>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Star className="h-3 w-3 fill-yellow-500 text-yellow-500" />
                          <span>4.9 • 756 jobs</span>
                        </div>
                      </div>
                      <Badge className="bg-green-500">Active</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Services Tab */}
          <TabsContent value="services">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Manage Services</CardTitle>
                  <Button>Add New Service</Button>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Service Name</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Base Price</TableHead>
                      <TableHead>Bookings</TableHead>
                      <TableHead>Rating</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Deep Home Cleaning</TableCell>
                      <TableCell>Home Cleaning</TableCell>
                      <TableCell>₹2,499</TableCell>
                      <TableCell>1,523</TableCell>
                      <TableCell>4.8 ★</TableCell>
                      <TableCell><Badge className="bg-green-500">Active</Badge></TableCell>
                      <TableCell>
                        <Button size="sm" variant="outline">Edit</Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Plumber on Call</TableCell>
                      <TableCell>Plumbing</TableCell>
                      <TableCell>₹450</TableCell>
                      <TableCell>2,156</TableCell>
                      <TableCell>4.6 ★</TableCell>
                      <TableCell><Badge className="bg-green-500">Active</Badge></TableCell>
                      <TableCell>
                        <Button size="sm" variant="outline">Edit</Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">AC Service & Repair</TableCell>
                      <TableCell>Appliance Repair</TableCell>
                      <TableCell>₹850</TableCell>
                      <TableCell>2,456</TableCell>
                      <TableCell>4.7 ★</TableCell>
                      <TableCell><Badge className="bg-green-500">Active</Badge></TableCell>
                      <TableCell>
                        <Button size="sm" variant="outline">Edit</Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Revenue Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">This Month</span>
                      <span className="font-bold">₹456,789</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Last Month</span>
                      <span className="font-bold">₹387,234</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Growth</span>
                      <span className="font-bold text-green-600">+18%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Top Categories</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Home Cleaning</span>
                      <span className="font-bold">3,456 bookings</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Appliance Repair</span>
                      <span className="font-bold">2,789 bookings</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Salon at Home</span>
                      <span className="font-bold">2,345 bookings</span>
                    </div>
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

