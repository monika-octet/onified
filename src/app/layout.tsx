import type { Metadata } from "next";
import "./globals.css";
import "./styles/app.css";
import "./styles/style.css";
import "./styles/button.css";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "Onified",
  description: "Sample",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
