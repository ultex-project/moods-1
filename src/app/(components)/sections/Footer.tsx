import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-moods-green text-white mt-[100px]"
                style={{
                    backgroundImage: 'url("/footer-bg.svg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}>
            <div className="container mx-auto p-12 pb-6 px-6 xl:px-24 grid grid-cols-1 md:grid-cols-4 gap-8">

                <div>
                    <Image src="/logo-wt.svg" alt="Moods logo" width={140} height={40} className="mb-4 h-10 w-auto"/>
                    <p className="text-sm opacity-80">
                        Traditional foods carry cultural identity, history, and customs, acting as a link to heritage
                        passed down through generations.
                    </p>
                </div>

                <div>
                    <h3 className="font-bold mb-4">Accès Rapide</h3>
                    <ul className="space-y-2 text-sm opacity-80">
                        <li><a href="#">Accueil</a></li>
                        <li><a href="#">À Propos</a></li>
                        <li><a href="#">Solutions</a></li>
                        <li><a href="#">Événements</a></li>
                        <li><a href="#">Ressources</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold mb-4">Médias Sociaux</h3>
                    <p className="text-sm opacity-80">
                        Restez connecté à la communauté ULTEx et suivez nos dernières actualités sur les médias sociaux.
                    </p>
                </div>

                <div>
                    <h3 className="font-bold mb-4">Service Client</h3>
                    <div className="space-y-2 text-sm opacity-80">
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

            <div className="container mx-auto px-6 py-4 xl:px-24 mt-8 pt-4 bg-[#252A25]  text-xs opacity-70">
                MODS © 2025 - Tous droits réservés.
            </div>
        </footer>
    );
}
