import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types for database tables
export type ContactSubmission = {
  id?: string;
  name: string;
  email: string;
  phone?: string;
  message: string;
  service_type?: string;
  created_at?: string;
  read?: boolean;
};

export type Testimonial = {
  id?: string;
  author: string;
  role?: string;
  content: string;
  image_url?: string;
  rating?: number;
  created_at?: string;
};

export type FaqItem = {
  id?: string;
  question: string;
  answer: string;
  category?: string;
  order_index?: number;
  created_at?: string;
};