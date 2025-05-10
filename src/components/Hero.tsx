
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Verify Before You Click
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Learn how to protect yourself from phishing attacks and malicious links. 
            A guide for Silverstone UTC students on digital safety.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 flex items-center gap-2">
              Learn How <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="outline" className="px-6 py-3">
              View Examples
            </Button>
          </div>
          <p className="text-md text-gray-600 mb-8">
            The OFFICIAL website for Silverstone UTC is <strong>utc-silverstone.co.uk</strong>
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://utc-silverstone.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary/90 text-white px-6 py-3 flex items-center gap-2 rounded"
            >
              Take Me There <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-16">
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Identify</h3>
              <p className="text-gray-600">Learn to spot suspicious links and emails before clicking on them.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Verify</h3>
              <p className="text-gray-600">Check the authenticity of websites and sources before sharing information.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Protect</h3>
              <p className="text-gray-600">Implement best practices to secure your personal information online.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
