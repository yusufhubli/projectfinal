import Navbar from "@/components/Navbar"
import './globals.css'
import Footer from "@/components/Footer"

export const metadata = {
    title: 'Freelance',
    description: 'Generated by create next app',
  }
  
  export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body className="">
          <Navbar/>
          {children}
          <Footer/>
          </body>
      </html>
    )
  }
