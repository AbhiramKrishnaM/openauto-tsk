import Navbar from "@/components/core/Navbar";

import Landing from "@/components/sections/Landing";
import Info from "@/components/sections/Info";

function App() {
  return (
    <div class="w-full h-full justify-center">
      <div className="mx-auto w-[90%]">
        <Navbar />
        <Landing />
        <Info />
      </div>
    </div>
  );
}

export default App;
