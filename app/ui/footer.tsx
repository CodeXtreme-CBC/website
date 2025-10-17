export default function Footer() {
    return (
        <footer className="section-snap h-screen flex items-center justify-center bg-gray-900 text-white">
            <div className="text-center px-4 max-w-4xl">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">CodeXtreme</h2>
                <p className="text-lg mb-8">Building the future, one line of code at a time.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    <div>
                        <h3 className="text-xl font-bold mb-4">Company</h3>
                        <ul className="space-y-2 text-gray-300">
                            <li><a href="/about" className="hover:text-white transition-colors">About</a></li>
                            <li><a href="/team" className="hover:text-white transition-colors">Team</a></li>
                            <li><a href="/careers" className="hover:text-white transition-colors">Careers</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Services</h3>
                        <ul className="space-y-2 text-gray-300">
                            <li><a href="/web-development" className="hover:text-white transition-colors">Web Development</a></li>
                            <li><a href="/mobile-apps" className="hover:text-white transition-colors">Mobile Apps</a></li>
                            <li><a href="/training" className="hover:text-white transition-colors">Training</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Resources</h3>
                        <ul className="space-y-2 text-gray-300">
                            <li><a href="/blog" className="hover:text-white transition-colors">Blog</a></li>
                            <li><a href="/docs" className="hover:text-white transition-colors">Documentation</a></li>
                            <li><a href="/support" className="hover:text-white transition-colors">Support</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Connect</h3>
                        <ul className="space-y-2 text-gray-300">
                            <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">GitHub</a></li>
                        </ul>
                    </div>
                </div>
                
                <div className="border-t border-gray-700 pt-8">
                    <p className="text-gray-400">&copy; 2025 CodeXtreme. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
