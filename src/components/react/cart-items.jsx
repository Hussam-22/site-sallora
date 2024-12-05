import CartProductsCard from "@/components/react/cart-products-card";
import SubmitCartForm from "@/components/react/submit-cart-form";
import useCartStore from "@/stores/cart-store";

export default function CartItems() {
  const cart = useCartStore((state) => state.cart);
  const clearCart = useCartStore((state) => state.clearCart);
  // const cartIDs = cart.map((item) => item.id);
  // const cartProducts = products.filter((product) =>
  //   cartIDs.includes(product.data.id),
  // );

  const totalCartQty = cart.reduce((acc, item) => acc + item.qty, 0);
  const totalCartCost = cart.reduce(
    (acc, item) => acc + item.qty * item.price,
    0,
  );
  // const vatValue = 0.2;
  const totalCostAfterVat = totalCartCost;

  if (cart.length === 0) {
    return <p className="text-center text-xl text-black">Your cart is empty</p>;
  }

  return (
    <div className="grid grid-cols-12 space-x-8">
      <div className="col-span-8">
        <div className="flex flex-col gap-2">
          <div className="flex justify-end">
            <div
              className="flex flex-row gap-4 rounded-3xl bg-red-100 p-2 px-4"
              onClick={clearCart}
            >
              <button className="text-black">Clear Cart</button>
              <img
                src="src/assets/icons/empty-icon.svg"
                alt="minus"
                className="h-6 w-6 cursor-pointer"
                onClick={() => addOne(id)}
              />
            </div>
          </div>
          {cart.map((product) => (
            <CartProductsCard
              key={product.id}
              title={product.title}
              price={product.price}
              imageSrc={product.imageSrc}
              family={product.family}
              link={`/products/${product.link}`}
              qty={cart.find((item) => item.id === product.id).qty}
              id={product.id}
            />
          ))}
        </div>
      </div>

      <div className="col-span-4">
        <div className="flex flex-col gap-4">
          <div className="rounded-3xl bg-green-100 p-6">
            <p className="text-center text-4xl font-semibold text-black">
              Order Summary
            </p>
            <div className="mt-4 flex flex-row items-center justify-center gap-3">
              <p className="text-sm text-zinc-600">Total Items:</p>
              <p className="text-sm font-semibold text-black">{totalCartQty}</p>
            </div>
            <div className="mt-1 flex flex-row items-center justify-center gap-3">
              <p className="text-sm text-zinc-600">Total Cost:</p>
              <p className="text-sm font-semibold text-black">
                {totalCartCost.toFixed(2)}
              </p>
            </div>
            {/* <div className="mt-1 flex flex-row items-center justify-end gap-3">
              <p className="text-sm text-zinc-600">Tax Value</p>
              <p className="text-sm font-semibold text-black">
                {vatValue.toFixed(2) * 100}%
              </p>
            </div> */}
            {/* <hr />
            <div className="mt-2 flex flex-row items-center justify-end gap-3">
              <p className="text-xl text-zinc-600">Total</p>
              <p className="text-xl font-semibold text-black">
                {totalCostAfterVat.toFixed(2)}
              </p>
            </div> */}
          </div>

          <div className="rounded-3xl bg-zinc-100 p-6">
            <SubmitCartForm />
          </div>
        </div>
      </div>
    </div>
  );
}
