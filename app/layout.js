import { Sora, Outfit } from 'next/font/google';
import './globals.css';

// Configure fonts
const sora = Sora({ subsets: ['latin'], weight: ['400', '700'] });
const outfit = Outfit({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata = {
  title: 'AccuraCore',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Apply Outfit globally to body */}
      <body className={outfit.className}>
        <div className={sora.className}>{children}</div>
      </body>
    </html>
  );
}
