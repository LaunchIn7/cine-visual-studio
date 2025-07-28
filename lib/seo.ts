export const seoConfig = {
  // Business Information
  businessName: "Rahul Nag Photography",
  photographer: "Rahul Nag",
  phone: "+61493325512",
  email: "rahulnag0299@gmail.com",
  location: "Sydney, Australia",
  
  // Website URLs
  baseUrl: "https://cinevisualstudio.com",
  socialMedia: {
    instagram: "https://www.instagram.com/rahulnag04__",
    // Other social media links to be added when confirmed
    // facebook: "https://www.facebook.com/rahulnagphotography",
    // linkedin: "https://www.linkedin.com/in/rahulnag",
    // twitter: "@rahulnagphoto"
  },
  
  // SEO Keywords (targeting Sydney photographer searches)
  primaryKeywords: [
    "photographer Sydney",
    "wedding photographer Sydney",
    "portrait photographer Sydney",
    "event photographer Sydney",
    "professional photography Sydney"
  ],
  
  secondaryKeywords: [
    "Rahul Nag photographer",
    "Sydney photography services",
    "best photographer Sydney",
    "wedding photography Sydney",
    "corporate photography Sydney",
    "family photographer Sydney",
    "engagement photographer Sydney",
    "maternity photographer Sydney",
    "newborn photographer Sydney",
    "headshot photographer Sydney"
  ],
  
  // Service Areas
  serviceAreas: [
    "Sydney CBD",
    "North Sydney",
    "Eastern Suburbs",
    "Western Sydney",
    "Northern Beaches",
    "Inner West",
    "South Sydney",
    "Parramatta",
    "Penrith",
    "Blacktown"
  ],
  
  // Services Offered
  services: [
    "Wedding Photography",
    "Portrait Photography",
    "Event Photography",
    "Corporate Photography",
    "Family Photography",
    "Engagement Photography",
    "Maternity Photography",
    "Newborn Photography",
    "Headshot Photography",
    "Product Photography"
  ],
  
  // Business Stats
  stats: {
    experience: "5+ years",
    clients: "200+",
    projects: "500+",
    awards: "15+"
  }
};

// Generate dynamic meta descriptions
export const generateMetaDescription = (page: string) => {
  const descriptions = {
    home: `Award-winning photographer ${seoConfig.photographer} specializes in wedding, portrait, and event photography in ${seoConfig.location}. ${seoConfig.stats.experience} experience, ${seoConfig.stats.clients} satisfied clients. Book your session today!`,
    services: `Professional photography services in Sydney by ${seoConfig.photographer}. Specializing in weddings, portraits, events, and corporate photography. Contact us for a quote!`,
    portfolio: `View stunning photography work by ${seoConfig.photographer}. Wedding, portrait, and event photography portfolio showcasing ${seoConfig.stats.projects} completed projects in Sydney.`,
    about: `Meet ${seoConfig.photographer}, award-winning photographer in Sydney with ${seoConfig.stats.experience} experience. Specializing in wedding, portrait, and event photography.`,
    contact: `Contact ${seoConfig.businessName} for professional photography services in Sydney. Call ${seoConfig.phone} or email ${seoConfig.email} for bookings and quotes.`
  };
  
  return descriptions[page as keyof typeof descriptions] || descriptions.home;
};

// Generate structured data for different page types
export const generateStructuredData = (type: 'business' | 'person' | 'service') => {
  const baseData = {
    "@context": "https://schema.org"
  };
  
  switch (type) {
    case 'business':
      return {
        ...baseData,
        "@type": "LocalBusiness",
        "name": seoConfig.businessName,
        "telephone": seoConfig.phone,
        "email": seoConfig.email,
        "url": seoConfig.baseUrl,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Sydney",
          "addressRegion": "NSW",
          "addressCountry": "AU"
        },
        "sameAs": Object.values(seoConfig.socialMedia)
      };
      
    case 'person':
      return {
        ...baseData,
        "@type": "Person",
        "name": seoConfig.photographer,
        "jobTitle": "Professional Photographer",
        "telephone": seoConfig.phone,
        "email": seoConfig.email,
        "url": seoConfig.baseUrl,
        "sameAs": Object.values(seoConfig.socialMedia)
      };
      
    case 'service':
      return {
        ...baseData,
        "@type": "Service",
        "name": "Professional Photography Services",
        "serviceType": seoConfig.services,
        "areaServed": seoConfig.serviceAreas.map(area => ({
          "@type": "City",
          "name": area
        }))
      };
      
    default:
      return baseData;
  }
};
