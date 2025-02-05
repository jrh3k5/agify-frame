import type { Metadata } from 'next';

import '~/app/globals.css';
import { Providers } from '~/app/providers';

const farcasterFrameMetadata = {
    "version": "next",
    "imageUrl": "https://dtech.vision/frame-thumbnail.png",
    "button": {
      "title": "THE Farcaster product studio",
      "action": {
        "type": "launch_frame",
        "name": "Learn Farcaster",
        "url": "https://dtech.vision/farcaster/",
        "splashImageUrl": "https://dtech.vision/splash.png",
        "splashBackgroundColor": "#f7f7f7"
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