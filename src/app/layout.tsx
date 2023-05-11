import Drawer from '@components/ui/Drawer'
import '@styles/globals.css'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
})

export const metadata = {
  title: 'Expenses',
  description:
    'Expenses manager where you can add, edit or delete your expenses.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={roboto.className} suppressHydrationWarning={true}>
        <div className='main'>
          <div className='gradient' />
        </div>

        <main className='app'>
          <Drawer children={children} />
        </main>
      </body>
    </html>
  )
}
