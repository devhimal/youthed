"use client"
import { NextUIProvider } from "@nextui-org/system"

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <NextUIProvider>
      <div>{children}</div>
    </NextUIProvider>
  )
}
