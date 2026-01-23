import Link from 'next/link';
import { products } from '@/lib/data';
import styles from './page.module.css';

export function generateStaticParams() {
    return [
        { id: 'furniture' },
        { id: 'toys' }
    ];
}

export default async function CategoryPage({ params }) {
    const { id } = await params;

    if (!id) return null;

    // Simple filter logic. In real app, would use database.
    // We need to match case-insensitive or map IDs properly.
    // Our data has "Furniture" and "Toys".
    const categoryName = id.charAt(0).toUpperCase() + id.slice(1);
    const categoryProducts = products.filter(p => p.category.toLowerCase() === id.toLowerCase());

    return (
        <main className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>{categoryName}</h1>
                <p className={styles.subtitle}>{categoryProducts.length} results found</p>
            </header>

            {categoryProducts.length > 0 ? (
                <div className={styles.grid}>
                    {categoryProducts.map((product) => (
                        <div key={product.id} className={styles.card}>
                            <Link href={`/product/${product.id}`}>
                                <img src={product.image} alt={product.name} className={styles.image} />
                            </Link>
                            <div className={styles.info}>
                                <Link href={`/product/${product.id}`}>
                                    <h3 className={styles.name}>{product.name}</h3>
                                </Link>
                                <div className={styles.rating}>★ {product.rating}</div>
                                <div className={styles.priceRow}>
                                    <span className={styles.price}>${product.price}</span>
                                    <button className={styles.btn}>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className={styles.empty}>
                    <p>No products found in this category.</p>
                    <Link href="/" style={{ color: 'var(--primary)', textDecoration: 'underline', marginTop: '1rem', display: 'block' }}>
                        Go back home
                    </Link>
                </div>
            )}
        </main>
    );
}
