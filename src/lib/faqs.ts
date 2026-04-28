export interface FAQ {
  question: string;
  answer: string;
  category: 'owner' | 'tenant';
}

export const faqs: FAQ[] = [
  {
    category: 'owner',
    question: 'How much can I rent my property for?',
    answer: 'We provide a free, comprehensive rental analysis based on current market trends, neighborhood comparables, and the unique features of your property to ensure you maximize your revenue.',
  },
  {
    category: 'owner',
    question: 'How do you screen potential tenants?',
    answer: 'Our rigorous 10-point screening process includes credit checks, criminal background searches, employment verification, and previous landlord references.',
  },
  {
    category: 'owner',
    question: 'What happens if a tenant doesn’t pay rent?',
    answer: 'We handle the entire collections process. If necessary, we manage legal proceedings and evictions, keeping you informed every step of the way while protecting your investment.',
  },
  {
    category: 'owner',
    question: 'How do you handle maintenance requests?',
    answer: 'Tenants submit requests via our 24/7 portal. We coordinate with our network of vetted, insured contractors and only proceed with major repairs after your approval.',
  },
  {
    category: 'tenant',
    question: 'What is the application process?',
    answer: 'You can apply directly through our website. Most applications are processed within 24-48 business hours once all documentation is received.',
  },
  {
    category: 'tenant',
    question: 'How do I pay rent?',
    answer: 'We offer a secure online portal where you can pay via ACH, credit card, or set up automatic recurring payments.',
  },
];
