"use client";

import { CartProvider } from "@/context/CartContext";
import { ThemeProvider } from "@/context/ThemeContext";

export function Providers({ children }) {
    return (
        <ThemeProvider>
            <CartProvider>
                {children}
            </CartProvider>
        </ThemeProvider>
    );
}
