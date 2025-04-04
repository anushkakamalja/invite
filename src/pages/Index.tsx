
import React from 'react';
import InvitationHeader from '@/components/InvitationHeader';
import CouplePhoto from '@/components/CouplePhoto';
import EventDetails from '@/components/EventDetails';
import RSVPForm from '@/components/RSVPForm';
import AnniversaryMessage from '@/components/AnniversaryMessage';
import InvitationFooter from '@/components/InvitationFooter';
import GoldenAccent from '@/components/GoldenAccent';

const Index = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden py-8 px-4">
      {/* Golden corner accents */}
      <GoldenAccent position="top-left" />
      <GoldenAccent position="top-right" />
      <GoldenAccent position="bottom-left" />
      <GoldenAccent position="bottom-right" />
      
      <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm p-6 rounded-lg anniversary-card">
        <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-10">
          <div className="md:w-1/3">
            <CouplePhoto />
          </div>
          
          <div className="md:w-2/3">
            <InvitationHeader />
            <EventDetails />
          </div>
        </div>
        
        <AnniversaryMessage />
        
        <div className="relative">
          <div className="absolute -inset-1">
            <div className="w-full h-full mx-auto rotate-180 opacity-30 blur-sm filter">
              <div className="aspect-[2/1] w-full bg-gradient-to-r from-gold/50 via-gold-light to-gold/50 rounded-lg animate-shimmer"></div>
            </div>
          </div>
          <RSVPForm />
        </div>
        
        <InvitationFooter />
      </div>
    </div>
  );
};

export default Index;
