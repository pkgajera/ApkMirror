import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Script from "next/script";
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
          crossorigin="anonymous" data-adtest="on"></script>
        <script src="https://cdn.jsdelivr.net/npm/@fingerprintjs/fingerprintjs@3/dist/fp.min.js"></script>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-TW5T46HGBD"></script>
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-TW5T46HGBD');
          `}
        </Script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                (function(c,l,a,r,i,t,y){
                    c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) };
                    t=l.createElement(r);
                    t.async=1;
                    t.src="https://www.clarity.ms/tag/"+i;
                    y=l.getElementsByTagName(r)[0];
                    y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "oa4v7ql0yx");`,
          }}
        />
      </head>
      <body className={inter.className}>
        <ReduxProvider>
          <Navbar />
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}