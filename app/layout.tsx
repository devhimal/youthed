// "use client"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { NextUIProvider } from "@nextui-org/system"
// import { NextUIProvider } from "@nextui-org/react"
import Provider from "./Provider"
import Footer from "@/components/Footer/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Range of Scholarship Opportunities",
  description: "Created by youthEd Team",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Provider>
        <div className={inter.className}>
          {children}
          <Footer />
        </div>
      </Provider>
    </html>
  )
}
