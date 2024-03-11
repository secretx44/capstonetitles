import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import type { Metadata } from "next";
import { Roboto } from 'next/font/google';
import "./globals.css";

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Capstone Titles",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
      <AppRouterCacheProvider>
        {children}
        </AppRouterCacheProvider>
        </body>
    </html>
  );
}
