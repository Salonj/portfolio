import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import 'snes.css/dist/snes.min.css';
import type { Metadata } from 'next';
import { Press_Start_2P } from 'next/font/google';
import { notFound } from 'next/navigation';
import '../globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const pressStart2P = Press_Start_2P({
  subsets: ['latin'],
  variable: '--font-press-start-2p',
  weight: ['400'],
});

export const metadata: Metadata = {
  title: 'onnikoodaa!',
  description: 'A website by me',
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = await params;
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html className="bg-background" lang={locale}>
      <body
        className={`${pressStart2P.variable} mx-auto flex flex-col min-h-screen max-w-3xl`}
      >
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="grow">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
