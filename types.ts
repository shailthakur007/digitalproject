import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  title: string;
  description: string;
  details?: string;
  icon?: LucideIcon;
}

export interface ServiceCategory {
  title: string;
  items: ServiceItem[];
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image: string;
  content?: string;
}

export interface EventItem {
  id: number;
  title: string;
  month: string;
  day: string;
  time: string;
  location: string;
  description: string;
  image: string;
}

export interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  category: string;
}