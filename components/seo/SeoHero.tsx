import Image from "next/image";

type SeoHeroProps = {
  eyebrow?: string;
  h1: string;
  lede: string;
  image: string;
  imageAlt: string;
  priority?: boolean;
  children?: React.ReactNode;
};

export default function SeoHero({
  eyebrow = "Dr. Jan Duffy · REALTOR® · BHHS Nevada Properties",
  h1,
  lede,
  image,
  imageAlt,
  priority = false,
  children,
}: SeoHeroProps) {
  return (
    <header className="relative mb-12 overflow-hidden rounded-2xl md:mb-16">
      <div className="relative min-h-[340px] md:min-h-[460px]">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority={priority}
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/55 to-slate-900/25" />
        <div className="relative z-10 flex min-h-[340px] flex-col justify-end px-6 py-10 text-white md:min-h-[460px] md:px-12 md:py-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-200">
            {eyebrow}
          </p>
          <h1 className="max-w-4xl text-3xl font-bold leading-tight md:text-5xl lg:text-6xl">
            {h1}
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-white/90 md:text-xl">{lede}</p>
          {children ? <div className="mt-8">{children}</div> : null}
        </div>
      </div>
    </header>
  );
}
