// "use client"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Provider from "./Provider"
import Footer from "@/components/Footer/Footer"
import Navbar from "@/components/Navbar/Navbar"
import { ClerkProvider } from "@clerk/nextjs"

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
    <ClerkProvider>
      <html lang="en">
        <body>
          <Provider>
            <div className={`${inter.className}`}>
              <Navbar />
              {children}
              <Footer />
            </div>
          </Provider>
        </body>
      </html>
    </ClerkProvider>
  )
}
