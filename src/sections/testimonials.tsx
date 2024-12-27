import Image from "next/image";

import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";

const testimonials = [
  {
    text: "“This product has completely transformed how I manage my projects and deadlines”",
    name: "Sophia Perez",
    title: "Director @ Quantum",
    avatarImg: avatar1,
  },
  {
    text: "“These AI tools have completely revolutionized our SEO entire strategy overnight”",
    name: "Jamie Lee",
    title: "Founder @ Pulse",
    avatarImg: avatar2,
  },
  {
    text: "“The user interface is so intuitive and easy to use, it has saved us countless hours”",
    name: "Alisa Hester",
    title: "Product @ Innovate",
    avatarImg: avatar3,
  },
  {
    text: "“Our team's productivity has increased significantly since we started using this tool”",
    name: "Alec Whitten",
    title: "CTO @ Tech Solutions",
    avatarImg: avatar4,
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <h2 className="text-center text-5xl font-medium leading-none tracking-tighter md:text-6xl md:[margin-left:-0.05em]">
          Beyond Expectations.
        </h2>
        <p className="mt-5 text-center text-lg tracking-tight text-white/70 md:mx-auto md:max-w-sm md:text-xl">
          Our revolutionary AI SEO tools have transformed our clients&apos;
          strategies.
        </p>
        <div className="mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
          <div className="flex gap-5">
            {testimonials.map(({ text, name, title, avatarImg }) => (
              <div
                key={name}
                className="max-w-xs flex-none rounded-xl bg-[linear-gradient(to_bottom_left,rgb(140,69,255,0.5),black)] p-6 outline outline-1 -outline-offset-1 outline-white/15 md:max-w-md md:p-10"
              >
                <p className="text-lg tracking-tight text-white md:text-2xl">
                  {text}
                </p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="relative overflow-clip after:absolute after:inset-0 after:bg-[rgb(140,69,244,1)] after:mix-blend-soft-light after:content-['']">
                    <Image
                      src={avatarImg}
                      alt={name}
                      className="size-11 rounded-lg grayscale"
                    />
                  </div>
                  <div className="">
                    <p className="">{name}</p>
                    <p className="mt-1 text-sm tracking-tight text-white/50">
                      {title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
