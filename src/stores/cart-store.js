import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCartStore = create(
  persist(
    (set) => ({
      cart: [],
      addToCart: (item) =>
        set((state) => ({
          cart: [...state.cart, { ...item, qty: item.qty ? item.qty + 1 : 1 }],
        })),
      removeFromCart: (id) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== id),
        })),
      clearCart: () => set({ cart: [] }),
      addOne: (id) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === id ? { ...item, qty: item.qty + 1 } : item,
          ),
        })),
      removeOne: (id) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === id
              ? { ...item, qty: item.qty !== 1 ? item.qty - 1 : 1 }
              : item,
          ),
        })),
    }),
    {
      name: "cart-storage", // Key for localStorage
    },
  ),
);

export default useCartStore;
