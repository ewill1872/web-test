
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import LinkExample from '@/components/LinkExample';
import BestPractices from '@/components/BestPractices';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const Index = () => {
  // Enhanced JSON-LD structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalResource",
    "name": "Link Safety Guide - Silverstone UTC",
    "description": "Educational resources from Silverstone UTC about verifying links and protecting yourself from phishing attacks. Learn how to identify suspicious URLs and stay safe online.",
    "url": "https://link-safety.utc-silverstone.co.uk/",
    "audience": {
      "@type": "EducationalAudience",
      "educationalRole": "student"
    },
    "provider": {
      "@type": "EducationalOrganization",
      "name": "Silverstone UTC",
      "url": "https://utc-silverstone.co.uk",
      "sameAs": [
        "https://twitter.com/silverstone_utc",
        "https://www.facebook.com/SilverstoneUTC"
      ]
    },
    "about": [
      {
        "@type": "Thing",
        "name": "Cybersecurity"
      },
      {
        "@type": "Thing",
        "name": "Link Safety"
      },
      {
        "@type": "Thing",
        "name": "Phishing Prevention"
      }
    ],
    "educationalLevel": "secondary education",
    "learningResourceType": "guidance",
    "datePublished": "2023-05-01",
    "dateModified": "2025-05-10",
    "inLanguage": "en-GB"
  };

  return (
    <>
      <Helmet>
        <title>Silverstone UTC | Link Safety - Learn to Verify Before You Click</title>
        <meta name="description" content="Educational resources from Silverstone UTC about verifying links and protecting yourself from phishing attacks. Learn how to identify suspicious URLs and stay safe online." />
        <meta name="keywords" content="link safety, phishing prevention, URL verification, cybersecurity, Silverstone UTC, online safety, student resources, digital literacy, secure browsing" />
        <meta property="og:title" content="Silverstone UTC | Link Safety - Learn to Verify Before You Click" />
        <meta property="og:description" content="Educational resources about verifying links and protecting yourself from phishing attacks." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://link-safety.utc-silverstone.co.uk/" />
        <link rel="canonical" href="https://link-safety.utc-silverstone.co.uk/" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <LinkExample />
          <BestPractices />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
