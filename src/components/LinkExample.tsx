
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { CheckCircle, AlertTriangle } from 'lucide-react';

const LinkExample = () => {
  const [selectedTab, setSelectedTab] = useState<'safe' | 'suspicious'>('safe');
  
  return (
    <section id="examples" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Identifying Safe vs. Suspicious Links</h2>
          
          <div className="bg-gray-100 rounded-lg p-1 flex mb-8">
            <button
              onClick={() => setSelectedTab('safe')}
              className={`flex-1 py-2 px-4 rounded-md transition ${
                selectedTab === 'safe' 
                  ? 'bg-white shadow-sm' 
                  : 'hover:bg-gray-200'
              }`}
            >
              Safe Links
            </button>
            <button
              onClick={() => setSelectedTab('suspicious')}
              className={`flex-1 py-2 px-4 rounded-md transition ${
                selectedTab === 'suspicious' 
                  ? 'bg-white shadow-sm' 
                  : 'hover:bg-gray-200'
              }`}
            >
              Suspicious Links
            </button>
          </div>
          
          {selectedTab === 'safe' && (
            <div className="space-y-6">
              <Alert className="border-green-200 bg-green-50">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <AlertTitle>Safe Link Characteristics</AlertTitle>
                <AlertDescription className="text-gray-700">
                  Safe links typically have consistent domains that match the expected website.
                </AlertDescription>
              </Alert>
              
              <Card>
                <CardHeader>
                  <CardTitle>Example: Official Website</CardTitle>
                  <CardDescription>Here's what a legitimate link looks like</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-50 border border-gray-200 rounded-md p-3 font-mono text-sm">
                    <div className="flex items-center">
                      <span className="text-green-600 mr-2">🔒</span>
                      <span className="text-gray-500">https://</span>
                      <span className="font-semibold">www.utc-silverstone.co.uk</span>
                      <span className="text-gray-500">/student-resources</span>
                    </div>
                  </div>
                  <div className="mt-4 text-sm text-gray-600">
                    <p className="mb-2"><span className="font-semibold">Notice:</span></p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Secure HTTPS protocol</li>
                      <li>Correct spelling of the domain</li>
                      <li>Appropriate top-level domain (.co.uk)</li>
                      <li>Proper domain format (utc-silverstone.co.uk, not silverstoneUTC.co.uk)</li>
                      <li>Relevant path that makes sense</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {selectedTab === 'suspicious' && (
            <div className="space-y-6">
              <Alert className="border-red-200 bg-red-50">
                <AlertTriangle className="h-4 w-4 text-red-600" />
                <AlertTitle>Suspicious Link Warning Signs</AlertTitle>
                <AlertDescription className="text-gray-700">
                  Be cautious of misspellings, unusual domains, or unexpected URL structures.
                </AlertDescription>
              </Alert>
              
              <Card>
                <CardHeader>
                  <CardTitle>Example: Phishing Attempt</CardTitle>
                  <CardDescription>Here's what a suspicious link might look like</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-50 border border-gray-200 rounded-md p-3 font-mono text-sm">
                    <div className="flex items-center">
                      <span className="text-red-600 mr-2">⚠️</span>
                      <span className="text-gray-500">http://</span>
                      <span className="font-semibold text-red-600">silverstone-utc-login.secureform.net</span>
                      <span className="text-gray-500">/verify-account</span>
                    </div>
                  </div>
                  <div className="mt-4 text-sm text-gray-600">
                    <p className="mb-2"><span className="font-semibold">Red flags:</span></p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Missing HTTPS security</li>
                      <li>Domain doesn't match the official website (utc-silverstone.co.uk)</li>
                      <li>Suspicious subdomain structure</li>
                      <li>Unusual TLD that doesn't match the organization</li>
                      <li>Path requesting verification/personal information</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LinkExample;
