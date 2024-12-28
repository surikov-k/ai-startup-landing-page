import gridlinesImage from "@/assets/grid-lines.png";
import starsImage from "@/assets/stars.png";
import Button from "@/components/button";

export const CallToAction = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <div
          className="relative overflow-hidden rounded-xl py-24 outline outline-1 -outline-offset-1 outline-white/15"
          style={{ backgroundImage: `url(${starsImage.src})` }}
        >
          <div
            className="absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)]"
            style={{
              backgroundImage: `url(${gridlinesImage.src})`,
              backgroundPosition: "center",
            }}
          />
          <div className="relative">
            <h2 className="mx-auto text-center text-5xl font-medium leading-none tracking-tighter md:max-w-sm md:text-6xl">
              AI-driven SEO for everyone.
            </h2>
            <p className="mt-5 px-4 text-center text-lg tracking-tight text-white/70 md:mx-auto md:max-w-xs">
              Achieve clear, impactful results without the complexity.
            </p>
            <div className="mt-5 flex justify-center">
              <Button>Join waitlist</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
