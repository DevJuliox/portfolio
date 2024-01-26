import "../styles/globals.css"
import { Inter as FontSans } from "next/font/google"

import { cn } from "@/lib/utils"

export const fontSans400 = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: "400"
})

export const fontSans700 = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: "400"
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans400.variable,
          fontSans700.variable
        )}
      >
        {children}
      </body>
    </html>
  )
}
