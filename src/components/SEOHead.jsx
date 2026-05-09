import { Helmet } from 'react-helmet-async'

/**
 * Per-page SEO meta tags using react-helmet-async.
 */
export default function SEOHead({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogImage = 'https://placehold.co/1200x630/0A0F1E/1E6FE8?text=AG+Design+Solutions',
  canonical,
}) {
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://agdesignsolutions.com'

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content="index, follow" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:image" content={ogImage} />
      {canonical && <meta property="og:url" content={`${siteUrl}${canonical}`} />}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle || title} />
      <meta name="twitter:description" content={ogDescription || description} />
      <meta name="twitter:image" content={ogImage} />

      {canonical && <link rel="canonical" href={`${siteUrl}${canonical}`} />}
    </Helmet>
  )
}
