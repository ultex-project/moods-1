import Image from 'next/image';
import Link from 'next/link';

const FOOTER_LINKS = [
    { label: 'Shop', href: '/products' },
    { label: 'Contact', href: '/contact' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
];

export default function Footer() {
    return (
        <footer className="bg-moods-green text-white mt-[100px]"
                style={{
                    backgroundImage: 'url("/footer-bg.svg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}>
            <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-12 py-10 md:py-12 flex flex-col items-center space-y-8 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-4 md:items-start md:gap-8">

                <div className="text-center md:text-left space-y-3">
                    <Image src="/logo-wt.svg" alt="Moods logo" width={140} height={40} className="mb-4 h-10 w-auto"/>
                    <p className="text-sm md:text-base opacity-80 leading-relaxed">
                        Traditional foods carry cultural identity, history, and customs, acting as a link to heritage
                        passed down through generations.
                    </p>
                </div>

                <div className="text-center md:text-left">
                    <h3 className="font-bold mb-4 text-lg md:text-xl">Quick Links</h3>
                    <ul className="space-y-2 text-sm md:text-base opacity-80">
                        {FOOTER_LINKS.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className="inline-flex items-center justify-center md:justify-start min-h-[44px] hover:opacity-80 transition"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="text-center md:text-left space-y-3">
                    <h3 className="font-bold mb-4 text-lg md:text-xl">Médias Sociaux</h3>
                    <p className="text-sm md:text-base opacity-80 leading-relaxed">
                        Restez connecté à la communauté ULTEx et suivez nos dernières actualités sur les médias sociaux.
                    </p>
                </div>

                <div className="text-center md:text-left">
                    <h3 className="font-bold mb-4 text-lg md:text-xl">Service Client</h3>
                    <div className="space-y-2 text-sm md:text-base opacity-80 leading-relaxed">
                        <div>
                            <strong>Casablanca</strong><br/>
                            (+212) 522-862135<br/>
                            (+212) 674-755993
                        </div>
                        <div>
                            <strong>Marrakech</strong><br/>
                            (+212) 524-304462<br/>
                            (+212) 774-004544
                        </div>
                    </div>
                </div>

            </div>

            <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-4 mt-8 pt-4 bg-[#252A25] text-xs opacity-70 text-center">
                MODS © 2025 - Tous droits réservés.
            </div>
        </footer>
    );
}
