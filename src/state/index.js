import {create} from "zustand";

// Zustand store replacing the previous Redux Toolkit slice.
export const useCartStore = create((set) => ({
  isCartOpen: false,
  cart: [],
  items: [],

  // sets available items (product list)
  setItems: (items) => set(() => ({ items })),

  // add item to cart; expects an item object (with id, price, etc.)
  addToCart: (item) =>
    set((state) => {
      const existing = state.cart.find((i) => i.id === item.id);
      if (existing) {
        return {
          cart: state.cart.map((i) =>
            i.id === item.id ? { ...i, count: (i.count || 1) + 1 } : i
          ),
        };
      }
      return { cart: [...state.cart, { ...item, count: item.count || 1 }] };
    }),

  removeFromCart: (id) =>
    set((state) => ({ cart: state.cart.filter((i) => i.id !== id) })),

  increaseCount: (id) =>
    set((state) => ({
      cart: state.cart.map((i) => (i.id === id ? { ...i, count: (i.count || 1) + 1 } : i)),
    })),

  decreaseCount: (id) =>
    set((state) => ({
      cart: state.cart.map((i) => (i.id === id && i.count > 1 ? { ...i, count: i.count - 1 } : i)),
    })),

  setIsCartOpen: () => set((state) => ({ isCartOpen: !state.isCartOpen })),
}));

// Convenience wrappers so existing imports like `import { addToCart } from "../state"`
// can remain valid and be called directly (without dispatch).
export const setItems = (items) => useCartStore.getState().setItems(items);
export const addToCart = (item) => useCartStore.getState().addToCart(item);
export const removeFromCart = (id) => useCartStore.getState().removeFromCart(id);
export const increaseCount = (id) => useCartStore.getState().increaseCount(id);
export const decreaseCount = (id) => useCartStore.getState().decreaseCount(id);
export const setIsCartOpen = () => useCartStore.getState().setIsCartOpen();

export default useCartStore;
