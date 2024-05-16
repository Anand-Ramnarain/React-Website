import { heroBackground } from "../assets";

export const Rings = () => {
  return (
    <section className="absolute top-1/2 left-1/2 w-[51.375rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2">
      <article className="absolute top-1/2 left-1/2 w-[36.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2"></article>
      <article className="absolute top-1/2 left-1/2 w-[23.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2"></article>
    </section>
  );
};

export const SideLines = () => {
  return (
    <>
      <aside className="absolute top-0 left-5 w-0.25 h-full bg-n-6"></aside>
      <aside className="absolute top-0 right-5 w-0.25 h-full bg-n-6"></aside>
    </>
  );
};

export const BackgroundCircles = () => {
  return (
    <>
      <section className="absolute top-[4.4rem] left-16 w-3 h-3 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full"></section>
      <section className="absolute top-[12.6rem] right-16 w-3 h-3 bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full"></section>
      <section className="absolute top-[26.8rem] left-12 w-6 h-6 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full"></section>
    </>
  );
};

export const HamburgerMenu = () => {
  return (
    <section className="absolute inset-0 pointer-events-none lg:hidden">
      <section className="absolute inset-0 opacity-[.03]">
        <img
          className="w-full h-full object-cover"
          src={heroBackground}
          width={688}
          height={953}
          alt="Background"
        />
      </section>

      <Rings />

      <SideLines />

      <BackgroundCircles />
    </section>
  );
};
