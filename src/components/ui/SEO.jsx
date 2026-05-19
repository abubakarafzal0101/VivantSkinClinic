import { Helmet } from "react-helmet-async";

export default function SEO({
  title = "Vivant Skin Clinic — Luxury Aesthetics",
  description = "Premium dermatology and skin aesthetics center. Expert treatments including Hydrafacial, Laser, Botox, and more. Book your consultation today.",
  keywords = "skin clinic, dermatology, hydrafacial, laser hair removal, botox, skin whitening, acne treatment, Lahore",
  image = "/og-image.jpg",
  url = "https://vivantskinclinic.com",
}) {
  return (
    <Helmet>
      {/* Primary */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Vivant Skin Clinic" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      {/* Open Graph (Facebook, WhatsApp) */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Vivant Skin Clinic" />
      <meta property="og:locale" content="en_PK" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Geo tags (Pakistan) */}
      <meta name="geo.region" content="PK-PB" />
      <meta name="geo.placename" content="Lahore, Pakistan" />
    </Helmet>
  );
}
