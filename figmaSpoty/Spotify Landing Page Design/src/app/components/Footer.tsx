import { Facebook, Instagram, Twitter, Youtube, Globe } from "lucide-react";

const footerLinks = {
  Company: ["About", "Jobs", "For the Record"],
  Communities: ["For Artists", "Developers", "Advertising", "Investors", "Vendors"],
  "Useful links": ["Support", "Web Player", "Free Mobile App"],
};

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

const legalLinks = ["Legal", "Privacy Center", "Privacy Policy", "Cookies", "About Ads"];

export function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main footer content */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
          {/* Logo column */}
          <div className="col-span-2 md:col-span-1">
            <div className="mb-6">
              <svg
                viewBox="0 0 1134 340"
                className="h-10 w-auto fill-white"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Spotify"
              >
                <path d="M567 170c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm80.8 254c-3.2 5.2-10.4 6.8-15.6 3.6-42.8-26.4-96.8-32.4-160-17.6-6 1.6-12.4-2-14-8s2-12.4 8-14c69.2-16 128.8-9.2 176.8 20.4 5.2 3.2 6.8 10.4 3.6 15.6zm22.4-50c-4 6.4-12.4 8.4-18.8 4.4-49.2-30-124-38.8-182-21.2-7.2 2-14.8-2.4-16.8-9.2-2-7.2 2.4-14.8 9.2-16.8 66.4-20 148.8-10.4 204.8 24.4 6.4 4 8.4 12.4 4.4 18.8zm2-52c-58.8-35.2-156-38.4-212-21.2-8.4 2.4-17.6-2.4-20-10.8-2.4-8.4 2.4-17.6 10.8-20 64.4-19.6 171.2-16 238.8 24.8 7.6 4.4 10 14.4 5.6 22-4.4 7.6-14.4 10-22 5.6z" />
                <path d="M233.2 192.8c-52 0-91.6 16.4-116.8 34-2.8 2-6.4 3.2-10 3.2-9.2 0-16.8-7.6-16.8-16.8 0-6 3.2-11.2 7.6-14 31.6-22 77.6-40.4 136-40.4 38 0 70.8 7.2 98 18.8 4.8 2 8.4 6.8 8.4 12.4 0 7.6-6 13.6-13.6 13.6-2 0-4-.4-5.6-1.2-24-10.4-53.2-16.8-87.2-16.8zm-1.6 50.4c-43.2 0-78.4 12.4-100.4 26.4-2.4 1.6-5.2 2.4-8 2.4-7.6 0-13.6-6-13.6-13.6 0-4.8 2.4-9.2 6.4-11.6 26.8-17.6 67.2-31.6 115.6-31.6 32.8 0 62.4 6 87.2 16 4 1.6 6.8 5.6 6.8 10 0 6-4.8 10.8-10.8 10.8-1.6 0-3.2-.4-4.8-1.2-22-8.4-47.6-13.6-78.4-13.6zm-2.4 49.2c-36.8 0-66.8 10-85.2 21.2-2 1.2-4.4 2-6.8 2-6 0-10.8-4.8-10.8-10.8 0-3.6 1.6-6.8 4.4-8.8 22.4-14 56.4-25.6 98.4-25.6 28 0 53.6 5.2 74.4 13.6 3.2 1.2 5.6 4.4 5.6 8 0 4.8-4 8.8-8.8 8.8-1.2 0-2.8-.4-4-1.2-18.8-7.2-41.2-12-66.8-12z" />
              </svg>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-bold mb-4 text-sm" style={{ fontWeight: 700 }}>
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mb-8" />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Social links */}
          <div className="flex gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-10 h-10 rounded-full bg-[#222] hover:bg-[#333] flex items-center justify-center transition-colors group"
              >
                <Icon className="w-5 h-5 text-white" />
              </a>
            ))}
          </div>

          {/* Language selector */}
          <button className="flex items-center gap-2 bg-[#1a1a1a] hover:bg-[#222] px-4 py-2 rounded-full transition-colors border border-gray-700">
            <Globe className="w-4 h-4" />
            <span className="text-sm font-bold">English</span>
          </button>
        </div>

        {/* Legal links */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-wrap gap-6 text-sm text-gray-400">
          {legalLinks.map((link) => (
            <a key={link} href="#" className="hover:text-white transition-colors">
              {link}
            </a>
          ))}
          <div className="ml-auto text-gray-500">
            © {new Date().getFullYear()} Spotify AB
          </div>
        </div>
      </div>
    </footer>
  );
}
