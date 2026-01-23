const companies = [
  { name: "BMW", src: "/logos/bmw.svg" },
  { name: "Renault", src: "/logos/renault.svg" },
  { name: "Nissan", src: "/logos/nissan.svg" },
  { name: "Audi", src: "/logos/audi.svg" },
  { name: "Mitsubishi", src: "/logos/mitsubishi.svg" },
  { name: "Ford", src: "/logos/ford.svg" },
  { name: "Audi Rings", src: "/logos/audi-rings.svg" },
];

export default function TrustedByLeaders() {
  return (
    <section className="w-full py-16 bg-white">
      {/* Heading */}
      <p className="text-center text-sm font-semibold tracking-widest text-blue-600 mb-10">
        TRUSTED BY LEADERS
      </p>

      {/* Logos */}
      <div className="flex flex-wrap items-center justify-center gap-12 opacity-70">
        {companies.map((company, index) => (
          <img
            key={index}
            src={company.src}
            alt={company.name}
            className="h-10 w-auto grayscale hover:grayscale-0 transition duration-300"
          />
        ))}
      </div>
    </section>
  );
}
