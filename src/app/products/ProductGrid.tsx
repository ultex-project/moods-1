'use client';



import ProductCard from "@/app/(components)/cards/ProductCard";

const products = [
    {
        id: 1,
        title: "Olive Oil",
        description: "Traditional Moroccan food store products include staples",
        image: "/products/product-1.png",
        slug: "olive-oil-1",
        isWide: true // ← Tall product
    },
    {
        id: 2,
        title: "Olive Oil",
        description: "Traditional Moroccan food store products include staples",
        image: "/products/product-2.png",
        slug: "olive-oil-2",
        isWide: true // ← Wide product (with bread)
    },
    {
        id: 3,
        title: "Olive Oil",
        description: "Traditional Moroccan food store products include staples",
        image: "/products/product-3.png",
        slug: "olive-oil-3",
        isWide: false // ← Tall product
    },
    {
        id: 4,
        title: "Olive Oil",
        description: "Traditional Moroccan food store products include staples",
        image: "/products/product-4.png",
        slug: "olive-oil-4",
        isWide: false // ← Tall product
    },
    {
        id: 5,
        title: "Olive Oil",
        description: "Traditional Moroccan food store products include staples",
        image: "/products/product-1.png",
        slug: "olive-oil-5",
        isWide: true // ← Tall product
    },
    {
        id: 6,
        title: "Olive Oil",
        description: "Traditional Moroccan food store products include staples",
        image: "/products/product-2.png",
        slug: "olive-oil-6",
        isWide: true // ← Wide product (with bread)
    },
    {
        id: 7,
        title: "Olive Oil",
        description: "Traditional Moroccan food store products include staples",
        image: "/products/product-3.png",
        slug: "olive-oil-7",
        isWide: false // ← Tall product
    },
    {
        id: 8,
        title: "Olive Oil",
        description: "Traditional Moroccan food store products include staples",
        image: "/products/product-4.png",
        slug: "olive-oil-8",
        isWide: false // ← Tall product
    }
];

export default function ProductGrid() {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
            {products.map((product, index) => (
                <ProductCard key={index} {...product} />
            ))}
        </div>
    );
}
