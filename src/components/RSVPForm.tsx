
import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";

const RSVPForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [attendance, setAttendance] = useState('yes');
  const [guests, setGuests] = useState('1');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Thank you for your RSVP!", {
        description: `We've recorded your response: ${attendance === 'yes' ? 'Attending' : 'Not attending'}`,
        duration: 5000,
      });
      
      setName('');
      setEmail('');
      setAttendance('yes');
      setGuests('1');
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <Card className="p-6 max-w-md mx-auto mt-8 anniversary-card animate-fade-up">
      <h2 className="font-script text-3xl text-center text-primary mb-4">RSVP</h2>
      <p className="text-center mb-6 font-body">
        Please let us know if you'll be joining us in our celebration
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Your Name</Label>
          <Input 
            id="name" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Enter your name"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input 
            id="email" 
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
          />
        </div>
        
        <div className="space-y-2">
          <Label>Will you attend?</Label>
          <RadioGroup 
            value={attendance} 
            onValueChange={setAttendance}
            className="flex space-x-4"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="yes" />
              <Label htmlFor="yes">Joyfully Accept</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="no" />
              <Label htmlFor="no">Regretfully Decline</Label>
            </div>
          </RadioGroup>
        </div>
        
        {attendance === 'yes' && (
          <div className="space-y-2">
            <Label htmlFor="guests">Number of Guests</Label>
            <Input 
              id="guests" 
              type="number"
              min="1"
              max="5"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              required
            />
            <p className="text-xs text-muted-foreground">Maximum 5 guests per invitation</p>
          </div>
        )}
        
        <Button 
          type="submit" 
          className="w-full mt-4 bg-gold hover:bg-gold-dark text-white"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit RSVP"}
        </Button>
      </form>
    </Card>
  );
};

export default RSVPForm;
