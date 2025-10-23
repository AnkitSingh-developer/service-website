"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Search, User, MapPin, ChevronDown } from "lucide-react"
import { categories } from "@/lib/data/categories"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false)

  const navigation = [
    { name: "Home", href: "/" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Become a Professional", href: "/become-professional" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <span className="text-lg font-bold">U</span>
          </div>
          <span className="text-xl font-bold">UrbanServe</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center space-x-3 lg:space-x-6 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-xs lg:text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {item.name}
            </Link>
          ))}
          
          {/* Services Dropdown */}
          <div className="relative">
            <button
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
              className="flex items-center gap-1 text-xs lg:text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Services
              <ChevronDown className="h-3 w-3" />
            </button>
            
            {servicesDropdownOpen && (
              <div
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
                className="absolute top-full left-0 mt-1 w-80 bg-background border rounded-lg shadow-lg p-4 z-50"
              >
                <div className="grid grid-cols-2 gap-4">
                  {categories.slice(0, 6).map((category) => (
                    <div key={category.id}>
                      <Link
                        href={`/services/categories/${category.slug}`}
                        className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 mb-2"
                      >
                        <span>{category.emoji}</span>
                        {category.title}
                      </Link>
                      <div className="space-y-1">
                        {category.subCategories?.slice(0, 3).map((subcat) => (
                          <Link
                            key={subcat.id}
                            href={`/services/categories/${category.slug}?subcategory=${subcat.slug}`}
                            className="block text-xs text-muted-foreground hover:text-foreground pl-6"
                          >
                            {subcat.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t">
                  <Link
                    href="/services"
                    className="text-sm font-medium text-primary hover:text-primary/80"
                  >
                    View all services →
                  </Link>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          {/* Mobile Search */}
          <Link href="/services" className="md:hidden">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Search className="h-4 w-4" />
            </Button>
          </Link>

          {/* Desktop Search */}
          <Link href="/services" className="hidden md:flex">
            <Button variant="ghost" size="icon" className="h-8 w-8 lg:h-10 lg:w-10">
              <Search className="h-4 w-4 lg:h-5 lg:w-5" />
            </Button>
          </Link>

          {/* Desktop Location */}
          <button className="hidden items-center space-x-1 text-xs lg:text-sm text-muted-foreground hover:text-primary xl:flex">
            <MapPin className="h-3 w-3 lg:h-4 lg:w-4" />
            <span className="hidden lg:inline">Mumbai</span>
          </button>

          {/* Desktop Login/Signup */}
          <Link href="/login" className="hidden sm:flex">
            <Button variant="ghost" size="sm" className="text-xs lg:text-sm">
              <User className="mr-1 lg:mr-2 h-3 w-3 lg:h-4 lg:w-4" />
              <span className="hidden lg:inline">Login</span>
            </Button>
          </Link>
          
          {/* Desktop Profile (when logged in) */}
          <Link href="/profile" className="hidden sm:flex">
            <Button variant="ghost" size="sm" className="text-xs lg:text-sm">
              <User className="mr-1 lg:mr-2 h-3 w-3 lg:h-4 lg:w-4" />
              <span className="hidden lg:inline">Profile</span>
            </Button>
          </Link>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden h-8 w-8">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px]">
              <div className="flex flex-col h-full">
                {/* Mobile Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
                      <span className="text-lg font-bold">U</span>
                    </div>
                    <span className="text-lg font-bold">UrbanServe</span>
                  </div>
                </div>

                {/* Navigation */}
                <nav className="flex-1 space-y-1">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center px-3 py-3 text-base font-medium transition-colors hover:bg-muted rounded-lg"
                    >
                      {item.name}
                    </Link>
                  ))}
                  
                  {/* Services Section */}
                  <div className="space-y-1">
                    <Link
                      href="/services"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center px-3 py-3 text-base font-medium transition-colors hover:bg-muted rounded-lg"
                    >
                      Services
                    </Link>
                    
                    {/* Popular Categories */}
                    <div className="ml-4 space-y-1">
                      <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide px-3 py-2">
                        Popular Categories
                      </div>
                      {categories.slice(0, 6).map((category) => (
                        <Link
                          key={category.id}
                          href={`/services/categories/${category.slug}`}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center gap-3 px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                        >
                          <span className="text-base">{category.emoji}</span>
                          <span>{category.title}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </nav>

                {/* Mobile Footer */}
                <div className="border-t pt-4 space-y-3">
                  {/* Location */}
                  <div className="flex items-center space-x-2 px-3 py-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>Mumbai</span>
                  </div>
                  
                  {/* Auth Buttons */}
                  <div className="space-y-2">
                    <Link href="/login" onClick={() => setIsOpen(false)}>
                      <Button variant="outline" className="w-full">Login / Sign Up</Button>
                    </Link>
                    <Link href="/profile" onClick={() => setIsOpen(false)}>
                      <Button variant="ghost" className="w-full">My Profile</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

