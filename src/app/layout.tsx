import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  title: 'GROWBOND — IT Services, Networking & Digital Solutions',
  description: 'Reliable IT services, networking, CCTV, hardware supply and digital solutions in Jamuria, West Bengal.',
  metadataBase: new URL('https://growbond.in'),
  openGraph: { title: 'GROWBOND', description: 'IT Services & Digital Solutions', url: 'https://growbond.in', siteName: 'GROWBOND', type: 'website' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
