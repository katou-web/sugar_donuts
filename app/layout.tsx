import "./globals.css";

export const metadata = {
  title: "BAND NAME | Official Website",
  description: "Official website for BAND NAME."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="min-h-screen bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}
