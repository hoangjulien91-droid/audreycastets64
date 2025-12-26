export interface NavLink {
  href: string;
  label: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features?: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating?: number;
  avatar?: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  summary: string;
  authors: string[];
  readTime: string;
  date: string;
  content: BlogSection[];
  tags?: string[];
}

export interface BlogSection {
  type: 'section';
  heading: string;
  id: string;
  paragraphs: string[];
  list?: { items: string[]; type?: 'bullet' | 'number' };
}

export interface ResourceMetadata {
  title: string;
  description: string;
  date: string;
  author: string;
  tags: string[];
  readTime: string;
  image?: string;
}

export interface BreadcrumbItem {
  label: string;
  href: string;
}

export interface Stat {
  id: string;
  value: string;
  label: string;
  description?: string;
}

export interface Value {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface ContactInfo {
  email: string;
  phone?: string;
  address?: string;
  socials?: SocialLink[];
}
