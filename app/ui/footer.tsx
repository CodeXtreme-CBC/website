export default function Footer() {
  return (
    <footer className="section-snap h-[100dvh] flex items-center justify-center bg-black text-white w-full">
      <div className="px-[5%] w-full md:max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 mb-5 md:mb-12">
          <div>
            <h3 className="text-sm font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300 md:text-sm text-xs">
              <li>
                <a
                  href="mailto:team@codextreme.io"
                  className="hover:text-white transition-colors"
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UCh3tJkt7ER7C5ncYKEyeXvw"
                  className="hover:text-white transition-colors"
                >
                  YouTube
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/codextreme"
                  className="hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/codextremeglobal/"
                  className="hover:text-white transition-colors"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-300 md:text-sm text-xs">
              <li>
                <a href="/about" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a
                  href="/about#team"
                  className="hover:text-white transition-colors"
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  href="/case-studies"
                  className="hover:text-white transition-colors"
                >
                  Case Studies
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-300 md:text-sm text-xs">
              <li>
                <a href="https://app.codextreme.io/" className="hover:text-white transition-colors">
                  Trove
                </a>
              </li>
              <li>
                <a href="/hackathons" className="hover:text-white transition-colors">
                  Hackathons
                </a>
              </li>
              <li>
                <a href="https://app.codextreme.io/ingenious" className="hover:text-white transition-colors">
                  Ingenious Program
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold mb-4">Reports</h3>
            <ul className="space-y-2 text-gray-300 md:text-sm text-xs">
              <li>
                <a href="/docs" className="hover:text-white transition-colors">
                  2024 Inaugural Hackathon Report
                </a>
              </li>
              <li>
                <a href="/docs" className="hover:text-white transition-colors">
                  2025 Season Hackathon Report
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-5">
          <p className="text-white/20 text-xs">
            &copy; 2025 CodeXtreme. All rights reserved.
          </p>
        </div>
      </div>
      <div className="hidden absolute inset-0 pointer-events-none md:flex flex-col justify-between py-10 md:py-15 px-[5%] z-20">
        <div>
          <h1 className="mb-2">CodeXtreme</h1>
          <p className="text-sm">Building Things People Need.</p>
        </div>
      </div>
    </footer>
  );
}
