
import React from 'react';
import { Card } from "@/components/ui/card";

const AnniversaryMessage = () => {
  return (
    <Card className="p-6 max-w-2xl mx-auto my-8 text-center anniversary-card">
      <div className="animate-fade-up">
        <p className="font-body text-lg italic mb-4">
          "Twenty-five years of love, laughter, and creating beautiful memories together. 
          We are blessed to have you in our lives and would be honored by your presence 
          as we celebrate this special milestone."
        </p>
        <p className="font-script text-2xl text-primary">
          With love and gratitude,
        </p>
        <p className="font-serif text-lg">
          Jyoti & Ramesh Kamalja
        </p>
      </div>
    </Card>
  );
};

export default AnniversaryMessage;
