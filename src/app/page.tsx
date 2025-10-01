import Header from './(components)/sections/Header';
import Footer from './(components)/sections/Footer';
import HeroSection from './(components)/sections/HeroSection';
import CategoryCard from './(components)/cards/CategoryCard';
import ProductCard from './(components)/cards/ProductCard';
import ReviewCard from './(components)/cards/ReviewCard';
import Carousel from './(components)/Carousel';
import AboutSection from "@/app/(components)/About";
import ProductsSection from "@/app/(components)/sections/ProductsSection";
import CategoriesSection from "@/app/(components)/sections/CategoriesSection";
import ReviewsSection from "@/app/(components)/sections/ReviewsSection";

export default function Home() {
  return (
      <div>
        <Header />

        {/* Hero */}
        <HeroSection />

        {/* categories */}
        <CategoriesSection/>

        {/* Products */}
        <ProductsSection/>

        {/* About */}
        <AboutSection/>

        {/* Reviews */}
        <ReviewsSection/>

        <Footer />
      </div>
  );
}