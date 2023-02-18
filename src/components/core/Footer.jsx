import Social from "@/components/core/Sociallinks";
import Contact from "@/components/core/Contact";

function Footer() {
  return (
    <footer className="w-full">
      <div className="border-t-4 border-gray-800 py-10 flex items-center justify-between">
        {/* icon and rights */}
        <div className="w-1/6">
          <div id="logo" className="h-14 bg-red-600 mb-2"></div>
          <span className="text-xl text-light">
            Open Auto @ all rights reserved
          </span>
        </div>

        {/* social links */}
        <div className="text-light flex flex-col items-end gap-4">
          <Contact />
          <div id="social-links" className="flex items-center gap-7">
            <Social />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
