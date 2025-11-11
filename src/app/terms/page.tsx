import Header from '../(components)/sections/Header';
import Footer from '../(components)/sections/Footer';

export default function TermsPage() {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />
            <main className="flex-grow w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-12 py-16 space-y-6 text-center md:text-left">
                <p className="text-sm tracking-wide uppercase text-[#D4A76A]">Policies</p>
                <h1 className="text-3xl md:text-4xl font-bold text-[#2E4A35]">Terms of Service</h1>
                <p className="text-gray-600 leading-relaxed">
                    This placeholder page represents the future Terms of Service for MODS. Add your store policies, customer obligations, and service guarantees here.
                </p>
            </main>
            <Footer />
        </div>
    );
}
