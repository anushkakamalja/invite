
import React from 'react';
import { Separator } from "@/components/ui/separator";

const InvitationHeader = () => {
  return (
    <div className="text-center mb-6 animate-fade-in">
      <h1 className="font-script text-4xl md:text-5xl lg:text-6xl text-primary mb-2">
        Twenty-Five Years of Love
      </h1>
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="h-px bg-gold/50 flex-grow max-w-[100px]"></div>
        <span className="font-serif text-gold-dark text-lg">Silver Anniversary</span>
        <div className="h-px bg-gold/50 flex-grow max-w-[100px]"></div>
      </div>
      <p className="font-serif text-xl md:text-2xl text-slate-700">
        You are cordially invited to celebrate
      </p>
      <p className="font-script text-3xl md:text-4xl mt-2 text-primary">
        Jyoti & Ramesh Kamalja
      </p>
      <p className="font-serif text-lg md:text-xl mt-1 text-slate-700">
        as they commemorate 25 years of marriage
      </p>
      <Separator className="my-4 bg-gold/30 max-w-[250px] mx-auto" />
    </div>
  );
};

export default InvitationHeader;
