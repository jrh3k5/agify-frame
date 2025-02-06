import type { Metadata } from 'next';

import '~/app/globals.css';
import { Providers } from '~/app/providers';

const farcasterFrameMetadata = {
    "version": "next",
    "imageUrl": "https://agify-frame.orbiter.website/agify_600x400.png",
    "button": {
      "title": "Guess My Age",
      "action": {
        "type": "launch_frame",
        "name": "Guess My Age",
        "url": "https://agify-frame.orbiter.website",
        "splashImageUrl": "https://agify-frame.orbiter.website/agify_200x200.png",
        "splashBackgroundColor": "#eeccff"
      }
    }
  };

export const metadata: Metadata = {
  title: 'Agify Frame',
  description: 'A frame to guess your age based on your Farcaster name',
  other: {
    "fc:frame": JSON.stringify(farcasterFrameMetadata)
  }
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