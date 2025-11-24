import { NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Platform', path: '/product' },
  { label: 'Missions', path: '/missions' },
  { label: 'Specs', path: '/specs' },
  { label: 'Manifesto', path: '/manifesto' },
  { label: 'Give', path: '/give' },
];

export const COLORS = {
  black: '#050505',
  offblack: '#0A0A0A',
  white: '#F2F2F2',
  muted: '#888888',
  border: '#222222',
  coral: '#d5a790',
  success: '#10b981', // Emerald-500 for status
  primary: '#6366f1', // Indigo-500 for tech accents
};

export const TECH_STACK = [
  "Next.js", "TypeScript", "TanStack", "PostgreSQL", "Stripe", "Keycloak", "Headless WordPress", "SendGrid", "Vercel", "AWS"
];