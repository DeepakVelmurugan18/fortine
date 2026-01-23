import { products } from '@/lib/data';
import styles from './page.module.css';
import AddToCartButton from '@/components/AddToCartButton';
import Link from 'next/link';

export function generateStaticParams() {
    return products.map((product) => ({
        id: product.id.toString(),
    }));
}

export default async function ProductPage({ params }) {
    const { id } = await params;
    const product = products.find((p) => p.id.toString() === id);

    if (!product) {
        return (
            <div className={styles.container}>
                <h1>Product not found</h1>
            </div>
        );
    }

    // Get related products (same category, excluding current)
    const relatedProducts = products
        .filter(p => p.category === product.category && p.id !== product.id)
        .slice(0, 4);

    return (
        <div className={styles.container}>
            {/* Product Details */}
            <div className={styles.wrapper}>
                <div className={styles.imageContainer}>
                    <img src={product.image} alt={product.name} className={styles.productImage} />
                </div>

                <div className={styles.details}>
                    <span className={styles.category}>{product.category}</span>
                    <h1 className={styles.title}>{product.name}</h1>
                    <div className={styles.rating}>★ {product.rating}</div>
                    <div className={styles.price}>${product.price}</div>

                    <p className={styles.description}>
                        This premium {product.name} is designed to elevate your lifestyle.
                        Crafted with high-quality materials, it offers both durability and style.
                        <br /><br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>

                    <div className={styles.actions}>
                        <div style={{ flex: 1 }}>
                            <AddToCartButton product={product} />
                        </div>
                        <button className={styles.buyNow}>Buy Now</button>
                    </div>
                </div>
            </div>

            {/* Related Suggestions */}
            <div className={styles.relatedSection}>
                <h2 className={styles.relatedTitle}>Related Suggestions</h2>
                <div className={styles.relatedGrid}>
                    {relatedProducts.map((rel) => (
                        <div key={rel.id} className={styles.relatedCard}>
                            <Link href={`/product/${rel.id}`}>
                                <img src={rel.image} alt={rel.name} className={styles.relatedImage} />
                            </Link>
                            <div className={styles.relatedInfo}>
                                <Link href={`/product/${rel.id}`} className={styles.relatedName}>
                                    {rel.name}
                                </Link>
                                <div className={styles.relatedPrice}>${rel.price}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
