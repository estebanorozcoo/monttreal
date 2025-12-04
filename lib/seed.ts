import { connectDB } from './mongodb';
import Product from './models/Product';
import User from './models/User';
import bcrypt from 'bcryptjs';

const sampleProducts = [
  {
    name: 'Camiseta Clásica Blanca',
    price: 29.99,
    stock: 50,
    category: 'Camisetas',
    description: 'Camiseta de algodón premium, perfecta para el día a día. Corte clásico y cómodo.',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500',
  },
  {
    name: 'Jeans Slim Fit',
    price: 59.99,
    stock: 30,
    category: 'Pantalones',
    description: 'Jeans de mezclilla de alta calidad con corte slim fit. Versátil y moderno.',
    image: 'https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?w=500',
  },
  {
    name: 'Sudadera con Capucha',
    price: 49.99,
    stock: 25,
    category: 'Sudaderas',
    description: 'Sudadera cómoda y cálida con capucha. Ideal para los días fríos.',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500',
  },
  {
    name: 'Vestido Elegante Negro',
    price: 79.99,
    stock: 20,
    category: 'Vestidos',
    description: 'Vestido negro elegante para ocasiones especiales. Diseño sofisticado.',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500',
  },
  {
    name: 'Chaqueta de Cuero',
    price: 129.99,
    stock: 15,
    category: 'Chaquetas',
    description: 'Chaqueta de cuero sintético de alta calidad. Estilo clásico y atemporal.',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500',
  },
  {
    name: 'Polo Verde Esmeralda',
    price: 39.99,
    stock: 35,
    category: 'Polos',
    description: 'Polo de algodón piqué en color verde esmeralda. Elegante y casual.',
    image: 'https://images.unsplash.com/photo-1625910513413-5fc421e0a8f2?w=500',
  },
  {
    name: 'Falda Plisada',
    price: 45.99,
    stock: 22,
    category: 'Faldas',
    description: 'Falda plisada de longitud media. Perfecta para cualquier ocasión.',
    image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0uj9?w=500',
  },
  {
    name: 'Camisa de Lino',
    price: 54.99,
    stock: 28,
    category: 'Camisas',
    description: 'Camisa de lino fresca y transpirable. Ideal para el verano.',
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500',
  },
];

export async function seedDatabase() {
  try {
    await connectDB();

    // Clear existing data
    await Product.deleteMany({});

    // Seed products
    await Product.insertMany(sampleProducts);

    // Create admin user if not exists
    const adminExists = await User.findOne({ email: 'admin@monttreal.com' });
    if (!adminExists) {
      const hashedPassword = await bcrypt.hash('admin123', 12);
      await User.create({
        name: 'Admin',
        email: 'admin@monttreal.com',
        password: hashedPassword,
        role: 'admin',
      });
    }

    console.log('Database seeded successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
  }
}

