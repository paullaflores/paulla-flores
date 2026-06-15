import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Paulla Flores - Instituto Ser Você",
  description:
    "Fisioterapeuta, escritora, cantora e palestrante. Transformando dores em flores por meio da Microfisioterapia, da arte e do amor-próprio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${raleway.variable}`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
