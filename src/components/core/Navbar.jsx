import Contact from "@/components/core/Contact";
import Button from "@/components/base/Button";

import Logo from "@/assets/images/logo.svg";

function Navbar() {
  return (
    <div className="flex items-center justify-between my-6">
      <img id="logo" src={Logo} className="h-14 w-1/6 mb-2 cursor-pointer" />

      <div className="flex items-center gap-10">
        <Contact />
        <Button title="Download the mobile app" />
      </div>
    </div>
  );
}

export default Navbar;
