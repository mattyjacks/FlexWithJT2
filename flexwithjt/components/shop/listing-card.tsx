"use client";

import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export type Listing = {
  id: string;
  title: string;
  price: number;
  sizes: string[];
  image: string; // path under /public or remote URL allowed by next.config
};

export default function ListingCard({
  product,
  onAdd,
}: {
  product: Listing;
  onAdd: (product: Listing, size?: string) => void;
}) {
  return (
    <Card
      className="group cursor-pointer overflow-hidden transition hover:shadow-lg"
      onClick={() => onAdd(product)}
      role="button"
      aria-label={`Add ${product.title} to cart`}
    >
      <CardHeader className="p-0">
        <div className="relative h-48 w-full">
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 100vw"
            className="object-cover"
            priority={false}
          />
          <div className="pointer-events-none absolute inset-0 hidden place-items-center bg-black/40 text-white group-hover:grid">
            <span className="rounded-md bg-primary px-3 py-1 text-sm text-primary-foreground shadow">
              Click to add to cart
            </span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <h3 className="font-medium leading-tight">{product.title}</h3>
        <div className="mt-1 text-sm text-muted-foreground">From ${product.price.toFixed(2)}</div>
        <div className="mt-3 flex flex-wrap gap-1">
          {product.sizes.slice(0, 6).map((s) => (
            <Badge key={s} variant="secondary" className="px-2 py-0 text-xs">
              {s}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between p-4 pt-0">
        <div className="text-sm text-muted-foreground">Default size: M</div>
        <Button
          size="sm"
          onClick={(e) => {
            e.stopPropagation();
            onAdd(product);
          }}
        >
          Add
        </Button>
      </CardFooter>
    </Card>
  );
}
