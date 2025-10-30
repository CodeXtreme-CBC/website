export default function Footer() {
    return (
        <footer className="section-snap h-screen flex items-center justify-center bg-black text-white w-full">
            <div className="px-[5%] w-full md:max-w-4xl">                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    <div>
                        <h3 className="text-sm font-bold mb-4">Contact</h3>
                        <ul className="space-y-2 text-gray-300 md:text-sm text-xs">
                            <li><a href="mailto:info@codextreme.io" className="hover:text-white transition-colors">team@codextreme.io</a></li>
                            <li><a href="/about#team" className="hover:text-white transition-colors">+250737026499</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-bold mb-4">Company</h3>
                        <ul className="space-y-2 text-gray-300 md:text-sm text-xs">
                            <li><a href="/about" className="hover:text-white transition-colors">About</a></li>
                            <li><a href="/about#team" className="hover:text-white transition-colors">Team</a></li>
                            <li><a href="/case-studies" className="hover:text-white transition-colors">Case Studies</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-bold mb-4">Resources</h3>
                        <ul className="space-y-2 text-gray-300 md:text-sm text-xs">
                            <li><a href="/blog" className="hover:text-white transition-colors">Trove</a></li>
                            <li><a href="/blog" className="hover:text-white transition-colors">Hackathons</a></li>
                            <li><a href="/docs" className="hover:text-white transition-colors">Ingenious Program</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-bold mb-4">Connect</h3>
                        <ul className="space-y-2 text-gray-300 md:text-sm text-xs">
                            <li><a href="https://www.youtube.com/channel/UCh3tJkt7ER7C5ncYKEyeXvw" className="hover:text-white transition-colors">YouTube</a></li>
                            <li><a href="https://www.linkedin.com/company/codextreme" className="hover:text-white transition-colors">LinkedIn</a></li>
                            <li><a href="https://www.instagram.com/codextremeglobal/" className="hover:text-white transition-colors">Instagram</a></li>
                        </ul>
                    </div>
                </div>
                
                <div className="border-t border-white/10 pt-5">
                    <p className="text-white/20 text-xs">&copy; 2025 CodeXtreme. All rights reserved.</p>
                </div>
            </div>
            <div className="absolute inset-0 pointer-events-none flex flex-col justify-between py-15 px-[5%] z-20">
                <div>
                    <h1 className="mb-2">CodeXtreme</h1>
                    <p className="text-sm">Building Things People Need.</p>
                </div>
            </div>
        </footer>
    );
}
