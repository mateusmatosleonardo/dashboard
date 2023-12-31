import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { SideBar } from '../components/SideBar'
import { Content } from '../components/Content'

const poppins = Poppins({ weight: ['400'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <SideBar />
        <Content>{children}</Content>
      </body>
    </html>
  )
}
