import Social from "@/components/core/SocialLinks";
import Contact from "@/components/core/Contact";

import Logo from "@/assets/images/Logo.svg";

function Footer() {
  return (
    <footer className="w-full mt-10">
      <div className="border-t-4 border-gray-800 py-7 lg:py-10 flex flex-col items-center justify-between">
        <div className="w-full flex flex-col lg:flex-row items-center justify-between">
          <img
            id="logo"
            src={Logo}
            alt="Open auto logo"
            className="h-14  mb-5 lg:mb-2  cursor-pointer"
          />

          <Contact />
        </div>

        {/* social links */}
        <div className="w-full flex flex-col lg:flex-row items-center  justify-between">
          <span className="text-lg lg:text-xl text-light mt-5 mb-12 lg:my-0 lg:w-full">
            Open Auto @ all rights reserved
          </span>

          <div
            id="social-links"
            className="flex flex-col text-white  items-center lg:items-end  w-[80%]"
          >
            <div className="flex items-center justify-between lg:hidden w-full mb-5">
              <a href="#" className="text-xl">
                Privacy Policy
              </a>
              <a href="#" className="text-xl">
                Terms of Use
              </a>
              <a href="#" className="text-xl">
                Cookie Policy
              </a>
            </div>
            <div className="flex items-center justify-between w-full lg:w-1/3 ">
              <Social />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
