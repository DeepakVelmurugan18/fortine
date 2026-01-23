"use client";

import Link from 'next/link';
import { Search, ShoppingCart, User, Sun, Moon, ChevronDown, UserCircle } from 'lucide-react';
import styles from './Navbar.module.css';
import { useCart } from '@/context/CartContext';
import { useTheme } from '@/context/ThemeContext';
import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import SignInModal from './SignInModal';

export default function Navbar() {
    const { cartCount } = useCart();
    const { theme, toggleTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const router = useRouter();
    const searchParams = useSearchParams();

    useEffect(() => {
        setMounted(true);
        // Sync local state with URL param on load/change
        const query = searchParams.get('search');
        if (query) {
            setSearchQuery(query);
        }
    }, [searchParams]);

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            router.push(`/?search=${encodeURIComponent(searchQuery)}`);
        } else {
            router.push('/');
        }
    };

    return (
        <>
            <nav className={styles.navbar}>
                <div className={styles.inner}>
                    <Link href="/" className={styles.logo}>
                        Fortine
                    </Link>

                    {/* Search Bar */}
                    <form className={styles.searchContainer} onSubmit={handleSearch}>
                        <input
                            type="text"
                            placeholder="Search for furniture, toys..."
                            className={styles.searchInput}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button type="submit" className={styles.searchButton}>
                            <Search size={20} />
                        </button>
                    </form>

                    <div className={styles.navLinks}>
                        {/* Theme Toggle */}
                        {mounted && (
                            <button onClick={toggleTheme} className={styles.themeBtn} aria-label="Toggle Theme">
                                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                            </button>
                        )}

                        {/* Account Dropdown - "Hello User" removed */}
                        <div className={styles.navItem}>
                            <div className={styles.navValue}>
                                <UserCircle size={28} /> {/* Increased size slightly */}
                            </div>

                            <div className={styles.dropdown}>
                                <div className={styles.dropdownTitle}>Your Account</div>
                                <Link href="/orders" className={styles.dropdownLink}>Your Orders</Link>
                                <Link href="#" className={styles.dropdownLink}>Your Wish List</Link>
                                <Link href="#" className={styles.dropdownLink}>Account Settings</Link>
                                <Link href="#" className={styles.dropdownLink}>Fortine Prime</Link>
                            </div>
                        </div>

                        {/* Cart */}
                        <Link href="/cart" className={styles.iconButton}>
                            <div style={{ position: 'relative' }}>
                                <ShoppingCart size={26} />
                                <span className={styles.badge}>{mounted ? cartCount : 0}</span>
                            </div>
                            <div className={styles.navItem} style={{ padding: 0 }}>
                                {/* Removed extra padding/text structure to align better */}
                            </div>
                        </Link>

                        {/* Sign In Button - Opens Modal */}
                        <button className={styles.signInBtn} onClick={() => setIsModalOpen(true)}>
                            Sign In
                        </button>
                    </div>
                </div>
            </nav>

            {/* Sign In Modal */}
            <SignInModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
}
