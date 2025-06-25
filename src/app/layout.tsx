import type { Metadata } from "next";
import { Lato, Outfit, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import SmoothScrollWrapper from "./SmoothScrollWrapper";
import { Toaster } from "react-hot-toast";
import StoreProvider from "./StoreProvider";
import Script from "next/script";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
})

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
})

export const metadata: Metadata = {
  title: "Boston Express Cab",
  description: "Boston Airport",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-site-verification" content="gzdoZuP-2-R_0mGQ4I8T2MKMftqqvqgspazPHTiKy1w" />
        {/* Google Tag Manager */}
        <Script id="gtm-init" strategy="afterInteractive">
          {`
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-5TQZPBQ3');
  `}
        </Script>
        {/* End Google Tag Manager */}
      </head>
      <body
        className={`${lato.variable} ${poppins.variable} ${outfit.variable}`}
      >
        {/*
                Google Tag Manager (noscript)
        */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5TQZPBQ3"
                  height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        {/*
                End Google Tag Manager (noscript)
        */}
        <Header />
        <SmoothScrollWrapper>
          <StoreProvider>
            {children}
          </StoreProvider>
        </SmoothScrollWrapper>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
