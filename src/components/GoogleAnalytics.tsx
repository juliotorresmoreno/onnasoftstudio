import config from "@/config";
import Script from "next/script";

export function GoogleAnalytics() {
  const googleId = config.GOOGLE_ANALYTICS_ID;
  if (config.NODE_ENV !== "production") {
    return null;
  }
  
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${googleId}`}
      />

      <Script id="google-analytics" strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${googleId}', {
            page_path: window.location.pathname,
            });
        `}
      </Script>
    </>
  );
}
