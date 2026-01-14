import React from 'react';
import { useNavigate } from 'react-router-dom';
import FadeIn from './ui/FadeIn';
import Button from './ui/Button';

const TermsOfUse: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto min-h-screen">
      <FadeIn>
        <h1 className="font-serif text-4xl md:text-5xl text-lumiere-900 mb-8">Terms of Use</h1>
        <div className="font-sans text-lumiere-800 space-y-6 leading-relaxed">
          <p>Last updated: January 12, 2026</p>
          
          <h2 className="text-2xl font-serif mt-8 mb-4">1. Agreement to Terms</h2>
          <p>
            These Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf of an entity, 
            and Lumière Salon & Spa, concerning your access to and use of our website.
          </p>

          <h2 className="text-2xl font-serif mt-8 mb-4">2. Intellectual Property Rights</h2>
          <p>
            Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, 
            software, website designs, audio, video, text, photographs, and graphics on the Site are owned or controlled by us 
            or licensed to us, and are protected by copyright and trademark laws.
          </p>

          <h2 className="text-2xl font-serif mt-8 mb-4">3. User Representations</h2>
          <p>
            By using the Site, you represent and warrant that: (1) you have the legal capacity and you agree to comply with these Terms of Use; 
            (2) you are not a minor in the jurisdiction in which you reside; (3) you will not access the Site through automated or non-human means.
          </p>

          <h2 className="text-2xl font-serif mt-8 mb-4">4. Contact Us</h2>
          <p>
            In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, 
            please contact us at the address provided in our footer.
          </p>
        </div>
        <div className="mt-12">
            <Button variant="outline" onClick={() => navigate('/')}>Back to Home</Button>
        </div>
      </FadeIn>
    </div>
  );
};

export default TermsOfUse;