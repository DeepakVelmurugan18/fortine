"use client";

import Link from 'next/link';
import styles from './page.module.css';
import { products, categories } from '@/lib/data';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function HomeContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get('search')?.toLowerCase() || '';

  // Filter products based on search query
  const filteredProducts = products.filter(p =>
    p.name.toLowerCase().includes(query) ||
    p.category.toLowerCase().includes(query)
  );

  // If searching, show all matches. If not, just show featured (or all for density demo)
  const displayProducts = query ? filteredProducts : products;

  return (
    <main className={styles.main}>
      {/* Show Hero only if not searching */}
      {!query && (
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1>Elevate Your Living Space</h1>
            <p>Discover our premium collection of modern furniture and delightful toys.</p>
            <button className="btn btn-primary">Shop Now</button>
          </div>
        </section>
      )}

      <div className="container">
        {/* Categories - Hide on search */}
        {!query && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Shop by Category</h2>
            <div className={styles.categoryGrid}>
              {categories.map((cat) => (
                <Link href={`/category/${cat.id}`} key={cat.id} className={styles.categoryCard}>
                  <img src={cat.image} alt={cat.name} className={styles.categoryImage} />
                  <div className={styles.categoryName}>{cat.name}</div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Product Grid */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            {query ? `Search Results for "${query}"` : 'Featured Products'}
          </h2>

          {displayProducts.length > 0 ? (
            <div className={styles.productGrid}>
              {displayProducts.map((product) => (
                <div key={product.id} className={styles.productCard}>
                  <Link href={`/product/${product.id}`}>
                    <img src={product.image} alt={product.name} className={styles.productImage} />
                  </Link>
                  <div className={styles.productInfo}>
                    <span className={styles.productCategory}>{product.category}</span>
                    <Link href={`/product/${product.id}`}>
                      <h3 className={styles.productName}>{product.name}</h3>
                    </Link>
                    <div className={styles.rating}>★ {product.rating}</div>
                    <div className={styles.priceRow}>
                      <span className={styles.price}>${product.price}</span>
                      {/* Simple button for grid, real logic in details */}
                      <Link href={`/product/${product.id}`}>
                        <button className={styles.addToCartBtn}>View</button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--muted)' }}>
              No products found.
            </div>
          )}
        </section>
      </div>
    </main>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomeContent />
    </Suspense>
  );
}
