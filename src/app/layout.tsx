import type { Metadata } from "next";
import { Lato, Outfit, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import SmoothScrollWrapper from "./SmoothScrollWrapper";
import { Toaster } from "react-hot-toast";
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
  title: {
    default: "Boston Express Cab",
    template: "%s - Boston Express Cab"
  },
  description: "Call Boston Carb at +16172306362 and book your affordable Logan Airport taxi/Boston car service and Boston cab service with child seats. We have been providing the most trusted and reliable taxi service in Boston, MA.",
  twitter: {
    card: "summary_large_image"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
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
          {children}
        </SmoothScrollWrapper>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
