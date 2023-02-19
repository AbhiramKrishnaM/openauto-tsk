import Contact from "@/components/core/Contact";
import Button from "@/components/base/Button";

import Logo from "@/assets/images/Logo.svg";

function Navbar() {
  return (
    <div className="flex   items-center lg:justify-between mt-6 mb-16">
      <img
        id="logo"
        src={Logo}
        alt="Open auto logo"
        className="h-14  w-1/2 lg:w-1/3 xl:w-1/6 mb-2 cursor-pointer"
      />

      <div className="hidden xl:flex items-center gap-10">
        <Contact />
        <Button title="Download the mobile app" />
      </div>
    </div>
  );
}

export default Navbar;
