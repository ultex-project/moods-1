export type ProductCategory = 'Oils' | 'Spices' | 'Preserves' | 'Sweets';

export interface ProductReview {
    name: string;
    content: string;
    rating: number;
}

export interface ProductRecord {
    id: number;
    title: string;
    description: string;
    longDescription: string;
    image: string;
    slug: string;
    category: ProductCategory;
    price: number;
    compareAtPrice?: number;
    isWide?: boolean;
    galleryImages: string[];
    reviews: ProductReview[];
}

const PLACEHOLDER_DESCRIPTION =
    'Traditional Moroccan specialties crafted with heritage techniques. Each jar is prepared in small batches using ingredients sourced from trusted farms.';

const PLACEHOLDER_LONG_DESCRIPTION =
    'Traditional foods carry cultural identity, history, and customs, acting as a link to heritage passed down through generations. Every product in the MODS collection is thoughtfully curated to showcase Moroccan terroir—from fragrant oils to artisan preserves.';

export const PRODUCTS: ProductRecord[] = [
    {
        id: 1,
        title: "Heritage Extra Virgin Olive Oil",
        description: "Cold-pressed Arbequina olives for a bright, peppery finish.",
        longDescription: PLACEHOLDER_LONG_DESCRIPTION,
        image: "/products/product-1.png",
        slug: "heritage-extra-virgin-olive-oil",
        category: "Oils",
        price: 24,
        compareAtPrice: 29,
        isWide: true,
        galleryImages: ["/products/product-1.png", "/products/product-2.png", "/products/product-3.png"],
        reviews: [
            { name: "Sabrina", content: PLACEHOLDER_DESCRIPTION, rating: 5 },
            { name: "Hassan", content: "Velvety texture that elevates every salad and dip.", rating: 4 },
        ],
    },
    {
        id: 2,
        title: "Citrus Infused Olive Oil",
        description: "Sun-dried lemon peels macerated with Moroccan olives.",
        longDescription: PLACEHOLDER_LONG_DESCRIPTION,
        image: "/products/product-2.png",
        slug: "citrus-infused-olive-oil",
        category: "Oils",
        price: 28,
        isWide: true,
        galleryImages: ["/products/product-2.png", "/products/product-1.png", "/products/product-3.png"],
        reviews: [{ name: "Nada", content: "Bright citrus that pairs beautifully with seafood.", rating: 5 }],
    },
    {
        id: 3,
        title: "Smoked Paprika Rub",
        description: "Earthy paprika smoked over olive wood, ideal for grills.",
        longDescription: PLACEHOLDER_LONG_DESCRIPTION,
        image: "/products/product-3.png",
        slug: "smoked-paprika-rub",
        category: "Spices",
        price: 14,
        galleryImages: ["/products/product-3.png", "/products/product-4.png", "/products/product-1.png"],
        reviews: [{ name: "Youssef", content: "Adds deep warmth to roasted vegetables.", rating: 5 }],
    },
    {
        id: 4,
        title: "Ras El Hanout Signature Blend",
        description: "Thirty aromatic spices for tagines and stews.",
        longDescription: PLACEHOLDER_LONG_DESCRIPTION,
        image: "/products/product-4.png",
        slug: "ras-el-hanout-signature-blend",
        category: "Spices",
        price: 18,
        galleryImages: ["/products/product-4.png", "/products/product-3.png", "/products/product-2.png"],
        reviews: [{ name: "Mouna", content: "Authentic flavor reminiscent of Marrakech souks.", rating: 5 }],
    },
    {
        id: 5,
        title: "Cedar Barrel Preserved Lemons",
        description: "Briny citrus with floral notes from cedar aging.",
        longDescription: PLACEHOLDER_LONG_DESCRIPTION,
        image: "/products/product-1.png",
        slug: "cedar-barrel-preserved-lemons",
        category: "Preserves",
        price: 16,
        isWide: true,
        galleryImages: ["/products/product-1.png", "/products/product-4.png", "/products/product-2.png"],
        reviews: [{ name: "Karim", content: "Transforms couscous and roasted chicken instantly.", rating: 4 }],
    },
    {
        id: 6,
        title: "Honey Glazed Almonds",
        description: "Roasted almonds lacquered with wildflower honey.",
        longDescription: PLACEHOLDER_LONG_DESCRIPTION,
        image: "/products/product-2.png",
        slug: "honey-glazed-almonds",
        category: "Sweets",
        price: 22,
        isWide: true,
        galleryImages: ["/products/product-2.png", "/products/product-1.png", "/products/product-3.png"],
        reviews: [{ name: "Layla", content: "Perfect balance of crunch and sweetness.", rating: 5 }],
    },
    {
        id: 7,
        title: "Fig & Orange Confit",
        description: "Slow-cooked figs folded with Seville orange zest.",
        longDescription: PLACEHOLDER_LONG_DESCRIPTION,
        image: "/products/product-3.png",
        slug: "fig-and-orange-confit",
        category: "Preserves",
        price: 19,
        galleryImages: ["/products/product-3.png", "/products/product-1.png", "/products/product-4.png"],
        reviews: [{ name: "Omar", content: "Pairs wonderfully with goat cheese.", rating: 5 }],
    },
    {
        id: 8,
        title: "Atlas Mountain Honey",
        description: "Raw, unfiltered honey with thyme and cedar notes.",
        longDescription: PLACEHOLDER_LONG_DESCRIPTION,
        image: "/products/product-4.png",
        slug: "atlas-mountain-honey",
        category: "Sweets",
        price: 26,
        galleryImages: ["/products/product-4.png", "/products/product-2.png", "/products/product-1.png"],
        reviews: [{ name: "Sara", content: "Fragrant and complex honey for tea ceremonies.", rating: 5 }],
    },
    {
        id: 9,
        title: "Stone-Milled Tahini",
        description: "Single-origin sesame paste with velvety texture.",
        longDescription: PLACEHOLDER_LONG_DESCRIPTION,
        image: "/products/product-1.png",
        slug: "stone-milled-tahini",
        category: "Preserves",
        price: 17,
        isWide: true,
        galleryImages: ["/products/product-1.png", "/products/product-2.png", "/products/product-3.png"],
        reviews: [{ name: "Yasmine", content: "Creamy tahini ideal for halva and dressings.", rating: 4 }],
    },
    {
        id: 10,
        title: "Chili Harissa Paste",
        description: "Fermented chili blend with garlic and cumin heat.",
        longDescription: PLACEHOLDER_LONG_DESCRIPTION,
        image: "/products/product-2.png",
        slug: "chili-harissa-paste",
        category: "Spices",
        price: 15,
        isWide: true,
        galleryImages: ["/products/product-2.png", "/products/product-3.png", "/products/product-4.png"],
        reviews: [{ name: "Samir", content: "Fiery spread with deep complexity.", rating: 5 }],
    },
    {
        id: 11,
        title: "Truffle Olive Oil Drizzle",
        description: "Luxurious argan-truffle infusion for finishing dishes.",
        longDescription: PLACEHOLDER_LONG_DESCRIPTION,
        image: "/products/product-3.png",
        slug: "truffle-olive-oil-drizzle",
        category: "Oils",
        price: 34,
        galleryImages: ["/products/product-3.png", "/products/product-1.png", "/products/product-2.png"],
        reviews: [{ name: "Nadia", content: "Elevates risotto with earthy elegance.", rating: 5 }],
    },
    {
        id: 12,
        title: "Candied Orange Peels",
        description: "Tender peel ribbons dusted in vanilla sugar.",
        longDescription: PLACEHOLDER_LONG_DESCRIPTION,
        image: "/products/product-4.png",
        slug: "candied-orange-peels",
        category: "Sweets",
        price: 12,
        galleryImages: ["/products/product-4.png", "/products/product-1.png", "/products/product-2.png"],
        reviews: [{ name: "Imane", content: "Bright citrus snack perfect with tea.", rating: 4 }],
    },
    {
        id: 13,
        title: "Smoked Sea Salt Flakes",
        description: "Atlantic salt cold-smoked for cocktails and roasts.",
        longDescription: PLACEHOLDER_LONG_DESCRIPTION,
        image: "/products/product-1.png",
        slug: "smoked-sea-salt-flakes",
        category: "Spices",
        price: 11,
        isWide: true,
        galleryImages: ["/products/product-1.png", "/products/product-3.png", "/products/product-4.png"],
        reviews: [{ name: "Laila", content: "Adds subtle smokiness to steaks.", rating: 4 }],
    },
    {
        id: 14,
        title: "Cedarwood Date Spread",
        description: "Medjool dates whipped with cedar-aged syrup.",
        longDescription: PLACEHOLDER_LONG_DESCRIPTION,
        image: "/products/product-2.png",
        slug: "cedarwood-date-spread",
        category: "Sweets",
        price: 20,
        isWide: true,
        galleryImages: ["/products/product-2.png", "/products/product-1.png", "/products/product-4.png"],
        reviews: [{ name: "Othmane", content: "Luxurious spread for breakfast breads.", rating: 5 }],
    },
    {
        id: 15,
        title: "Heritage Olive Tapenade",
        description: "Picholine olives mashed with capers and herbs.",
        longDescription: PLACEHOLDER_LONG_DESCRIPTION,
        image: "/products/product-3.png",
        slug: "heritage-olive-tapenade",
        category: "Preserves",
        price: 21,
        galleryImages: ["/products/product-3.png", "/products/product-2.png", "/products/product-1.png"],
        reviews: [{ name: "Basma", content: "Savory spread for canapés.", rating: 5 }],
    },
    {
        id: 16,
        title: "Spiced Date Syrup",
        description: "Slow-reduced date nectar with cardamom and clove.",
        longDescription: PLACEHOLDER_LONG_DESCRIPTION,
        image: "/products/product-4.png",
        slug: "spiced-date-syrup",
        category: "Sweets",
        price: 18,
        galleryImages: ["/products/product-4.png", "/products/product-3.png", "/products/product-2.png"],
        reviews: [{ name: "Rania", content: "Perfect drizzle for pancakes and yogurt.", rating: 5 }],
    },
];

export function getProducts(): ProductRecord[] {
    return PRODUCTS;
}

export function getProductBySlug(slug: string): ProductRecord | undefined {
    return PRODUCTS.find((product) => product.slug === slug);
}

export function getRelatedProducts(slug: string, count = 3): ProductRecord[] {
    const product = getProductBySlug(slug);
    if (!product) return [];
    return PRODUCTS.filter(
        (candidate) => candidate.slug !== slug && candidate.category === product.category
    ).slice(0, count);
}
