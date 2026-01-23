"use client";

import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import styles from './SignInModal.module.css';

export default function SignInModal({ isOpen, onClose }) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!mounted || !isOpen) return null;

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeBtn} onClick={onClose}>
                    <X size={20} />
                </button>

                <div className={styles.content}>
                    <h2 className={styles.title}>Sign In</h2>

                    <form className={styles.form} onClick={(e) => e.preventDefault()}>
                        <div className={styles.inputGroup}>
                            <label htmlFor="modal-email">Email or mobile phone number</label>
                            <input type="email" id="modal-email" className={styles.input} />
                        </div>
                        <div className={styles.inputGroup}>
                            <label htmlFor="modal-password">Password</label>
                            <input type="password" id="modal-password" className={styles.input} />
                        </div>
                        <button className={styles.signInBtn}>Sign In</button>
                    </form>

                    <div className={styles.divider}>
                        <span>Or</span>
                    </div>

                    <div className={styles.socialButtons}>
                        <button className={styles.socialBtn}>
                            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" width="20" height="20" />
                            Continue with Google
                        </button>
                        <button className={styles.socialBtn}>
                            <img src="https://www.svgrepo.com/show/475640/apple-black.svg" alt="Apple" width="20" height="20" />
                            Continue with Apple
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
