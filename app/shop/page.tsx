import { getTranslations } from 'next-intl/server';
import { connectDB } from '@/lib/mongodb';
import Product from '@/lib/models/Product';
import ProductCard from '@/components/ProductCard';
import ShopFilters from './ShopFilters';
import Pagination from './Pagination';

interface SearchParams {
  search?: string;
  category?: string;
  page?: string;
}

const ITEMS_PER_PAGE = 8;

async function getProducts(searchParams: SearchParams) {
  await connectDB();

  const { search, category, page = '1' } = searchParams;
  const currentPage = parseInt(page);
  const skip = (currentPage - 1) * ITEMS_PER_PAGE;

  const query: Record<string, unknown> = {};

  if (search) {
    query.name = { $regex: search, $options: 'i' };
  }

  if (category && category !== 'all') {
    query.category = category;
  }

  const [products, total, categories] = await Promise.all([
    Product.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(ITEMS_PER_PAGE)
      .lean(),
    Product.countDocuments(query),
    Product.distinct('category'),
  ]);

  return {
    products: JSON.parse(JSON.stringify(products)),
    total,
    totalPages: Math.ceil(total / ITEMS_PER_PAGE),
    currentPage,
    categories,
  };
}

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const params = await searchParams;
  const t = await getTranslations('shop');
  const { products, totalPages, currentPage, categories } = await getProducts(params);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">{t('title')}</h1>

      <ShopFilters
        categories={categories}
        currentCategory={params.category}
        currentSearch={params.search}
      />

      {products.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-gray-500 text-lg">{t('noProducts')}</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {products.map((product: { _id: string; name: string; price: number; image: string; stock: number }) => (
              <ProductCard
                key={product._id}
                id={product._id}
                name={product.name}
                price={product.price}
                image={product.image}
                stock={product.stock}
              />
            ))}
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            searchParams={params}
          />
        </>
      )}
    </div>
  );
}

