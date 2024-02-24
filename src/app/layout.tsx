import './globals.css';
import { inter } from '../app/ui/fonts';
import { Metadata } from 'next';

import Navbar from "../app/ui/Navbar";
 
export const metadata: Metadata = {
  title: 'Nioni Artha Putri | Portofolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
