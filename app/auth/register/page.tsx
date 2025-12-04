'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { useTranslations } from 'next-intl';
import { Button, Input, Card, CardBody, Divider } from '@heroui/react';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import { FcGoogle } from 'react-icons/fc';

const registerSchema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

export default function RegisterPage() {
  const t = useTranslations('auth');
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    try {
      await registerSchema.validate(formData, { abortEarly: false });

      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Registration failed');
      }

      toast.success(t('registerSuccess'));

      // Auto login after registration
      await signIn('credentials', {
        email: formData.email,
        password: formData.password,
        redirect: false,
      });

      router.push('/shop');
      router.refresh();
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

  const handleGoogleSignIn = () => {
    signIn('google', { callbackUrl: '/shop' });
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <Card className="w-full max-w-md">
        <CardBody className="p-8">
          <h1 className="text-2xl font-bold text-center text-gray-900 mb-8">
            {t('registerTitle')}
          </h1>

          <Button
            variant="bordered"
            size="lg"
            className="w-full mb-6"
            onPress={handleGoogleSignIn}
            startContent={<FcGoogle size={20} />}
          >
            {t('loginWithGoogle')}
          </Button>

          <Divider className="my-6" />

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="text"
              label={t('name')}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              isInvalid={!!errors.name}
              errorMessage={errors.name}
            />
            <Input
              type="email"
              label={t('email')}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              isInvalid={!!errors.email}
              errorMessage={errors.email}
            />
            <Input
              type="password"
              label={t('password')}
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              isInvalid={!!errors.password}
              errorMessage={errors.password}
            />
            <Button
              type="submit"
              color="primary"
              size="lg"
              className="w-full bg-emerald-500 hover:bg-emerald-600"
              isLoading={loading}
            >
              {t('registerTitle')}
            </Button>
          </form>

          <p className="text-center text-gray-600 mt-6">
            {t('hasAccount')}{' '}
            <Link href="/auth/login" className="text-emerald-500 font-medium hover:underline">
              {t('loginTitle')}
            </Link>
          </p>
        </CardBody>
      </Card>
    </div>
  );
}

