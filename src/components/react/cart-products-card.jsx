import useCartStore from "@/stores/cart-store";

export default function CartProductsCard({ title, price, imageSrc, qty, id }) {
  const addOne = useCartStore((state) => state.addOne);
  const removeOne = useCartStore((state) => state.removeOne);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  return (
    <div className="flex flex-row items-center justify-between rounded-3xl bg-zinc-100 px-3 py-2">
      <img
        src={imageSrc.src}
        alt={title}
        className="h-24 w-24 rounded-3xl bg-white object-cover p-1"
      />
      <p className="flex-grow px-4 text-xl text-black">{title}</p>
      <div className="flex flex-row gap-2">
        <p className="border-r-2 border-r-zinc-300 px-2 text-xl text-black">
          {price * qty} €
        </p>
        <div className="flex flex-row items-center gap-2">
          <img
            src="src/assets/icons/minus-icon.svg"
            alt="minus"
            className="h-6 w-6 cursor-pointer"
            onClick={() => removeOne(id)}
          />
          <p className="text-xl font-bold text-black">x{qty}</p>
          <img
            src="src/assets/icons/plus-icon.svg"
            alt="minus"
            className="h-6 w-6 cursor-pointer"
            onClick={() => addOne(id)}
          />
        </div>
        <div className="border-l-2 border-l-zinc-300 px-2">
          <img
            src="src/assets/icons/trash-icon.svg"
            alt="trash"
            className="h-7 w-7 cursor-pointer"
            onClick={() => removeFromCart(id)}
          />
        </div>
      </div>
    </div>
  );
}
