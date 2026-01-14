import { ServiceItem, Testimonial, GalleryItem, NavigationLink, TeamMember, AestheticServiceItem } from './types';

// Updated Order: Services -> Editorial -> The Salon -> Portfolio -> Contact
export const NAV_LINKS: NavigationLink[] = [
  { label: 'Services', href: '#services' },
  { label: 'Spa', href: '#aesthetics' },
  { label: 'Editorial', href: '#editorial' },
  { label: 'The Salon', href: '#about' },
  { label: 'Portfolio', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: '1',
    title: 'Signature Cut & Styling',
    description: 'Personalized cut based on facial structure and hair texture.',
    category: 'hair',
    price: '$196'
  },
  {
    id: '2',
    title: 'Blondes & Highlights',
    description: 'Advanced highlighting and balayage techniques preserving hair health.',
    category: 'hair',
    price: 'Upon Consultation'
  },
  {
    id: '3',
    title: 'Editorial Makeup',
    description: 'Long-lasting makeup with natural and sophisticated finish.',
    category: 'makeup',
    price: '$245'
  },
  {
    id: '4',
    title: 'Bridal Experience',
    description: 'Complete bridal consultation, including trials and day-of service.',
    category: 'bridal',
    price: 'Special Packages'
  },
  {
    id: '5',
    title: 'Hair Spa Therapy',
    description: 'Deep reconstruction and hydration treatments with premium products.',
    category: 'spa',
    price: '$210'
  },
  {
    id: '6',
    title: 'Color Correction',
    description: 'Color correction with precise diagnosis and safe techniques.',
    category: 'hair',
    price: 'Upon Consultation'
  }
];

export const AESTHETIC_SERVICES: AestheticServiceItem[] = [
  {
    id: 'a1',
    title: 'Lumière Facial Glow',
    description: 'Deep cleansing followed by 24k gold hydration and lifting facial massage.',
    duration: '90 min',
    price: '$315'
  },
  {
    id: 'a2',
    title: 'Sculpting Massage',
    description: 'Lymphatic drainage combined with sculpting massage for contouring and relaxation.',
    duration: '60 min',
    price: '$196'
  },
  {
    id: 'a3',
    title: 'Premium Microneedling',
    description: 'Collagen stimulation to renew skin texture and reduce scarring.',
    duration: '60 min',
    price: '$420'
  },
  {
    id: 'a4',
    title: 'Hand & Foot Spa',
    description: 'Exfoliation, deep hydration and reflexology massage.',
    duration: '45 min',
    price: '$126'
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  
  {
    id: 1,
    name: "Elena Vasconcelos",
    role: "Creative Director & Hair Stylist",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1588&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Ricardo Mendes",
    role: "Color Specialist",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1587&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Sophie Laurent",
    role: "Senior Makeup Artist",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1661&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Dr. Ana Paiva",
    role: "Aesthetics Specialist",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=1587&auto=format&fit=crop"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    text: "An experience that transcends beauty service. The atmosphere breathes sophistication and the team has impeccable technique.",
    author: "Isabella V.",
    role: "Fashion Editor"
  },
  {
    id: 2,
    text: "I found the quiet luxury I was looking for at Lumière. My hair has never been so healthy and the color so natural.",
    author: "Carolina M.",
    role: "Entrepreneur"
  },
  {
    id: 3,
    text: "The service is a work of art. From the welcome coffee to the final result. Luxury in every detail.",
    author: "Fernanda S.",
    role: "Architect"
  }
];

export const GALLERY_IMAGES: GalleryItem[] = [
  { 
    id: 1, 
    src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1769&auto=format&fit=crop", 
    alt: "Luminous Blonde Hair", 
    category: "Signature Color", 
    span: "row-span-2" 
  },
  { 
    id: 2, 
    src: "https://images.unsplash.com/photo-1596451190630-186aff535bf2?q=80&w=1587&auto=format&fit=crop", 
    alt: "Brunette Shine", 
    category: "Healthy Hair", 
    span: "col-span-1" 
  },
  { 
    id: 3, 
    src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=1287&auto=format&fit=crop", 
    alt: "Men's Grooming", 
    category: "Men", 
    span: "col-span-1" 
  },
  { 
    id: 4, 
    src: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1770&auto=format&fit=crop", 
    alt: "Bridal Styling", 
    category: "Bridal", 
    span: "row-span-2" 
  },
  { 
    id: 5, 
    src: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=1769&auto=format&fit=crop", 
    alt: "Editorial Styling", 
    category: "Editorial", 
    span: "col-span-1" 
  },
];