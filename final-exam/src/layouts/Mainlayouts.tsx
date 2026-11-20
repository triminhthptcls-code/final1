import type { ReactNode } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

interface MainLayoutProps {
  children: ReactNode
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <Header />
      <main className="mx-auto w-full max-w-6xl flex-1 p-6">{children}</main>
      <Footer />
    </div>
  )
}

export default MainLayout