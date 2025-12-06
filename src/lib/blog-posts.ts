export interface BlogPost {
  slug: string;
  title: string;
  summary: string;
  authors: string[];
  readTime: string;
  date: string;
  content: {
    type: 'section';
    heading: string;
    id: string;
    paragraphs: string[];
    list?: { items: string[]; type?: 'bullet' | 'number' };
  }[];
  tags?: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'cve-2025-55182-react-security',
    title: 'Summary of CVE-2025-55182',
    summary: 'A critical-severity vulnerability in React Server Components affecting React 19 and frameworks including Next.js.',
    authors: ['Équipe Technique'],
    readTime: '2 min read',
    date: '2025-12-03',
    tags: ['Sécurité', 'React', 'Next.js', 'CVE'],
    content: [
      {
        type: 'section',
        heading: 'Summary',
        id: 'summary',
        paragraphs: [
          'A critical-severity vulnerability in React Server Components (CVE-2025-55182) affects React 19 and frameworks that use it, including Next.js (CVE-2025-66478). Under certain conditions, specially crafted requests could lead to unintended remote code execution.',
          'We created new rules to address this vulnerability and quickly deployed to the Vercel WAF to automatically protect all projects hosted on Vercel at no cost. However, do not rely on the WAF for full protection. Immediate upgrades to a patched version are required. We also worked with the React team to deliver recommendations to the largest WAF and CDN providers.',
          'We still strongly recommend upgrading to a patched version regardless of your hosting provider.'
        ]
      },
      {
        type: 'section',
        heading: 'Impact',
        id: 'impact',
        paragraphs: [
          'Applications using affected versions of the React Server Components implementation may process untrusted input in a way that allows an attacker to perform remote code execution. The vulnerability is present in versions 19.0, 19.1.0, 19.1.1, and 19.2.0 of the following packages:'
        ],
        list: {
          type: 'bullet',
          items: [
            'react-server-dom-parcel (19.0.0, 19.1.0, 19.1.1, and 19.2.0)',
            'react-server-dom-webpack (19.0.0, 19.1.0, 19.1.1, and 19.2.0)',
            'react-server-dom-turbopack (19.0.0, 19.1.0, 19.1.1, and 19.2.0)'
          ]
        }
      },
      {
        type: 'section',
        heading: 'Affected Frameworks',
        id: 'affected-frameworks',
        paragraphs: [
          'These packages are included in the following frameworks and bundlers:'
        ],
        list: {
          type: 'bullet',
          items: [
            'Next.js with versions ≥14.3.0-canary.77, ≥15 and ≥16',
            'Other frameworks and plugins that embed or depend on React Server Components implementation (e.g., Vite, Parcel, React Router, RedwoodSDK, Waku)'
          ]
        }
      },
      {
        type: 'section',
        heading: 'Resolution',
        id: 'resolution',
        paragraphs: [
          'After creating mitigations to address this vulnerability, we deployed them across our globally-distributed platform to quickly protect our customers. We still recommend upgrading to the latest patched version.',
          'Updated releases of React and affected downstream frameworks include hardened handling of user inputs to prevent unintended behavior. All users should upgrade to a patched version as soon as possible. If you are on Next.js 14.3.0-canary.77 or a later canary release, downgrade to the latest stable 14.x release.'
        ]
      },
      {
        type: 'section',
        heading: 'Fixed in:',
        id: 'fixed-versions',
        paragraphs: [],
        list: {
          type: 'bullet',
          items: [
            'React: 19.0.1, 19.1.2, 19.2.1',
            'Next.js: 15.0.5, 15.1.9, 15.2.6, 15.3.6, 15.4.8, 15.5.7, 15.6.0-canary.58, 16.0.7'
          ]
        }
      },
      {
        type: 'section',
        heading: 'Recommendation',
        id: 'recommendation',
        paragraphs: [
          'Frameworks and bundlers using the aforementioned packages should install the latest versions provided by their respective maintainers.'
        ]
      }
    ]
  }
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
