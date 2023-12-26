import './globals.css'
import { Raleway } from 'next/font/google'
import { Toaster } from '@/components/ui/toaster'

const raleway = Raleway({ subsets: ['latin'] })

export const metadata = {
  title: 'Robin Steeman | Portfolio',
  description: 'Frontend Developer'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`bg-black dark ${raleway.className}`}>
        <main>
          {children}
        </main>
        <Toaster />
      </body>
    </html>
  )
}
