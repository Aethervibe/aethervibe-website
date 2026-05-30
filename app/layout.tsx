import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.aethervibe.com"),
  title: "Aethervibe — Mid-Market ITC Transfer Marketplace",
  description:
    "Aethervibe is the specialist broker for $1M–$20M Investment Tax Credit (ITC) transfers under IRA Section 6418. We connect verified clean energy developers with qualified corporate tax buyers and close in 30–60 days.",
  alternates: {
    canonical: "https://www.aethervibe.com",
  },
  openGraph: {
    type: "website",
    url: "https://www.aethervibe.com",
    title: "Aethervibe — Mid-Market ITC Transfer Marketplace",
    description:
      "The specialist broker for $1M–$20M ITC transfers under IRA Section 6418. Verified developers. Qualified buyers. Close in 30–60 days.",
    siteName: "Aethervibe",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aethervibe — Mid-Market ITC Transfer Marketplace",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aethervibe — Mid-Market ITC Transfer Marketplace",
    description:
      "The specialist broker for $1M–$20M ITC transfers under IRA Section 6418. Verified developers. Qualified buyers. Close in 30–60 days.",
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.aethervibe.com/#organization",
      name: "Aethervibe",
      url: "https://www.aethervibe.com",
      logo: "https://www.aethervibe.com/og-image.png",
      legalName: "Aethermind LLC",
      description:
        "Aethervibe is a pure-broker ITC transfer marketplace for $1M–$20M clean energy tax credit transactions under IRA 2022 Section 6418.",
      contactPoint: {
        "@type": "ContactPoint",
        email: "ceo@aethervibe.com",
        contactType: "customer service",
      },
      memberOf: {
        "@type": "Organization",
        name: "NY-BEST — New York Battery and Energy Storage Technology Consortium",
      },
    },
    {
      "@type": "Service",
      "@id": "https://www.aethervibe.com/#service",
      name: "Mid-Market ITC Transfer Brokerage",
      provider: { "@id": "https://www.aethervibe.com/#organization" },
      description:
        "Specialist brokerage for $1M–$20M Investment Tax Credit (ITC) transfers under IRA 2022 Section 6418. We match clean energy developers with corporate tax buyers and close in 30–60 days.",
      areaServed: "US",
    },
    {
      "@type": "WebSite",
      "@id": "https://www.aethervibe.com/#website",
      url: "https://www.aethervibe.com",
      name: "Aethervibe",
      publisher: { "@id": "https://www.aethervibe.com/#organization" },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} min-h-full flex flex-col`}>
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DKRE337RDZ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DKRE337RDZ');
          `}
        </Script>
        <Script id="linkedin-insight" strategy="afterInteractive">
          {`
            _linkedin_partner_id = "9196570";
            window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
            window._linkedin_data_partner_ids.push(_linkedin_partner_id);
            (function(l) {
              if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
              window.lintrk.q=[]}
              var s = document.getElementsByTagName("script")[0];
              var b = document.createElement("script");
              b.type = "text/javascript";b.async = true;
              b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
              s.parentNode.insertBefore(b, s);})(window.lintrk);
          `}
        </Script>
        <noscript>
          <img height="1" width="1" style={{display:"none"}} alt="" src="https://px.ads.linkedin.com/collect/?pid=9196570&fmt=gif" />
        </noscript>
      </body>
    </html>
  );
}
