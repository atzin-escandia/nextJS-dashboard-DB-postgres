import { poppins } from "./ui/fonts";
import "./ui/global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        {children}
        <footer className="text-center py-5">Made with love by me</footer>
      </body>
    </html>
  );
}
