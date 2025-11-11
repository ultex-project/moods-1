import Header from '../../(components)/sections/Header';
import Footer from '../../(components)/sections/Footer';
import ProductGallery from "@/app/products/ProductGallery";
import ProductInfo from "@/app/products/ProductInfo";
import ProductDescription from "@/app/products/ProductDescription";
import ProductReviews from "@/app/products/ProductReviews";
import ProductCard from "@/app/(components)/cards/ProductCard";
import { getProductBySlug, getRelatedProducts } from "@/app/data/products";
import { notFound } from "next/navigation";

interface ProductDetailPageProps {
    params: { slug: string };
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
    const product = getProductBySlug(params.slug);

    if (!product) {
        notFound();
    }

    const relatedProducts = getRelatedProducts(product.slug);

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />

            <main className="flex-grow w-full max-w-6xl mx-auto px-4 md:px-8 lg:px-20 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <ProductGallery images={product.galleryImages} title={product.title} />
                    <ProductInfo product={product} />
                </div>

                <ProductDescription description={product.longDescription} />
                <ProductReviews reviews={product.reviews} />

                {relatedProducts.length > 0 && (
                    <section className="mt-16 border-t border-gray-200 pt-10">
                        <h2 className="text-2xl font-bold text-[#2E4A35] mb-6">You may also like</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {relatedProducts.map((related) => (
                                <ProductCard
                                    key={related.id}
                                    title={related.title}
                                    description={related.description}
                                    image={related.image}
                                    slug={related.slug}
                                    isWide={related.isWide}
                                />
                            ))}
                        </div>
                    </section>
                )}
            </main>

            <Footer />
        </div>
    );
}
