import React from 'react';
import { useNavigate } from 'react-router-dom';
import FadeIn from './ui/FadeIn';
import Button from './ui/Button';

const PrivacyPolicy: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto min-h-screen">
      <FadeIn>
        <h1 className="font-serif text-4xl md:text-5xl text-lumiere-900 mb-8">Privacy Policy</h1>
        <div className="font-sans text-lumiere-800 space-y-6 leading-relaxed">
          <p>Last updated: January 12, 2026</p>
          
          <h2 className="text-2xl font-serif mt-8 mb-4">1. Introduction</h2>
          <p>
            Welcome to Lumière Salon & Spa. We respect your privacy and are committed to protecting your personal data. 
            This privacy policy will inform you as to how we look after your personal data when you visit our website 
            and tell you about your privacy rights and how the law protects you.
          </p>

          <h2 className="text-2xl font-serif mt-8 mb-4">2. Data We Collect</h2>
          <p>
            We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
            Identity Data, Contact Data, Technical Data, and Usage Data.
          </p>

          <h2 className="text-2xl font-serif mt-8 mb-4">3. How We Use Your Data</h2>
          <p>
            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data 
            in the following circumstances: Where we need to perform the contract we are about to enter into or have entered into with you.
          </p>

          <h2 className="text-2xl font-serif mt-8 mb-4">4. Data Security</h2>
          <p>
            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, 
            used or accessed in an unauthorized way, altered or disclosed.
          </p>
        </div>
        <div className="mt-12">
            <Button variant="outline" onClick={() => navigate('/')}>Back to Home</Button>
        </div>
      </FadeIn>
    </div>
  );
};

export default PrivacyPolicy;