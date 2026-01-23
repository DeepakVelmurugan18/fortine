"use client";

import { useCart } from '@/context/CartContext';
import styles from './page.module.css';
import Link from 'next/link';

export default function CartPage() {
    const { cart, removeFromCart, updateQuantity, cartCount, cartTotal } = useCart();

    if (cartCount === 0) {
        return (
            <div className={styles.container}>
                <h1 className={styles.title}>Your Cart is empty</h1>
                <Link href="/" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>
                    Continue Shopping
                </Link>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Shopping Cart</h1>

            <div className={styles.content}>
                <div className={styles.items}>
                    {cart.map((item) => (
                        <div key={item.id} className={styles.item}>
                            <img src={item.image} alt={item.name} className={styles.itemImage} />
                            <div className={styles.itemDetails}>
                                <h3 className={styles.itemName}>{item.name}</h3>
                                <div className={styles.itemPrice}>${item.price}</div>
                                <div className={styles.controls}>
                                    <button
                                        className={styles.quantityBtn}
                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                    >
                                        -
                                    </button>
                                    <span className={styles.quantity}>{item.quantity}</span>
                                    <button
                                        className={styles.quantityBtn}
                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                    >
                                        +
                                    </button>
                                    <button
                                        className={styles.removeBtn}
                                        onClick={() => removeFromCart(item.id)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.summary}>
                    <h2 className={styles.summaryTitle}>Subtotal ({cartCount} items):</h2>
                    <div className={`${styles.summaryRow} ${styles.total}`}>
                        <span>Total:</span>
                        <span>${cartTotal.toFixed(2)}</span>
                    </div>
                    <button className={styles.checkoutBtn} onClick={() => alert('Checkout functionality coming soon!')}>
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        </div>
    );
}
