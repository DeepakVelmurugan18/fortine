"use client";

import { useCart } from '@/context/CartContext';
import styles from './AddToCartButton.module.css';

export default function AddToCartButton({ product }) {
    const { addToCart } = useCart();

    return (
        <button
            className={styles.button}
            onClick={() => {
                addToCart(product);
                alert('Added to cart!');
            }}
        >
            Add to Cart
        </button>
    );
}
