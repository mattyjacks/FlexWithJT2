"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";

import ListingCard, { type Listing } from "@/components/shop/listing-card";
import SiteNav from "@/components/site-nav";

// Dummy merchandise (using images from /public)
const PRODUCTS: readonly Listing[] = [
  {
    id: "tee-long-sleeve",
    title: "JT Long Sleeve Tee",
    price: 18.29,
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    image: "/Tee.webp",
  },
  {
    id: "zip-hoodie",
    title: "Quarter Zip Pullover",
    price: 21.88,
    sizes: ["S", "M", "L", "XL", "2XL"],
    image: "/Hoodie.webp",
  },
  {
    id: "duffle-bag",
    title: "Duffle bag",
    price: 19.99,
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    image: "/AllOverPrintDuffleBag.png",
  },
  {
    id: "performance-tee",
    title: "Unisex Performance Tee",
    price: 22.0,
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    image: "/Tee.webp",
  },
] as const;

type CartItem = {
  id: string;
  title: string;
  price: number;
  size: string;
  qty: number;
};

export default function ShopePage() {
  const [cart, setCart] = useState<CartItem[]>([]);

  function addToCart(product: Listing, size: string = "M") {
    setCart((prev) => {
      const i = prev.findIndex((c) => c.id === product.id && c.size === size);
      if (i !== -1) {
        const copy = [...prev];
        copy[i] = { ...copy[i], qty: copy[i].qty + 1 };
        return copy;
      }
      return [
        ...prev,
        { id: product.id, title: product.title, price: product.price, size, qty: 1 },
      ];
    });
  }

  function removeFromCart(idx: number) {
    setCart((prev) => prev.filter((_, i) => i !== idx));
  }

  const total = useMemo(() => cart.reduce((sum, i) => sum + i.price * i.qty, 0), [cart]);

  return (
    <main className="min-h-screen bg-background">
      <section id="shop" className="mx-auto max-w-6xl px-6 py-8">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Merchandise</h1>
            <p className="text-sm text-muted-foreground">Click a product to add it to your cart. Default size is M.</p>
          </div>
          <CartSummary cart={cart} total={total} onRemove={removeFromCart} />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {PRODUCTS.map((p) => (
            <ListingCard key={p.id} product={p} onAdd={addToCart} />
          ))}
        </div>
      </section>
    </main>
  );
}

function CartSummary({
  cart,
  total,
  onRemove,
}: {
  cart: CartItem[];
  total: number;
  onRemove: (idx: number) => void;
}) {
  return (
    <div className="w-full max-w-sm rounded-xl border p-4">
      <div className="flex items-center justify-between">
        <div className="font-semibold">Cart</div>
        <div className="text-sm text-muted-foreground">{cart.reduce((n, i) => n + i.qty, 0)} item(s)</div>
      </div>
      {cart.length === 0 ? (
        <p className="mt-2 text-sm text-muted-foreground">Your cart is empty.</p>
      ) : (
        <ul className="mt-3 max-h-44 space-y-2 overflow-auto pr-1 text-sm">
          {cart.map((c, i) => (
            <li key={`${c.id}-${c.size}-${i}`} className="flex items-center justify-between gap-3">
              <span className="truncate">{c.title} · {c.size}</span>
              <span className="tabular-nums">${(c.price * c.qty).toFixed(2)}</span>
              <button className="text-xs underline" onClick={() => onRemove(i)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <div className="mt-3 flex items-center justify-between border-t pt-3 text-sm">
        <span className="font-medium">Total</span>
        <span className="font-semibold tabular-nums">${total.toFixed(2)}</span>
      </div>
    </div>
  );
}
