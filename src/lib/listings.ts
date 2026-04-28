export interface Listing {
  id: string;
  title: string;
  slug: string;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  address: string;
  city: string;
  zip: string;
  image: string;
  description: string;
  amenities: string[];
  type: 'condo' | 'house' | 'apartment';
  featured?: boolean;
}

export const listings: Listing[] = [
  {
    id: '1',
    title: 'Modern Luxury Penthouse',
    slug: 'modern-luxury-penthouse',
    price: 4500,
    beds: 3,
    baths: 2,
    sqft: 1800,
    address: '123 Skyway Ave, Apt 50A',
    city: '[City]',
    zip: '10001',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800',
    description: 'Breathtaking floor-to-ceiling windows with panoramic city views. Features Italian marble counters, designer lighting, and a private balcony.',
    amenities: ['Private Balcony', 'Doorman', 'Gym', 'Pet Friendly', 'In-unit Laundry'],
    type: 'apartment',
    featured: true,
  },
  {
    id: '2',
    title: "Gentleman's Estate in Heights",
    slug: 'gentlemans-estate',
    price: 3200,
    beds: 4,
    baths: 3,
    sqft: 2400,
    address: '742 Evergreen Terrace',
    city: '[City]',
    zip: '10002',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
    description: 'Spacious family home with a large backyard and updated master suite. Perfect for those who value privacy and space.',
    amenities: ['Backyard', 'Garage', 'Fireplace', 'Hardwood Floors'],
    type: 'house',
    featured: true,
  },
  {
    id: '3',
    title: 'Urban Loft at The Battery',
    slug: 'urban-loft-battery',
    price: 2800,
    beds: 1,
    baths: 1.5,
    sqft: 1100,
    address: '45 Battery Park Pl',
    city: '[City]',
    zip: '10003',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=800',
    description: 'Industrial-chic loft with exposed brick walls and 14-foot ceilings. Within walking distance to the park and waterfront.',
    amenities: ['Exposed Brick', 'High Ceilings', 'Rooftop Access', 'Bike Storage'],
    type: 'apartment',
  },
  {
    id: '4',
    title: 'Garden View Townhome',
    slug: 'garden-view-townhome',
    price: 3800,
    beds: 3,
    baths: 2.5,
    sqft: 1650,
    address: '89 Rose Garden Dr',
    city: '[City]',
    zip: '10004',
    image: 'https://images.unsplash.com/photo-1580587767303-941bd174d9f9?auto=format&fit=crop&q=80&w=800',
    description: 'Quiet townhome with a beautiful shared garden space. Modern kitchen with stainless steel appliances.',
    amenities: ['Shared Garden', 'Gated Entry', 'Walk-in Closet', 'Parking Included'],
    type: 'condo',
  },
  {
    id: '5',
    title: 'The Foundry Residence',
    slug: 'the-foundry-residence',
    price: 5200,
    beds: 2,
    baths: 2,
    sqft: 1400,
    address: '10 Forge St',
    city: '[City]',
    zip: '10005',
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=80&w=800',
    description: 'Ultra-modern residence in the heart of the tech district. Intelligent home features included.',
    amenities: ['Smart Home', 'EV Charging', '24/7 Security', 'Infinity Pool'],
    type: 'apartment',
    featured: true,
  },
  {
    id: '6',
    title: 'Cozy Boutique Studio',
    slug: 'cozy-boutique-studio',
    price: 2100,
    beds: 1,
    baths: 1,
    sqft: 650,
    address: '22 Little W 12th St',
    city: '[City]',
    zip: '10006',
    image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=800',
    description: 'Efficient studio space with premium finishes. Ideal for city professionals.',
    amenities: ['Built-in Storage', 'Modern Kitchen', 'Central Heat', 'Wi-Fi Included'],
    type: 'apartment',
  },
];
