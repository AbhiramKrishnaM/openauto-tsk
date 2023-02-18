import Navbar from "@/components/core/Navbar";

import Landing from "@/components/sections/Landing";
import Info from "@/components/sections/Info";

function App() {
  return (
    <div class="w-full h-screen justify-center bg-primary">
      <Navbar />
      <Landing />
      <Info />
    </div>
  );
}

export default App;
