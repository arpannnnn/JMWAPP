import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})
export const metadata: Metadata = {
  title: "Evently",
  description: "Evently is a platform for hosting and managing events.",
  icons: {
    icon: "/favicon.ico",

  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={poppins.variable}> <SignedOut>
          <SignInButton />
        </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          {children}</body>
      </html>
    </ClerkProvider>
  );
}
