import { Car, Plane, Gift, Users, Package, Calendar } from 'lucide-react';

export const BUSINESS_INFO = {
  name: "DO TRANSPORT",
  slogan: "Your Journey, Our Expertise",
  tagline: "We move it. You celebrate.",
  phone: "07920 462704",
  email: "damtem2@gmail.com",
  primaryColor: "#be185d"
};

export const SERVICES = [
  {
    title: "Event Travel",
    description: "Reliable transportation for weddings, concerts, corporate events, and special occasions.",
    icon: Calendar
  },
  {
    title: "Holiday Shuttles",
    description: "Stress-free shuttles for your holiday getaways. Start your vacation the moment you step in.",
    icon: Car
  },
  {
    title: "Party Logistics",
    description: "Comprehensive logistics support for parties, ensuring your guests and gear arrive on time.",
    icon: Gift
  },
  {
    title: "Group Event Shuttles",
    description: "Spacious and comfortable transport solutions for large groups and tours.",
    icon: Users
  },
  {
    title: "Airport Transfers",
    description: "Punctual airport pickups and drop-offs with ample space for all your luggage.",
    icon: Plane
  },
  {
    title: "Equipment Delivery",
    description: "Safe delivery of party equipment, sound systems, and decorations to your venue.",
    icon: Package
  }
];

export const NAV_LINKS = [
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];