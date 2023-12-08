import Header from "../components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Elias Techeira | Portfolio",
  description: "Portfolio de Elias Techeira, Maestro mayor de obras, estudiante de arquitectura y modelador 3D",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
