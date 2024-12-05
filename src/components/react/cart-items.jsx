import CartProductsCard from "@/components/react/cart-products-card";
import useCartStore from "@/stores/cart-store";

export default function CartItems({ products }) {
  const cart = useCartStore((state) => state.cart);
  const cartIDs = cart.map((item) => item.id);
  const cartProducts = products.filter((product) =>
    cartIDs.includes(product.data.id),
  );

  const totalCartQty = cart.reduce((acc, item) => acc + item.qty, 0);
  const totalCartCost = cart.reduce(
    (acc, item) => acc + item.qty * item.price,
    0,
  );
  const vatValue = 0.2;
  const totalCostAfterVat = totalCartCost * vatValue + totalCartCost;

  if (cartProducts.length === 0) {
    return <p className="text-center text-xl text-black">Your cart is empty</p>;
  }

  return (
    <div className="grid grid-cols-12 space-x-8">
      <div className="col-span-8">
        <div className="flex flex-col gap-2">
          {cartProducts.map((product) => (
            <CartProductsCard
              key={product.data.id}
              title={product.data.title}
              price={product.data.price}
              imageSrc={product.data.img}
              family={product.data.family}
              link={`${product.slug.substring(product.slug.indexOf("/") + 1)}`}
              qty={cart.find((item) => item.id === product.data.id).qty}
              id={product.data.id}
            />
          ))}
        </div>
      </div>

      <div className="col-span-4">
        <div class="flex flex-col gap-4">
          <div className="rounded-3xl bg-green-100 p-6">
            <p className="text-center text-4xl font-semibold text-black">
              Order Summary
            </p>
            <div className="mt-4 flex flex-row items-center justify-end gap-3">
              <p className="text-sm text-zinc-600">Total Items:</p>
              <p className="text-sm font-semibold text-black">{totalCartQty}</p>
            </div>
            <div className="mt-1 flex flex-row items-center justify-end gap-3">
              <p className="text-sm text-zinc-600">Total Cost:</p>
              <p className="text-sm font-semibold text-black">
                {totalCartCost}
              </p>
            </div>
            <div className="mt-1 flex flex-row items-center justify-end gap-3">
              <p className="text-sm text-zinc-600">Tax Value</p>
              <p className="text-sm font-semibold text-black">
                {vatValue * 100}%
              </p>
            </div>
            <hr />
            <div className="mt-2 flex flex-row items-center justify-end gap-3">
              <p className="text-xl text-zinc-600">Total</p>
              <p className="text-xl font-semibold text-black">
                {totalCostAfterVat}
              </p>
            </div>
          </div>

          <div className="rounded-3xl bg-green-100 p-6">
            <p className="text-center text-4xl font-semibold text-black">
              Order Summary
            </p>
            <div className="mt-4 flex flex-row items-center justify-end gap-3">
              <p className="text-sm text-zinc-600">Total Items:</p>
              <p className="text-sm font-semibold text-black">{totalCartQty}</p>
            </div>
            <div className="mt-1 flex flex-row items-center justify-end gap-3">
              <p className="text-sm text-zinc-600">Total Cost:</p>
              <p className="text-sm font-semibold text-black">
                {totalCartCost}
              </p>
            </div>
            <div className="mt-1 flex flex-row items-center justify-end gap-3">
              <p className="text-sm text-zinc-600">Tax Value</p>
              <p className="text-sm font-semibold text-black">
                {vatValue * 100}%
              </p>
            </div>
            <hr />
            <div className="mt-2 flex flex-row items-center justify-end gap-3">
              <p className="text-xl text-zinc-600">Total</p>
              <p className="text-xl font-semibold text-black">
                {totalCostAfterVat}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
