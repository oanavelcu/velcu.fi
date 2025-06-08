import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Oana Velcu-Laitinen - Creativity Skills Coach and Trainer",
    template: "%s | Oana Velcu-Laitinen"
  },
  description: "Hi, I am Oana Velcu-Laitinen-Laitinen, Helsinki Based Creativity Skills Coach and Trainer. I help individuals nurture their creative ability and come up with initiatives that bring personal meaning and positive change in their community.",
  keywords: ["creativity", "coaching", "leadership", "training", "personal development", "business coaching", "Helsinki"],
  authors: [{ name: "Oana Velcu-Laitinen" }],
  creator: "Oana Velcu-Laitinen",
  publisher: "Oana Velcu-Laitinen",
  metadataBase: new URL('https://velcu.fi'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://velcu.fi',
    title: 'Oana Velcu-Laitinen - Creativity Skills Coach and Trainer',
    description: 'Helsinki Based Creativity Skills Coach and Trainer specializing in creative leadership and personal development.',
    siteName: 'Oana Velcu-Laitinen',
  },
  twitter: {
    card: 'summary',
    title: 'Oana Velcu-Laitinen - Creativity Skills Coach and Trainer',
    description: 'Helsinki Based Creativity Skills Coach and Trainer specializing in creative leadership and personal development.',
    creator: '@oanavel',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
