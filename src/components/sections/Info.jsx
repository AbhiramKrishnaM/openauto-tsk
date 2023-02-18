import Footer from "@/components/core/Footer";
import Content from "@/components/base/Content";

import OrderGuy from "@/assets/images/Order-ride.svg";

function Info() {
  const content = {
    title: "Focused on Time Saving",
    subtitle:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa dolore voluptate quos dicta quia corrupti consequuntur aut nostrum ullam, iusto magnam sunt temporibus deleniti veniam voluptas eum commodi modi ad aperiam voluptatem? Dolorum, aut sint? Exercitationem maxime dicta dolorem esse nemo corporis soluta ullam beatae dignissimos. Quae excepturi nihil earum!",
  };

  return (
    <div>
      <div className="flex items-center gap-14">
        <div className="w-1/2 ">
          <img
            src={OrderGuy}
            alt="Guy waiting for a car"
            className=" w-full h-full"
          />
        </div>

        <div className="w-3/6">
          <Content content={content} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Info;
