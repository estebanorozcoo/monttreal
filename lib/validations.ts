import * as yup from 'yup';

export const registerSchema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

export const loginSchema = yup.object({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().required('Password is required'),
});

export const productSchema = yup.object({
  name: yup.string().required('Name is required'),
  price: yup.number().positive('Price must be greater than 0').required('Price is required'),
  stock: yup.number().min(0, 'Stock cannot be negative').required('Stock is required'),
  category: yup.string().required('Category is required'),
  description: yup.string().required('Description is required'),
  image: yup.string().required('Image is required'),
});

export type RegisterInput = yup.InferType<typeof registerSchema>;
export type LoginInput = yup.InferType<typeof loginSchema>;
export type ProductInput = yup.InferType<typeof productSchema>;

