'use client';

import type { ComponentProps } from "react";
import ProductCard from "@/app/(components)/cards/ProductCard";

type ProductCardProps = ComponentProps<typeof ProductCard>;

interface ProductGridProps {
    products: ProductCardProps[];
}

export default function ProductGrid({ products }: ProductGridProps) {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
            {products.map((product) => (
                <ProductCard key={product.slug} {...product} />
            ))}
        </div>
    );
}
