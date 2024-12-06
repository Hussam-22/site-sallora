import useCartStore from "@/stores/cart-store";

export default function NavBarCartButton() {
  const cart = useCartStore((state) => state.cart);
  const cartLength = cart.reduce((acc, item) => acc + item.qty, 0);

  if (cartLength === 0) {
    return (
      <div className="relative border-l-2 pl-3">
        <img
          src="/src/assets/icons/cart-icon.svg"
          alt="Cart"
          className="z-20 h-7 w-7 opacity-25 transition-all"
        />
      </div>
    );
  }

  return (
    <div className="relative border-l-2 pl-3">
      <a href="/cart">
        <img
          src="/src/assets/icons/cart-icon.svg"
          alt="Cart"
          className={`z-20 h-7 w-7 cursor-pointer transition-all ${cart.length === 0 ? "opacity-25" : ""}`}
        />

        <span className="text-md absolute -right-1 -top-2 z-10 ml-2 rounded-full bg-primary px-1 py-0.5 font-bold text-white">
          {cartLength}
        </span>
      </a>
    </div>
  );
}
