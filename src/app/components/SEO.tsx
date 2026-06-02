import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

export default function SEO({
  title = 'Hotel Pandey Residency - Best Hotel in Guptkashi near Kedarnath',
  description = 'Experience luxury and comfort at Hotel Pandey Residency in Guptkashi, Uttarakhand. Your perfect stay near Kedarnath with mountain views, modern amenities, and warm hospitality.',
  keywords = 'best hotel in guptkashi, hotel near kedarnath, hotel in guptkashi uttarakhand, kedarnath stay, guptkashi rooms, hotel pandey residency, hotels near kedarnath temple, triyuginarayan, trijuginarayan, hotels near triyuginarayan, budget hotels in guptkashi, family hotels guptkashi',
  image = 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200',
  url = 'https://hotelpandeyresidency.com',
}: SEOProps) {
  useEffect(() => {
    document.title = title;

    const metaTags = [
      { name: 'description', content: description },
      { name: 'keywords', content: keywords },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Hotel Pandey Residency' },
      { property: 'og:title', content: title },
      { property: 'og:site_name', content: 'Hotel Pandey Residency' },
      { property: 'og:description', content: description },
      { property: 'og:image', content: image },
      { property: 'og:url', content: url },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:site', content: '@HotelPandeyRes' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image },
    ];

    metaTags.forEach(({ name, property, content }) => {
      const selector = name ? `meta[name="${name}"]` : `meta[property="${property}"]`;
      let element = document.querySelector(selector);

      if (!element) {
        element = document.createElement('meta');
        if (name) element.setAttribute('name', name);
        if (property) element.setAttribute('property', property);
        document.head.appendChild(element);
      }

      element.setAttribute('content', content);
    });

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = url;

    let schema = document.querySelector('script[type="application/ld+json"]');
    if (!schema) {
      schema = document.createElement('script');
      schema.setAttribute('type', 'application/ld+json');
      document.head.appendChild(schema);
    }
    schema.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Hotel',
      name: 'Hotel Pandey Residency',
      image: image,
      description: description,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'NH-109, Kedarnath Rd, near Bus Stand',
        addressLocality: 'Guptkashi',
        addressRegion: 'Uttarakhand',
        postalCode: '246439',
        addressCountry: 'IN',
      },
      telephone: '+919456874629',
      starRating: {
        '@type': 'Rating',
        ratingValue: '4.5',
      },
      priceRange: '₹₹',
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '30.5333',
        longitude: '79.0833',
      },
    });
  }, [title, description, keywords, image, url]);

  return null;
}
