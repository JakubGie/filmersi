import Link from "next/link"
import FooterLink from "./elements/footerLink"

async function getLinks() {
    const res = await fetch('https://api.filmer.wkbdhkmuzv.cfolks.pl/footerLinks')

    return res.json()
}

export default async function Footer() {
    const footerLinks = await getLinks()

    return (
        <footer>
            <div className="h-18  py-10 container mx-auto px-5">
                <div className="flex flex-col gap-8 lg:gap-0 lg:flex-row">
                    <div className="flex lg:w-[75%] flex-wrap gap-3">
                        <h2 className="uppercase text-xl font-bold w-full pb-3">Oglądaj online</h2>
                        {footerLinks.map((link) => (
                            <FooterLink movieInfo={link} />
                        ))}
                    </div>
                    <div className="flex lg:w-[25%] flex-col gap-3">
                        <h2 className="uppercase text-xl font-bold w-full pb-3">Sprawdź</h2>
                        <Link href="/" className="hover:text-brand transition">Filmersi</Link>
                        <Link href="/co-obejrzec" className="hover:text-brand transition">Co obejrzeć?</Link>
                        <Link href="/filmy" className="hover:text-brand transition">Filmy Online</Link>
                        <Link href="/seriale" className="hover:text-brand transition">Seriale Online</Link>
                        <Link href="/listy-tematyczne/filmy" className="hover:text-brand transition">Listy tematyczne</Link>
                        <Link href="/blog" className="hover:text-brand transition">Blog</Link>
                        <Link href="/aplikacja" className="hover:text-brand transition">Aplikacja</Link>
                        <Link href="/twoja-lista" className="hover:text-brand transition">Twoja Lista</Link>
                        <a href="/facebook" target="_blank" className="hover:text-brand transition">Facebook</a>
                        <a href="/tiktok" target="_blank" className="hover:text-brand transition">TikTok</a>
                    </div>
                </div>
            
            </div>
        </footer>
    )
}