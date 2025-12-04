'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Card, CardBody, Button, Input, Textarea } from '@heroui/react';
import { toast } from 'react-toastify';
import * as yup from 'yup';

const productSchema = yup.object({
  name: yup.string().required('Name is required'),
  price: yup.number().positive('Price must be greater than 0').required('Price is required'),
  stock: yup.number().min(0, 'Stock cannot be negative').required('Stock is required'),
  category: yup.string().required('Category is required'),
  description: yup.string().required('Description is required'),
});

export default function NewProductPage() {
  const t = useTranslations('dashboard');
  const tCommon = useTranslations('common');
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    name: '',
    price: 0,
    stock: 0,
    category: '',
    description: '',
    image: '',
  });

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64 = reader.result as string;
        const res = await fetch('/api/upload', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ image: base64 }),
        });

        if (!res.ok) throw new Error('Upload failed');

        const data = await res.json();
        setFormData((prev) => ({ ...prev, image: data.url }));
      };
      reader.readAsDataURL(file);
    } catch (error) {
      toast.error('Error uploading image');
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    try {
      await productSchema.validate(formData, { abortEarly: false });

      if (!formData.image) {
        setErrors({ image: 'Image is required' });
        setLoading(false);
        return;
      }

      const res = await fetch('/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Error creating product');
      }

      toast.success(t('productCreated'));
      router.push('/dashboard/products');
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
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">{t('newProduct')}</h1>

      <Card className="max-w-2xl">
        <CardBody className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
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
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100"
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
                <p className="text-sm text-gray-500 mt-2">Uploading...</p>
              )}
            </div>
            <div className="flex gap-4 pt-4">
              <Button
                type="button"
                variant="flat"
                onPress={() => router.back()}
              >
                {tCommon('cancel')}
              </Button>
              <Button
                type="submit"
                color="primary"
                isLoading={loading}
                isDisabled={uploading}
                className="bg-emerald-500 hover:bg-emerald-600"
              >
                {tCommon('create')}
              </Button>
            </div>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}

