import MenuIcon from "@/assets/icon-menu.svg";
import LogoIcon from "@/assets/logo.svg";

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
    <header className="border-b border-white/15 py-4 md:border-none">
      <div className="container">
        <div className="flex items-center justify-between md:mx-auto md:max-w-2xl md:rounded-xl md:border md:border-white/20 md:p-2">
          <div>
            <div className="inline-flex size-10 items-center justify-center rounded-lg border border-white/15">
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
            <button className="relative rounded-lg bg-gradient-to-b from-[#190d2e] to-[#4a208a] px-3 py-2 text-sm font-semibold shadow-[0px_0px_12px_#8c45ff]">
              <span className="absolute inset-0">
                <div className="absolute inset-0 rounded-lg border border-white/25 [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
                <div className="absolute inset-0 rounded-lg border border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]"></div>
                <span className="absolute inset-0 rounded-lg shadow-[0_0_10px_rgb(140,69,255,0.7)_inset]"></span>
              </span>
              <span>Join waitlist</span>
            </button>
            <MenuIcon className="size-8 md:hidden" />
          </div>
        </div>
      </div>
    </header>
  );
};
