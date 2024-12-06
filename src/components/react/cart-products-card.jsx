import useCartStore from "@/stores/cart-store";

export default function CartProductsCard({
  title,
  price,
  imageSrc,
  qty,
  id,
  family,
}) {
  const addOne = useCartStore((state) => state.addOne);
  const removeOne = useCartStore((state) => state.removeOne);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  return (
    <div className="flex flex-col justify-between gap-4 rounded-3xl bg-white px-3 py-2 sm:flex-row sm:items-center">
      <div class="flex flex-row items-center justify-start">
        <img
          src={imageSrc.src}
          alt={title}
          className="h-24 w-24 rounded-3xl bg-white object-cover p-1"
        />
        <div className="flex-grow px-4">
          <p className="text-xl text-black">{title}</p>
          <p className="text-xs text-zinc-600">{family.join(" - ")}</p>
        </div>
      </div>
      <div className="flex flex-row justify-center gap-2">
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
