// 'use client'
// import '@fortawesome/fontawesome-svg-core/styles.css';
// import { config } from '@fortawesome/fontawesome-svg-core';
// config.autoAddCss = false;
// import { Inter } from "next/font/google";
// import "./globals.css";
// import Navbar from './Components/navbar/navbar';
// import { Provider } from 'react-redux';
// import { store } from './redux/store';

// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "APKExplorer - Fast Android APK Downloader",
//   description: "APKExplorer is your go-to source for downloading Android APKs quickly and securely. Discover a vast library of apps, explore different versions, and stay updated with the latest releases.",
// };


// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <head><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"/></head>
//       <body className={inter.className}> <Provider store={store}>
//           <Navbar />
//           {children}
//         </Provider></body>
//     </html>
//   );
// }

'use client'
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from './Components/navbar/navbar';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const inter = Inter({ subsets: ["latin"] });

// Removed export of metadata
const metadata = {
  title: "APKExplorer - Fast Android APK Downloader",
  description: "APKExplorer is your go-to source for downloading Android APKs quickly and securely. Discover a vast library of apps, explore different versions, and stay updated with the latest releases.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"/>
      </head>
      <body className={inter.className}>
        <Provider store={store}>
          <Navbar />
          {children}
        </Provider>
      </body>
    </html>
  );
}
