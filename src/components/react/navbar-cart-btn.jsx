import useCartStore from "@/stores/cart-store";

export default function NavBarCartButton() {
  const cart = useCartStore((state) => state.cart);
  const cartLength = cart.reduce((acc, item) => acc + item.qty, 0);

  return (
    <div class="relative border-l-2 pl-3">
      <a href="/cart">
        <img
          src="/src/assets/icons/cart-icon.svg"
          alt="Cart"
          class={`z-20 h-7 w-7 cursor-pointer transition-all ${cart.length === 0 ? "opacity-25" : ""}`}
        />
        {cartLength !== 0 && (
          <span class="text-md absolute -right-1 -top-2 z-10 ml-2 rounded-full bg-green-500 px-1 py-0.5 font-bold text-black">
            {cartLength}
          </span>
        )}
      </a>
    </div>
  );
}
