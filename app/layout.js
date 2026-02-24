import "./globals.css";

export const metadata = {
  title: "Lucid — AI Design Audit Platform",
  description:
    "Audit your AI UX against 30 living sources. 10-category weighted taxonomy from PAIR, HAX, Carbon for AI, Apple HIG, and more.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&family=Anton&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
