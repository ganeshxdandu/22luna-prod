import * as React from 'react';

export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    '@id': 'https://22luna.in/#clinic',
    'name': '22Luna Skin, Hair & Dental Sanctuary',
    'alternateName': '22Luna',
    'description': 'A premium boutique sanctuary curated for holistic health, medical wellness, skin therapy, hair restoration, and aesthetic dental design in Bengaluru.',
    'url': 'https://22luna.in',
    'logo': 'https://22luna.in/favicon.ico',
    'image': 'https://22luna.in/assets/placeholders/og-image.jpg',
    'telephone': '+91 89717 25522',
    'email': 'hello@22luna.in',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': '#5, Rest House Crescent, Ashok Nagar',
      'addressLocality': 'Bengaluru',
      'addressRegion': 'Karnataka',
      'postalCode': '560001',
      'addressCountry': 'IN',
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 12.9734185,
      'longitude': 77.6085182,
    },
    'openingHoursSpecification': [
      {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': [
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        'opens': '10:00',
        'closes': '19:00',
      },
    ],
    'sameAs': [
      'https://res.cloudinary.com/dz5xgcfj',
      'https://wa.me/918971725522',
    ],
    'priceRange': '$$$',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
