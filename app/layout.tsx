import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Archivo } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
})

export const metadata: Metadata = {
  title: "lab68dev portfolio",
  description: "Created with lab68dev Developers Team",
  icons: {
    icon: [
      {
        url: "/lab68dev_logo.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/lab68dev_logo.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/lab68dev_logo.png",
        type: "image/png",
      },
    ],
    apple: "/lab68dev_logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${archivo.variable} font-sans antialiased bg-black text-white selection:bg-white selection:text-black`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
