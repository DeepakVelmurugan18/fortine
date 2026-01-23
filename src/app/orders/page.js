import Link from 'next/link';
import { products } from '@/lib/data';
import styles from './page.module.css';

export const metadata = {
    title: "Your Orders | Fortine",
};

export default function OrdersPage() {
    // Mock orders
    const orders = [
        {
            id: '114-1234567-8901234',
            date: 'January 20, 2024',
            total: 949.98,
            status: 'Delivered',
            items: [products[0], products[3]] // Sofa and RC Car
        }
    ];

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Your Orders</h1>

            <div className={styles.controls}>
                <span>3 orders placed in</span>
                <select className={styles.select}>
                    <option>last 3 months</option>
                    <option>2023</option>
                </select>
            </div>

            <div className={styles.ordersList}>
                {orders.map((order) => (
                    <div key={order.id} className={styles.orderCard}>
                        <div className={styles.orderHeader}>
                            <div className={styles.headerGroup}>
                                <span className={styles.label}>ORDER PLACED</span>
                                <span className={styles.value}>{order.date}</span>
                            </div>
                            <div className={styles.headerGroup}>
                                <span className={styles.label}>TOTAL</span>
                                <span className={styles.value}>${order.total}</span>
                            </div>
                            <div className={styles.headerGroup}>
                                <span className={styles.label}>SHIP TO</span>
                                <span className={styles.link}>Deepak</span>
                            </div>
                            <div className={`${styles.headerGroup} ${styles.orderId}`}>
                                <span className={styles.label}>ORDER # {order.id}</span>
                                <div className={styles.links}>
                                    <Link href="#" className={styles.link}>View order details</Link>
                                    <div className={styles.separator}>|</div>
                                    <Link href="#" className={styles.link}>Invoice</Link>
                                </div>
                            </div>
                        </div>

                        <div className={styles.orderBody}>
                            <h2 className={styles.deliveryStatus}>{order.status} yesterday</h2>

                            <div className={styles.items}>
                                {order.items.map((item) => (
                                    <div key={item.id} className={styles.item}>
                                        <img src={item.image} alt={item.name} className={styles.itemImage} />
                                        <div className={styles.itemInfo}>
                                            <Link href={`/product/${item.id}`} className={styles.itemName}>{item.name}</Link>
                                            <button className={styles.buyAgainBtn}>
                                                <span className={styles.buyAgainIcon}>↻</span> Buy it again
                                            </button>
                                        </div>
                                        <div className={styles.itemActions}>
                                            <button className={styles.actionBtn}>Track package</button>
                                            <button className={styles.actionBtn}>Return or replace items</button>
                                            <button className={styles.actionBtn}>Share gift receipt</button>
                                            <button className={`${styles.actionBtn} ${styles.feedbackBtn}`}>Write a product review</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
