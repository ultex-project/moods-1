import Header from '../(components)/sections/Header';
import Footer from '../(components)/sections/Footer';

export default function CategoriesPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow flex items-center justify-center py-16 px-4">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-moods-green mb-4">Categories Page</h1>
                    <p className="text-xl text-gray-600">Coming soon...</p>
                </div>
            </main>
            <Footer />
        </div>
    );
}