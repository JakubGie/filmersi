import Header from '@/components/header'
import '../styles/globals.css'
import { Poppins } from 'next/font/google'
import Footer from '@/components/footer'

const inter = Poppins({ weight: ['300', '400', '500', '600', '700', '800'], subsets: ['latin-ext'] })

export const metadata = {
  title: 'Filmersi - Znajdź film lub serial do obejrzenia online',
  description: 'Dzięki stronie Filmersi znajdziesz film lub serial do obejrzenia oraz sprawdzisz gdzie obejrzeć go online.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body className={inter.className}>
        <Header/>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
