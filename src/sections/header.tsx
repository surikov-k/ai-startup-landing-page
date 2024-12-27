import MenuIcon from "@/assets/icon-menu.svg";
import LogoIcon from "@/assets/logo.svg";
import Button from "@/components/button";

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
    title: "Pricing",
    href: "#",
  },
  {
    title: "Changelog",
    href: "#",
  },
];

export const Header = () => {
  return (
    <header className="sticky top-0 z-10 bg-[linear-gradient(to_top,rgb(255,255,255,0.15),rgb(255,255,255,0.15)_1px,transparent_1px,transparent)] py-4 backdrop-blur md:bg-none md:backdrop-blur-none">
      <div className="container">
        <div className="flex items-center justify-between md:mx-auto md:max-w-2xl md:rounded-xl md:bg-[#361C66]/20 md:p-2.5 md:outline md:outline-1 md:-outline-offset-1 md:outline-white/15 md:backdrop-blur">
          <div>
            <div className="flex size-10 items-center justify-center rounded-lg border border-white/15">
              <LogoIcon className="size-8" />
            </div>
          </div>
          <div className="hidden md:block">
            <nav className="flex items-center gap-8">
              {links.map(({ title, href }) => (
                <a
                  key={title}
                  href={href}
                  className="text-sm text-white/70 transition duration-300 ease-in-out hover:text-white"
                >
                  {title}
                </a>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Button>Join waitlist</Button>
            <MenuIcon className="size-8 md:hidden" />
          </div>
        </div>
      </div>
    </header>
  );
};
