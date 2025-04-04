
import React from 'react';
import { CalendarIcon, Clock3Icon, MapPinIcon } from "lucide-react";

const EventDetails = () => {
  return (
    <div className="font-body text-center space-y-4 mb-8 animate-fade-up">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
        <div className="flex items-center space-x-2">
          <CalendarIcon className="w-5 h-5 text-gold" />
          <span className="text-lg">April 14th, 2025</span>
        </div>
        <div className="flex items-center space-x-2">
          <Clock3Icon className="w-5 h-5 text-gold" />
          <span className="text-lg">7:00 PM</span>
        </div>
      </div>
      
      <div className="pt-2">
        <div className="flex items-center justify-center space-x-2 mb-1">
          <MapPinIcon className="w-5 h-5 text-gold" />
          <span className="text-xl font-semibold">Pink Martini</span>
        </div>
        <a 
          href="https://g.co/kgs/bqJg9JF" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-primary/80 hover:text-primary transition-colors underline text-sm"
        >
          View on Google Maps
        </a>
      </div>
    </div>
  );
};

export default EventDetails;
