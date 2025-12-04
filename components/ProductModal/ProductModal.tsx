'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Textarea,
} from '@heroui/react';
import { toast } from 'react-toastify';
import * as yup from 'yup';

interface ProductData {
  _id?: string;
  name: string;
  price: number;
  stock: number;
  category: string;
  description: string;
  image: string;
}

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product?: ProductData | null;
  onSuccess: () => void;
}

const productSchema = yup.object({
  name: yup.string().required('Name is required'),
  price: yup.number().positive('Price must be greater than 0').required('Price is required'),
  stock: yup.number().min(0, 'Stock cannot be negative').required('Stock is required'),
  category: yup.string().required('Category is required'),
  description: yup.string().required('Description is required'),
});

export default function ProductModal({
  isOpen,
  onClose,
  product,
  onSuccess,
}: ProductModalProps) {
  const t = useTranslations('dashboard');
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState<ProductData>({
    name: '',
    price: 0,
    stock: 0,
    category: '',
    description: '',
    image: '',
  });

  useEffect(() => {
    if (product) {
      setFormData({
        _id: product._id,
        name: product.name,
        price: product.price,
        stock: product.stock,
        category: product.category,
        description: product.description,
        image: product.image,
      });
    } else {
      setFormData({
        name: '',
        price: 0,
        stock: 0,
        category: '',
        description: '',
        image: '',
      });
    }
    setErrors({});
  }, [product, isOpen]);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validar tipo de archivo
    if (!file.type.startsWith('image/')) {
      toast.error('Please select a valid image file');
      return;
    }

    // Validar tamaño (máximo 5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast.error('Image must be less than 5MB');
      return;
    }

    setUploading(true);
    try {
      // Crear FormData para enviar el archivo
      const formData = new FormData();
      formData.append('file', file);

      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData, // Enviamos FormData, no JSON
      });

      if (!res.ok) {
        // Capturar el error específico del servidor
        const errorData = await res.json();
        throw new Error(errorData.error || 'Upload failed');
      }

      const data = await res.json();
      
      if (!data.url) {
        throw new Error('No URL returned from upload');
      }

      setFormData((prev) => ({ ...prev, image: data.url }));
      toast.success('Image uploaded successfully');
    } catch (error) {
      console.error('Upload error:', error);
      toast.error(error instanceof Error ? error.message : 'Error uploading image');
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    setErrors({});

    try {
      await productSchema.validate(formData, { abortEarly: false });

      if (!formData.image) {
        setErrors({ image: 'Image is required' });
        setLoading(false);
        return;
      }

      const url = product?._id ? `/api/products/${product._id}` : '/api/products';
      const method = product?._id ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Error saving product');
      }

      toast.success(product?._id ? t('productUpdated') : t('productCreated'));
      onSuccess();
      onClose();
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        const newErrors: Record<string, string> = {};
        error.inner.forEach((err) => {
          if (err.path) newErrors[err.path] = err.message;
        });
        setErrors(newErrors);
      } else {
        toast.error((error as Error).message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="2xl">
      <ModalContent>
        <ModalHeader>
          {product?._id ? t('editProduct') : t('newProduct')}
        </ModalHeader>
        <ModalBody>
          <div className="flex flex-col gap-4">
            <Input
              label={t('productName')}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              isInvalid={!!errors.name}
              errorMessage={errors.name}
            />
            <div className="grid grid-cols-2 gap-4">
              <Input
                label={t('price')}
                type="number"
                value={formData.price.toString()}
                onChange={(e) =>
                  setFormData({ ...formData, price: parseFloat(e.target.value) || 0 })
                }
                isInvalid={!!errors.price}
                errorMessage={errors.price}
                startContent={<span className="text-default-400">$</span>}
              />
              <Input
                label={t('stock')}
                type="number"
                value={formData.stock.toString()}
                onChange={(e) =>
                  setFormData({ ...formData, stock: parseInt(e.target.value) || 0 })
                }
                isInvalid={!!errors.stock}
                errorMessage={errors.stock}
              />
            </div>
            <Input
              label={t('category')}
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              isInvalid={!!errors.category}
              errorMessage={errors.category}
            />
            <Textarea
              label={t('description')}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              isInvalid={!!errors.description}
              errorMessage={errors.description}
              minRows={3}
            />
            <div>
              <label className="block text-sm font-medium mb-2">{t('image')}</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                disabled={uploading}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100 disabled:opacity-50 disabled:cursor-not-allowed"
              />
              {errors.image && (
                <p className="text-red-500 text-sm mt-1">{errors.image}</p>
              )}
              {formData.image && (
                <img
                  src={formData.image}
                  alt="Preview"
                  className="mt-2 w-32 h-32 object-cover rounded-lg"
                />
              )}
              {uploading && (
                <p className="text-sm text-emerald-600 mt-2">Uploading image...</p>
              )}
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button variant="flat" onPress={onClose}>
            {t('cancel') || 'Cancel'}
          </Button>
          <Button
            color="primary"
            onPress={handleSubmit}
            isLoading={loading}
            isDisabled={uploading}
          >
            {t('save') || 'Save'}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}