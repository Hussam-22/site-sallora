import { useEffect, useState } from "react";
import { getImage } from "astro:assets";

export default function CartProductsCard({ title, price, imageSrc, qty }) {
  return (
    <div class="flex flex-row items-center justify-between rounded-3xl bg-zinc-100 px-3 py-2">
      <img
        src={imageSrc.src}
        alt={title}
        class="h-24 w-24 rounded-3xl bg-white object-cover p-1"
      />
      <p class="flex-grow px-4 text-xl text-black">{title}</p>
      <div class="flex flex-row gap-2">
        <p class="border-r-2 border-r-zinc-300 px-2 text-xl text-black">
          {price}
        </p>
        <div class="flex flex-row gap-1">
          <img src="rassets/icons/minus-icon.svg" alt="minus" class="h-6 w-6" />
          <p class="text-xl text-black">x{qty}</p>
        </div>
      </div>
    </div>
  );
}
