import 'antd/dist/antd.css';

import { Waterfall } from 'next/font/google';

const WaterfallFont = Waterfall({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-waterfall',
});

export default function RootLayout({ children, params: { lang } }: any) {
  return (
    <html lang={lang}>
      <head>
        <title>Next.js</title>
      </head>
      <body className={WaterfallFont.variable}>{children}</body>
    </html>
  );
}
