import { Helmet } from 'react-helmet-async'

export default function SEO({ title, description, url, schema }) {
  const siteUrl = 'https://www.topknotchtrade.com'
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl

  // Base LocalBusiness schema for TopKnotch Trade
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "name": "TopKnotch Trade Services Inc.",
    "url": siteUrl,
    "telephone": "+1-226-759-2210",
    "email": "info@topknotchtrade.com",
    "description": "Certified millwright, mechanical, welding, rigging, and electrical trade services for industrial facilities across Ontario and Canada.",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "ON",
      "addressCountry": "CA"
    },
    "areaServed": [
      "Ontario",
      "Hamilton",
      "London",
      "Greater Toronto Area (GTA)",
      "Scarborough"
    ]
  }

  // If a specific schema is passed, we can add it alongside the base schema or override
  // For now, we'll just output an array of schemas if an extra one is provided
  const schemaMarkup = schema ? [baseSchema, schema] : baseSchema

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      
      {/* Open Graph Metadata */}
      <meta property="og:title" content={title} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content="website" />

      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(schemaMarkup)}
      </script>
    </Helmet>
  )
}
