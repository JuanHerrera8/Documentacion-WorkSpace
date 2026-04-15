import type { Metadata } from 'next'
import { Fira_Code, Fira_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const firaCode = Fira_Code({ 
  subsets: ["latin"],
  variable: '--font-fira-code'
});
const firaSans = Fira_Sans({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"],
  variable: '--font-fira-sans'
});

export const metadata: Metadata = {
  title: 'Documentación Técnica — Módulo Workspace | Mercurio SED',
  description: 'Documentación técnica oficial del Módulo Workspace del sistema Mercurio SED',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${firaCode.variable} ${firaSans.variable}`}>
      <body className="font-sans antialiased bg-slate-950 text-slate-100">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
