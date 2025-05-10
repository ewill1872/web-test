
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

const BestPractices = () => {
  const practices = [
    {
      title: "Check the URL before clicking",
      description: "Always hover over links to see the actual destination before clicking. Look for subtle misspellings or unusual domains."
    },
    {
      title: "Verify secure connections",
      description: "Ensure websites use HTTPS (look for the padlock icon) before entering any personal information."
    },
    {
      title: "Be suspicious of urgent requests",
      description: "Legitimate organizations rarely request immediate action through email or messages. Verify through official channels."
    },
    {
      title: "Use a password manager",
      description: "Password managers can help identify fake websites as they won't auto-fill credentials on phishing sites."
    },
    {
      title: "Keep software updated",
      description: "Regular updates help protect against known security vulnerabilities that phishers might exploit."
    },
    {
      title: "Use multi-factor authentication",
      description: "Even if your password is compromised, MFA adds an additional layer of security to your accounts."
    }
  ];

  return (
    <section id="best-practices" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Best Practices for Link Safety</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Follow these guidelines to protect yourself from phishing attacks and malicious websites.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {practices.map((practice, index) => (
              <Card key={index} className="border-l-4 border-l-primary">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                    {practice.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {practice.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 bg-blue-50 border border-blue-100 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-center">Remember: When in Doubt, Don't Click!</h3>
            <p className="text-gray-700 text-center">
              If you receive a suspicious link or aren't sure about a website's legitimacy, 
              contact your IT department or a teacher before proceeding.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestPractices;
