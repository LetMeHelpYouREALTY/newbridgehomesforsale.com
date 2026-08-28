import Image from "next/image";

type SeoSectionProps = {
  h2: string;
  answer: string;
  image?: string;
  imageAlt?: string;
  children?: React.ReactNode;
  reverse?: boolean;
  id?: string;
};

/**
 * AEO/GEO section: question-style H2, first-sentence direct answer, optional photo.
 */
export default function SeoSection({
  h2,
  answer,
  image,
  imageAlt,
  children,
  reverse = false,
  id,
}: SeoSectionProps) {
  return (
    <section id={id} className="mb-16 max-w-6xl mx-auto">
      <div
        className={`grid items-center gap-8 md:grid-cols-2 ${
          reverse ? "md:[&>div:first-child]:order-2" : ""
        }`}
      >
        {image ? (
          <div className="relative h-64 overflow-hidden rounded-2xl md:h-80">
            <Image
              src={image}
              alt={imageAlt || h2}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        ) : null}
        <div className={image ? "" : "md:col-span-2"}>
          <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">{h2}</h2>
          <p className="mt-4 text-lg text-slate-700">{answer}</p>
          {children ? <div className="mt-6">{children}</div> : null}
        </div>
      </div>
    </section>
  );
}
