import 'antd/dist/antd.css';

import { Waterfall } from '@next/font/google';

const WaterfallFont = Waterfall({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-waterfall',
});

export default function RootLayout({ children }: any) {
  return (
    <html lang='en'>
      <head>
        <title>Next.js</title>
      </head>
      <body className={WaterfallFont.variable}>{children}</body>
    </html>
  );
}
