import React, { createContext, useContext, useState, useEffect } from 'react';
import { ProductItem } from '../data/catalog';

export interface CartItem {
  id: string; // unique item id in cart (can include variation)
  productId: string;
  name: string;
  variation?: string;
  customizationNotes?: string;
  dimension?: string;
  image: string;
  unitPrice: number;
  bulkUnitPrice?: number;
  bulkThreshold?: number;
  monthlyUnitPrice?: number;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addItem: (product: ProductItem, variation?: string, customizationNotes?: string, quantity?: number) => void;
  updateQuantity: (id: string, delta: number) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  totalItemsCount: number;
  subtotal: number;
  discount: number;
  totalInitial: number;
  totalMonthly: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const STORAGE_KEY = 'vambora_cart_v1';

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch (e) {
      console.error('Failed to save cart to localStorage', e);
    }
  }, [items]);

  const addItem = (
    product: ProductItem,
    variation?: string,
    customizationNotes?: string,
    quantity = 1
  ) => {
    const cartItemId = `${product.id}-${variation || 'default'}-${customizationNotes ? 'custom' : 'std'}`;

    setItems((prev) => {
      const existing = prev.find((i) => i.id === cartItemId);
      if (existing) {
        return prev.map((i) =>
          i.id === cartItemId ? { ...i, quantity: i.quantity + quantity } : i
        );
      }
      return [
        ...prev,
        {
          id: cartItemId,
          productId: product.id,
          name: product.name,
          variation,
          customizationNotes,
          dimension: product.dimension,
          image: product.image,
          unitPrice: product.numericPrice,
          bulkUnitPrice: product.bulkNumericPrice,
          bulkThreshold: product.bulkThreshold,
          monthlyUnitPrice: product.monthlyNumericPrice || 0,
          quantity,
        },
      ];
    });

    setIsCartOpen(true);
  };

  const updateQuantity = (id: string, delta: number) => {
    setItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null)
    );
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalItemsCount = items.reduce((acc, item) => acc + item.quantity, 0);

  // Calculate pricing with volume discount for eligible items
  let subtotal = 0;
  let totalInitial = 0;
  let totalMonthly = 0;

  items.forEach((item) => {
    const rawPrice = item.unitPrice * item.quantity;
    subtotal += rawPrice;

    // Apply bulk price if quantity reaches threshold
    if (item.bulkThreshold && item.bulkUnitPrice && item.quantity >= item.bulkThreshold) {
      totalInitial += item.bulkUnitPrice * item.quantity;
    } else {
      totalInitial += rawPrice;
    }

    if (item.monthlyUnitPrice) {
      totalMonthly += item.monthlyUnitPrice * item.quantity;
    }
  });

  const discount = Math.max(0, subtotal - totalInitial);

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        updateQuantity,
        removeItem,
        clearCart,
        totalItemsCount,
        subtotal,
        discount,
        totalInitial,
        totalMonthly,
        isCartOpen,
        setIsCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
