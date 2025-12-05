'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
  useDisclosure,
} from '@heroui/react';
import { toast } from 'react-toastify';
import { FiEdit, FiTrash2, FiPlus } from 'react-icons/fi';
import ProductModal from '@/components/productmodal';

interface Product {
  _id: string;
  name: string;
  price: number;
  stock: number;
  category: string;
  description: string;
  image: string;
}

export default function ProductsPage() {
  const t = useTranslations('dashboard');
  const tCommon = useTranslations('common');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const fetchProducts = async () => {
    try {
      const res = await fetch('/api/products');
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      toast.error('Error fetching products');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleEdit = (product: Product) => {
    setSelectedProduct(product);
    onOpen();
  };

  const handleCreate = () => {
    setSelectedProduct(null);
    onOpen();
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this product?')) return;

    try {
      const res = await fetch(`/api/products/${id}`, {
        method: 'DELETE',
      });

      if (!res.ok) throw new Error('Failed to delete');

      toast.success(t('productDeleted'));
      fetchProducts();
    } catch (error) {
      toast.error('Error deleting product');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">{tCommon('products')}</h1>
        <Button
          color="primary"
          startContent={<FiPlus />}
          onPress={handleCreate}
          className="bg-emerald-500 hover:bg-emerald-600"
        >
          {t('newProduct')}
        </Button>
      </div>

      <Table aria-label="Products table">
        <TableHeader>
          <TableColumn>{t('productName')}</TableColumn>
          <TableColumn>{t('price')}</TableColumn>
          <TableColumn>{t('stock')}</TableColumn>
          <TableColumn>{t('category')}</TableColumn>
          <TableColumn>Actions</TableColumn>
        </TableHeader>
        <TableBody
          isLoading={loading}
          emptyContent="No products found"
          items={products}
        >
          {(product) => (
            <TableRow key={product._id}>
              <TableCell>{product.name}</TableCell>
              <TableCell>${product.price.toFixed(2)}</TableCell>
              <TableCell>{product.stock}</TableCell>
              <TableCell>{product.category}</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="flat"
                    isIconOnly
                    onPress={() => handleEdit(product)}
                  >
                    <FiEdit />
                  </Button>
                  <Button
                    size="sm"
                    variant="flat"
                    color="danger"
                    isIconOnly
                    onPress={() => handleDelete(product._id)}
                  >
                    <FiTrash2 />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      <ProductModal
        isOpen={isOpen}
        onClose={onClose}
        product={selectedProduct}
        onSuccess={fetchProducts}
      />
    </div>
  );
}

