import Footer from "../core/Footer";
import OrderGuy from "@/assets/images/Order-ride.svg";

function Info() {
  return (
    <div>
      <div className="flex items-center">
        <div className="w-1/2">
          <img
            src={OrderGuy}
            alt="Guy waiting for a car"
            className="h-[600px]"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Info;
