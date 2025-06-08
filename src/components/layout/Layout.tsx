import Header from './Header'
import Footer from './Footer'

interface LayoutProps {
  children: React.ReactNode
  hasHeroImage?: boolean
}

export default function Layout({ children, hasHeroImage = false }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className={`flex-1 ${hasHeroImage ? '' : 'pt-16'}`}>
        {children}
      </main>
      <Footer />
    </div>
  )
}