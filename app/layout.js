import "./globals.css";

export const metadata = {
  title: "Grow Reliance",
  description: "Take on agricultural surveys and get paid",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` antialiased`}>{children}</body>
    </html>
  );
}
