import Image from "next/image";

const HomeNavbar = () => {
  return (
    <div className="w-full ">
      <nav className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6 text-white">
        
        {/* LOGO */}
        <div className="flex items-center gap-2">
          <Image
                    src="/logo3.svg"
                    alt="logo"
                    width={120} // MUST MATCH FINAL DISPLAY SIZE
                    height={120}
                    loading="eager" // Fixes LCP warning
                    priority // Optional → further optimizes
                    //  className="h-auto" 
                  />
        </div>

        {/* NAV LINKS */}
        <div className="hidden md:flex gap-10 text-sm font-medium">
          <a href="#" className="hover:text-white">Product</a>
          <a href="#" className="hover:text-white">Solution</a>
          <a href="#" className="hover:text-white">Features</a>
          <a href="#" className="hover:text-white">Testimonials</a>
          <a href="#" className="hover:text-white">FAQ</a>
        </div>

        {/* BUTTON */}
        <button className="border border-white px-5 py-1 rounded-xl hover:bg-white hover:text-blue-600 transition">
          Book a Demo
        </button>
      </nav>
    </div>
  );
};

export default HomeNavbar;
