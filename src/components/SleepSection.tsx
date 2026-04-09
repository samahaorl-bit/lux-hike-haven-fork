import Image from "next/image";

const bedrooms = [
  {
    id: 1,
    title: "Bedroom 1",
    bed: "Queen bed",
    detail: "Spacious primary bedroom with premium linens and soft lighting.",
    img: "/Photo tour/Bedroom 1.avif",
  },
  {
    id: 2,
    title: "Bedroom 2",
    bed: "Double bed",
    detail: "Cozy second bedroom ideal for friends or family.",
    img: "/Photo tour/Bedroom 2.avif",
  },
  {
    id: 3,
    title: "Bedroom 3",
    bed: "Single + Workspace",
    detail: "Flexible room that can be used for sleep or quiet remote work.",
    img: "/Photo tour/Bedroom 3.avif",
  },
];

export default function SleepSection() {
  return (
    <section
      id="sleep"
      className="section-divider section-parallax-soft py-24 bg-gradient-to-b from-background via-slate-50/70 to-background"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-reveal mb-12 max-w-3xl">
          <p className="inline-flex items-center rounded-full bg-secondary/10 text-secondary px-4 py-1.5 text-xs font-semibold tracking-wide mb-4">
            Rest and Recover
          </p>
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Where you&apos;ll sleep
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            Rest comfortably in thoughtfully designed bedrooms, each offering a
            calm atmosphere after a day exploring Luxembourg&apos;s trails and
            vineyards.
          </p>
        </div>
        <div className="section-reveal section-reveal-delay grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {bedrooms.map((b, index) => (
            <div
              key={b.id}
              className="section-reveal group relative rounded-2xl overflow-hidden bg-card/90 backdrop-blur-sm border border-border/70 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="relative h-56 w-full">
                <Image
                  src={b.img}
                  alt={`${b.title} - ${b.bed}`}
                  fill
                  sizes="(max-width:1024px) 50vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <span className="absolute bottom-3 left-4 text-white font-medium text-sm bg-black/40 backdrop-blur px-3 py-1 rounded-full">
                  {b.bed}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-lg mb-2 text-foreground">{b.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {b.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
