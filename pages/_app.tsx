import "@/styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
