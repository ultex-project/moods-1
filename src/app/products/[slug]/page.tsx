'use client';

import Header from '../../(components)/sections/Header';
import Footer from '../../(components)/sections/Footer';
import ProductGallery from "@/app/products/ProductGallery";
import ProductInfo from "@/app/products/ProductInfo";
import ProductDescription from "@/app/products/ProductDescription";
import ProductReviews from "@/app/products/ProductReviews";


export default function ProductDetailPage() {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />

            <main className="flex-grow max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left — Image Gallery */}
                    <ProductGallery />

                    {/* Right — Product Info */}
                    <ProductInfo />
                </div>

                {/* Description */}
                <ProductDescription />

                {/* Reviews */}
                <ProductReviews />
            </main>

            <Footer />
        </div>
    );
}
