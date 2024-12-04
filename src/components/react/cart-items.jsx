import CartProductsCard from "@/components/react/cart-products-card";
import ProductCard from "@/components/ui/cards/ProductCard.astro";
import useCartStore from "@/stores/cart-store";

export default function CartItems({ products }) {
  const cart = useCartStore((state) => state.cart);
  const cartIDs = cart.map((item) => item.id);
  const cartProducts = products.filter((product) =>
    cartIDs.includes(product.data.id),
  );

  console.log(cartProducts);

  return (
    <div class="flex flex-col gap-2">
      {cartProducts.map((product) => (
        <CartProductsCard
          key={product.data.id}
          title={product.data.title}
          price={product.data.price}
          imageSrc={product.data.img}
          family={product.data.family}
          link={`${product.slug.substring(product.slug.indexOf("/") + 1)}`}
          qty={cart.find((item) => item.id === product.data.id).qty}
        />
      ))}
    </div>
  );
}
