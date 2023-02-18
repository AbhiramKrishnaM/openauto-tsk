import Social from "@/components/core/Sociallinks";
import Contact from "@/components/core/Contact";

import Logo from "@/assets/images/logo.svg";

function Footer() {
  return (
    <footer className="w-full">
      <div className="border-t-4 border-gray-800 py-10 flex items-center justify-between">
        {/* icon and rights */}
        <div className="w-1/6">
          <img id="logo" src={Logo} className="h-14  mb-2 cursor-pointer" />

          <span className="text-xl text-light">
            Open Auto @ all rights reserved
          </span>
        </div>

        {/* social links */}
        <div className=" flex flex-col items-end gap-4">
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
