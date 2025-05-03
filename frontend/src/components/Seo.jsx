import Head from "next/head";

const Seo = ({ seo }) => {
    if (seo) return (
        <Head>
            {/* Основные метатеги */}
            <title>{seo.metaTitle}</title>
            <meta name="description" content={seo.metaDescription} />
            <meta name="keywords" content={seo.keywords} />
            <meta name="robots" content={seo.metaRobots} />
            <link rel="canonical" href={seo.canonicalURL || "https://okna-globus.ru"} />

            {/* OpenGraph (для соцсетей) */}
            <meta property="og:title" content={seo.metaTitle} />
            <meta property="og:description" content={seo.metaDescription} />
            <meta property="og:image" content={seo.shareImage.url} />
            <meta property="og:type" content="website" />

            {/* Structured Data (JSON-LD) */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "LocalBusiness",
                    "name": "Окна Глобус",
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Москва"
                    },
                    "service": "Установка окон"
                })}
            </script>
        </Head>)
}

export default Seo