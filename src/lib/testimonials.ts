export interface Testimonial {
  id: string;
  name: string;
  role: 'owner' | 'tenant';
  content: string;
  rating: number;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'James Wharton',
    role: 'owner',
    content: "The best ROI I've ever seen on my rental portfolio. Their management is proactive and transparent. I can finally sleep at night knowing my properties are in good hands.",
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150',
  },
  {
    id: '2',
    name: 'Sarah Chen',
    role: 'tenant',
    content: 'Process was incredibly smooth. The tenant portal makes rent and maintenance a breeze. Best rental experience I have had in [City].',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150',
  },
  {
    id: '3',
    name: 'Michael Rodriguez',
    role: 'owner',
    content: 'Switching to Premier was the best decision for my three-unit building. Occupancy is up, and maintenance costs are down.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150',
  },
];
