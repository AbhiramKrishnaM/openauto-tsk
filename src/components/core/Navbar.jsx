import Contact from "@/components/core/Contact";

function Navbar() {
  return (
    <div className="flex items-center justify-between my-5">
      <div id="logo" className="h-14 w-1/6 bg-red-600 mb-2"></div>

      <div>
        <Contact />
      </div>
    </div>
  );
}

export default Navbar;
