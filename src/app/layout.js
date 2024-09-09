import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/navbar/navbar";
import { ReduxProvider } from "./ReduxLayout/layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "APKExplorer - Fast Android APK Downloader",
  description:
    "APKExplorer is your go-to source for downloading Android APKs quickly and securely. Discover a vast library of apps, explore different versions, and stay updated with the latest releases.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8916641928046583"
          crossorigin="anonymous"></script>

      </head>
      <body className={inter.className}>
        {" "}
        <ReduxProvider>
          <Navbar />
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}