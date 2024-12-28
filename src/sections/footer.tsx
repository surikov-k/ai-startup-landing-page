import Logo from "@/assets/logo.svg";
import InstaSocial from "@/assets/social-instagram.svg";
import XSocial from "@/assets/social-x.svg";
import YTSocial from "@/assets/social-youtube.svg";

const links = [
  {
    title: "Features",
    href: "#",
  },
  {
    title: "Developers",
    href: "#",
  },
  {
    title: "Company",
    href: "#",
  },
  {
    title: "Blog",
    href: "#",
  },
  {
    title: "Changelog",
    href: "#",
  },
];

export const Footer = () => {
  return (
    <footer className="bg-[linear-gradient(to_bottom,rgb(255,255,255,0.20),rgb(255,255,255,0.20)_1px,transparent_1px,transparent)] py-5 pt-5">
      <div className="container">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-2 lg:flex-1">
            <Logo className="size-6" />
            <span className="text-sm font-medium">AI Startup Landing Page</span>
          </div>
          <nav className="flex flex-col gap-5 lg:flex-1 lg:flex-row lg:justify-center lg:gap-5">
            {links.map(({ title, href }) => (
              <a
                key={title}
                href={href}
                className="text-xs text-white/70 transition duration-300 ease-in-out hover:text-white md:text-sm"
              >
                {title}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-5 lg:flex-1 lg:justify-end">
            {[XSocial, InstaSocial, YTSocial].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="opacity-40 transition duration-300 ease-in-out hover:opacity-100"
              >
                <Icon className="" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
