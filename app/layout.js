import Navbar from "@/components/Navbar"
import './globals.css'
import Footer from "@/components/Footer"
import { Suspense } from "react"
import Loading from "./loading"

export const metadata = {
  title: 'Freelance',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=" ">
        <Suspense fallback={<Loading/>}>
          <Navbar />
          {children}
          <Footer />
        </Suspense>
      </body>
    </html>
  )
}
