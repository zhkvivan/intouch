import type { Metadata } from 'next';
import { Geist, Geist_Mono, Readex_Pro } from 'next/font/google';
import './globals.css';
import StyledComponentsRegistry from '@/src/lib/registry';
import { ClerkProvider } from '@clerk/nextjs';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const readexPro = Readex_Pro({
  variable: '--font-readex-pro',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'InTouch',
  description: 'InTouch',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} ${readexPro.variable}`}
        >
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </body>
      </html>
    </ClerkProvider>
  );
}
