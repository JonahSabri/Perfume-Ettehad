import type { Metadata } from 'next'
import './globals.css'
import ZarinanHeader from '@/components/zarinan-header'
import ZarinanFooter from '@/components/zarinan-footer'
import { Toaster } from '@/components/ui/toaster'

export const metadata: Metadata = {
  title: 'اتحاد - فروشگاه آنلاین عطر و ادکلن | Ettehad Perfume Store',
  description: 'خرید آنلاین عطر و ادکلن اصل از فروشگاه اتحاد. بهترین برندهای عطر جهان با تضمین اصالت و ارسال رایگان.',
  keywords: 'عطر, ادکلن, فروشگاه آنلاین عطر, اتحاد, عطر اصل, عطر مردانه, عطر زنانه',
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className="antialiased">
        <ZarinanHeader />
        {children}
        <ZarinanFooter />
        <Toaster />
      </body>
    </html>
  )
}
