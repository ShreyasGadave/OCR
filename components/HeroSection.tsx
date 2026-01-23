import Image from "next/image";
import { useRouter } from "next/navigation";

const HeroSection = () => {
  const router=useRouter();

  function route() {
    router.push("/dashboard")
  }
  return (
    <section className="w-full mt-10 flex flex-col items-center justify-center text-center  ">
      {/* TITLE */}
      <h1 className="text-4xl md:text-5xl font-medium text-white leading-tight">
        Seamless Car Insurance Management
      </h1>

      {/* SUBTEXT */}
      <p className="text-white/90 text-lg max-w-2xl mt-3">
        A powerful dashboard that reduces errors, accelerates workflows, and
        ensures every document, renewal, and alert is handled on time.
      </p>

      {/* BUTTON */}
      <button onClick={route} className="mt-10 bg-black text-white font-medium px-6 py-2 rounded-xl hover:bg-gray-800 transition">
        Book a Demo
      </button>

      <div className="flex shadow items-center gap-2 mt-5">
        <Image
          src="/home.png"
          alt="logo"
          width={1280} // Use actual pixel dimensions, not percentages
          height={680}
          loading="eager"
          priority // This already implies eager loading
        />
      </div>
    </section>
  );
};

export default HeroSection;
