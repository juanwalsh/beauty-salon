export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  price?: string;
  category: 'hair' | 'makeup' | 'spa' | 'bridal';
}

export interface Testimonial {
  id: number;
  text: string;
  author: string;
  role?: string;
}

export interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  category: string;
  span?: string; // Tailwind class for grid span
}

export interface NavigationLink {
  label: string;
  href: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
}

export interface AestheticServiceItem {
  id: string;
  title: string;
  description: string;
  duration: string;
  price: string;
}