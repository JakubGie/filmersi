import Header from '@/components/header'
import '../styles/globals.css'
import { Poppins } from 'next/font/google'
import Footer from '@/components/footer'
import Script from 'next/script'
import Providers from '@/components/providers'

const inter = Poppins({ weight: ['300', '400', '500', '600', '700', '800'], subsets: ['latin-ext'] })

export const metadata = {
  title: 'Filmersi - Znajdź film lub serial do obejrzenia online',
  description: 'Dzięki stronie Filmersi znajdziesz film lub serial do obejrzenia oraz sprawdzisz gdzie obejrzeć go online.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body className={inter.className}>
        <Providers>
          <Header/>
          <main>
            {children}
          </main>
 

        <Script strategy='afterInteractive' src="https://www.googletagmanager.com/gtag/js?id=G-LJWGBCVZVQ"/>

        <Script id="google-analytics" strategy='afterInteractive'>
          {
            `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
    
              gtag('config', 'G-LJWGBCVZVQ');
            `
          }
        </Script>
        </Providers>
      </body>
    </html>
  )
}
