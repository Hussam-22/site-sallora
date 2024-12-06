import useCartStore from "@/stores/cart-store";

export default function QuickAddRemoveCartButton({ product }) {
  const cart = useCartStore((state) => state.cart);
  const addToCart = useCartStore((state) => state.addToCart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  if (cart.find((item) => item.id === product.id)) {
    return (
      <img
        src="/src/assets/icons/remove-from-cart.svg"
        alt="Remove from cart"
        className="bg-error h-12 w-12 cursor-pointer rounded-full p-2 transition-all hover:bg-red-300"
        onClick={() => removeFromCart(product.id)}
      />
    );
  }

  return (
    <img
      src="/src/assets/icons/add-to-cart.svg"
      alt="Add to cart"
      className="h-12 w-12 cursor-pointer rounded-full bg-primary p-2 transition-all hover:bg-zinc-700"
      onClick={() => addToCart(product)}
    />
  );
}
