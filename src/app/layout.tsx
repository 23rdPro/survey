import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The essence of react: by Olumide Bakare",
  description: `"Explore the Dynamic World of React: Unveiling 
  'The Essence of React' by Olumide Bakare. Dive into this comprehensive guide that 
  delves deep into React, unraveling its core principles, best practices, and 
  transformative capabilities. Whether you're a novice or an expert, discover invaluable 
  insights to harness the full potential of this powerful JavaScript library. 
  Elevate your understanding of React's intricacies, optimize your development workflow, 
  and propel your projects to new heights with this illuminating read."`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
