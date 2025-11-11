'use client';

import type { ComponentProps } from "react";
import ProductCard from "@/app/(components)/cards/ProductCard";

type ProductCardProps = ComponentProps<typeof ProductCard>;

interface ProductGridProps {
    products: ProductCardProps[];
}

export default function ProductGrid({ products }: ProductGridProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {products.map((product) => (
                <ProductCard key={product.slug} {...product} />
            ))}
        </div>
    );
}
