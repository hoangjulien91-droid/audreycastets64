import { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
}

export function Heading({ level, children, className = '', ...props }: HeadingProps) {
  const Tag = `h${level}` as "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  
  const baseStyles = 'font-bold text-foreground';
  
  const sizes = {
    1: 'font-display text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight',
    2: 'font-display text-3xl md:text-4xl leading-tight tracking-tight',
    3: 'font-body text-2xl md:text-3xl leading-snug',
    4: 'font-body text-xl md:text-2xl leading-snug',
    5: 'font-body text-lg md:text-xl leading-normal',
    6: 'font-body text-base md:text-lg leading-normal',
  };

  return (
    <Tag className={cn(baseStyles, sizes[level], className)} {...props}>
      {children}
    </Tag>
  );
}
