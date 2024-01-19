"use client"

import React from "react"
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react"
import { UserButton, SignedIn, SignedOut } from "@clerk/nextjs"

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ]

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="w-full" isBordered>
      <NavbarContent className=" -ml-0 xl:-ml-48">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link href="/" className="font-medium text-black">
            YouthEd
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive>
          <Link className="text-black hover:text-primary" href="/scholarships">
            Scholarships
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="/counselling"
            className="text-black hover:text-primary"
            aria-current="page"
          >
            Counselling
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-black hover:text-primary" href="/why">
            Why we are here?
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end" className="pl-20 -mr-0 xl:-mr-48">
        <NavbarItem className="hidden lg:flex">
          <SignedOut>
            <Button color="primary" variant="ghost">
              <Link href="/">Login</Link>
            </Button>
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}
