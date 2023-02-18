import Contact from "@/components/core/Contact";
import Button from "@/components/base/Button";

function Navbar() {
  return (
    <div className="flex items-center justify-between my-8">
      <div id="logo" className="h-14 w-1/6 bg-red-600 mb-2"></div>

      <div className="flex items-center gap-7">
        <Contact />
        <Button title="Download the mobile app" />
      </div>
    </div>
  );
}

export default Navbar;
