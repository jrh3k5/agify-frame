import type { Metadata } from 'next';

import '~/app/globals.css';
import { Providers } from '~/app/providers';

export const metadata: Metadata = {
  title: 'Agify Frame',
  description: 'A frame to guess your age based on your Farcaster name',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}