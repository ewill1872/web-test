
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Helmet } from 'react-helmet';
import { FileText, BookOpen, Library } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Resources = () => {
  // Enhanced JSON-LD structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Cybersecurity Resources - Silverstone UTC",
    "description": "Educational resources and tools from Silverstone UTC to help students stay safe online and identify malicious links.",
    "url": "https://link-safety.utc-silverstone.co.uk/resources",
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
        "name": "Online Safety"
      },
      {
        "@type": "Thing",
        "name": "Digital Literacy"
      }
    ],
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "price": "0",
      "priceCurrency": "GBP",
      "eligibleRegion": {
        "@type": "Country",
        "name": "UK"
      }
    },
    "datePublished": "2023-05-01",
    "dateModified": "2025-05-10",
    "inLanguage": "en-GB"
  };

  return (
    <>
      <Helmet>
        <title>Cybersecurity Resources | Silverstone UTC Link Safety</title>
        <meta name="description" content="A comprehensive collection of educational resources about cybersecurity, link safety, and phishing prevention for Silverstone UTC students." />
        <meta name="keywords" content="cybersecurity resources, link safety tools, phishing prevention, Silverstone UTC, online safety guides, digital literacy, URL verification, secure browsing" />
        <meta property="og:title" content="Cybersecurity Resources | Silverstone UTC" />
        <meta property="og:description" content="Comprehensive educational resources and tools to help students stay safe online." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://link-safety.utc-silverstone.co.uk/resources" />
        <link rel="canonical" href="https://link-safety.utc-silverstone.co.uk/resources" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          {/* Header section */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 py-16">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Cybersecurity Resources
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                A collection of helpful materials to enhance your understanding of link safety and protect yourself online.
              </p>
            </div>
          </div>

          {/* Resources section */}
          <div className="container mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold text-center mb-12">Educational Materials</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* External Resources */}
              <Card className="shadow-md hover:shadow-lg transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-6 w-6 text-primary" />
                    National Cybersecurity Centre
                  </CardTitle>
                  <CardDescription>Official UK guidance for staying safe online</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700">The NCSC provides authoritative guidance on how to protect yourself online and recognize phishing attempts.</p>
                  <Button className="w-full" variant="outline" asChild>
                    <a href="https://www.ncsc.gov.uk/collection/top-tips-for-staying-secure-online" target="_blank" rel="noopener noreferrer">
                      View Resources
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-md hover:shadow-lg transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-6 w-6 text-primary" />
                    Get Safe Online
                  </CardTitle>
                  <CardDescription>Free online security advice</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700">Get Safe Online provides unbiased, factual, and easy-to-understand information on online safety.</p>
                  <Button className="w-full" variant="outline" asChild>
                    <a href="https://www.getsafeonline.org/" target="_blank" rel="noopener noreferrer">
                      View Resources
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-md hover:shadow-lg transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2">
                    <Library className="h-6 w-6 text-primary" />
                    Google's Phishing Quiz
                  </CardTitle>
                  <CardDescription>Test your phishing identification skills</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700">Challenge yourself with this interactive quiz to see how well you can spot phishing attempts.</p>
                  <Button className="w-full" variant="outline" asChild>
                    <a href="https://phishingquiz.withgoogle.com/" target="_blank" rel="noopener noreferrer">
                      Take the Quiz
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* School Resources */}
              <Card className="shadow-md hover:shadow-lg transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-6 w-6 text-primary" />
                    Silverstone UTC IT Guidelines
                  </CardTitle>
                  <CardDescription>School-specific cybersecurity protocols</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700">Learn about the specific IT security guidelines that apply to Silverstone UTC students and staff.</p>
                  <Button className="w-full">
                    Download PDF
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-md hover:shadow-lg transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-6 w-6 text-primary" />
                    Digital Literacy Handbook
                  </CardTitle>
                  <CardDescription>Comprehensive guide to staying safe online</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700">A complete handbook covering various aspects of digital literacy and online safety.</p>
                  <Button className="w-full">
                    View Handbook
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-md hover:shadow-lg transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2">
                    <Library className="h-6 w-6 text-primary" />
                    Report a Suspicious Link
                  </CardTitle>
                  <CardDescription>Help keep our community safe</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700">If you encounter a suspicious link or potential phishing attempt, report it to our IT security team.</p>
                  <Button className="w-full">
                    Report Now
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Tools section */}
            <h2 className="text-3xl font-bold text-center mt-20 mb-12">Useful Tools</h2>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold">URL Checkers</h3>
                  <ul className="space-y-3">
                    <li>
                      <a href="https://www.virustotal.com/gui/home/url" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">VirusTotal</a>
                      <p className="text-gray-600 mt-1">Analyze suspicious URLs to detect malware and phishing.</p>
                    </li>
                    <li>
                      <a href="https://www.urlvoid.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">URLVoid</a>
                      <p className="text-gray-600 mt-1">Check if a website is malicious or has been flagged for suspicious activity.</p>
                    </li>
                    <li>
                      <a href="https://www.google.com/transparencyreport/safebrowsing/diagnostic/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">Google Safe Browsing</a>
                      <p className="text-gray-600 mt-1">Check if a site contains malware or engages in phishing.</p>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold">Browser Extensions</h3>
                  <ul className="space-y-3">
                    <li>
                      <a href="https://www.netcraft.com/apps/browser/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">Netcraft Extension</a>
                      <p className="text-gray-600 mt-1">Browser extension that identifies and blocks phishing sites.</p>
                    </li>
                    <li>
                      <a href="https://www.bitdefender.com/solutions/trafficlight.html" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">Bitdefender TrafficLight</a>
                      <p className="text-gray-600 mt-1">Real-time protection against malicious websites.</p>
                    </li>
                    <li>
                      <a href="https://www.eff.org/deeplinks/2017/11/privacy-badger" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">Privacy Badger</a>
                      <p className="text-gray-600 mt-1">Blocks spying ads and invisible trackers to enhance your privacy.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Resources;
