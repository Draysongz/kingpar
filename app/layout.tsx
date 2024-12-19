"use client";


import { extendTheme } from "@chakra-ui/react";
import "./globals.css";

const breakpoints = {
  sm: "390px", // Custom Small size (e.g., 480px)
  md: "768px", // Custom Medium size (e.g., 768px)
  lg: "992px", // Custom Large size (e.g., 992px)
  xl: "1280px", // Custom Extra Large size (e.g., 1280px)
  "2xl": "1536px", // Custom Double Extra Large (e.g., 1536px)
};

const theme = extendTheme({
  // fonts: {
  //   body: "InterVariable, sans-serif",
  //   heading: "InterVariable, sans-serif",
  // },
  breakpoints,
});
import dynamic from "next/dynamic";
import ClientLayout from "./ClientLayout";

const TonConnectUIProvider = dynamic(
  () => import("@tonconnect/ui-react").then((mod) => mod.TonConnectUIProvider),
  { ssr: false }
);

const manifestUrl =
  "https://raw.githubusercontent.com/draysongz/kingpar/main/public/manifest.json";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>KingPar</title>
      </head>
      <body>
        
        <ClientLayout>

          <TonConnectUIProvider manifestUrl={manifestUrl}>{children}</TonConnectUIProvider>
        </ClientLayout>
      </body>
    </html>
  );
}
