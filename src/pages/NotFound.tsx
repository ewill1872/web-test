
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Silverstone UTC Link Safety</title>
        <meta name="description" content="The page you're looking for could not be found. Please check the URL or navigate back to the Silverstone UTC Link Safety homepage." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="container mx-auto px-4 py-16 text-center">
            <h1 className="text-6xl font-bold mb-6">404</h1>
            <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
            <p className="text-xl text-gray-600 mb-8">
              The page you're looking for doesn't exist or has been moved.
              <br />
              The link you're looking for might be at utc-silverstone.co.uk
            </p>
            <Button asChild className="px-8">
              <Link to="/">Return to Home</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default NotFound;
