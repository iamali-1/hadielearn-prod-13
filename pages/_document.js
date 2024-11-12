import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="/favicon.svg" />

        {/* Meta tags and other necessary scripts */}
        <meta property="og:title" content="Hadi E-learning - Your Digital Hadi" />
        <meta property="og:site_name" content="Hadi E-learning" />
        <meta property="og:url" content="https://hadielearning.com/" />
        <meta
          property="og:description"
          content="Unlock the door to a bright and prosperous future in the digital world with Hadi-learning, an online learning platform that can help you excel in your career path."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://hadielearning.com/assets/images/cards.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Hadi E-learning" />
        <meta name="twitter:title" content="Hadi E-learning - Your Digital Hadi" />
        <meta
          name="twitter:description"
          content="Unlock the door to a bright and prosperous future in the digital world with Hadi-learning, an online learning platform that can help you excel in your career path."
        />
        <meta name="twitter:image" content="https://hadielearning.com/assets/images/cards.webp" />
        <meta name="p:domain_verify" content="f8bb42a20c8dff398a924ace20af7c9f" />

        {/* Google Tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XMP1680JR1"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XMP1680JR1');
            `,
          }}
        />

        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
            {
              "@context": "http://schema.org",
              "@type": "WebSite",
              "url": "https://hadielearning.com/",
              "name": "Hadi E-learning",
              "alternateName": "An excellent online learning platform",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://hadielearning.com/?s={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }
            `,
          }}
        />

        {/* Google AdSense Script */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7098252304490801"
          crossOrigin="anonymous"
        ></script>
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
