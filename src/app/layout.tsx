import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "ゆうつじ.com",
  description: "ポートフォリオサイト",
};

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="ja">
      <body>
        <main className="content">{children}</main> 
      </body>
    </html>
  );
}
