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
        className="h-9 w-9 cursor-pointer rounded-full bg-green-500 p-2 transition-all hover:bg-red-300"
        onClick={() => removeFromCart(product.id)}
      />
    );
  }

  return (
    <img
      src="/src/assets/icons/add-to-cart.svg"
      alt="Add to cart"
      className="h-9 w-9 cursor-pointer rounded-full bg-zinc-200 p-2 transition-all hover:bg-green-300"
      onClick={() => addToCart(product)}
    />
  );
}
