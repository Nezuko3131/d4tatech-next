import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'D4taTech | BI & Big Data Analytics',
  description: 'Transformamos datos en decisiones estratégicas con soluciones de Business Intelligence y Big Data.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="antialiased">{children}</body>
    </html>
  )
}
