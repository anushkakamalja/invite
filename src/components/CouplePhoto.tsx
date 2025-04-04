
import React from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";

const CouplePhoto = () => {
  return (
    <div className="w-full max-w-sm mx-auto my-6 animate-fade-in">
      <div className="photo-frame rounded-lg overflow-hidden p-1 bg-white">
        <AspectRatio ratio={3/4} className="bg-slate-50">
          <img 
            src="/lovable-uploads/3c2915e3-c503-4574-993d-8f6d7406c990.png" 
            alt="Jyoti and Ramesh Kamalja" 
            className="object-cover w-full h-full rounded"
          />
        </AspectRatio>
      </div>
    </div>
  );
};

export default CouplePhoto;
