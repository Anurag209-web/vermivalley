import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Vermi Compost',
    price: 20,
    description: 'High-quality vermi compost for enhanced soil fertility and plant growth. Produced through natural processes using earthworms.',
    image: 'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Fertilizers',
    stock: 500,
    featured: true
  },
  {
    id: '2',
    name: 'Organic Seeds Pack',
    price: 150,
    description: 'Collection of organic, non-GMO vegetable seeds for your home garden or farm.',
    image: 'https://images.pexels.com/photos/8260142/pexels-photo-8260142.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Seeds',
    stock: 100,
    featured: true
  },
  {
    id: '3',
    name: 'Garden Tools Set',
    price: 450,
    description: 'Complete set of essential gardening tools made with high-quality materials.',
    image: 'https://images.pexels.com/photos/2516638/pexels-photo-2516638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Equipment',
    stock: 50,
    featured: false
  },
  {
    id: '4',
    name: 'Organic Pesticide',
    price: 200,
    description: 'Natural pesticide solution that protects plants without harmful chemicals.',
    image: 'https://images.pexels.com/photos/5528994/pexels-photo-5528994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Pesticides',
    stock: 75,
    featured: true
  },
  {
    id: '5',
    name: 'Soil pH Tester',
    price: 350,
    description: 'Accurate soil pH testing kit to ensure optimal growing conditions.',
    image: 'https://images.pexels.com/photos/6231816/pexels-photo-6231816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Equipment',
    stock: 30,
    featured: false
  },
  {
    id: '6',
    name: 'Bio Fertilizer Pack',
    price: 170,
    description: 'Specialized bio fertilizers to enhance crop yield naturally.',
    image: 'https://images.pexels.com/photos/4505169/pexels-photo-4505169.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Fertilizers',
    stock: 120,
    featured: true
  }
];